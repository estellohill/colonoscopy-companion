export default function ColonDiagram() {
  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
      <svg
        viewBox="0 0 500 520"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Anatomical diagram of the colon showing cecum, ascending colon, hepatic flexure, transverse colon, splenic flexure, descending colon, sigmoid colon, rectum, and appendix"
      >
        {/* Definitions */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#2B6CB0" />
          </marker>
          <filter id="softShadow" x="-2%" y="-2%" width="104%" height="104%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
            <feOffset dx="1" dy="1" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>
        </defs>

        {/* Background */}
        <rect width="500" height="520" fill="none" />

        {/* === COLON PATH === */}
        {/* Main colon outline - thick stroke for the tubular structure */}
        {/* Rectum */}
        <path
          d="M 270 480 Q 270 460, 265 445 Q 258 425, 250 410"
          fill="none"
          stroke="#718096"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
        />
        <path
          d="M 270 480 Q 270 460, 265 445 Q 258 425, 250 410"
          fill="none"
          stroke="#718096"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.08"
        />

        {/* Sigmoid colon */}
        <path
          d="M 250 410 Q 230 385, 200 375 Q 160 362, 150 340 Q 140 315, 170 295 Q 200 278, 220 290 Q 240 302, 230 325 Q 218 350, 185 355"
          fill="none"
          stroke="#718096"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
        />

        {/* Descending colon */}
        <path
          d="M 130 290 L 130 180"
          fill="none"
          stroke="#718096"
          strokeWidth="30"
          strokeLinecap="round"
          opacity="0.15"
        />

        {/* Splenic flexure */}
        <path
          d="M 130 180 Q 130 120, 170 105 Q 195 96, 220 100"
          fill="none"
          stroke="#718096"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
        />

        {/* Transverse colon */}
        <path
          d="M 220 100 Q 270 115, 310 120 Q 350 118, 380 105"
          fill="none"
          stroke="#718096"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
        />

        {/* Hepatic flexure */}
        <path
          d="M 380 105 Q 410 95, 420 120 Q 425 150, 420 180"
          fill="none"
          stroke="#718096"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
        />

        {/* Ascending colon */}
        <path
          d="M 420 180 L 420 310"
          fill="none"
          stroke="#718096"
          strokeWidth="30"
          strokeLinecap="round"
          opacity="0.15"
        />

        {/* Cecum */}
        <path
          d="M 420 310 Q 420 350, 410 370 Q 400 390, 385 395 Q 365 398, 355 385 Q 348 370, 355 350"
          fill="none"
          stroke="#718096"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
        />

        {/* === COLON INNER DETAIL LINES === */}
        {/* Rectum */}
        <path
          d="M 270 480 Q 270 460, 265 445 Q 258 425, 250 410"
          fill="none"
          stroke="#2B6CB0"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
          strokeDasharray="4 3"
        />

        {/* === COLON OUTLINE PATH (visible border) === */}
        {/* Rectum */}
        <path
          d="M 270 480 Q 270 460, 265 445 Q 258 425, 250 410"
          fill="none"
          stroke="#718096"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Sigmoid */}
        <path
          d="M 250 410 Q 230 385, 200 375 Q 160 362, 150 340 Q 140 315, 170 295 Q 200 278, 220 290 Q 240 302, 230 325 Q 218 350, 185 355"
          fill="none"
          stroke="#718096"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Connection: sigmoid to descending */}
        <path
          d="M 185 355 Q 155 358, 140 340 Q 128 320, 130 290"
          fill="none"
          stroke="#718096"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 185 355 Q 155 358, 140 340 Q 128 320, 130 290"
          fill="none"
          stroke="#718096"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
        />

        {/* Descending */}
        <path
          d="M 130 290 L 130 180"
          fill="none"
          stroke="#718096"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Splenic flexure */}
        <path
          d="M 130 180 Q 130 120, 170 105 Q 195 96, 220 100"
          fill="none"
          stroke="#718096"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Transverse */}
        <path
          d="M 220 100 Q 270 115, 310 120 Q 350 118, 380 105"
          fill="none"
          stroke="#718096"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Hepatic flexure */}
        <path
          d="M 380 105 Q 410 95, 420 120 Q 425 150, 420 180"
          fill="none"
          stroke="#718096"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Ascending */}
        <path
          d="M 420 180 L 420 310"
          fill="none"
          stroke="#718096"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Cecum */}
        <path
          d="M 420 310 Q 420 350, 410 370 Q 400 390, 385 395 Q 365 398, 355 385 Q 348 370, 355 350"
          fill="none"
          stroke="#718096"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* === HAUSTRA (colon segmentation marks) === */}
        {/* Ascending colon haustra */}
        {[200, 220, 240, 260, 280, 300].map((y) => (
          <line
            key={`asc-${y}`}
            x1="406"
            y1={y}
            x2="434"
            y2={y}
            stroke="#718096"
            strokeWidth="0.8"
            opacity="0.3"
          />
        ))}

        {/* Descending colon haustra */}
        {[200, 220, 240, 260, 280].map((y) => (
          <line
            key={`desc-${y}`}
            x1="116"
            y1={y}
            x2="144"
            y2={y}
            stroke="#718096"
            strokeWidth="0.8"
            opacity="0.3"
          />
        ))}

        {/* Transverse colon haustra */}
        {[240, 270, 300, 330, 360].map((x) => (
          <line
            key={`trans-${x}`}
            x1={x}
            y1="98"
            x2={x}
            y2="125"
            stroke="#718096"
            strokeWidth="0.8"
            opacity="0.3"
          />
        ))}

        {/* === APPENDIX === */}
        <path
          d="M 385 395 Q 395 420, 410 435 Q 420 442, 425 448"
          fill="none"
          stroke="#718096"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.25"
        />
        <path
          d="M 385 395 Q 395 420, 410 435 Q 420 442, 425 448"
          fill="none"
          stroke="#718096"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* === COLONOSCOPE ENTRY MARKER === */}
        <circle cx="270" cy="488" r="5" fill="#2B6CB0" opacity="0.9" />
        <circle cx="270" cy="488" r="8" fill="none" stroke="#2B6CB0" strokeWidth="1.5" opacity="0.5" />
        <line
          x1="282"
          y1="488"
          x2="310"
          y2="488"
          stroke="#2B6CB0"
          strokeWidth="1"
          markerEnd="url(#arrowhead)"
          opacity="0.7"
          strokeDasharray="3 2"
        />
        <text
          x="315"
          y="492"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10"
          fill="#2B6CB0"
          fontWeight="500"
        >
          Scope enters here
        </text>

        {/* === LABELS === */}
        {/* Cecum */}
        <text
          x="355"
          y="380"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fill="#38b2ac"
          fontWeight="600"
          textAnchor="end"
        >
          Cecum
        </text>
        <line x1="357" y1="377" x2="375" y2="380" stroke="#38b2ac" strokeWidth="0.8" opacity="0.6" />

        {/* Appendix */}
        <text
          x="445"
          y="452"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10"
          fill="#718096"
          fontWeight="500"
        >
          Appendix
        </text>
        <line x1="430" y1="448" x2="443" y2="450" stroke="#718096" strokeWidth="0.8" opacity="0.5" />

        {/* Ascending colon */}
        <text
          x="460"
          y="250"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fill="#38b2ac"
          fontWeight="600"
        >
          Ascending
        </text>
        <text
          x="460"
          y="263"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fill="#38b2ac"
          fontWeight="600"
        >
          Colon
        </text>

        {/* Hepatic flexure */}
        <text
          x="435"
          y="148"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10"
          fill="#38b2ac"
          fontWeight="500"
        >
          Hepatic
        </text>
        <text
          x="435"
          y="160"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10"
          fill="#38b2ac"
          fontWeight="500"
        >
          Flexure
        </text>

        {/* Transverse colon */}
        <text
          x="290"
          y="80"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fill="#38b2ac"
          fontWeight="600"
          textAnchor="middle"
        >
          Transverse Colon
        </text>
        <line x1="290" y1="84" x2="290" y2="98" stroke="#38b2ac" strokeWidth="0.8" opacity="0.5" />

        {/* Splenic flexure */}
        <text
          x="62"
          y="128"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10"
          fill="#38b2ac"
          fontWeight="500"
          textAnchor="start"
        >
          Splenic
        </text>
        <text
          x="62"
          y="140"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10"
          fill="#38b2ac"
          fontWeight="500"
          textAnchor="start"
        >
          Flexure
        </text>
        <line x1="100" y1="134" x2="125" y2="155" stroke="#38b2ac" strokeWidth="0.8" opacity="0.5" />

        {/* Descending colon */}
        <text
          x="50"
          y="240"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fill="#38b2ac"
          fontWeight="600"
          textAnchor="start"
        >
          Descending
        </text>
        <text
          x="50"
          y="253"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fill="#38b2ac"
          fontWeight="600"
          textAnchor="start"
        >
          Colon
        </text>

        {/* Sigmoid colon */}
        <text
          x="130"
          y="395"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fill="#38b2ac"
          fontWeight="600"
          textAnchor="start"
        >
          Sigmoid Colon
        </text>
        <line x1="195" y1="389" x2="200" y2="375" stroke="#38b2ac" strokeWidth="0.8" opacity="0.5" />

        {/* Rectum */}
        <text
          x="230"
          y="460"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fill="#38b2ac"
          fontWeight="600"
          textAnchor="end"
        >
          Rectum
        </text>
        <line x1="233" y1="457" x2="258" y2="452" stroke="#38b2ac" strokeWidth="0.8" opacity="0.5" />

        {/* === TITLE === */}
        <text
          x="250"
          y="30"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="16"
          fill="#2B6CB0"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          Anatomy of the Colon
        </text>
        <line x1="160" y1="38" x2="340" y2="38" stroke="#2B6CB0" strokeWidth="0.8" opacity="0.3" />

        {/* === DIRECTION ARROW (scope travel path) === */}
        <text
          x="250"
          y="510"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="9"
          fill="#718096"
          textAnchor="middle"
          opacity="0.7"
        >
          The colonoscope travels from rectum to cecum
        </text>
      </svg>
    </div>
  );
}
