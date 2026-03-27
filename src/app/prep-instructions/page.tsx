import type { Metadata } from "next";
import Link from "next/link";
import { getSection } from "@/content";
import PrepChecklist from "@/components/PrepChecklist";
import CountdownTimer from "@/components/CountdownTimer";

export const metadata: Metadata = {
  title: "Colonoscopy Prep Instructions",
  description:
    "Step-by-step colonoscopy preparation guide with interactive checklist. Know what to eat, what to avoid, and exactly what to do 7 days before through procedure day.",
};

const timelineColors: Record<string, { badge: string; dot: string }> = {
  "7 days before": { badge: "bg-brand-600 text-white", dot: "bg-brand-600" },
  "3 days before": { badge: "bg-teal-600 text-white", dot: "bg-teal-600" },
  "1 day before": { badge: "bg-warning-500 text-white", dot: "bg-warning-500" },
  "Morning of": { badge: "bg-success-500 text-white", dot: "bg-success-500" },
};

export default function PrepInstructions() {
  const section = getSection("prep-instructions");
  const { intro, timeline, clearLiquids, medications } = section.content;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        Back to Home
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-success-50 rounded-2xl text-3xl mb-4">{section.icon}</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{section.title}</h1>
        <p className="text-lg text-neutral-500 font-medium">{section.subtitle}</p>
      </div>

      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mb-10">
        <div className="flex gap-3 items-start">
          <span className="flex-shrink-0 w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          <p className="text-neutral-700 leading-relaxed pt-1.5">{intro}</p>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="mb-10">
        <CountdownTimer />
      </div>

      {/* Timeline with Checklists */}
      <div className="space-y-8 mb-14">
        {timeline.map((step, idx) => {
          const colors = timelineColors[step.when] || { badge: "bg-neutral-600 text-white", dot: "bg-neutral-600" };
          return (
            <div key={step.when} className="relative">
              {/* Timeline connector */}
              {idx < timeline.length - 1 && (
                <div className="absolute left-[18px] top-10 bottom-0 w-0.5 bg-neutral-200 hidden sm:block" />
              )}
              <div className="flex items-center gap-3 mb-4">
                <span className={`flex-shrink-0 w-9 h-9 rounded-full ${colors.dot} flex items-center justify-center shadow-sm hidden sm:flex`}>
                  <span className="w-3 h-3 bg-white rounded-full" />
                </span>
                <span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${colors.badge} shadow-sm`}>
                  {step.when}
                </span>
                <h2 className="font-heading text-lg font-semibold text-neutral-800">{step.heading}</h2>
              </div>
              <div className="sm:ml-12">
                <PrepChecklist
                  items={step.items}
                  storageKey={step.when.replace(/\s+/g, "-")}
                  heading={`${step.heading} checklist`}
                />
              </div>
            </div>
          );
        })}
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
              <h3 className="font-heading font-semibold text-success-700">OK to have</h3>
            </div>
            <ul className="space-y-2.5">
              {clearLiquids.allowed.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-neutral-700">
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
              <h3 className="font-heading font-semibold text-restrict-600">Avoid</h3>
            </div>
            <ul className="space-y-2.5">
              {clearLiquids.avoid.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-neutral-700">
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

      {/* Medications */}
      <div className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-5">{medications.heading}</h2>
        <div className="bg-warning-50 rounded-2xl p-5 border border-warning-200 mb-4">
          <div className="flex gap-3 items-start">
            <span className="text-warning-500 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </span>
            <p className="text-sm text-neutral-700"><strong className="text-warning-700">Important:</strong> Always confirm medication changes with your doctor. Never stop or change medications on your own.</p>
          </div>
        </div>
        <div className="space-y-3">
          {medications.items.map((item) => (
            <div key={item.med} className="bg-white rounded-xl p-5 border border-neutral-200 shadow-sm">
              <p className="font-semibold text-neutral-800 text-sm">{item.med}</p>
              <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
        <Link href="/screening-guidelines" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Screening Guidelines
        </Link>
        <Link href="/what-to-expect" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          What to Expect
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
