"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import ResumePDF from "./ResumePDF";

interface PDFDownloadWrapperProps {
  locale: "en" | "vi";
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
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-all"
      onClick={() => setIsGenerating(true)}
    >
      {({ loading }: { loading: boolean }) => {
        if (prevLoadingRef.current && !loading) {
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
