"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "vi";

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>("en");
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Load translations
    fetch(`/locales/${locale}.json`)
      .then((res) => res.json())
      .then((data) => {
        setTranslations(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load translations:", err);
        // Fallback to English if fetch fails
        if (locale === "vi") {
          fetch(`/locales/en.json`)
            .then((res) => res.json())
            .then((data) => {
              setTranslations(data);
              setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
        } else {
          setIsLoading(false);
        }
      });
  }, [locale]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        // Return a more readable fallback
        const lastKey = keys[keys.length - 1];
        return lastKey.charAt(0).toUpperCase() + lastKey.slice(1).replace(/([A-Z])/g, " $1").trim();
      }
    }

    return value || key;
  };

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}
