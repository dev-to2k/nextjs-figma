import dynamic from 'next/dynamic';
const FeaturedProjects = dynamic(() => import('@/components/landing/FeaturedProjects'), { ssr: true });
const Footer = dynamic(() => import('@/components/landing/Footer'), { ssr: true });
const Header = dynamic(() => import('@/components/landing/Header'), { ssr: true });
const Hero = dynamic(() => import('@/components/landing/Hero'), { ssr: true });
const ScrollToTop = dynamic(() => import('@/components/landing/ScrollToTop'), { ssr: false });
const WorkExperience = dynamic(() => import('@/components/landing/WorkExperience'), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
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
