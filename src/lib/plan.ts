// Procedure plan engine: stores the patient's procedure date/time/prep brand,
// computes the current phase, generates the personalized split-dose schedule,
// and exports everything as an .ics calendar file.
//
// Clinical timing here is the TYPICAL split-dose pattern (second dose finishing
// 3–4 h before the procedure, clear-fluid cutoff 3 h before). Every surface that
// renders these times must carry the "your own instruction sheet wins" notice.

export type PrepType = "peg4l" | "bipeglyte" | "picosalax" | "unsure";

export const PREP_TYPES: PrepType[] = ["peg4l", "bipeglyte", "picosalax", "unsure"];

export interface ProcedurePlan {
  date: string; // YYYY-MM-DD
  time: string | null; // HH:MM (24h) — the procedure time on the patient's letter
  prepType: PrepType | null;
}

const STORAGE_KEY = "companion-plan";
const LEGACY_DATE_KEY = "procedure-date";

// ── Storage ──────────────────────────────────────────────────────────────────

export function loadPlan(): ProcedurePlan | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ProcedurePlan;
      if (parsed && typeof parsed.date === "string" && parsed.date) return parsed;
    }
    // Migrate the pre-plan localStorage key (date only)
    const legacy = localStorage.getItem(LEGACY_DATE_KEY);
    if (legacy) {
      const migrated: ProcedurePlan = { date: legacy, time: null, prepType: null };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }
  } catch {
    // Corrupt storage — treat as no plan
  }
  return null;
}

export function savePlan(plan: ProcedurePlan) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
  // Keep the legacy key in sync so the old countdown keeps working if cached
  localStorage.setItem(LEGACY_DATE_KEY, plan.date);
}

export function clearPlan() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(LEGACY_DATE_KEY);
}

// ── Phases ───────────────────────────────────────────────────────────────────

export type PhaseId = "early" | "week" | "diet" | "dayBefore" | "procedure" | "recovery" | "past";

/** Whole calendar days from today until the procedure date (0 = today, negative = past). */
export function daysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr + "T00:00:00");
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}

export function phaseFor(daysLeft: number): PhaseId {
  if (daysLeft > 7) return "early";
  if (daysLeft >= 4) return "week";
  if (daysLeft >= 2) return "diet";
  if (daysLeft === 1) return "dayBefore";
  if (daysLeft === 0) return "procedure";
  if (daysLeft >= -14) return "recovery";
  return "past";
}

/** Ordered phases for the progress bar (recovery/past excluded). */
export const PHASE_ORDER: PhaseId[] = ["week", "diet", "dayBefore", "procedure"];

/** daysOut anchor for each pre-procedure phase (matches countdownTimeline). */
export const PHASE_DAYS_OUT: Record<string, number> = {
  week: 7,
  diet: 3,
  dayBefore: 1,
  procedure: 0,
};

// ── Date helpers ─────────────────────────────────────────────────────────────

const LOCALE_MAP: Record<string, string> = {
  en: "en-CA",
  "zh-HK": "zh-HK",
  "zh-CN": "zh-CN",
  pa: "pa-IN",
  hi: "hi-IN",
};

export function localeFor(lang: string): string {
  return LOCALE_MAP[lang] || "en-CA";
}

/** "Thursday, June 18" — older adults plan in weekdays, not "T-minus 3". */
export function formatWeekday(date: Date, lang: string): string {
  return new Intl.DateTimeFormat(localeFor(lang), {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatTime(date: Date, lang: string): string {
  return new Intl.DateTimeFormat(localeFor(lang), {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function dateFromPlan(plan: ProcedurePlan): Date {
  return new Date(plan.date + "T" + (plan.time || "08:00") + ":00");
}

/** The procedure date at midnight, offset by `days` (negative = before). */
export function dayOffset(plan: ProcedurePlan, days: number, atHour = 0, atMinute = 0): Date {
  const d = new Date(plan.date + "T00:00:00");
  d.setDate(d.getDate() + days);
  d.setHours(atHour, atMinute, 0, 0);
  return d;
}

function minusHours(date: Date, hours: number): Date {
  return new Date(date.getTime() - hours * 3600000);
}

// ── Schedule generation ──────────────────────────────────────────────────────

export type EventId =
  | "pickupPrep"
  | "dietChange"
  | "clearFluidsStart"
  | "bisacodyl"
  | "dose1"
  | "dose2"
  | "npoCutoff"
  | "leaveForHospital"
  | "procedure";

export interface PlanEvent {
  id: EventId;
  start: Date;
  /** Approximate duration in minutes (for the calendar entry). */
  durationMin: number;
  /** Needs the procedure time to be accurate. */
  needsTime: boolean;
}

interface PrepTiming {
  /** Hours before the procedure that dose 2 STARTS. */
  dose2StartHrsBefore: number;
  /** Minutes it typically takes to drink dose 2. */
  dose2DurationMin: number;
  /** Minutes for dose 1 (evening before, 6:00 PM). */
  dose1DurationMin: number;
  /** Bi-PegLyte adds bisacodyl tablets at noon the day before. */
  hasBisacodyl: boolean;
}

// Typical split-dose timing per brand. Dose 2 always finishes ≥3–4 h before
// the procedure; clear fluids stop 3 h before.
const PREP_TIMING: Record<PrepType, PrepTiming> = {
  peg4l: { dose2StartHrsBefore: 6, dose2DurationMin: 120, dose1DurationMin: 120, hasBisacodyl: false },
  bipeglyte: { dose2StartHrsBefore: 5, dose2DurationMin: 60, dose1DurationMin: 60, hasBisacodyl: true },
  picosalax: { dose2StartHrsBefore: 5, dose2DurationMin: 15, dose1DurationMin: 15, hasBisacodyl: false },
  unsure: { dose2StartHrsBefore: 6, dose2DurationMin: 120, dose1DurationMin: 120, hasBisacodyl: false },
};

export const NPO_HOURS_BEFORE = 3;

export function buildSchedule(plan: ProcedurePlan): PlanEvent[] {
  const timing = PREP_TIMING[plan.prepType || "unsure"];
  const proc = dateFromPlan(plan);
  const hasTime = !!plan.time;

  const events: PlanEvent[] = [
    { id: "pickupPrep", start: dayOffset(plan, -7, 10), durationMin: 30, needsTime: false },
    { id: "dietChange", start: dayOffset(plan, -3, 8), durationMin: 15, needsTime: false },
    { id: "clearFluidsStart", start: dayOffset(plan, -1, 7), durationMin: 15, needsTime: false },
  ];
  if (timing.hasBisacodyl) {
    events.push({ id: "bisacodyl", start: dayOffset(plan, -1, 12), durationMin: 15, needsTime: false });
  }
  events.push({
    id: "dose1",
    start: dayOffset(plan, -1, 18),
    durationMin: timing.dose1DurationMin,
    needsTime: false,
  });
  events.push({
    id: "dose2",
    start: minusHours(proc, timing.dose2StartHrsBefore),
    durationMin: timing.dose2DurationMin,
    needsTime: true,
  });
  events.push({
    id: "npoCutoff",
    start: minusHours(proc, NPO_HOURS_BEFORE),
    durationMin: 15,
    needsTime: true,
  });
  events.push({
    id: "leaveForHospital",
    start: minusHours(proc, 1.5),
    durationMin: 30,
    needsTime: true,
  });
  events.push({ id: "procedure", start: proc, durationMin: 180, needsTime: true });

  return hasTime ? events : events.filter((e) => !e.needsTime || e.id === "procedure");
}

/** Events still in the future (or today), for "coming up" lists. */
export function upcomingEvents(events: PlanEvent[]): PlanEvent[] {
  const now = new Date();
  return events.filter((e) => e.start.getTime() + e.durationMin * 60000 >= now.getTime());
}

// ── .ics export ──────────────────────────────────────────────────────────────

function icsDate(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  // Floating local time (no Z / TZID): renders at the patient's wall-clock time.
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
}

function escapeICS(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export interface IcsEventText {
  title: string;
  description: string;
}

export function generateICS(
  events: PlanEvent[],
  texts: Record<string, IcsEventText>,
  alarmMinutes = 30
): string {
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Colonoscopy Companion//colonoscopycompanion.ca//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];
  const stamp = icsDate(new Date());
  for (const ev of events) {
    const text = texts[ev.id];
    if (!text) continue;
    const end = new Date(ev.start.getTime() + ev.durationMin * 60000);
    lines.push(
      "BEGIN:VEVENT",
      `UID:${ev.id}-${icsDate(ev.start)}@colonoscopycompanion.ca`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${icsDate(ev.start)}`,
      `DTEND:${icsDate(end)}`,
      `SUMMARY:${escapeICS(text.title)}`,
      `DESCRIPTION:${escapeICS(text.description)}`,
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      `DESCRIPTION:${escapeICS(text.title)}`,
      `TRIGGER:-PT${alarmMinutes}M`,
      "END:VALARM",
      "END:VEVENT"
    );
  }
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function downloadICS(content: string, filename = "colonoscopy-plan.ics") {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ── Dose log (prep-day "Done" buttons) ───────────────────────────────────────

export function loadDoseLog(planDate: string): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(`dose-log-${planDate}`);
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

export function saveDoseLog(planDate: string, log: Record<string, boolean>) {
  localStorage.setItem(`dose-log-${planDate}`, JSON.stringify(log));
}
