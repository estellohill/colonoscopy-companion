import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colon Cancer & Polyps",
  description:
    "Understand colon cancer, what polyps are, and why finding them early through colonoscopy screening can prevent cancer. Canadian statistics included.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
