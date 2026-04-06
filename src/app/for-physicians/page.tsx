import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Healthcare Providers",
  description:
    "Information for physicians and healthcare teams about Colonoscopy Companion — an interactive, evidence-based patient education tool for colonoscopy preparation.",
};

export default function ForPhysicians() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="text-sm text-brand-600 hover:text-brand-700 mb-8 inline-flex items-center gap-1 font-medium"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <div className="mb-10">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl text-3xl mb-4">
          <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-2">
          For Healthcare Providers
        </h1>
        <p className="text-lg text-neutral-500 font-medium">
          About the Colonoscopy Companion project and how to use it in your practice
        </p>
      </div>

      {/* Project Overview */}
      <section className="rounded-2xl border border-neutral-200 shadow-sm bg-white p-6 sm:p-8 mb-6">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-3">
          Project Overview
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-3">
          Colonoscopy Companion is a free, web-based patient education tool designed to replace
          outdated paper handouts with interactive, evidence-based content for colonoscopy
          preparation.
        </p>
        <p className="text-neutral-600 leading-relaxed">
          Patients receive a link to{" "}
          <span className="font-semibold text-brand-600">colonoscopycompanion.ca</span> and can
          access preparation instructions, educational content, and self-assessment tools from any
          device. The site is a progressive web app (PWA) that can be installed on a phone and works
          offline after first load.
        </p>
      </section>

      {/* What Makes This Different */}
      <section className="rounded-2xl border border-neutral-200 shadow-sm bg-white p-6 sm:p-8 mb-6">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-3">
          What Makes This Different From a Handout
        </h2>
        <ul className="space-y-2.5 text-neutral-600">
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
            Interactive prep checklists with progress tracking
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
            Personalized countdown timer to procedure day
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
            Visual bowel prep quality scale
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
            Questions-for-your-doctor printable checklist
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
            Anxiety management resources
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
            Mobile-friendly PWA (installable, offline-capable)
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
            Evidence-based content from CAG and BC Cancer guidelines
          </li>
        </ul>
      </section>

      {/* QI Study Design */}
      <section className="rounded-2xl border border-neutral-200 shadow-sm bg-white p-6 sm:p-8 mb-6">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-3">
          Proposed QI Study Design
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          A quality improvement study evaluating web-based patient education for colonoscopy
          preparation compared to standard paper-based education.
        </p>
        <div className="space-y-3 text-neutral-600 text-sm">
          <div className="rounded-xl bg-neutral-50 p-4">
            <span className="font-semibold text-neutral-700">Target population:</span>{" "}
            Patients undergoing their 2nd or subsequent colonoscopy who previously received
            non-web-based education only
          </div>
          <div className="rounded-xl bg-neutral-50 p-4">
            <span className="font-semibold text-neutral-700">Intervention:</span>{" "}
            Provide colonoscopycompanion.ca link via appointment confirmation text or email
          </div>
          <div className="rounded-xl bg-neutral-50 p-4">
            <span className="font-semibold text-neutral-700">Comparator:</span>{" "}
            Prior colonoscopy experience with standard paper handout (historical self-control)
          </div>
          <div className="rounded-xl bg-neutral-50 p-4">
            <span className="font-semibold text-neutral-700">Outcomes:</span>{" "}
            Patient-reported prep confidence, prep quality scores, checklist engagement, and
            feedback ratings
          </div>
        </div>
      </section>

      {/* How to Disseminate */}
      <section className="rounded-2xl border border-neutral-200 shadow-sm bg-white p-6 sm:p-8 mb-6">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-3">
          How to Disseminate
        </h2>
        <ul className="space-y-2.5 text-neutral-600">
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
            <span>
              <span className="font-semibold text-neutral-700">QR code:</span>{" "}
              Available at{" "}
              <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded text-brand-600">
                /qr/qr-basic.svg
              </code>
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
            <span>
              <span className="font-semibold text-neutral-700">Direct URL:</span>{" "}
              <span className="text-brand-600 font-medium">colonoscopycompanion.ca</span>
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
            Can be included in appointment confirmation text or email
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
            Printable patient card available for clinic distribution
          </li>
        </ul>
      </section>

      {/* Metrics We Track */}
      <section className="rounded-2xl border border-neutral-200 shadow-sm bg-white p-6 sm:p-8 mb-6">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-3">
          Metrics We Track
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          GA4 analytics are configured to capture the following engagement data:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            "Page views",
            "Time on page",
            "Checklist completion rates",
            "Prep score selections",
            "FAQ engagement",
            "Feedback submissions",
          ].map((metric) => (
            <div
              key={metric}
              className="rounded-xl bg-neutral-50 border border-neutral-100 px-3 py-2.5 text-center text-neutral-700 font-medium"
            >
              {metric}
            </div>
          ))}
        </div>
      </section>

      {/* Future Directions */}
      <section className="rounded-2xl border border-neutral-200 shadow-sm bg-white p-6 sm:p-8 mb-6">
        <h2 className="font-heading text-xl font-semibold text-neutral-800 mb-3">
          Future Directions
        </h2>
        <ul className="space-y-2.5 text-neutral-600">
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-success-500 shrink-0" />
            Multilingual support
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-success-500 shrink-0" />
            EMR integration
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-success-500 shrink-0" />
            Expansion to other GI conditions (GI Companion platform already in development)
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-success-500 shrink-0" />
            Post-procedure outcome tracking
          </li>
        </ul>
      </section>

      {/* Attribution */}
      <div className="mt-12 pt-8 border-t border-neutral-200 text-center">
        <p className="text-sm text-neutral-400">
          Created by a gastroenterology fellow at the University of British Columbia
        </p>
      </div>
    </div>
  );
}
