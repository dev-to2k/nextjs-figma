"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

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
          { rotation: -180, opacity: 0 },
          { rotation: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      }
    },
    { scope: buttonRef, dependencies: [theme, mounted] }
  );

  if (!mounted) {
    return (
      <div className="relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
        <div className="relative w-5 h-5">
          <FaMoon className="w-full h-full text-purple-400 opacity-50" />
        </div>
      </div>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all group"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div ref={iconRef} className="relative w-5 h-5">
        {theme === "dark" ? (
          <FaMoon className="w-full h-full text-purple-400 group-hover:text-purple-300 transition-colors" />
        ) : (
          <FaSun className="w-full h-full text-yellow-400 group-hover:text-yellow-300 transition-colors" />
        )}
      </div>
    </button>
  );
}

