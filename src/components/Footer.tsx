"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-900 text-white/80 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg text-white text-sm font-semibold">
                CC
              </span>
              <span className="font-heading font-semibold text-white text-lg">
                {t.hero.title}
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {t.ui.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t.ui.footer.quickLinks}</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/prep-instructions" className="text-white/60 hover:text-white transition-colors">{t.ui.footer.links.prepGuide}</Link></li>
              <li><Link href="/what-to-expect" className="text-white/60 hover:text-white transition-colors">{t.ui.footer.links.whatToExpect}</Link></li>
              <li><Link href="/comfort-and-anxiety" className="text-white/60 hover:text-white transition-colors">{t.ui.footer.links.comfortAnxiety}</Link></li>
              <li><Link href="/risks-and-safety" className="text-white/60 hover:text-white transition-colors">{t.ui.footer.links.risksSafety}</Link></li>
              <li><Link href="/faq" className="text-white/60 hover:text-white transition-colors">{t.ui.footer.links.faq}</Link></li>
              <li><Link href="/screening-guidelines" className="text-white/60 hover:text-white transition-colors">{t.ui.footer.links.screeningGuidelines}</Link></li>
              <li><Link href="/for-physicians" className="text-white/60 hover:text-white transition-colors">{t.ui.footer.links.forHealthcareProviders}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t.ui.footer.importantNotice}</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              {t.ui.footer.importantNoticeText}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="bg-warning-500/10 border border-warning-500/20 rounded-xl p-5 mb-6">
            <p className="text-xs text-warning-200 leading-relaxed">
              <strong className="text-warning-100">{t.ui.footer.disclaimer}</strong> {t.ui.footer.disclaimerText}
            </p>
          </div>
          <p className="text-xs text-white/40 text-center">
            &copy; {currentYear} {t.hero.title}. {t.ui.footer.createdBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
