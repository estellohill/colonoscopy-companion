import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comfort & Anxiety — Feeling Nervous About Your Colonoscopy?",
  description:
    "It's completely normal to feel anxious about a colonoscopy. Evidence-based strategies to manage anxiety, what to expect from sedation, and tips from patients who've been through it.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
