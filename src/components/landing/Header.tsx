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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          offset: -80, // Account for fixed header height
        });
      } else {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-transparent dark:bg-transparent light:bg-[#fafafa]/90 backdrop-blur-sm dark:backdrop-blur-sm light:backdrop-blur-sm border-b border-transparent dark:border-transparent light:border-zinc-300/50 transition-colors duration-500 ease-in-out">
      <Link href="#" className="flex items-center gap-3 text-white dark:text-white light:text-zinc-900 font-bold text-xl md:text-2xl tracking-tighter hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors">
        {/* Logo Icon Placeholder */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white dark:text-white light:text-zinc-900"
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
        <span className="hidden md:block">{t("name.fullName") || "Trương Thành Trung"}</span>
      </Link>
      <div className="flex items-center gap-8">
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-sm font-medium text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors cursor-pointer"
          >
            {t("nav.home")}
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="text-sm font-medium text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors cursor-pointer"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#experience"
            onClick={(e) => handleNavClick(e, "experience")}
            className="text-sm font-medium text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors cursor-pointer"
          >
            {t("nav.experience")}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="text-sm font-medium text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors cursor-pointer"
          >
            {t("nav.contact")}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <DownloadCVButton />
          </div>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
