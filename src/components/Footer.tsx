import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
                Colonoscopy Companion
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Helping patients understand and prepare for their colonoscopy with clear, evidence-based information.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/prep-instructions" className="text-white/60 hover:text-white transition-colors">Prep Guide</Link></li>
              <li><Link href="/what-to-expect" className="text-white/60 hover:text-white transition-colors">What to Expect</Link></li>
              <li><Link href="/comfort-and-anxiety" className="text-white/60 hover:text-white transition-colors">Comfort & Anxiety</Link></li>
              <li><Link href="/risks-and-safety" className="text-white/60 hover:text-white transition-colors">Risks & Safety</Link></li>
              <li><Link href="/faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/screening-guidelines" className="text-white/60 hover:text-white transition-colors">Screening Guidelines</Link></li>
              <li><Link href="/for-physicians" className="text-white/60 hover:text-white transition-colors">For Healthcare Providers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Important Notice</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Always follow the specific instructions provided by your gastroenterologist. If they differ from this guide, your doctor&apos;s instructions take priority.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="bg-warning-500/10 border border-warning-500/20 rounded-xl p-5 mb-6">
            <p className="text-xs text-warning-200 leading-relaxed">
              <strong className="text-warning-100">Medical Disclaimer:</strong> This website provides general educational information about colonoscopy and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
          <p className="text-xs text-white/40 text-center">
            &copy; {currentYear} Colonoscopy Companion. Created by a Canadian gastroenterologist. Last reviewed: April 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
