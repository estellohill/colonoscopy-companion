import type { Metadata } from "next";
import Link from "next/link";
import { getSection } from "@/content";
import PolypDiagram from "@/components/PolypDiagram";

export const metadata: Metadata = {
  title: "Colon Cancer & Polyps",
  description:
    "Understand colon cancer, what polyps are, and why finding them early through colonoscopy screening can prevent cancer. Canadian statistics included.",
};

const riskColors: Record<string, string> = {
  Low: "bg-success-100 text-success-700",
  Moderate: "bg-warning-100 text-warning-700",
  "Moderate to High": "bg-restrict-100 text-restrict-600",
};

export default function ColonCancerPolyps() {
  const section = getSection("colon-cancer-polyps");
  const { intro, stats, polyps, prevention } = section.content;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        Back to Home
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl text-3xl mb-4">{section.icon}</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">{section.title}</h1>
        <p className="text-lg text-neutral-500 font-medium">{section.subtitle}</p>
      </div>

      <p className="text-neutral-700 leading-relaxed text-lg mb-10">{intro}</p>

      {/* Stats */}
      <div className="bg-brand-600 rounded-2xl p-6 sm:p-8 mb-10 text-white shadow-lg">
        <h2 className="font-heading text-xl font-semibold mb-5">{stats.heading}</h2>
        <ul className="space-y-3">
          {stats.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-brand-100">
              <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs text-white mt-0.5">{i + 1}</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Polyps */}
      <div className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-2">{polyps.heading}</h2>
        <p className="text-neutral-600 mb-6 leading-relaxed">{polyps.intro}</p>
        <div className="space-y-4">
          {polyps.types.map((type) => (
            <div key={type.name} className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-heading font-semibold text-neutral-800">{type.name}</h3>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${riskColors[type.risk] || "bg-neutral-100 text-neutral-700"}`}>
                  {type.risk} risk
                </span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Polyp Visual Guide */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm mb-10">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-2 text-center">Visual Guide: Polyp Types</h2>
        <p className="text-sm text-neutral-500 text-center mb-6">How different polyp types appear on the colon wall</p>
        <PolypDiagram />
      </div>

      {/* Prevention */}
      <div className="bg-success-50 rounded-2xl p-6 sm:p-8 mb-10 border border-success-200">
        <div className="flex gap-3 items-start">
          <span className="flex-shrink-0 w-10 h-10 bg-success-500 rounded-xl flex items-center justify-center text-white text-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </span>
          <div>
            <h2 className="font-heading text-lg font-semibold text-success-700 mb-2">{prevention.heading}</h2>
            <p className="text-neutral-700 leading-relaxed">{prevention.text}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
        <Link href="/what-is-colonoscopy" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          What Is a Colonoscopy?
        </Link>
        <Link href="/screening-guidelines" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          Screening Guidelines
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
