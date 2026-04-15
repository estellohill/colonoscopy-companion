"use client";

import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/i18n/LanguageContext";

export default function PrintButton() {
  const { t } = useLanguage();

  return (
    <button
      onClick={() => {
        trackEvent("print_initiated", { page: window.location.pathname });
        window.print();
      }}
      className="no-print inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-xl transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      {t.ui.printButton.label}
    </button>
  );
}
