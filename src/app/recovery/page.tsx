"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "@/components/Icons";
import FeedbackWidget from "@/components/FeedbackWidget";

export default function RecoveryPage() {
  const { t } = useLanguage();
  const r = t.ui.recoveryPage;
  const redFlags = t.risksAndSafety.emergencyItems as unknown as string[];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="text-base text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1.5 font-medium min-h-12 py-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {r.backToHome}
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-success-50 text-success-600 rounded-2xl mb-4">
          <Icon name="heart" className="w-7 h-7" />
        </span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{r.title}</h1>
        <p className="text-lg text-neutral-600 font-medium">{r.subtitle}</p>
      </div>

      {/* What's normal */}
      <div className="bg-white rounded-2xl border-2 border-success-200 p-6 sm:p-7 mb-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 bg-success-500 text-white rounded-xl flex items-center justify-center">
            <Icon name="checkCircle" className="w-5 h-5" />
          </span>
          <h2 className="font-heading text-xl font-bold text-success-700">{r.normalHeading}</h2>
        </div>
        <ul className="space-y-3">
          {(r.normalItems as unknown as string[]).map((item, i) => (
            <li key={i} className="flex gap-3 text-base text-neutral-700 leading-relaxed">
              <span className="text-success-500 flex-shrink-0 mt-0.5">
                <Icon name="checkCircle" className="w-5 h-5" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Eat / drive / back to normal */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 mb-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
            <Icon name="sun" className="w-5 h-5" />
          </span>
          <h2 className="font-heading text-xl font-bold text-neutral-800">{r.eatHeading}</h2>
        </div>
        <ul className="space-y-3">
          {(r.eatItems as unknown as string[]).map((item, i) => (
            <li key={i} className="flex gap-3 text-base text-neutral-700 leading-relaxed">
              <span className="text-brand-500 flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 mb-6 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
            <Icon name="clipboard" className="w-5 h-5" />
          </span>
          <h2 className="font-heading text-xl font-bold text-neutral-800">{r.resultsHeading}</h2>
        </div>
        <p className="text-base text-neutral-700 leading-relaxed">{r.resultsText}</p>
      </div>

      {/* Red flags — the safety block */}
      <div className="rounded-2xl border-4 border-restrict-500 bg-restrict-50 p-6 sm:p-7 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-11 h-11 bg-restrict-500 text-white rounded-xl flex items-center justify-center">
            <Icon name="alert" className="w-6 h-6" />
          </span>
          <h2 className="font-heading text-xl font-bold text-restrict-600">{r.redFlagsHeading}</h2>
        </div>
        <ul className="space-y-3 mb-5">
          {redFlags.map((item, i) => (
            <li key={i} className="flex gap-3 text-base text-neutral-800 font-medium leading-relaxed">
              <span className="text-restrict-500 flex-shrink-0 mt-0.5">
                <Icon name="alert" className="w-5 h-5" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base text-neutral-700 mb-4 leading-relaxed">{r.callLine}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:811"
            className="flex-1 inline-flex items-center justify-center gap-2.5 bg-brand-600 text-white px-6 py-4 min-h-12 rounded-xl font-bold text-lg hover:bg-brand-700 transition-colors"
          >
            <Icon name="phone" className="w-6 h-6" />
            {r.call811}
          </a>
        </div>
        <p className="text-base font-semibold text-restrict-600 mt-4">{r.call911}</p>
      </div>

      <div className="mb-10">
        <FeedbackWidget />
      </div>
    </div>
  );
}
