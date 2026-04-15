"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

const badgeStyles: Record<string, string> = {
  warning: "bg-warning-100 text-warning-700",
  restrict: "bg-restrict-100 text-restrict-600",
  brand: "bg-brand-100 text-brand-700",
};

export default function RisksAndSafety() {
  const { t } = useLanguage();
  const rs = t.risksAndSafety;
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        {t.ui.common.backToHome}
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl text-3xl mb-4">🛡️</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{rs.pageTitle}</h1>
        <p className="text-lg text-neutral-500 font-medium">{rs.pageSubtitle}</p>
      </div>

      {/* Safety context */}
      <div className="bg-success-50 border border-success-200 rounded-2xl p-6 sm:p-8 mb-10">
        <div className="flex gap-3 items-start">
          <span className="text-2xl flex-shrink-0">✅</span>
          <div>
            <h3 className="font-heading font-semibold text-success-700 mb-2">{rs.safetyHeading}</h3>
            <p className="text-neutral-700 leading-relaxed">
              {rs.safetyText}
            </p>
          </div>
        </div>
      </div>

      {/* Risk statistics */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-6 flex items-center gap-3">
          <span className="text-2xl">📊</span>
          {rs.statsHeading}
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {rs.stats.map((stat, i) => (
              <div key={i} className="text-center bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <p className="text-3xl font-bold text-brand-600 mb-1">{stat.value}</p>
                <p className="text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-500 leading-relaxed">
            {rs.statsNote}
          </p>
        </div>
      </div>

      {/* Specific risks */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-6 flex items-center gap-3">
          <span className="text-2xl">📋</span>
          {rs.specificRisksHeading}
        </h2>
        <div className="space-y-6">
          {rs.risks.map((risk, i) => (
            <div key={i} className={i > 0 ? "border-t border-neutral-100 pt-6" : ""}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${badgeStyles[risk.badgeColor] || badgeStyles.brand}`}>{risk.badge}</span>
                <h3 className="font-heading font-semibold text-neutral-800">{risk.heading}</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed text-sm">{risk.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bowel prep risks */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
          <span className="text-2xl">💧</span>
          {rs.prepRisksHeading}
        </h2>
        <div className="text-neutral-600 leading-relaxed space-y-4 text-sm">
          <p>{rs.prepRisksIntro}</p>
          <ul className="space-y-3">
            {rs.prepRisks.map((risk, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-warning-500 flex-shrink-0">•</span>
                <span><strong>{risk.heading}</strong> — {risk.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* When to call / emergency signs */}
      <div className="bg-restrict-50 border border-restrict-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-xl font-bold text-restrict-600 mb-4 flex items-center gap-3">
          <span className="text-2xl">🚨</span>
          {rs.emergencyHeading}
        </h2>
        <p className="text-neutral-700 text-sm mb-4">
          {rs.emergencyIntro}
        </p>
        <div className="space-y-3">
          {rs.emergencyItems.map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-restrict-500 rounded-full flex items-center justify-center text-white text-xs">!</span>
              <p className="text-sm text-neutral-700">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-white rounded-xl p-4 border border-restrict-200">
          <p className="text-sm text-neutral-700">
            {rs.emergencyBC}
          </p>
        </div>
      </div>

      {/* Reducing your risk */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-10">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
          <span className="text-2xl">✅</span>
          {rs.safetyMeasuresHeading}
        </h2>
        <div className="text-neutral-600 leading-relaxed space-y-3 text-sm">
          {rs.safetyMeasures.map((measure, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-success-500 flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <p>{measure}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
        <Link href="/comfort-and-anxiety" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          {t.ui.risksAndSafety.prevLink}
        </Link>
        <Link href="/faq" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          {t.ui.risksAndSafety.nextLink}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
