export default function PolypDiagram() {
  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <svg
        viewBox="0 0 600 320"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Diagram showing three types of colon polyps: Hyperplastic (low risk), Adenoma (moderate risk), and Sessile Serrated (higher risk)"
      >
        <defs>
          {/* Subtle gradient for colon wall cross-section */}
          <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FED7E2" />
            <stop offset="100%" stopColor="#FBB6CE" />
          </linearGradient>
          {/* Polyp body gradients */}
          <radialGradient id="hypGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#F687B3" />
            <stop offset="100%" stopColor="#D53F8C" />
          </radialGradient>
          <radialGradient id="adenGrad" cx="50%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#F687B3" />
            <stop offset="100%" stopColor="#B83280" />
          </radialGradient>
          <radialGradient id="ssGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#F687B3" />
            <stop offset="100%" stopColor="#D53F8C" />
          </radialGradient>
          {/* Fine stipple pattern for mucosal texture */}
          <pattern id="mucosa" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.4" fill="#E8A0BF" opacity="0.5" />
          </pattern>
        </defs>

        {/* ============ COLUMN 1: HYPERPLASTIC ============ */}
        <g transform="translate(10, 0)">
          {/* Colon wall cross-section */}
          <rect x="20" y="160" width="160" height="28" rx="3" fill="url(#wallGrad)" stroke="#D53F8C" strokeWidth="0.75" />
          <rect x="20" y="160" width="160" height="28" rx="3" fill="url(#mucosa)" />
          {/* Submucosa hint */}
          <rect x="20" y="188" width="160" height="10" rx="2" fill="#FEEBC8" stroke="#D69E2E" strokeWidth="0.5" opacity="0.5" />
          {/* Mucosal surface line */}
          <line x1="20" y1="160" x2="180" y2="160" stroke="#D53F8C" strokeWidth="1.5" />

          {/* Hyperplastic polyp: small, flat/sessile bump */}
          <path
            d="M 72 160 Q 78 148 88 142 Q 100 136 112 142 Q 122 148 128 160"
            fill="url(#hypGrad)"
            stroke="#B83280"
            strokeWidth="1"
          />
          {/* Surface texture lines */}
          <path d="M 82 155 Q 90 150 98 149 Q 106 150 114 154" fill="none" stroke="#C53079" strokeWidth="0.5" opacity="0.6" />
          <path d="M 86 151 Q 94 147 102 146 Q 110 147 118 151" fill="none" stroke="#C53079" strokeWidth="0.5" opacity="0.4" />
          {/* Highlight */}
          <ellipse cx="97" cy="145" rx="8" ry="4" fill="white" opacity="0.15" />

          {/* Label */}
          <text x="100" y="225" textAnchor="middle" fontSize="13" fontWeight="600" fill="#2d3748" fontFamily="system-ui, sans-serif">
            Hyperplastic
          </text>
          {/* Risk badge */}
          <rect x="58" y="236" width="84" height="22" rx="11" fill="#48bb78" />
          <text x="100" y="251" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="white" fontFamily="system-ui, sans-serif">
            Low Risk
          </text>
          {/* Size indicator */}
          <text x="100" y="275" textAnchor="middle" fontSize="9" fill="#718096" fontFamily="system-ui, sans-serif">
            Usually &lt; 5 mm
          </text>
        </g>

        {/* ============ COLUMN 2: ADENOMA (PEDUNCULATED) ============ */}
        <g transform="translate(200, 0)">
          {/* Colon wall cross-section */}
          <rect x="20" y="160" width="160" height="28" rx="3" fill="url(#wallGrad)" stroke="#D53F8C" strokeWidth="0.75" />
          <rect x="20" y="160" width="160" height="28" rx="3" fill="url(#mucosa)" />
          <rect x="20" y="188" width="160" height="10" rx="2" fill="#FEEBC8" stroke="#D69E2E" strokeWidth="0.5" opacity="0.5" />
          <line x1="20" y1="160" x2="180" y2="160" stroke="#D53F8C" strokeWidth="1.5" />

          {/* Stalk */}
          <path
            d="M 94 160 Q 92 140 90 125 Q 88 115 92 108 L 108 108 Q 112 115 110 125 Q 108 140 106 160"
            fill="url(#adenGrad)"
            stroke="#B83280"
            strokeWidth="1"
          />
          {/* Stalk center line */}
          <line x1="100" y1="155" x2="100" y2="115" stroke="#9B2C6E" strokeWidth="0.5" opacity="0.3" />

          {/* Polyp head — rounded, lobulated */}
          <ellipse cx="100" cy="88" rx="30" ry="24" fill="url(#adenGrad)" stroke="#B83280" strokeWidth="1" />
          {/* Lobulation lines */}
          <path d="M 78 80 Q 85 72 100 70 Q 115 72 122 80" fill="none" stroke="#9B2C6E" strokeWidth="0.6" opacity="0.5" />
          <path d="M 82 95 Q 92 100 108 100 Q 115 98 120 93" fill="none" stroke="#9B2C6E" strokeWidth="0.5" opacity="0.4" />
          {/* Subtle lobule division */}
          <path d="M 100 64 Q 98 78 100 95" fill="none" stroke="#9B2C6E" strokeWidth="0.4" opacity="0.3" />
          {/* Highlight */}
          <ellipse cx="93" cy="78" rx="10" ry="7" fill="white" opacity="0.12" />

          {/* Label */}
          <text x="100" y="225" textAnchor="middle" fontSize="13" fontWeight="600" fill="#2d3748" fontFamily="system-ui, sans-serif">
            Adenoma
          </text>
          {/* Risk badge */}
          <rect x="44" y="236" width="112" height="22" rx="11" fill="#ed8936" />
          <text x="100" y="251" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="white" fontFamily="system-ui, sans-serif">
            Moderate Risk
          </text>
          {/* Size indicator */}
          <text x="100" y="275" textAnchor="middle" fontSize="9" fill="#718096" fontFamily="system-ui, sans-serif">
            Often 5{"\u2013"}20 mm
          </text>
        </g>

        {/* ============ COLUMN 3: SESSILE SERRATED ============ */}
        <g transform="translate(390, 0)">
          {/* Colon wall cross-section */}
          <rect x="20" y="160" width="160" height="28" rx="3" fill="url(#wallGrad)" stroke="#D53F8C" strokeWidth="0.75" />
          <rect x="20" y="160" width="160" height="28" rx="3" fill="url(#mucosa)" />
          <rect x="20" y="188" width="160" height="10" rx="2" fill="#FEEBC8" stroke="#D69E2E" strokeWidth="0.5" opacity="0.5" />
          <line x1="20" y1="160" x2="180" y2="160" stroke="#D53F8C" strokeWidth="1.5" />

          {/* Sessile serrated polyp: flat, broad-based, irregular surface */}
          <path
            d="M 50 160
               Q 52 152 58 148
               Q 64 143 72 140
               Q 78 137 86 136
               Q 94 135 102 136
               Q 112 137 120 140
               Q 128 143 134 148
               Q 140 152 144 160"
            fill="url(#ssGrad)"
            stroke="#B83280"
            strokeWidth="1"
          />
          {/* Serrated / irregular surface texture */}
          <path
            d="M 58 150 Q 62 146 68 147 Q 73 145 78 146 Q 84 144 90 145 Q 96 143 102 144 Q 108 143 114 145 Q 120 144 126 146 Q 132 147 136 150"
            fill="none"
            stroke="#9B2C6E"
            strokeWidth="0.7"
            opacity="0.6"
          />
          <path
            d="M 64 146 Q 70 142 78 142 Q 86 140 94 140 Q 102 140 110 141 Q 118 142 124 144 Q 130 146 134 148"
            fill="none"
            stroke="#9B2C6E"
            strokeWidth="0.5"
            opacity="0.4"
          />
          {/* Sawtooth crypt pattern hint */}
          <path
            d="M 70 155 L 73 151 L 76 155 L 79 151 L 82 155 L 85 151 L 88 155 L 91 151 L 94 155 L 97 151 L 100 155 L 103 151 L 106 155 L 109 151 L 112 155 L 115 151 L 118 155 L 121 151 L 124 155"
            fill="none"
            stroke="#9B2C6E"
            strokeWidth="0.5"
            opacity="0.35"
          />
          {/* Highlight */}
          <ellipse cx="95" cy="141" rx="14" ry="4" fill="white" opacity="0.12" />

          {/* Label */}
          <text x="100" y="225" textAnchor="middle" fontSize="13" fontWeight="600" fill="#2d3748" fontFamily="system-ui, sans-serif">
            Sessile Serrated
          </text>
          {/* Risk badge */}
          <rect x="46" y="236" width="108" height="22" rx="11" fill="#e53e3e" />
          <text x="100" y="251" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="white" fontFamily="system-ui, sans-serif">
            Higher Risk
          </text>
          {/* Size indicator */}
          <text x="100" y="275" textAnchor="middle" fontSize="9" fill="#718096" fontFamily="system-ui, sans-serif">
            Often &gt; 10 mm
          </text>
        </g>

        {/* ============ LEGEND ============ */}
        <g transform="translate(0, 295)">
          <rect x="150" y="0" width="8" height="8" rx="1" fill="#FED7E2" stroke="#D53F8C" strokeWidth="0.5" />
          <text x="162" y="8" fontSize="8.5" fill="#718096" fontFamily="system-ui, sans-serif">Mucosal wall</text>
          <rect x="230" y="0" width="8" height="8" rx="1" fill="#FEEBC8" stroke="#D69E2E" strokeWidth="0.5" />
          <text x="242" y="8" fontSize="8.5" fill="#718096" fontFamily="system-ui, sans-serif">Submucosa</text>
          <circle cx="318" cy="4" r="4" fill="url(#hypGrad)" stroke="#B83280" strokeWidth="0.5" />
          <text x="326" y="8" fontSize="8.5" fill="#718096" fontFamily="system-ui, sans-serif">Polyp tissue</text>
        </g>
      </svg>
    </div>
  );
}
