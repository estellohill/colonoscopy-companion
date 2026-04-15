import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colonoscopy Prep Instructions",
  description:
    "Step-by-step colonoscopy preparation guide with interactive checklist. Know what to eat, what to avoid, and exactly what to do 7 days before through procedure day.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
