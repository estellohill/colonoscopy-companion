import type { Metadata } from "next";
import Link from "next/link";
import { getSection } from "@/content";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Colonoscopy FAQ",
  description:
    "Answers to common questions about colonoscopy: Will it hurt? Can I drive home? What about diabetes medications? Everything you need to know.",
};

export default function FAQ() {
  const section = getSection("faq");
  const { questions } = section.content;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        Back to Home
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-warning-50 rounded-2xl text-3xl mb-4">{section.icon}</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{section.title}</h1>
        <p className="text-lg text-neutral-500 font-medium">{section.subtitle}</p>
      </div>

      <FaqAccordion questions={questions} />

      <div className="bg-brand-50 rounded-2xl p-8 border border-brand-200 mt-12 text-center">
        <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </div>
        <h2 className="font-heading font-semibold text-brand-800 text-lg mb-2">Still have questions?</h2>
        <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
          Contact your gastroenterologist&apos;s office. They&apos;re happy to answer any questions
          specific to your situation and help you feel prepared.
        </p>
      </div>

      <div className="flex justify-between items-center pt-6 mt-8 border-t border-neutral-200">
        <Link href="/risks-and-safety" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Risks & Safety
        </Link>
        <Link href="/" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          Back to Home
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
