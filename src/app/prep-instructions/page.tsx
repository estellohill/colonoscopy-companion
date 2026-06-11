"use client";

import Link from "next/link";
import { useSection } from "@/content/useSection";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePlan } from "@/components/PlanContext";
import PrepChecklist from "@/components/PrepChecklist";
import PlanSetup from "@/components/PlanSetup";
import BowelPrepScale from "@/components/BowelPrepScale";
import PrintButton from "@/components/PrintButton";
import FeedbackWidget from "@/components/FeedbackWidget";
import { Icon, SectionIcon } from "@/components/Icons";
import { dayOffset, daysUntil, formatWeekday } from "@/lib/plan";

const stepStyles = [
  { badge: "bg-brand-600 text-white", dot: "bg-brand-600" },
  { badge: "bg-teal-600 text-white", dot: "bg-teal-600" },
  { badge: "bg-warning-500 text-white", dot: "bg-warning-500" },
  { badge: "bg-success-500 text-white", dot: "bg-success-500" },
];

// Timeline order is fixed: 7 days / 3 days / 1 day / morning of
const stepDaysOut = [7, 3, 1, 0];

export default function PrepInstructions() {
  const section = useSection("prep-instructions");
  const { t, lang } = useLanguage();
  const { plan, ready } = usePlan();
  const { intro, timeline, foodGuide, clearLiquids, medications } = section.content;

  const hasPlan = ready && !!plan;
  const daysLeft = hasPlan ? daysUntil(plan!.date) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-base text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1.5 font-medium min-h-12 py-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        {t.ui.common.backToHome}
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-success-50 text-success-600 rounded-2xl mb-4">
          <SectionIcon id="prep-instructions" className="w-7 h-7" />
        </span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{section.title}</h1>
        <p className="text-lg text-neutral-600 font-medium">{section.subtitle}</p>
      </div>

      <div className="flex justify-end mb-4">
        <PrintButton />
      </div>

      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mb-10">
        <div className="flex gap-3 items-start">
          <span className="flex-shrink-0 w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          <p className="text-base text-neutral-700 leading-relaxed pt-1.5">{intro}</p>
        </div>
      </div>

      {/* Plan hookup: set a date here, or jump to the personalized schedule */}
      <div className="mb-10 no-print">
        {!hasPlan && <PlanSetup />}
        {hasPlan && (
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="flex-shrink-0 w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
              <Icon name="calendarCheck" className="w-6 h-6" />
            </span>
            <div className="flex-1">
              <p className="text-base font-semibold text-neutral-800">
                {t.ui.plan.home.yourProcedure}: {formatWeekday(dayOffset(plan!, 0), lang)}
              </p>
              {daysLeft !== null && daysLeft >= 0 && (
                <p className="text-base text-neutral-600">
                  {daysLeft} {daysLeft === 1 ? t.ui.countdown.dayUntil : t.ui.countdown.daysUntil}
                </p>
              )}
            </div>
            {plan!.time ? (
              <Link
                href="/prep-day"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-5 py-3 min-h-12 rounded-xl font-semibold text-base hover:bg-teal-700 transition-colors"
              >
                <Icon name="clock" className="w-5 h-5" />
                {t.ui.plan.home.viewDoseSchedule}
              </Link>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-12 rounded-xl font-semibold text-base text-brand-700 bg-brand-50 border border-brand-200 hover:bg-brand-100 transition-colors"
              >
                {t.ui.plan.home.addTimeButton}
              </Link>
            )}
          </div>
        )}
      </div>

      {/* The #1 prep-cancelling mistake gets a high-visibility callout */}
      <div className="rounded-2xl border-2 border-restrict-400 bg-restrict-50 p-5 sm:p-6 mb-10">
        <div className="flex gap-3.5 items-start">
          <span className="flex-shrink-0 w-10 h-10 bg-restrict-500 text-white rounded-xl flex items-center justify-center">
            <Icon name="alert" className="w-5 h-5" />
          </span>
          <p className="text-base font-semibold text-neutral-800 leading-relaxed pt-1">
            {t.ui.prepPage.redWarning}
          </p>
        </div>
      </div>

      {/* Timeline with Checklists */}
      <div className="space-y-8 mb-14">
        {timeline.map((step: { when: string; heading: string; items: string[] }, idx: number) => {
          const colors = stepStyles[idx] || stepStyles[0];
          const stepDate = hasPlan ? dayOffset(plan!, -stepDaysOut[idx]) : null;
          return (
            <div key={step.when} className="relative">
              {/* Timeline connector */}
              {idx < timeline.length - 1 && (
                <div className="absolute left-[18px] top-10 bottom-0 w-0.5 bg-neutral-200 hidden sm:block" />
              )}
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <span className={`flex-shrink-0 w-9 h-9 rounded-full ${colors.dot} items-center justify-center shadow-sm hidden sm:flex`}>
                  <span className="w-3 h-3 bg-white rounded-full" />
                </span>
                <span className={`text-sm px-3 py-1.5 rounded-full font-semibold ${colors.badge} shadow-sm`}>
                  {step.when}
                </span>
                <h2 className="font-heading text-lg font-semibold text-neutral-800">{step.heading}</h2>
              </div>
              {/* Older adults plan in weekdays, not "T-minus 3" */}
              {stepDate && (
                <p className="sm:ml-12 text-base font-semibold text-brand-700 mb-3">
                  {formatWeekday(stepDate, lang)}
                </p>
              )}
              <div className={`sm:ml-12 ${stepDate ? "" : "mt-3"}`}>
                <PrepChecklist
                  items={step.items}
                  storageKey={`step-${stepDaysOut[idx]}`}
                  heading={step.heading}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Food Guide — 1 Week Before */}
      <div className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-5">{foodGuide.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-6 border-2 border-restrict-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-restrict-500 rounded-lg flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </span>
              <h3 className="font-heading font-semibold text-restrict-600">{t.ui.prepPage.doNotEat}</h3>
            </div>
            <ul className="space-y-2.5">
              {foodGuide.avoid.map((item: string, i: number) => (
                <li key={i} className="flex gap-2 text-base text-neutral-700">
                  <span className="text-restrict-500 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-success-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-success-500 rounded-lg flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <h3 className="font-heading font-semibold text-success-700">{t.ui.prepPage.okToEat}</h3>
            </div>
            <ul className="space-y-2.5">
              {foodGuide.allowed.map((item: string, i: number) => (
                <li key={i} className="flex gap-2 text-base text-neutral-700">
                  <span className="text-success-500 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Clear Liquids Guide */}
      <div className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-5">{clearLiquids.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-6 border-2 border-success-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-success-500 rounded-lg flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <h3 className="font-heading font-semibold text-success-700">{t.ui.prepPage.okToHave}</h3>
            </div>
            <ul className="space-y-2.5">
              {clearLiquids.allowed.map((item: string, i: number) => (
                <li key={i} className="flex gap-2 text-base text-neutral-700">
                  <span className="text-success-500 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-restrict-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-restrict-500 rounded-lg flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </span>
              <h3 className="font-heading font-semibold text-restrict-600">{t.ui.prepPage.avoid}</h3>
            </div>
            <ul className="space-y-2.5">
              {clearLiquids.avoid.map((item: string, i: number) => (
                <li key={i} className="flex gap-2 text-base text-neutral-700">
                  <span className="text-restrict-500 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bowel Prep Scale */}
      <div className="mb-10">
        <BowelPrepScale />
      </div>

      {/* Medications */}
      <div className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-5">{medications.heading}</h2>
        <div className="bg-warning-50 rounded-2xl p-5 border border-warning-200 mb-4">
          <div className="flex gap-3 items-start">
            <span className="text-warning-600 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </span>
            <p className="text-base text-neutral-700"><strong className="text-warning-700">Important:</strong> {t.ui.prepPage.importantWarning}</p>
          </div>
        </div>
        <div className="space-y-3">
          {medications.items.map((item: { med: string; note: string }) => (
            <div key={item.med} className="bg-white rounded-xl p-5 border border-neutral-200 shadow-sm">
              <p className="font-semibold text-neutral-800 text-base">{item.med}</p>
              <p className="text-base text-neutral-600 mt-1 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <FeedbackWidget />
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
        <Link href="/screening-guidelines" className="inline-flex items-center gap-1.5 min-h-12 py-2 text-base text-brand-600 hover:text-brand-700 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          {t.ui.prepPage.prevLink}
        </Link>
        <Link href="/what-to-expect" className="inline-flex items-center gap-1.5 min-h-12 py-2 text-base text-brand-600 hover:text-brand-700 font-semibold">
          {t.ui.prepPage.nextLink}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
