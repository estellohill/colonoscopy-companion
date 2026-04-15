import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Colonoscopy?",
  description:
    "Learn what a colonoscopy is, how it works, and why it's considered the gold standard for colon cancer screening. Simple, clear explanation for patients.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
