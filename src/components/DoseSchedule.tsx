"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePlan } from "@/components/PlanContext";
import PlanSetup from "@/components/PlanSetup";
import { AddToCalendarButton, useEventTexts } from "@/components/PlanActions";
import BowelPrepScale from "@/components/BowelPrepScale";
import { Icon, type IconName } from "@/components/Icons";
import { trackEvent } from "@/lib/analytics";
import {
  buildSchedule,
  dayOffset,
  formatWeekday,
  formatTime,
  loadDoseLog,
  saveDoseLog,
  type ProcedurePlan,
  type PlanEvent,
  type EventId,
} from "@/lib/plan";

// Which schedule entries get a "Done" button (stop-instructions and the
// procedure itself are states, not tasks).
const CHECKABLE: Partial<Record<EventId, boolean>> = {
  clearFluidsStart: true,
  bisacodyl: true,
  dose1: true,
  dose2: true,
  leaveForHospital: true,
};

const EVENT_ICONS: Partial<Record<EventId, IconName>> = {
  clearFluidsStart: "cup",
  bisacodyl: "pill",
  dose1: "jug",
  dose2: "jug",
  leaveForHospital: "hospital",
  procedure: "heart",
};

// Dose entries get the brand-specific drinking instructions.
const DOSE_IDS: EventId[] = ["dose1", "dose2"];

export default function DoseSchedule() {
  const { t } = useLanguage();
  const { plan, ready } = usePlan();
  const [editing, setEditing] = useState(false);
  const ds = t.ui.plan.doseSchedule;

  if (!ready) return null;

  // No plan at all → set one up right here
  if (!plan || editing) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <PlanSetup onDone={() => setEditing(false)} />
      </div>
    );
  }

  // Plan but no time → the schedule can't be computed; explain why
  if (!plan.time) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-warning-50 border border-warning-200 rounded-2xl p-6 sm:p-8 text-center mb-6">
          <span className="inline-flex w-14 h-14 bg-warning-100 text-warning-700 rounded-2xl items-center justify-center mb-4">
            <Icon name="clock" className="w-7 h-7" />
          </span>
          <h1 className="font-heading text-2xl font-bold text-neutral-800 mb-2">{ds.noTimeHeading}</h1>
          <p className="text-base text-neutral-700 max-w-md mx-auto mb-6 leading-relaxed">{ds.noTimeText}</p>
          <button
            onClick={() => setEditing(true)}
            className="inline-flex items-center justify-center gap-2 bg-warning-600 text-white px-7 py-3.5 min-h-12 rounded-xl font-semibold text-base hover:bg-warning-700 transition-colors"
          >
            {t.ui.plan.home.addTimeButton}
          </button>
        </div>
      </div>
    );
  }

  return <ScheduleView plan={plan} onEdit={() => setEditing(true)} />;
}

function ScheduleView({ plan, onEdit }: { plan: ProcedurePlan; onEdit: () => void }) {
  const { t, lang } = useLanguage();
  const eventTexts = useEventTexts();
  const ds = t.ui.plan.doseSchedule;
  const doseDetails = t.ui.plan.doseDetails as Record<string, { dose1: string; dose2: string }>;
  const brandDetail = doseDetails[plan.prepType || "unsure"];

  const [log, setLog] = useState<Record<string, boolean>>({});
  useEffect(() => {
    setLog(loadDoseLog(plan.date));
  }, [plan.date]);

  const markDone = (id: string) => {
    const next = { ...log, [id]: !log[id] };
    setLog(next);
    saveDoseLog(plan.date, next);
    trackEvent("dose_marked_done", { event_id: id, done: next[id] ? 1 : 0 });
  };

  const events = buildSchedule(plan);
  const dayBeforeStart = dayOffset(plan, -1);
  const procDayStart = dayOffset(plan, 0);
  const dayBefore = events.filter((e) => e.start >= dayBeforeStart && e.start < procDayStart);
  const procDay = events.filter((e) => e.start >= procDayStart && e.id !== "npoCutoff");
  const npo = events.find((e) => e.id === "npoCutoff");

  // The next not-yet-done, not-yet-past actionable entry gets highlighted
  const now = new Date();
  const upNextId = [...dayBefore, ...procDay].find(
    (e) => CHECKABLE[e.id] && !log[e.id] && e.start.getTime() + e.durationMin * 60000 >= now.getTime()
  )?.id;

  const renderEntry = (ev: PlanEvent) => {
    const text = eventTexts[ev.id];
    if (!text) return null;
    const done = !!log[ev.id];
    const isUpNext = ev.id === upNextId;
    const detail = DOSE_IDS.includes(ev.id)
      ? brandDetail[ev.id as "dose1" | "dose2"]
      : text.description;

    if (done) {
      // Completed doses collapse to a checked row (Apple Health log pattern)
      return (
        <li key={ev.id}>
          <button
            onClick={() => markDone(ev.id)}
            className="flex items-center gap-3.5 w-full text-left p-3.5 min-h-12 rounded-xl bg-success-50 border border-success-200 transition-colors"
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-success-500 text-white flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-base font-medium text-success-700 line-through">{text.title}</span>
            <span className="ml-auto text-base font-semibold text-success-700">{formatTime(ev.start, lang)}</span>
          </button>
        </li>
      );
    }

    return (
      <li key={ev.id}>
        <div
          className={`rounded-2xl border-2 p-5 ${
            isUpNext ? "border-brand-500 bg-brand-50 shadow-md" : "border-neutral-200 bg-white"
          }`}
        >
          {isUpNext && (
            <span className="inline-block text-sm font-bold text-brand-700 bg-brand-100 rounded-full px-3 py-1 mb-3 uppercase tracking-wide">
              {ds.upNext}
            </span>
          )}
          <div className="flex items-start gap-4">
            <span
              className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                isUpNext ? "bg-brand-600 text-white" : "bg-neutral-100 text-neutral-600"
              }`}
            >
              <Icon name={EVENT_ICONS[ev.id] || "calendar"} className="w-6 h-6" />
            </span>
            <div className="min-w-0 flex-1">
              <p className={`font-heading text-2xl font-bold ${isUpNext ? "text-brand-700" : "text-neutral-800"}`}>
                {formatTime(ev.start, lang)}
              </p>
              <p className="text-lg font-semibold text-neutral-800 mt-0.5">{text.title}</p>
              <p className="text-base text-neutral-600 mt-1.5 leading-relaxed">{detail}</p>
            </div>
          </div>
          {CHECKABLE[ev.id] && (
            <button
              onClick={() => markDone(ev.id)}
              className={`mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-4 min-h-12 rounded-xl font-bold text-lg transition-colors ${
                isUpNext
                  ? "bg-brand-600 text-white hover:bg-brand-700"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              <Icon name="checkCircle" className="w-6 h-6" />
              {ds.markDone}
            </button>
          )}
        </div>
      </li>
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Link
        href="/"
        className="text-base text-brand-600 hover:text-brand-700 mb-6 inline-flex items-center gap-1.5 font-medium min-h-12 py-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {t.ui.common.backToHome}
      </Link>

      <div className="mb-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{ds.heading}</h1>
        <p className="text-lg text-neutral-600">{ds.subtitle}</p>
        <p className="text-base text-neutral-500 mt-3 leading-relaxed">
          {ds.approxNote}{" "}
          <button onClick={onEdit} className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">
            {t.ui.plan.setup.edit}
          </button>
        </p>
      </div>

      {/* Day before */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 bg-warning-50 text-warning-600 rounded-xl flex items-center justify-center">
            <Icon name="cup" className="w-5 h-5" />
          </span>
          <div>
            <h2 className="font-heading text-xl font-bold text-neutral-800">{ds.dayBeforeHeading}</h2>
            <p className="text-base text-neutral-600 font-medium">{formatWeekday(dayBeforeStart, lang)}</p>
          </div>
        </div>
        <ul className="space-y-3">{dayBefore.map(renderEntry)}</ul>
      </div>

      {/* Tips at the moment of struggle, not buried in an FAQ */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 sm:p-6 mb-10">
        <h3 className="font-heading text-lg font-bold text-teal-800 mb-3">{ds.tipsHeading}</h3>
        <ul className="space-y-2.5">
          {(ds.tips as unknown as string[]).map((tip, i) => (
            <li key={i} className="flex gap-3 text-base text-neutral-700 leading-relaxed">
              <span className="text-teal-600 flex-shrink-0 mt-0.5">
                <Icon name="checkCircle" className="w-5 h-5" />
              </span>
              {tip}
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-teal-200">
          <p className="text-base font-semibold text-neutral-800">{ds.notWorking}</p>
          <p className="text-base text-neutral-700 mt-1 leading-relaxed">{ds.notWorkingText}</p>
        </div>
      </div>

      {/* Procedure day */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
            <Icon name="sun" className="w-5 h-5" />
          </span>
          <div>
            <h2 className="font-heading text-xl font-bold text-neutral-800">{ds.procDayHeading}</h2>
            <p className="text-base text-neutral-600 font-medium">{formatWeekday(procDayStart, lang)}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {procDay.filter((e) => npo && e.start < npo.start).map(renderEntry)}

          {/* The highest-stakes instruction in the app gets its own block */}
          {npo && (
            <li>
              <div className="rounded-2xl border-4 border-restrict-500 bg-restrict-50 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-restrict-500 text-white flex items-center justify-center">
                    <Icon name="alert" className="w-7 h-7" />
                  </span>
                  <div>
                    <p className="font-heading text-2xl font-bold text-restrict-600">
                      {ds.npoWarningTitle} {formatTime(npo.start, lang)}
                    </p>
                    <p className="text-base text-neutral-700 mt-2 leading-relaxed">{ds.npoWarningBody}</p>
                  </div>
                </div>
              </div>
            </li>
          )}

          {procDay.filter((e) => !npo || e.start >= npo.start).map(renderEntry)}
        </ul>
      </div>

      <div className="mb-10">
        <AddToCalendarButton plan={plan} />
      </div>

      {/* Self-monitoring tied to the schedule — the QI study's hard endpoint */}
      <div className="mb-10">
        <h2 className="font-heading text-xl font-bold text-neutral-800 mb-4">{ds.scaleHeading}</h2>
        <BowelPrepScale />
      </div>
    </div>
  );
}
