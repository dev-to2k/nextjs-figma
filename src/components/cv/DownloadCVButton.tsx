"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";
import dynamic from "next/dynamic";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

// Dynamic import with SSR disabled
const PDFDownloadWrapper = dynamic(() => import("./PDFDownloadWrapper"), {
  ssr: false,
  loading: () => (
    <button
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium"
      disabled
    >
      <FaDownload className="text-sm" />
      <span className="text-sm">Loading...</span>
    </button>
  ),
});

export default function DownloadCVButton() {
  const { locale, t } = useTranslation();
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <PDFDownloadWrapper
      locale={locale}
      t={t}
      isGenerating={isGenerating}
      setIsGenerating={setIsGenerating}
    />
  );
}

