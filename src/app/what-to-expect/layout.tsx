import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Expect During a Colonoscopy",
  description:
    "A step-by-step walkthrough of what happens before, during, and after your colonoscopy. Know what to expect so you feel prepared and confident.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
