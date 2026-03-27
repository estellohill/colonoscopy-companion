import type { Metadata } from "next";
import Link from "next/link";
import { getSection } from "@/content";

export const metadata: Metadata = {
  title: "What to Expect During a Colonoscopy",
  description:
    "A step-by-step walkthrough of what happens before, during, and after your colonoscopy. Know what to expect so you feel prepared and confident.",
};

const phaseStyles: Record<string, { card: string; number: string }> = {
  Before: { card: "bg-white border-brand-200", number: "bg-brand-600 text-white" },
  During: { card: "bg-white border-teal-200", number: "bg-teal-600 text-white" },
  After: { card: "bg-white border-success-200", number: "bg-success-500 text-white" },
};

export default function WhatToExpect() {
  const section = getSection("what-to-expect");
  const { phases, afterPolyps } = section.content;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        Back to Home
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl text-3xl mb-4">{section.icon}</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{section.title}</h1>
        <p className="text-lg text-neutral-500 font-medium">{section.subtitle}</p>
      </div>

      {/* Phases */}
      <div className="space-y-6 mb-12">
        {phases.map((phase) => {
          const styles = phaseStyles[phase.phase] || phaseStyles.Before;
          return (
            <div
              key={phase.phase}
              className={`rounded-2xl p-6 sm:p-8 border-2 shadow-sm ${styles.card}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{phase.icon}</span>
                <h2 className="font-heading text-xl font-semibold text-neutral-800">{phase.phase}</h2>
              </div>
              <ul className="space-y-3.5">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-neutral-700">
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 ${styles.number}`}>
                      {i + 1}
                    </span>
                    <span className="leading-relaxed pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* After Polyps */}
      <div className="bg-warning-50 rounded-2xl p-6 sm:p-8 border border-warning-200 mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-10 bg-warning-500 rounded-xl flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </span>
          <h2 className="font-heading text-xl font-semibold text-warning-700">{afterPolyps.heading}</h2>
        </div>
        <ul className="space-y-3">
          {afterPolyps.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-neutral-700">
              <span className="flex-shrink-0 text-warning-500 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3" /></svg>
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
        <Link href="/prep-instructions" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Prep Instructions
        </Link>
        <Link href="/faq" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          FAQ
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
