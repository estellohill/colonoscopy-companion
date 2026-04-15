export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Colonoscopy Companion",
    description:
      "Clear, friendly, evidence-based information to help you understand and prepare for your colonoscopy.",
    url: "https://colonoscopycompanion.ca",
    inLanguage: "en-CA",
    about: {
      "@type": "MedicalProcedure",
      name: "Colonoscopy",
      procedureType: "https://schema.org/DiagnosticProcedure",
    },
    specialty: {
      "@type": "MedicalSpecialty",
      name: "Gastroenterology",
    },
    audience: {
      "@type": "PatientAudience",
    },
    lastReviewed: "2026-04-06",
    author: {
      "@type": "Person",
      name: "A Canadian Gastroenterologist",
      jobTitle: "Gastroenterology Fellow",
    },
    dateModified: "2026-04-06",
    citation: [
      {
        "@type": "CreativeWork",
        name: "Canadian Association of Gastroenterology Clinical Practice Guidelines",
        url: "https://www.cag-acg.org/clinical-practice-guidelines",
      },
      {
        "@type": "CreativeWork",
        name: "BC Cancer Colon Screening Program",
        url: "https://www.bccancer.bc.ca/screening/colon",
      },
    ],
    medicalAudience: {
      "@type": "PatientAudience",
      audienceType: "Patient",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
