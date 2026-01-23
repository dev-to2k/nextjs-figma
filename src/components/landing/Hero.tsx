"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import Image from "next/image";
import AnimatedContent from "../animate-content/AnimatedContent";
import BlurText from "../animate-text/BlurText";
import SplitText from "../animate-text/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        if (!containerRef.current) return;

        const parallaxBg = containerRef.current.querySelector(".parallax-bg");
        const parallaxContent = containerRef.current.querySelector(".parallax-content");

        if (parallaxBg) {
          gsap.to(parallaxBg, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        if (parallaxContent) {
          gsap.fromTo(
            parallaxContent,
            { y: 0 },
            {
              y: -50,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[200%] bg-primary/5 blur-[150px] rounded-full"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[40%] h-[150%] bg-primary/3 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="parallax-content max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <AnimatedContent
              distance={20}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0}
              animateOnMount={true}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
                Available for new opportunities
              </span>
            </AnimatedContent>
          </div>

          <SplitText
            text={`${t("hero.greeting")} ${t("name.fullName")}`}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            delay={30}
            duration={0.8}
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            tag="h1"
          />

          <div className="mb-12">
            <BlurText
              text={t("hero.role")}
              className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6 justify-center"
              delay={100}
              animateBy="words"
              direction="top"
              threshold={0.1}
            />
            <AnimatedContent
              distance={30}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={150}
              animateOnMount={true}
            >
              <p className="text-base md:text-lg mb-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("hero.description")}
              </p>
            </AnimatedContent>
            <AnimatedContent
              distance={30}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={200}
              animateOnMount={true}
            >
              <p
                className="text-sm md:text-base text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("hero.aiToolsDescription") }}
              />
            </AnimatedContent>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0}
              animateOnMount={true}
            >
              <span className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border text-sm text-foreground rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group">
                <Image
                  src="https://avatars.githubusercontent.com/u/126759922?v=4"
                  alt="Cursor"
                  width={18}
                  height={18}
                  className="rounded-sm"
                />
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">Cursor</span>
              </span>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={50}
              animateOnMount={true}
            >
              <span className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border text-sm text-foreground rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group">
                <Image
                  src="https://windsurf.com/favicon.svg"
                  alt="Windsurf"
                  width={18}
                  height={18}
                  className=""
                />
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">Windsurf</span>
              </span>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={100}
              animateOnMount={true}
            >
              <span className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border text-sm text-foreground rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ171TqGq21JDajxZwUYBqX9m8zN7SZsMVew&s"
                  alt="GitHub Copilot"
                  width={18}
                  height={18}
                  className="rounded-sm"
                />
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">GitHub Copilot</span>
              </span>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
}
