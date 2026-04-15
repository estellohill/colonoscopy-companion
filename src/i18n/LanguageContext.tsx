"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { en } from "./translations/en";
import { zhHK } from "./translations/zh-HK";
import { zhCN } from "./translations/zh-CN";
import { pa } from "./translations/pa";
import { hi } from "./translations/hi";

export type LangCode = "en" | "zh-HK" | "zh-CN" | "pa" | "hi";

// Widen literal string types so translated values aren't locked to English strings
type DeepString<T> = T extends string ? string : { [K in keyof T]: DeepString<T[K]> };
export type Translations = DeepString<typeof en>;

const allTranslations: Record<LangCode, Translations> = { en, "zh-HK": zhHK, "zh-CN": zhCN, pa, hi };

interface LanguageContextType {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as LangCode | null;
    if (saved && allTranslations[saved]) setLangState(saved);
  }, []);

  const setLang = (newLang: LangCode) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: allTranslations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
