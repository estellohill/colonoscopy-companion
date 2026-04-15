"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage, type LangCode } from "@/i18n/LanguageContext";

const languages: { code: LangCode; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "zh-HK", label: "廣東話", flag: "粤" },
  { code: "zh-CN", label: "普通话", flag: "中" },
  { code: "pa", label: "ਪੰਜਾਬੀ", flag: "PA" },
  { code: "hi", label: "हिन्दी", flag: "HI" },
];

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-neutral-500 hover:text-brand-700 hover:bg-brand-50 transition-colors"
        aria-label="Select language"
        aria-expanded={open}
      >
        {/* Globe icon */}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
        </svg>
        <span className="hidden sm:inline">{current.label}</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-lg border border-neutral-200 py-1 z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${
                l.code === lang
                  ? "bg-brand-50 text-brand-700 font-semibold"
                  : "text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              <span className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-500 flex-shrink-0">
                {l.flag}
              </span>
              {l.label}
              {l.code === lang && (
                <svg className="w-4 h-4 ml-auto text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
