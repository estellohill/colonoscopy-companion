import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colonoscopy FAQ",
  description:
    "Answers to common questions about colonoscopy: Will it hurt? Can I drive home? What about diabetes medications? Everything you need to know.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
