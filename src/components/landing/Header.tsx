"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import DownloadCVButton from "@/components/cv/DownloadCVButton";
import { useTranslation } from "@/components/providers/TranslationProvider";
import { useLenis } from "@studio-freight/react-lenis";
import Link from "next/link";

export default function Header() {
  const { t } = useTranslation();
  const lenis = useLenis();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#"
            className="flex items-center gap-3 text-foreground font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity"
          >
            {/* Minimal geometric logo */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              <rect x="3" y="3" width="7" height="7" fill="currentColor" />
              <rect
                x="14"
                y="3"
                width="7"
                height="7"
                fill="currentColor"
                opacity="0.6"
              />
              <rect
                x="3"
                y="14"
                width="7"
                height="7"
                fill="currentColor"
                opacity="0.6"
              />
              <rect
                x="14"
                y="14"
                width="7"
                height="7"
                fill="currentColor"
                opacity="0.3"
              />
            </svg>
            <span className="hidden sm:inline font-medium">
              {t("name.fullName") || "Trương Thành Trung"}
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { id: "home", label: t("nav.home") },
                { id: "projects", label: t("nav.projects") },
                { id: "experience", label: t("nav.experience") },
                { id: "contact", label: t("nav.contact") },
              ].map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <DownloadCVButton />
              </div>
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
