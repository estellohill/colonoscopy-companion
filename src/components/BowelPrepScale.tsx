"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

interface PrepLevel {
  score: number;
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  description: string;
  message: string;
  liquidGradient: {
    top: string;
    bottom: string;
    opacity: number;
  };
}

const levels: PrepLevel[] = [
  {
    score: 3,
    label: "Excellent",
    bgColor: "bg-[#48bb78]",
    textColor: "text-white",
    borderColor: "border-[#48bb78]",
    description: "Clear liquid \u2014 you can see through it like apple juice",
    message: "Your prep is excellent! This is what we\u2019re aiming for.",
    liquidGradient: { top: "#fef9c3", bottom: "#facc15", opacity: 0.55 },
  },
  {
    score: 2,
    label: "Good",
    bgColor: "bg-[#38b2ac]",
    textColor: "text-white",
    borderColor: "border-[#38b2ac]",
    description: "Mostly clear with some cloudiness",
    message: "Good prep! Your doctor should be able to see well.",
    liquidGradient: { top: "#fde68a", bottom: "#d4a24a", opacity: 0.7 },
  },
  {
    score: 1,
    label: "Fair",
    bgColor: "bg-[#ed8936]",
    textColor: "text-white",
    borderColor: "border-[#ed8936]",
    description: "Cloudy or brownish \u2014 some residue visible",
    message:
      "Fair prep. Continue drinking your prep solution and clear fluids.",
    liquidGradient: { top: "#c4956a", bottom: "#8b6914", opacity: 0.85 },
  },
  {
    score: 0,
    label: "Poor",
    bgColor: "bg-[#e53e3e]",
    textColor: "text-white",
    borderColor: "border-[#e53e3e]",
    description: "Dark or opaque \u2014 cannot see through it",
    message:
      "Prep needs more work. Keep drinking fluids and prep solution. If concerned, call your doctor\u2019s office.",
    liquidGradient: { top: "#6b4226", bottom: "#3b1f0b", opacity: 1 },
  },
];

function LiquidCircle({
  gradient,
  size = 72,
}: {
  gradient: PrepLevel["liquidGradient"];
  size?: number;
}) {
  const id = `liquid-${gradient.bottom.replace("#", "")}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gradient.top} />
          <stop offset="100%" stopColor={gradient.bottom} />
        </linearGradient>
        <clipPath id={`clip-${id}`}>
          <circle cx="36" cy="36" r="30" />
        </clipPath>
      </defs>
      {/* Glass outline */}
      <circle
        cx="36"
        cy="36"
        r="30"
        stroke="white"
        strokeWidth="2.5"
        strokeOpacity={0.6}
        fill="white"
        fillOpacity={0.15}
      />
      {/* Liquid fill — starts partway down to simulate a glass */}
      <rect
        x="6"
        y="24"
        width="60"
        height="42"
        rx="0"
        fill={`url(#${id})`}
        opacity={gradient.opacity}
        clipPath={`url(#clip-${id})`}
      />
      {/* Subtle highlight */}
      <ellipse
        cx="28"
        cy="30"
        rx="8"
        ry="4"
        fill="white"
        fillOpacity={0.25}
      />
    </svg>
  );
}

export default function BowelPrepScale() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-neutral-50 rounded-2xl border border-neutral-200 p-5 sm:p-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="font-heading font-bold text-neutral-800 text-xl sm:text-2xl mb-1">
          How Is My Prep Going?
        </h2>
        <p className="text-neutral-500 text-sm sm:text-base">
          Use this visual guide to check if your prep solution is working
        </p>
      </div>

      {/* Scale cards */}
      <div className="grid gap-4">
        {levels.map((level) => {
          const isSelected = selected === level.score;
          return (
            <button
              key={level.score}
              type="button"
              onClick={() => {
                setSelected(isSelected ? null : level.score);
                if (!isSelected) trackEvent("bowel_prep_score_selected", { score: level.score, label: level.label });
              }}
              className={`w-full text-left rounded-2xl border-2 transition-all duration-200 ${
                isSelected
                  ? `${level.borderColor} shadow-md`
                  : "border-neutral-200 hover:border-neutral-300"
              } bg-white p-4 sm:p-5`}
            >
              <div className="flex items-start gap-4">
                {/* SVG liquid circle */}
                <div
                  className={`rounded-xl ${level.bgColor} p-2 flex items-center justify-center`}
                >
                  <LiquidCircle gradient={level.liquidGradient} />
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`inline-flex items-center justify-center rounded-lg ${level.bgColor} ${level.textColor} text-xs font-bold px-2.5 py-1`}
                    >
                      Score {level.score}
                    </span>
                    <span className="font-heading font-semibold text-neutral-800 text-base">
                      {level.label}
                    </span>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {level.description}
                  </p>

                  {/* Expandable message */}
                  {isSelected && (
                    <div
                      className={`mt-3 rounded-xl px-4 py-3 text-sm leading-relaxed ${
                        level.score >= 2
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : level.score === 1
                            ? "bg-amber-50 text-amber-800 border border-amber-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {level.message}
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Info box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm text-blue-800 leading-relaxed">
            Your prep should look like{" "}
            <strong>Score 2 or 3</strong> (clear to slightly cloudy
            yellow) before your procedure. If your output is still dark
            or has solid material, continue drinking clear fluids.
          </p>
        </div>
      </div>

      {/* Tip */}
      <div className="mt-4 bg-white border border-neutral-200 rounded-xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <p className="text-sm text-neutral-700 leading-relaxed">
            <strong>Remember:</strong> the better your prep, the more
            your doctor can see. Good prep = better protection.
          </p>
        </div>
      </div>
    </section>
  );
}
