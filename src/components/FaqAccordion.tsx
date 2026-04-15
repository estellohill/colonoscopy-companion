"use client";

import { trackEvent } from "@/lib/analytics";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ questions }: { questions: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {questions.map((item, i) => (
        <details
          key={i}
          className="group bg-white rounded-2xl border overflow-hidden shadow-sm transition-all duration-200 border-neutral-200 open:border-brand-300 open:shadow-md"
          onToggle={(e) => {
            if (e.currentTarget.open) {
              trackEvent("faq_question_opened", { question: item.q });
            }
          }}
        >
          <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer hover:bg-neutral-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
            <span className="font-heading font-semibold pr-4 transition-colors text-neutral-800 group-open:text-brand-700">
              {item.q}
            </span>
            <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 bg-neutral-100 text-neutral-400 group-open:bg-brand-100 group-open:text-brand-600">
              <svg
                className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
            <div className="border-t border-neutral-100 pt-4">
              <p className="text-neutral-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
