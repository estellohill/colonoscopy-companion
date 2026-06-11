"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackEvent } from "@/lib/analytics";
import {
  buildSchedule,
  generateICS,
  downloadICS,
  formatWeekday,
  formatTime,
  upcomingEvents,
  type ProcedurePlan,
  type IcsEventText,
} from "@/lib/plan";
import { Icon } from "@/components/Icons";

export function useEventTexts(): Record<string, IcsEventText> {
  const { t } = useLanguage();
  return t.ui.plan.events as Record<string, IcsEventText>;
}

/** Zero-permission reminder channel: an .ics file with every key prep moment. */
export function AddToCalendarButton({ plan }: { plan: ProcedurePlan }) {
  const { t } = useLanguage();
  const texts = useEventTexts();
  const [downloaded, setDownloaded] = useState(false);

  const handleClick = () => {
    const events = upcomingEvents(buildSchedule(plan));
    downloadICS(generateICS(events, texts));
    setDownloaded(true);
    trackEvent("calendar_exported", { event_count: events.length });
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-600 text-white px-6 py-3.5 min-h-12 rounded-xl font-semibold text-base hover:bg-brand-700 transition-colors"
    >
      <Icon name="calendar" className="w-5 h-5" />
      {downloaded ? t.ui.plan.calendar.downloaded : t.ui.plan.calendar.addButton}
    </button>
  );
}

/** For a 72-year-old, a family member is the most reliable notification system. */
export function CaregiverShareButton({ plan }: { plan: ProcedurePlan }) {
  const { t, lang } = useLanguage();
  const texts = useEventTexts();
  const [copied, setCopied] = useState(false);
  const c = t.ui.plan.caregiver;

  const buildMessage = (): string => {
    const events = upcomingEvents(buildSchedule(plan));
    const lines = events.map((ev) => {
      const day = formatWeekday(ev.start, lang);
      const time = formatTime(ev.start, lang);
      return `• ${day}, ${time} — ${texts[ev.id]?.title ?? ev.id}`;
    });
    return [c.intro, "", ...lines, "", c.rideLine, `${c.moreInfo} colonoscopycompanion.ca`].join("\n");
  };

  const handleShare = async () => {
    trackEvent("caregiver_share_initiated");
    const message = buildMessage();
    if (navigator.share) {
      try {
        await navigator.share({ text: message });
        return;
      } catch {
        // User cancelled the share sheet
      }
    } else {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-12 text-base font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-xl transition-colors"
    >
      <Icon name="share" className="w-5 h-5" />
      {copied ? c.copied : c.button}
    </button>
  );
}
