import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Risks & Safety — Understanding Colonoscopy Safety",
  description:
    "Colonoscopy is one of the safest procedures in medicine. Understand the rare risks, how they're managed, and the warning signs to watch for after your procedure.",
};

export default function RisksAndSafety() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        Back to Home
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl text-3xl mb-4">🛡️</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">Risks & Safety</h1>
        <p className="text-lg text-neutral-500 font-medium">Understanding colonoscopy safety and rare complications</p>
      </div>

      {/* Safety context */}
      <div className="bg-success-50 border border-success-200 rounded-2xl p-6 sm:p-8 mb-10">
        <div className="flex gap-3 items-start">
          <span className="text-2xl flex-shrink-0">✅</span>
          <div>
            <h3 className="font-heading font-semibold text-success-700 mb-2">Colonoscopy is very safe</h3>
            <p className="text-neutral-700 leading-relaxed">
              Colonoscopy is one of the most commonly performed and safest procedures in gastroenterology. Millions are performed every year in Canada and worldwide. Serious complications are rare, occurring in less than 1 in 1,000 screening colonoscopies. Your gastroenterologist will discuss the specific risks with you before the procedure.
            </p>
          </div>
        </div>
      </div>

      {/* Risk statistics */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-6 flex items-center gap-3">
          <span className="text-2xl">📊</span>
          Complication Rates in Perspective
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="text-center bg-neutral-50 rounded-xl p-5 border border-neutral-200">
              <p className="text-3xl font-bold text-brand-600 mb-1">99.9%</p>
              <p className="text-sm text-neutral-500">of screening colonoscopies have no serious complications</p>
            </div>
            <div className="text-center bg-neutral-50 rounded-xl p-5 border border-neutral-200">
              <p className="text-3xl font-bold text-brand-600 mb-1">&lt;0.1%</p>
              <p className="text-sm text-neutral-500">risk of perforation (a hole in the colon wall)</p>
            </div>
            <div className="text-center bg-neutral-50 rounded-xl p-5 border border-neutral-200">
              <p className="text-3xl font-bold text-brand-600 mb-1">0.1-0.6%</p>
              <p className="text-sm text-neutral-500">risk of significant bleeding after polyp removal</p>
            </div>
          </div>
          <p className="text-sm text-neutral-500 leading-relaxed">
            To put this in perspective: the lifetime risk of developing colorectal cancer without screening is approximately 4-5%. The small risks of colonoscopy are far outweighed by the cancer prevention benefit.
          </p>
        </div>
      </div>

      {/* Specific risks */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-6 flex items-center gap-3">
          <span className="text-2xl">📋</span>
          Understanding Specific Risks
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 bg-warning-100 text-warning-700 rounded-full font-semibold">Uncommon</span>
              <h3 className="font-heading font-semibold text-neutral-800">Bleeding</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm">Minor bleeding can occur after polyp removal and usually stops on its own. Significant bleeding requiring intervention occurs in about 0.1-0.6% of cases where polyps are removed. Risk is higher with larger polyps or if you take blood-thinning medications. A small amount of blood in your first bowel movement after the procedure is normal.</p>
          </div>

          <div className="border-t border-neutral-100 pt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 bg-restrict-100 text-restrict-600 rounded-full font-semibold">Rare</span>
              <h3 className="font-heading font-semibold text-neutral-800">Perforation</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm">A perforation (small tear or hole in the colon wall) is the most serious but rarest complication, occurring in less than 1 in 1,000 screening colonoscopies. Risk is slightly higher when polyps are removed. If it occurs, it can usually be treated with antibiotics and bowel rest, but may rarely require surgery. This is why it&apos;s important to report severe abdominal pain after the procedure.</p>
          </div>

          <div className="border-t border-neutral-100 pt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 bg-warning-100 text-warning-700 rounded-full font-semibold">Uncommon</span>
              <h3 className="font-heading font-semibold text-neutral-800">Post-Polypectomy Syndrome</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm">After removal of a large polyp, you may develop localized abdominal pain, low-grade fever, and an elevated white blood cell count. This happens when there is thermal injury to the colon wall without a full-thickness tear. It typically resolves with antibiotics and rest — no surgery needed.</p>
          </div>

          <div className="border-t border-neutral-100 pt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 bg-brand-100 text-brand-700 rounded-full font-semibold">Low Risk</span>
              <h3 className="font-heading font-semibold text-neutral-800">Sedation-Related Risks</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm">Sedation medications can very rarely cause breathing problems, changes in heart rate, or allergic reactions. Your vital signs are continuously monitored throughout the procedure by a dedicated team member. Patients with sleep apnea, severe lung or heart disease, or obesity may have slightly higher sedation risk — let your doctor know about these conditions.</p>
          </div>

          <div className="border-t border-neutral-100 pt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 bg-brand-100 text-brand-700 rounded-full font-semibold">Very Rare</span>
              <h3 className="font-heading font-semibold text-neutral-800">Infection</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm">The risk of infection from a colonoscopy is extremely low. Colonoscopes undergo rigorous high-level disinfection or sterilization between procedures, following strict national and provincial protocols. Report any fever above 38.5°C (101°F) after the procedure to your doctor.</p>
          </div>

          <div className="border-t border-neutral-100 pt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 bg-warning-100 text-warning-700 rounded-full font-semibold">Uncommon</span>
              <h3 className="font-heading font-semibold text-neutral-800">Incomplete Examination</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm">Occasionally, the colonoscope cannot reach the beginning of the colon (cecum) due to anatomical factors, adhesions from prior surgery, or inadequate bowel preparation. If this happens, your doctor may recommend a repeat procedure or an alternative test like CT colonography. This is not a complication per se, but it means the screening may need to be completed another way.</p>
          </div>
        </div>
      </div>

      {/* Bowel prep risks */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
          <span className="text-2xl">💧</span>
          Bowel Preparation Risks
        </h2>
        <div className="text-neutral-600 leading-relaxed space-y-4 text-sm">
          <p>The bowel preparation itself carries small risks that are important to understand:</p>
          <ul className="space-y-3">
            <li className="flex gap-2"><span className="text-warning-500 flex-shrink-0">•</span><span><strong>Dehydration</strong> — The prep causes significant fluid loss. Drink plenty of clear fluids throughout. Signs of dehydration include dizziness, dry mouth, and dark urine.</span></li>
            <li className="flex gap-2"><span className="text-warning-500 flex-shrink-0">•</span><span><strong>Electrolyte imbalance</strong> — Drink a variety of fluids (not just water) to replace electrolytes. Sports drinks, clear broth, and clear juices help maintain balance.</span></li>
            <li className="flex gap-2"><span className="text-warning-500 flex-shrink-0">•</span><span><strong>Nausea/vomiting</strong> — Some patients feel nauseated during prep. Drinking slowly, chilling the solution, and taking breaks between glasses can help. If persistent vomiting prevents you from completing the prep, call your doctor.</span></li>
            <li className="flex gap-2"><span className="text-warning-500 flex-shrink-0">•</span><span><strong>Kidney concerns</strong> — Certain prep solutions (particularly sodium phosphate-based) are not recommended for patients with kidney disease. Your doctor chooses the safest prep for your health profile.</span></li>
          </ul>
        </div>
      </div>

      {/* When to call / emergency signs */}
      <div className="bg-restrict-50 border border-restrict-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-xl font-bold text-restrict-600 mb-4 flex items-center gap-3">
          <span className="text-2xl">🚨</span>
          When to Seek Medical Attention After Your Procedure
        </h2>
        <p className="text-neutral-700 text-sm mb-4">
          Contact your doctor or go to the emergency department if you experience any of the following after your colonoscopy:
        </p>
        <div className="space-y-3">
          {[
            "Severe or worsening abdominal pain (not just mild bloating)",
            "Heavy rectal bleeding (more than a tablespoon of bright red blood)",
            "Persistent bleeding that doesn't stop",
            "Fever above 38.5°C (101°F)",
            "Severe nausea or vomiting",
            "Inability to pass gas or have a bowel movement for more than 24 hours after procedure",
            "Chest pain, difficulty breathing, or fainting",
            "Abdominal swelling or firmness",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-restrict-500 rounded-full flex items-center justify-center text-white text-xs">!</span>
              <p className="text-sm text-neutral-700">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-white rounded-xl p-4 border border-restrict-200">
          <p className="text-sm text-neutral-700">
            <strong>In BC:</strong> If you need urgent advice, call <strong>811 (HealthLink BC)</strong> to speak with a registered nurse 24/7. For emergencies, call <strong>911</strong> or go to your nearest emergency department.
          </p>
        </div>
      </div>

      {/* Reducing your risk */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-10">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
          <span className="text-2xl">✅</span>
          How We Keep You Safe
        </h2>
        <div className="text-neutral-600 leading-relaxed space-y-3 text-sm">
          <div className="flex gap-3">
            <span className="text-success-500 flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <p><strong>Board-certified gastroenterologists</strong> with specialized training and ongoing quality monitoring</p>
          </div>
          <div className="flex gap-3">
            <span className="text-success-500 flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <p><strong>Continuous vital sign monitoring</strong> — oxygen, heart rate, blood pressure throughout the procedure</p>
          </div>
          <div className="flex gap-3">
            <span className="text-success-500 flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <p><strong>National safety standards</strong> for colonoscope reprocessing and disinfection</p>
          </div>
          <div className="flex gap-3">
            <span className="text-success-500 flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <p><strong>Quality metrics tracked</strong> — including cecal intubation rate, adenoma detection rate, and complication rates</p>
          </div>
          <div className="flex gap-3">
            <span className="text-success-500 flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <p><strong>Pre-procedure assessment</strong> — your health history, medications, and risk factors are reviewed before the procedure to ensure safety</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
        <Link href="/comfort-and-anxiety" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Comfort & Anxiety
        </Link>
        <Link href="/faq" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          FAQ
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
