"use client";

import { useState, useEffect, useCallback } from "react";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/i18n/LanguageContext";

const categoryIcons = [
  <svg key="before" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>,
  <svg key="during" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="after" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

const STORAGE_KEY_QUESTIONS = "doctor-questions";
const STORAGE_KEY_NOTES = "doctor-notes";

export default function DoctorQuestions() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState("");
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  const categories = (t.doctorQuestionCategories as unknown as Array<{ title: string; questions: string[] }>).map(
    (cat, i) => ({
      ...cat,
      icon: categoryIcons[i],
    })
  );

  useEffect(() => {
    const savedQuestions = localStorage.getItem(STORAGE_KEY_QUESTIONS);
    if (savedQuestions) {
      setChecked(JSON.parse(savedQuestions));
    }
    const savedNotes = localStorage.getItem(STORAGE_KEY_NOTES);
    if (savedNotes) {
      setNotes(savedNotes);
    }
    setMounted(true);
  }, []);

  const toggle = useCallback((key: string) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem(STORAGE_KEY_QUESTIONS, JSON.stringify(next));
      if (next[key]) trackEvent("doctor_question_checked", { question: key });
      return next;
    });
  }, []);

  const handleNotesChange = useCallback((value: string) => {
    setNotes(value);
    localStorage.setItem(STORAGE_KEY_NOTES, value);
  }, []);

  const clearAll = useCallback(() => {
    setChecked({});
    setNotes("");
    localStorage.removeItem(STORAGE_KEY_QUESTIONS);
    localStorage.removeItem(STORAGE_KEY_NOTES);
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const totalQuestions = categories.reduce((sum, cat) => sum + cat.questions.length, 0);

  if (!mounted) return null;

  return (
    <>
      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #doctor-questions-printable,
          #doctor-questions-printable * {
            visibility: visible;
          }
          #doctor-questions-printable {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 24px;
          }
          #doctor-questions-printable button {
            display: none !important;
          }
          #doctor-questions-printable .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div id="doctor-questions-printable" className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900">
            {t.ui.doctorQuestions.heading}
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base">
            {t.ui.doctorQuestions.subtitle}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between no-print">
          <span className="text-sm text-neutral-500">
            {(t.ui.doctorQuestions.selectedOf as (checked: number, total: number) => string)(checkedCount, totalQuestions)}
          </span>
          <div className="flex gap-2">
            <button
              onClick={clearAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              {t.ui.doctorQuestions.clearAll}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              {t.ui.doctorQuestions.printList}
            </button>
          </div>
        </div>

        {/* Question categories */}
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-brand-600">{category.icon}</span>
              <h3 className="font-heading font-semibold text-neutral-800">
                {category.title}
              </h3>
            </div>

            <ul className="space-y-1">
              {category.questions.map((question) => {
                const key = `${category.title}::${question}`;
                const isChecked = !!checked[key];

                return (
                  <li key={question}>
                    <button
                      onClick={() => toggle(key)}
                      className="flex items-start gap-3 w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 transition-colors group"
                    >
                      <span
                        className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                          isChecked
                            ? "bg-brand-500 border-brand-500 text-white scale-105"
                            : "border-neutral-300 group-hover:border-brand-400"
                        }`}
                      >
                        {isChecked && (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`text-sm leading-relaxed transition-colors ${
                          isChecked ? "text-neutral-400 line-through" : "text-neutral-700"
                        }`}
                      >
                        {question}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {/* Notes section */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-brand-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </span>
            <h3 className="font-heading font-semibold text-neutral-800">
              {t.ui.doctorQuestions.yourNotes}
            </h3>
          </div>
          <textarea
            value={notes}
            onChange={(e) => handleNotesChange(e.target.value)}
            placeholder={t.ui.doctorQuestions.notesPlaceholder}
            rows={4}
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-y transition-colors"
          />
        </div>
      </div>
    </>
  );
}
