"use client";

import Link from "next/link";
import { useSection } from "@/content/useSection";
import { useLanguage } from "@/i18n/LanguageContext";
import ColonDiagram from "@/components/ColonDiagram";

export default function WhatIsColonoscopy() {
  const section = useSection("what-is-colonoscopy");
  const { t } = useLanguage();
  const { intro, keyPoints, procedure } = section.content;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        {t.ui.common.backToHome}
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-teal-50 rounded-2xl text-3xl mb-4">{section.icon}</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{section.title}</h1>
        <p className="text-lg text-neutral-500 font-medium">{section.subtitle}</p>
      </div>

      <p className="text-neutral-700 leading-relaxed text-lg mb-10">{intro}</p>

      {/* Key Points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {keyPoints.map((point: { heading: string; text: string }) => (
          <div key={point.heading} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="font-heading font-semibold text-neutral-800 mb-2">{point.heading}</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{point.text}</p>
          </div>
        ))}
      </div>

      {/* Procedure Steps */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm mb-10">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-6">{procedure.heading}</h2>
        <ol className="space-y-4">
          {procedure.steps.map((step: string, i: number) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-sm">
                {i + 1}
              </span>
              <span className="text-neutral-700 pt-1 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Anatomy Diagram */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm mb-10">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-6 text-center">{t.ui.whatIsColonoscopy.anatomyHeading}</h2>
        <ColonDiagram />
        <p className="text-sm text-neutral-500 text-center mt-4 leading-relaxed">
          {t.ui.whatIsColonoscopy.anatomyCaption}
        </p>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
        <div />
        <Link href="/colon-cancer-polyps" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          {t.ui.whatIsColonoscopy.nextLink}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
