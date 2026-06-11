"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePlan } from "@/components/PlanContext";
import PlanSetup from "@/components/PlanSetup";
import { AddToCalendarButton, CaregiverShareButton, useEventTexts } from "@/components/PlanActions";
import { Icon, SectionIcon } from "@/components/Icons";
import { trackEvent } from "@/lib/analytics";
import {
  daysUntil,
  phaseFor,
  PHASE_ORDER,
  PHASE_DAYS_OUT,
  dayOffset,
  dateFromPlan,
  formatWeekday,
  formatTime,
  buildSchedule,
  upcomingEvents,
  localeFor,
  type ProcedurePlan,
} from "@/lib/plan";

interface TimelineStep {
  daysOut: number;
  heading: string;
  priority: string;
  tip: string;
  tasks: string[];
}

function useTodayTasks(plan: ProcedurePlan, phaseId: string) {
  const storageKey = `today-tasks-${plan.date}-${phaseId}`;
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      setChecked(saved ? JSON.parse(saved) : {});
    } catch {
      setChecked({});
    }
  }, [storageKey]);

  const toggle = (i: number) => {
    const next = { ...checked, [i]: !checked[i] };
    setChecked(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
    trackEvent("today_task_toggled", { phase: phaseId, item_index: i, checked: next[i] ? 1 : 0 });
  };

  return { checked, toggle };
}

export default function PlanHome() {
  const { t } = useLanguage();
  const { plan } = usePlan();
  const [editing, setEditing] = useState(false);

  if (!plan) return null;
  if (editing) {
    return (
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <PlanSetup onDone={() => setEditing(false)} />
      </section>
    );
  }

  const daysLeft = daysUntil(plan.date);
  const phaseId = phaseFor(daysLeft);
  const h = t.ui.plan.home;

  // ── Post-procedure state ──
  if (phaseId === "recovery" || phaseId === "past") {
    return (
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-7 sm:p-10 text-center">
          <div className="w-16 h-16 bg-success-50 text-success-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Icon name="heart" className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-neutral-800 mb-3">{h.procedureDone}</h1>
          <p className="text-lg text-neutral-600 max-w-md mx-auto mb-7 leading-relaxed">
            {h.procedureDoneText}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/recovery"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-7 py-3.5 min-h-12 rounded-xl font-semibold text-base hover:bg-brand-700 transition-colors"
            >
              {h.recoveryLink}
              <Icon name="heart" className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setEditing(true)}
              className="inline-flex items-center justify-center px-7 py-3.5 min-h-12 text-base text-neutral-600 hover:bg-neutral-100 rounded-xl font-medium transition-colors"
            >
              {h.startOver}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return <PlanDashboard plan={plan} daysLeft={daysLeft} phaseId={phaseId} onEdit={() => setEditing(true)} />;
}

function PlanDashboard({
  plan,
  daysLeft,
  phaseId,
  onEdit,
}: {
  plan: ProcedurePlan;
  daysLeft: number;
  phaseId: string;
  onEdit: () => void;
}) {
  const { t, lang } = useLanguage();
  const eventTexts = useEventTexts();
  const { checked, toggle } = useTodayTasks(plan, phaseId);

  const h = t.ui.plan.home;
  const phases = t.ui.plan.phases as Record<string, string>;
  const procDate = dateFromPlan(plan);
  const timeline = t.countdownTimeline as unknown as TimelineStep[];
  const currentStep =
    timeline.find((s) => s.daysOut === (PHASE_DAYS_OUT[phaseId] ?? -1)) ||
    (phaseId === "early" ? null : timeline[0]);
  const todayTasks = (currentStep?.tasks || []).slice(0, 3);
  const allDone = todayTasks.length > 0 && todayTasks.every((_, i) => checked[i]);
  const showOnTrack = phaseId === "early" || allDone;

  const nextEvents = upcomingEvents(buildSchedule(plan)).slice(0, 3);
  const shortDay = new Intl.DateTimeFormat(localeFor(lang), { weekday: "short", day: "numeric" });

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Countdown card — anchored to the person's real date and time */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-7 sm:py-9 text-center">
          <p className="text-brand-100 font-medium text-base mb-1">{h.yourProcedure}</p>
          <p className="font-heading text-7xl sm:text-8xl font-bold text-white leading-none">
            {daysLeft}
          </p>
          <p className="text-brand-100 font-medium text-lg mt-1">
            {daysLeft === 1 ? t.ui.countdown.dayUntil : t.ui.countdown.daysUntil}
          </p>
          <p className="text-white font-semibold text-lg mt-3">
            {formatWeekday(procDate, lang)}
            {plan.time && (
              <span className="text-brand-100 font-medium">
                {" "}
                · {formatTime(procDate, lang)}
              </span>
            )}
          </p>
        </div>

        {/* Phase progress with the patient's actual weekdays, not "T-minus" */}
        <div className="px-5 sm:px-8 py-5">
          <div className="flex justify-between">
            {PHASE_ORDER.map((p) => {
              const stepDate = dayOffset(plan, -PHASE_DAYS_OUT[p]);
              const reached = daysLeft <= PHASE_DAYS_OUT[p];
              const isCurrent = p === phaseId;
              return (
                <div key={p} className="flex flex-col items-center flex-1">
                  <span
                    className={`w-4 h-4 rounded-full border-2 ${
                      isCurrent
                        ? "bg-brand-600 border-brand-600 ring-4 ring-brand-100"
                        : reached
                          ? "bg-brand-600 border-brand-600"
                          : "bg-white border-neutral-300"
                    }`}
                  />
                  <span
                    className={`text-sm mt-2 text-center leading-tight font-medium ${
                      isCurrent ? "text-brand-700 font-semibold" : reached ? "text-neutral-600" : "text-neutral-500"
                    }`}
                  >
                    {phases[p]}
                  </span>
                  <span className={`text-sm ${isCurrent ? "text-brand-600 font-semibold" : "text-neutral-500"}`}>
                    {shortDay.format(stepDate)}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-3">
            <button
              onClick={onEdit}
              className="text-base text-brand-600 hover:text-brand-700 font-medium px-3 py-2 -mr-3 rounded-lg hover:bg-brand-50 transition-colors"
            >
              {t.ui.plan.setup.edit}
            </button>
          </div>
        </div>
      </div>

      {/* Today card — at most 3 tasks, one idea per row */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5 sm:p-7 mb-6">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-9 h-9 bg-warning-50 text-warning-600 rounded-xl flex items-center justify-center">
            <Icon name="sun" className="w-5 h-5" />
          </span>
          <h2 className="font-heading text-xl font-bold text-neutral-800">{h.todayHeading}</h2>
        </div>

        {currentStep && (
          <p className="text-base font-semibold text-neutral-800 bg-warning-50 border border-warning-200 rounded-xl px-4 py-3 mb-4">
            {currentStep.priority}
          </p>
        )}

        {todayTasks.length > 0 && (
          <ul className="space-y-1 mb-2">
            {todayTasks.map((task, i) => (
              <li key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="flex items-start gap-3.5 w-full text-left p-3 min-h-12 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <span
                    className={`flex-shrink-0 w-7 h-7 mt-0.5 rounded-lg border-2 flex items-center justify-center transition-colors ${
                      checked[i]
                        ? "bg-success-500 border-success-500 text-white"
                        : "border-neutral-300 group-hover:border-brand-400"
                    }`}
                  >
                    {checked[i] && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`text-base leading-relaxed ${
                      checked[i] ? "text-neutral-500 line-through" : "text-neutral-700"
                    }`}
                  >
                    {task}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {showOnTrack && (
          <p className="flex items-center gap-2.5 text-base text-success-700 bg-success-50 border border-success-200 rounded-xl px-4 py-3">
            <Icon name="checkCircle" className="w-5 h-5 flex-shrink-0" />
            {h.onTrack}
          </p>
        )}

        {currentStep?.tip && (
          <p className="text-base text-neutral-600 italic mt-4 pt-4 border-t border-neutral-100 leading-relaxed">
            {currentStep.tip}
          </p>
        )}
      </div>

      {/* Missing-time prompt — unlocks the dosing schedule */}
      {!plan.time && (
        <div className="bg-warning-50 border border-warning-200 rounded-2xl p-5 sm:p-6 mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="flex-shrink-0 w-11 h-11 bg-warning-100 text-warning-700 rounded-xl flex items-center justify-center">
            <Icon name="clock" className="w-6 h-6" />
          </span>
          <p className="text-base text-neutral-700 flex-1 leading-relaxed">{h.addTimePrompt}</p>
          <button
            onClick={onEdit}
            className="inline-flex items-center justify-center gap-2 bg-warning-600 text-white px-5 py-3 min-h-12 rounded-xl font-semibold text-base hover:bg-warning-700 transition-colors"
          >
            {h.addTimeButton}
          </button>
        </div>
      )}

      {/* Coming up — real weekdays and clock times */}
      {nextEvents.length > 0 && (
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5 sm:p-7 mb-6">
          <h2 className="font-heading text-xl font-bold text-neutral-800 mb-4">
            {t.ui.countdown.comingUp}
          </h2>
          <ul className="space-y-3">
            {nextEvents.map((ev) => (
              <li key={ev.id} className="flex items-center gap-4 p-3.5 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="flex-shrink-0 w-11 h-11 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
                  <Icon name={ev.id === "npoCutoff" ? "alert" : ev.id === "dose1" || ev.id === "dose2" ? "cup" : "calendar"} className="w-6 h-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-neutral-800">{eventTexts[ev.id]?.title}</p>
                  <p className="text-base text-neutral-600">
                    {formatWeekday(ev.start, lang)} · {formatTime(ev.start, lang)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Actions: dose schedule, calendar export, caregiver share */}
      <div className="grid grid-cols-1 gap-3 mb-10">
        {plan.time && (
          <Link
            href="/prep-day"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-teal-600 text-white px-6 py-3.5 min-h-12 rounded-xl font-semibold text-base hover:bg-teal-700 transition-colors"
          >
            <Icon name="clock" className="w-5 h-5" />
            {h.viewDoseSchedule}
          </Link>
        )}
        <AddToCalendarButton plan={plan} />
        <CaregiverShareButton plan={plan} />
        <p className="text-base text-neutral-500 text-center leading-relaxed px-2">
          {t.ui.plan.calendar.help}
        </p>
        <Link
          href="/prep-instructions"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-12 text-base font-semibold text-neutral-700 bg-white border border-neutral-200 hover:border-brand-300 rounded-xl transition-colors"
        >
          {h.viewFullPlan}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* Learn — education demoted but never locked out */}
      <div>
        <h2 className="font-heading text-xl font-bold text-neutral-800 mb-1.5">{h.learnHeading}</h2>
        <p className="text-base text-neutral-600 mb-5 leading-relaxed">{h.learnSubtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(t.sections as unknown as Array<{ id: string; title: string; subtitle: string }>).map((section) => (
            <Link
              key={section.id}
              href={`/${section.id}`}
              className="flex items-center gap-3.5 p-4 min-h-12 bg-white rounded-xl border border-neutral-200 hover:border-brand-400 hover:shadow-md transition-all group"
            >
              <span className="flex-shrink-0 w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
                <SectionIcon id={section.id} className="w-5 h-5" />
              </span>
              <span className="text-base font-semibold text-neutral-800 group-hover:text-brand-700 transition-colors">
                {section.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
