import FeaturedProjects from "@/components/landing/FeaturedProjects";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ScrollToTop from "@/components/landing/ScrollToTop";
import WorkExperience from "@/components/landing/WorkExperience";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-500/20 dark:selection:bg-purple-500/30 transition-colors duration-500 ease-in-out bg-[#fafafa] text-zinc-800 dark:bg-[#050505] dark:text-zinc-100">
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
