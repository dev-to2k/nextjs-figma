"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      if (buttonRef.current && iconRef.current && mounted) {
        gsap.fromTo(
          iconRef.current,
          { rotation: -180, opacity: 0, scale: 0.5 },
          {
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
        );
      }
    },
    { scope: buttonRef, dependencies: [theme, mounted] },
  );

  if (!mounted) {
    return (
      <div className="relative w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-muted-foreground/20" />
      </div>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl bg-secondary border border-border hover:bg-muted hover:border-muted-foreground/30 flex items-center justify-center transition-all duration-300 group overflow-hidden"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-300" />

      <div
        ref={iconRef}
        className="relative w-5 h-5 flex items-center justify-center"
      >
        {theme === "dark" ? (
          /* Moon icon */
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-[18px] h-[18px] text-foreground/80 group-hover:text-foreground transition-colors duration-300"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              fill="currentColor"
            />
          </svg>
        ) : (
          /* Sun icon */
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-[18px] h-[18px] text-foreground/80 group-hover:text-foreground transition-colors duration-300"
          >
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <line
              x1="12"
              y1="1"
              x2="12"
              y2="3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="12"
              y1="21"
              x2="12"
              y2="23"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4.22"
              y1="4.22"
              x2="5.64"
              y2="5.64"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="18.36"
              y1="18.36"
              x2="19.78"
              y2="19.78"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="1"
              y1="12"
              x2="3"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="21"
              y1="12"
              x2="23"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4.22"
              y1="19.78"
              x2="5.64"
              y2="18.36"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="18.36"
              y1="5.64"
              x2="19.78"
              y2="4.22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
