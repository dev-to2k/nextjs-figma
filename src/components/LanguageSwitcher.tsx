"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-0.5 p-1 rounded-xl bg-secondary border border-border">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
          locale === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("vi")}
        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
          locale === "vi"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        VI
      </button>
    </div>
  );
}
