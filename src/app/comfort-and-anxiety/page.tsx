import type { Metadata } from "next";
import Link from "next/link";
import DoctorQuestions from "@/components/DoctorQuestions";

export const metadata: Metadata = {
  title: "Comfort & Anxiety — Feeling Nervous About Your Colonoscopy?",
  description:
    "It's completely normal to feel anxious about a colonoscopy. Evidence-based strategies to manage anxiety, what to expect from sedation, and tips from patients who've been through it.",
};

export default function ComfortAndAnxiety() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        Back to Home
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-teal-50 rounded-2xl text-3xl mb-4">💬</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">Feeling Nervous? You&apos;re Not Alone</h1>
        <p className="text-lg text-neutral-500 font-medium">Managing anxiety about your colonoscopy</p>
      </div>

      {/* Validation box */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 sm:p-8 mb-10">
        <p className="text-neutral-700 leading-relaxed text-lg">
          It is completely normal to feel nervous about a colonoscopy. Studies show that <strong>up to 50% of patients</strong> report some anxiety before the procedure. The good news? Nearly all patients say afterward that it was much easier than they expected. The anticipation is almost always worse than the procedure itself.
        </p>
      </div>

      {/* What patients actually say */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
          <span className="text-2xl">💡</span>
          What Patients Actually Say Afterward
        </h2>
        <div className="space-y-4">
          <div className="bg-brand-50 rounded-xl p-4 border-l-4 border-brand-400">
            <p className="text-neutral-700 italic">&ldquo;I don&apos;t remember any of it. I fell asleep and woke up in recovery.&rdquo;</p>
            <p className="text-xs text-neutral-500 mt-1">— The most common thing patients say</p>
          </div>
          <div className="bg-brand-50 rounded-xl p-4 border-l-4 border-brand-400">
            <p className="text-neutral-700 italic">&ldquo;The prep was the hardest part. The actual procedure was nothing.&rdquo;</p>
            <p className="text-xs text-neutral-500 mt-1">— A very common experience</p>
          </div>
          <div className="bg-brand-50 rounded-xl p-4 border-l-4 border-brand-400">
            <p className="text-neutral-700 italic">&ldquo;I wish I hadn&apos;t put it off for so long. It really wasn&apos;t bad at all.&rdquo;</p>
            <p className="text-xs text-neutral-500 mt-1">— Frequently heard in recovery rooms</p>
          </div>
        </div>
      </div>

      {/* Common concerns addressed */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-6 flex items-center gap-3">
          <span className="text-2xl">🛡️</span>
          Addressing Common Concerns
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading font-semibold text-neutral-800 mb-2">&ldquo;Will I be awake during it?&rdquo;</h3>
            <p className="text-neutral-600 leading-relaxed">Most patients receive conscious sedation — you&apos;ll be in a deep, comfortable sleep-like state. The majority of patients have no memory of the procedure at all. You won&apos;t feel pain. The sedation takes effect within seconds of being given through your IV.</p>
          </div>
          <div className="border-t border-neutral-100 pt-6">
            <h3 className="font-heading font-semibold text-neutral-800 mb-2">&ldquo;What if I feel something?&rdquo;</h3>
            <p className="text-neutral-600 leading-relaxed">Your care team monitors you throughout the procedure and can adjust sedation at any time. If you show any sign of discomfort, additional medication is given immediately. The anesthesia and nursing team are right beside you the entire time.</p>
          </div>
          <div className="border-t border-neutral-100 pt-6">
            <h3 className="font-heading font-semibold text-neutral-800 mb-2">&ldquo;I&apos;m embarrassed about the procedure.&rdquo;</h3>
            <p className="text-neutral-600 leading-relaxed">This is extremely common and completely understandable. Remember: your GI team does this every day — often 10 or more procedures daily. To them, this is routine medicine. You will be covered with a gown and blanket, and your dignity is always respected. You will be asleep for the procedure itself.</p>
          </div>
          <div className="border-t border-neutral-100 pt-6">
            <h3 className="font-heading font-semibold text-neutral-800 mb-2">&ldquo;What if they find something bad?&rdquo;</h3>
            <p className="text-neutral-600 leading-relaxed">Finding polyps is actually a <em>good</em> outcome — it means your doctor caught them before they could become dangerous. Most polyps are benign and are removed during the procedure itself. Finding and removing polyps is the whole point of a colonoscopy: it <em>prevents</em> cancer. Even if something concerning is found, catching it early dramatically improves outcomes.</p>
          </div>
          <div className="border-t border-neutral-100 pt-6">
            <h3 className="font-heading font-semibold text-neutral-800 mb-2">&ldquo;I had a bad experience before / I have medical trauma.&rdquo;</h3>
            <p className="text-neutral-600 leading-relaxed">If you&apos;ve had a difficult past experience with medical procedures, please tell your care team. They can offer additional support, extra sedation, or other accommodations. You can ask for a nurse to hold your hand, explain every step, or simply provide reassurance. Your comfort matters — speak up.</p>
          </div>
        </div>
      </div>

      {/* Practical tips */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-6 flex items-center gap-3">
          <span className="text-2xl">🧘</span>
          Practical Tips for Managing Anxiety
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <h3 className="font-semibold text-neutral-800">Educate yourself</h3>
              <p className="text-sm text-neutral-600">Reading this guide is a great start. Understanding what will happen reduces fear of the unknown.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <h3 className="font-semibold text-neutral-800">Deep breathing</h3>
              <p className="text-sm text-neutral-600">Before the procedure, try box breathing: breathe in for 4 counts, hold for 4, out for 4, hold for 4. This activates your parasympathetic nervous system and physically calms anxiety.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <h3 className="font-semibold text-neutral-800">Talk to your doctor</h3>
              <p className="text-sm text-neutral-600">Let your care team know you&apos;re nervous. They deal with anxious patients every day and have strategies to help. Some doctors prescribe a mild anti-anxiety medication to take the morning of your procedure.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <h3 className="font-semibold text-neutral-800">Bring a support person</h3>
              <p className="text-sm text-neutral-600">You need someone to drive you home anyway — having a trusted person with you in the waiting area can help ease anxiety.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <h3 className="font-semibold text-neutral-800">Focus on why you&apos;re doing this</h3>
              <p className="text-sm text-neutral-600">A colonoscopy can prevent colon cancer. A 30-minute nap now could save your life. That&apos;s worth a bit of nervousness.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <h3 className="font-semibold text-neutral-800">Distract yourself during prep</h3>
              <p className="text-sm text-neutral-600">The prep day is the most uncomfortable part. Queue up your favorite shows, audiobooks, or podcasts. Many patients turn it into a &ldquo;couch day&rdquo; and get through it easily.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding sedation */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
          <span className="text-2xl">💉</span>
          Understanding Sedation
        </h2>
        <div className="text-neutral-600 leading-relaxed space-y-4">
          <p>Most colonoscopies in Canada use <strong>conscious sedation</strong> (also called moderate sedation or procedural sedation). Here&apos;s what this means:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-success-50 rounded-xl p-4 border border-success-200">
              <h3 className="font-semibold text-success-700 mb-2">What you&apos;ll experience</h3>
              <ul className="text-sm space-y-1.5 text-neutral-600">
                <li>• IV placed in your arm (brief pinch)</li>
                <li>• Feel drowsy within seconds</li>
                <li>• Most people fall asleep completely</li>
                <li>• No memory of the procedure</li>
                <li>• Wake up in recovery feeling rested</li>
              </ul>
            </div>
            <div className="bg-brand-50 rounded-xl p-4 border border-brand-200">
              <h3 className="font-semibold text-brand-700 mb-2">Medications typically used</h3>
              <ul className="text-sm space-y-1.5 text-neutral-600">
                <li>• <strong>Fentanyl</strong> — for pain (given before the procedure)</li>
                <li>• <strong>Midazolam (Versed)</strong> — for relaxation and amnesia</li>
                <li>• <strong>Propofol</strong> — a deeper sedation, used at some centres</li>
                <li>• Your vitals are monitored throughout</li>
              </ul>
            </div>
          </div>
          <p className="text-sm">Your oxygen levels, heart rate, and blood pressure are continuously monitored during the procedure. A nurse or anesthesia provider is dedicated to your sedation care throughout.</p>
        </div>
      </div>

      {/* Questions for your doctor */}
      <div className="mb-10">
        <DoctorQuestions />
      </div>

      {/* Success callout */}
      <div className="bg-success-50 border border-success-200 rounded-2xl p-6 sm:p-8 mb-10">
        <div className="flex gap-3 items-start">
          <span className="text-2xl flex-shrink-0">✅</span>
          <div>
            <h3 className="font-heading font-semibold text-success-700 mb-2">The bottom line</h3>
            <p className="text-neutral-700 leading-relaxed">
              A colonoscopy is one of the most effective cancer prevention tools in medicine. Millions are performed safely every year. The vast majority of patients say they wish they hadn&apos;t worried as much, and they&apos;re glad they did it. You&apos;ve got this.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
        <Link href="/what-to-expect" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          What to Expect
        </Link>
        <Link href="/risks-and-safety" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold">
          Risks & Safety
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
