"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import ResumePDF from "./ResumePDF";

interface PDFDownloadWrapperProps {
  locale: string;
  t: (key: string) => string;
  isGenerating: boolean;
  setIsGenerating: (value: boolean) => void;
}

export default function PDFDownloadWrapper({
  locale,
  t,
  isGenerating,
  setIsGenerating,
}: PDFDownloadWrapperProps) {
  const prevLoadingRef = useRef<boolean>(false);

  return (
    <PDFDownloadLink
      document={<ResumePDF locale={locale} />}
      fileName={`CV_${new Date().getFullYear()}.pdf`}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all hover:scale-105 shadow-lg shadow-purple-500/50"
      onClick={() => setIsGenerating(true)}
    >
      {({ loading }: { loading: boolean }) => {
        // Reset isGenerating when loading completes (changes from true to false)
        if (prevLoadingRef.current && !loading) {
          // Use setTimeout to avoid state update during render
          setTimeout(() => setIsGenerating(false), 0);
        }
        prevLoadingRef.current = loading;

        return (
          <>
            <FaDownload className="text-sm" />
            <span className="text-sm">
              {loading || isGenerating
                ? locale === "en"
                  ? "Generating..."
                  : "Đang tạo..."
                : t("nav.downloadCV") || "Download CV"}
            </span>
          </>
        );
      }}
    </PDFDownloadLink>
  );
}

