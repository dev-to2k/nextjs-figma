"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force dark mode
    setTheme("dark");
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply theme to document
    const root = document.documentElement;

    // Remove both classes first
    root.classList.remove("dark", "light");

    // Add the current theme class
    root.classList.add("dark");

    // Also set data attribute for better compatibility
    root.setAttribute("data-theme", "dark");

    // Save to localStorage
    localStorage.setItem("theme", "dark");
  }, [theme, mounted]);

  const toggleTheme = () => {
    // Disabled for now
    // setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
