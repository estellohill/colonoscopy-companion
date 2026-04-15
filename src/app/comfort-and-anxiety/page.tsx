"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import DoctorQuestions from "@/components/DoctorQuestions";
import FeedbackWidget from "@/components/FeedbackWidget";

export default function ComfortAndAnxiety() {
  const { t } = useLanguage();
  const ca = t.comfortAnxiety;
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        {t.ui.common.backToHome}
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-teal-50 rounded-2xl text-3xl mb-4">💬</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{ca.pageTitle}</h1>
        <p className="text-lg text-neutral-500 font-medium">{ca.pageSubtitle}</p>
      </div>

      {/* Validation box */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 sm:p-8 mb-10">
        <p className="text-neutral-700 leading-relaxed text-lg">
          {ca.validationText}
        </p>
      </div>

      {/* What patients actually say */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
          <span className="text-2xl">💡</span>
          {ca.patientsHeading}
        </h2>
        <div className="space-y-4">
          {ca.quotes.map((quote, i) => (
            <div key={i} className="bg-brand-50 rounded-xl p-4 border-l-4 border-brand-400">
              <p className="text-neutral-700 italic">{quote.text}</p>
              <p className="text-xs text-neutral-500 mt-1">{quote.attr}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Common concerns addressed */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-6 flex items-center gap-3">
          <span className="text-2xl">🛡️</span>
          {ca.concernsHeading}
        </h2>
        <div className="space-y-6">
          {ca.concerns.map((concern, i) => (
            <div key={i} className={i > 0 ? "border-t border-neutral-100 pt-6" : ""}>
              <h3 className="font-heading font-semibold text-neutral-800 mb-2">{concern.q}</h3>
              <p className="text-neutral-600 leading-relaxed">{concern.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Practical tips */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-6 flex items-center gap-3">
          <span className="text-2xl">🧘</span>
          {ca.tipsHeading}
        </h2>
        <div className="space-y-4">
          {ca.tips.map((tip, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-neutral-800">{tip.heading}</h3>
                <p className="text-sm text-neutral-600">{tip.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Understanding sedation */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
          <span className="text-2xl">💉</span>
          {ca.sedationHeading}
        </h2>
        <div className="text-neutral-600 leading-relaxed space-y-4">
          <p>{ca.sedationIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-success-50 rounded-xl p-4 border border-success-200">
              <h3 className="font-semibold text-success-700 mb-2">{ca.sedationFeel.heading}</h3>
              <ul className="text-sm space-y-1.5 text-neutral-600">
                {ca.sedationFeel.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-50 rounded-xl p-4 border border-brand-200">
              <h3 className="font-semibold text-brand-700 mb-2">{ca.sedationMeds.heading}</h3>
              <ul className="text-sm space-y-1.5 text-neutral-600">
                {ca.sedationMeds.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm">{ca.sedationNote}</p>
        </div>
      </div>

      {/* Questions for your doctor */}
      <div className="mb-10">
        <DoctorQuestions />
      </div>

      {/* Success callout */}
      <div className="bg-success-50 border border-success-200 rounded-2xl p-6 sm:p-8 mb-10">
        <div className="flex gap-3 items-start">
          <span className="text-2xl flex-shrink-0">✅</span>
          <div>
            <h3 className="font-heading font-semibold text-success-700 mb-2">{ca.bottomLine}</h3>
            <p className="text-neutral-700 leading-relaxed">
              {ca.bottomLineText}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <FeedbackWidget />
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
        <Link href="/what-to-expect" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          {t.ui.comfortAnxiety.prevLink}
        </Link>
        <Link href="/risks-and-safety" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          {t.ui.comfortAnxiety.nextLink}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
