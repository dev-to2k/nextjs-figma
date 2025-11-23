"use client";

import FeaturedProjects from "@/components/landing/FeaturedProjects";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ScrollToTop from "@/components/landing/ScrollToTop";
import WorkExperience from "@/components/landing/WorkExperience";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen font-sans selection:bg-purple-500/30 dark:selection:bg-purple-500/30 light:selection:bg-purple-500/20 transition-colors duration-500 ease-in-out ${
        theme === "dark"
          ? "bg-[#050505] text-zinc-100"
          : "bg-[#fafafa] text-zinc-800"
      }`}
    >
      <Header />
      <main>
        <Hero />
        <WorkExperience />
        <FeaturedProjects />
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  );
}
