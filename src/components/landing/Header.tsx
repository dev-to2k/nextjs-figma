"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import DownloadCVButton from "@/components/cv/DownloadCVButton";
import { useTranslation } from "@/components/providers/TranslationProvider";
import { useLenis } from "@studio-freight/react-lenis";
import Link from "next/link";

export default function Header() {
  const { t } = useTranslation();
  const lenis = useLenis();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          offset: -64,
        });
      } else {
        const offsetTop = element.offsetTop - 64;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#"
            className="flex items-center gap-3 text-foreground font-semibold text-lg tracking-tight hover:text-primary transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden sm:inline">
              {t("name.fullName") || "Trương Thành Trung"}
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.home")}
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.projects")}
              </a>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "experience")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.experience")}
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.contact")}
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <DownloadCVButton />
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
