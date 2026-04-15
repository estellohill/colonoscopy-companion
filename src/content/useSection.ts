"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLanguage } from "@/i18n/LanguageContext";

export function useSection(id: string) {
  const { t } = useLanguage();
  const section = t.sections.find((s: { id: string }) => s.id === id)!;
  // Cast content to any so pages can destructure heterogeneous shapes
  // without fighting the union type (mirrors getSection behaviour).
  return section as typeof section & { content: any };
}

export function useHero() {
  const { t } = useLanguage();
  return t.hero;
}

export function useTranslation() {
  const { t, lang } = useLanguage();
  return { t, lang };
}
