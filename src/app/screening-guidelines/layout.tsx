import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Screening Guidelines",
  description:
    "BC and Canadian colon cancer screening guidelines. Learn when to start screening, how often you need a colonoscopy, and what MSP covers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
