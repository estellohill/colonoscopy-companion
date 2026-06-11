import type { Metadata } from "next";
import DoseSchedule from "@/components/DoseSchedule";

export const metadata: Metadata = {
  title: "Your Prep-Day Schedule",
  description:
    "A personalized, hour-by-hour bowel prep schedule built from your procedure time and prep type — when to drink each dose and when to stop all fluids.",
  alternates: { canonical: "/prep-day" },
};

export default function PrepDayPage() {
  return <DoseSchedule />;
}
