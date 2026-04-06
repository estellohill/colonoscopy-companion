import Link from "next/link";
import { hero, sections } from "@/content";

const colorMap: Record<string, { card: string; icon: string }> = {
  teal: {
    card: "bg-white border-neutral-200 hover:border-teal-400 hover:shadow-lg",
    icon: "bg-teal-50 text-teal-600",
  },
  blue: {
    card: "bg-white border-neutral-200 hover:border-brand-400 hover:shadow-lg",
    icon: "bg-brand-50 text-brand-600",
  },
  indigo: {
    card: "bg-white border-neutral-200 hover:border-brand-400 hover:shadow-lg",
    icon: "bg-brand-50 text-brand-600",
  },
  emerald: {
    card: "bg-white border-neutral-200 hover:border-success-500 hover:shadow-lg",
    icon: "bg-success-50 text-success-600",
  },
  sky: {
    card: "bg-white border-neutral-200 hover:border-brand-300 hover:shadow-lg",
    icon: "bg-brand-50 text-brand-500",
  },
  amber: {
    card: "bg-white border-neutral-200 hover:border-warning-400 hover:shadow-lg",
    icon: "bg-warning-50 text-warning-600",
  },
};

const trustPoints = [
  { icon: "🔬", text: "Evidence-based content from current CAG and BC Cancer guidelines" },
  { icon: "👨‍⚕️", text: "Created and reviewed by a Canadian gastroenterologist" },
  { icon: "🔄", text: "Regularly updated to reflect the latest screening recommendations" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,178,172,0.15),transparent_50%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Free patient education tool</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-200 mb-4 font-medium leading-relaxed">
            {hero.subtitle}
          </p>
          <p className="text-brand-300 max-w-xl mx-auto mb-10 leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/prep-instructions"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-brand-50 transition-colors shadow-lg shadow-brand-900/30"
            >
              Go to Prep Guide
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/what-is-colonoscopy"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Learn the Basics
            </Link>
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-neutral-800 mb-3">
            Everything You Need to Know
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            From understanding the procedure to preparing for it — clear, step-by-step guidance for every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sections.map((section) => {
            const colors = colorMap[section.color] || colorMap.teal;
            return (
              <Link
                key={section.id}
                href={`/${section.id}`}
                className={`group block p-5 rounded-2xl border-2 transition-all duration-200 ${colors.card}`}
              >
                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4 ${colors.icon}`}>
                  {section.icon}
                </span>
                <h3 className="font-heading font-semibold text-neutral-800 text-lg mb-1.5 group-hover:text-brand-700 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-3 font-medium">{section.subtitle}</p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {section.summary}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-white border-y border-neutral-200 py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-3">
              Evidence-Based Information You Can Trust
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto">
              Built on current Canadian guidelines to give you accurate, reliable information about your procedure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div key={point.text} className="flex gap-4 items-start p-5 rounded-xl bg-neutral-50 border border-neutral-100">
                <span className="text-2xl flex-shrink-0 mt-0.5">{point.icon}</span>
                <p className="text-sm text-neutral-600 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs text-neutral-400 font-medium">
            <span>CAG Guidelines</span>
            <span className="text-neutral-300">|</span>
            <span>BC Cancer Screening Program</span>
            <span className="text-neutral-300">|</span>
            <span>Last Updated: April 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}
