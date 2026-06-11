"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePlan } from "@/components/PlanContext";
import PlanHome from "@/components/PlanHome";
import PlanSetup from "@/components/PlanSetup";
import { Icon, SectionIcon, type IconName } from "@/components/Icons";

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

const trustIcons: IconName[] = ["flask", "stethoscope", "refresh"];

export default function Home() {
  const { t } = useLanguage();
  const { plan, ready } = usePlan();
  const [settingUp, setSettingUp] = useState(false);
  const setupRef = useRef<HTMLDivElement>(null);
  const hero = t.hero;
  const sections = t.sections;

  useEffect(() => {
    if (settingUp) setupRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [settingUp]);

  // Once a date is set, the home page IS the plan — education demotes to "Learn"
  if (ready && plan) {
    return <PlanHome />;
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,178,172,0.15),transparent_50%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
            <span className="text-base text-white/90 font-medium">{t.ui.home.badge}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-200 mb-4 font-medium leading-relaxed">
            {hero.subtitle}
          </p>
          <p className="text-lg text-brand-200 max-w-xl mx-auto mb-10 leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setSettingUp(true)}
              className="inline-flex items-center justify-center gap-2.5 bg-white text-brand-700 px-8 py-4 min-h-12 rounded-xl font-semibold text-lg hover:bg-brand-50 transition-colors shadow-lg shadow-brand-900/30"
            >
              <Icon name="calendarCheck" className="w-5 h-5" />
              {t.ui.home.ctaPlan}
            </button>
            <Link
              href="/what-is-colonoscopy"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 min-h-12 rounded-xl font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              {t.ui.home.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* Plan setup — revealed by the hero CTA */}
      {settingUp && (
        <section ref={setupRef} className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 scroll-mt-20">
          <PlanSetup onDone={() => setSettingUp(false)} />
        </section>
      )}

      {/* Section Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-neutral-800 mb-3">
            {t.ui.home.sectionHeading}
          </h2>
          <p className="text-lg text-neutral-600 max-w-lg mx-auto">
            {t.ui.home.sectionSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sections.map((section: { id: string; title: string; subtitle: string; icon: string; color: string; summary: string }) => {
            const colors = colorMap[section.color] || colorMap.teal;
            return (
              <Link
                key={section.id}
                href={`/${section.id}`}
                className={`group block p-5 rounded-2xl border-2 transition-all duration-200 ${colors.card}`}
              >
                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${colors.icon}`}>
                  <SectionIcon id={section.id} className="w-6 h-6" />
                </span>
                <h3 className="font-heading font-semibold text-neutral-800 text-lg mb-1.5 group-hover:text-brand-700 transition-colors">
                  {section.title}
                </h3>
                <p className="text-base text-neutral-600 mb-3 font-medium">{section.subtitle}</p>
                <p className="text-base text-neutral-600 leading-relaxed">
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
              {t.ui.home.trustHeading}
            </h2>
            <p className="text-lg text-neutral-600 max-w-lg mx-auto">
              {t.ui.home.trustSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.ui.home.trustPoints.map((text: string, i: number) => (
              <div key={i} className="flex gap-4 items-start p-5 rounded-xl bg-neutral-50 border border-neutral-100">
                <span className="flex-shrink-0 mt-0.5 w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
                  <Icon name={trustIcons[i]} className="w-5 h-5" />
                </span>
                <p className="text-base text-neutral-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-neutral-500 font-medium">
            <span>{t.ui.home.cagGuidelines}</span>
            <span className="text-neutral-300">|</span>
            <span>{t.ui.home.bcCancerScreening}</span>
            <span className="text-neutral-300">|</span>
            <span>{t.ui.home.lastUpdated}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
