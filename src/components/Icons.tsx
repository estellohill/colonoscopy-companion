// Drawn SVG icons replacing emoji throughout the app. Emoji render
// inconsistently across devices, can't be recolored for contrast, and read
// as informal to the 50–75 demographic. All icons are stroke-based and
// inherit currentColor.

const PATHS: Record<string, React.ReactNode> = {
  // Magnifier over a circle — "what is a colonoscopy"
  scope: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path strokeLinecap="round" d="M15.5 15.5L21 21" />
      <path strokeLinecap="round" d="M8 10.5a2.5 2.5 0 012.5-2.5" />
    </>
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7 3v5c0 4.6-3 8.7-7 10-4-1.3-7-5.4-7-10V6l7-3z"
    />
  ),
  shieldCheck: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v5c0 4.6-3 8.7-7 10-4-1.3-7-5.4-7-10V6l7-3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path strokeLinecap="round" d="M9 4.5V3h6v1.5" />
      <path strokeLinecap="round" d="M9 10h6M9 14h6M9 18h3" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2.5 2.5 4.5-5" />
    </>
  ),
  hospital: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V7l8-4 8 4v14" />
      <path strokeLinecap="round" d="M2 21h20" />
      <path strokeLinecap="round" d="M12 9v6M9 12h6" />
    </>
  ),
  chat: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8-1.1 0-2.1-.2-3.1-.5L4 21l1.6-4C4.6 15.6 4 13.9 4 12c0-4.4 4-8 9-8s8 3.6 8 8z"
    />
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M9.5 9.5a2.5 2.5 0 114 2c-.8.6-1.5 1.1-1.5 2.2" />
      <path strokeLinecap="round" d="M12 17h.01" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M8 3v4m8-4v4M3 10h18" />
    </>
  ),
  calendarCheck: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M8 3v4m8-4v4M3 10h18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15.5l2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
    </>
  ),
  cup: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l-1.5 18h-9L6 3z" />
      <path strokeLinecap="round" d="M6.7 11h10.6" />
    </>
  ),
  pill: (
    <g transform="rotate(-30 12 12)">
      <rect x="3.5" y="8.75" width="17" height="6.5" rx="3.25" />
      <path strokeLinecap="round" d="M12 8.75v6.5" />
    </g>
  ),
  sachet: (
    <>
      <rect x="6" y="4" width="12" height="16" rx="1.5" />
      <path strokeLinecap="round" d="M6 8h12" />
      <path strokeLinecap="round" d="M10 13.5l1.5 1.5 2.5-3" />
    </>
  ),
  jug: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6v3.5l2 3V20a1 1 0 01-1 1H8a1 1 0 01-1-1V9.5l2-3V3z" />
      <path strokeLinecap="round" d="M7 13h10" />
    </>
  ),
  alert: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v4m0 4h.01M10.3 3.9L2.8 17a2 2 0 001.7 3h15a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"
    />
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h2.2a1 1 0 011 .8l.7 3.6a1 1 0 01-.5 1L6.6 9.5a13 13 0 007.9 7.9l1.1-1.8a1 1 0 011-.5l3.6.7a1 1 0 01.8 1V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z"
    />
  ),
  share: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.7 13.3C8.9 12.9 9 12.5 9 12c0-.5-.1-.9-.3-1.3m0 2.6a3 3 0 110-2.6m0 2.6l6.6 3.3m-6.6-6l6.6-3.3m0 0a3 3 0 105.4-2.7 3 3 0 00-5.4 2.7zm0 9.4a3 3 0 105.4 2.7 3 3 0 00-5.4-2.7z"
    />
  ),
  heart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.5S4 15 4 9.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 3.5c0 5.5-8 11-8 11z"
    />
  ),
  flask: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 3v6l-5.3 8.8A2 2 0 006.4 21h11.2a2 2 0 001.7-3.2L14 9V3" />
      <path strokeLinecap="round" d="M8.5 3h7M7.5 15h9" />
    </>
  ),
  stethoscope: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v6a5 5 0 0010 0V3" />
      <path strokeLinecap="round" d="M10 14v2.5a4.5 4.5 0 009 0V14" />
      <circle cx="19" cy="11.5" r="2" />
    </>
  ),
  refresh: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4v5h5M20 20v-5h-5M5.6 9A8 8 0 0119 6.7M18.4 15A8 8 0 015 17.3"
    />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2.5v2.5m0 14v2.5M2.5 12h2.5m14 0h2.5M5 5l1.8 1.8M17.2 17.2L19 19M19 5l-1.8 1.8M6.8 17.2L5 19" />
    </>
  ),
  bed: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v11m0-4h18v4m-18-7h7v3" />
      <circle cx="6.5" cy="10" r="1" />
    </>
  ),
};

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  className = "w-6 h-6",
  strokeWidth = 1.8,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      {PATHS[name] || PATHS.question}
    </svg>
  );
}

/** Section id → icon, replacing the emoji in translations/sections.json. */
export const SECTION_ICONS: Record<string, IconName> = {
  "what-is-colonoscopy": "scope",
  "colon-cancer-polyps": "shieldCheck",
  "screening-guidelines": "clipboard",
  "prep-instructions": "checkCircle",
  "what-to-expect": "hospital",
  "comfort-and-anxiety": "chat",
  "risks-and-safety": "shield",
  faq: "question",
};

export function SectionIcon({ id, className }: { id: string; className?: string }) {
  return <Icon name={SECTION_ICONS[id] || "question"} className={className} />;
}
