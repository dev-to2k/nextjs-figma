"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-card border border-border">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("vi")}
        className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
          locale === "vi"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        VI
      </button>
    </div>
  );
}
