"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/what-is-colonoscopy", label: "What Is It?" },
  { href: "/colon-cancer-polyps", label: "Cancer & Polyps" },
  { href: "/screening-guidelines", label: "Screening" },
  { href: "/prep-instructions", label: "Prep Guide" },
  { href: "/what-to-expect", label: "What to Expect" },
  { href: "/comfort-and-anxiety", label: "Comfort" },
  { href: "/risks-and-safety", label: "Safety" },
  { href: "/faq", label: "FAQ" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Logo mark */}
            <span className="flex items-center justify-center w-9 h-9 bg-brand-600 rounded-xl text-white text-lg shadow-sm group-hover:bg-brand-700 transition-colors">
              CC
            </span>
            <span className="font-heading font-semibold text-brand-700 text-lg hidden sm:inline">
              Colonoscopy Companion
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-500 hover:text-brand-700 hover:bg-brand-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-neutral-100">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-neutral-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
