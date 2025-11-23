"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${
          locale === "en"
            ? "bg-purple-500 text-white"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("vi")}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${
          locale === "vi"
            ? "bg-purple-500 text-white"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        VI
      </button>
    </div>
  );
}
