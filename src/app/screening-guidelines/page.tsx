"use client";

import Link from "next/link";
import { useSection } from "@/content/useSection";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ScreeningGuidelines() {
  const section = useSection("screening-guidelines");
  const { t } = useLanguage();
  const { intro, bcProgram, riskFactors, frequency } = section.content;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        {t.ui.common.backToHome}
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl text-3xl mb-4">{section.icon}</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{section.title}</h1>
        <p className="text-lg text-neutral-500 font-medium">{section.subtitle}</p>
      </div>

      <p className="text-neutral-700 leading-relaxed text-lg mb-10">{intro}</p>

      {/* BC Program */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 mb-10 border border-neutral-200 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <span className="flex-shrink-0 w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          <h2 className="font-heading text-xl font-semibold text-neutral-800">{bcProgram.heading}</h2>
        </div>
        <ul className="space-y-3">
          {bcProgram.items.map((item: string, i: number) => (
            <li key={i} className="flex gap-3 text-neutral-700">
              <span className="flex-shrink-0 text-success-500 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Risk Factors */}
      <div className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-4">{riskFactors.heading}</h2>
        <div className="bg-warning-50 rounded-2xl p-6 border border-warning-200">
          <ul className="space-y-3">
            {riskFactors.items.map((item: string, i: number) => (
              <li key={i} className="flex gap-3 text-neutral-700">
                <span className="flex-shrink-0 text-warning-500 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Frequency Table */}
      <div className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-4">{frequency.heading}</h2>
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-50 border-b border-brand-100">
                <th className="text-left p-4 font-heading font-semibold text-brand-800">{t.ui.screeningGuidelines.findingHeader}</th>
                <th className="text-left p-4 font-heading font-semibold text-brand-800">{t.ui.screeningGuidelines.nextColonoscopyHeader}</th>
              </tr>
            </thead>
            <tbody>
              {frequency.items.map((item: { scenario: string; interval: string }, i: number) => (
                <tr key={i} className="border-b border-neutral-100 last:border-0">
                  <td className="p-4 text-neutral-700">{item.scenario}</td>
                  <td className="p-4 text-brand-600 font-semibold">{item.interval}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Guideline Sources */}
      <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 mb-10">
        <h3 className="font-heading font-semibold text-neutral-800 mb-3 text-sm">{t.ui.screeningGuidelines.sourcesHeading}</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="https://www.cag-acg.org/publications/cag-clinical-practice-guidelines" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
              Canadian Association of Gastroenterology (CAG) — Clinical Practice Guidelines
            </a>
          </li>
          <li>
            <a href="http://www.bccancer.bc.ca/screening/colon" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
              BC Cancer Colon Screening Program
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/public-health/services/chronic-diseases/cancer/colorectal-cancer.html" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
              Public Health Agency of Canada — Colorectal Cancer
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
        <Link href="/colon-cancer-polyps" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          {t.ui.screeningGuidelines.prevLink}
        </Link>
        <Link href="/prep-instructions" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          {t.ui.screeningGuidelines.nextLink}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
