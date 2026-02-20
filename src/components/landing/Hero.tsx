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
        const parallaxContent =
          containerRef.current.querySelector(".parallax-content");

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
            },
          );
        }
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Parallax Background - Minimal geometric pattern */}
      <div className="parallax-bg absolute inset-0 z-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgb(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        {/* Soft gradient orbs */}
        <div className="absolute -top-[40%] -left-[10%] w-[50%] h-[180%] bg-foreground/2 blur-[150px] rounded-full" />
        <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[140%] bg-foreground/1.5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="parallax-content max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="mb-8">
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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-foreground/70 bg-secondary border border-border rounded-full tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-pulse" />
                Available for new opportunities
              </span>
            </AnimatedContent>
          </div>

          {/* Name */}
          <SplitText
            text={`${t("hero.greeting")} ${t("name.fullName")}`}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground"
            delay={30}
            duration={0.8}
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            tag="h1"
          />

          {/* Role */}
          <div className="mb-14">
            <BlurText
              text={t("hero.role")}
              className="text-xl md:text-2xl font-light text-muted-foreground mb-6 justify-center tracking-wide"
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
              <p className="text-base md:text-lg mb-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
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
                className="text-sm md:text-base text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed font-light"
                dangerouslySetInnerHTML={{
                  __html: t("hero.aiToolsDescription"),
                }}
              />
            </AnimatedContent>
          </div>

          {/* AI Tool badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              {
                src: "https://avatars.githubusercontent.com/u/126759922?v=4",
                alt: "Cursor",
                name: "Cursor",
                delay: 0,
              },
              {
                src: "https://windsurf.com/favicon.svg",
                alt: "Windsurf",
                name: "Windsurf",
                delay: 50,
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ171TqGq21JDajxZwUYBqX9m8zN7SZsMVew&s",
                alt: "GitHub Copilot",
                name: "GitHub Copilot",
                delay: 100,
              },
            ].map((tool) => (
              <AnimatedContent
                key={tool.name}
                distance={100}
                direction="vertical"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={tool.delay}
                animateOnMount={true}
              >
                <span className="flex items-center gap-2.5 px-5 py-2.5 bg-secondary border border-border text-sm text-foreground/80 rounded-xl hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-300 group cursor-default">
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    width={18}
                    height={18}
                    className="rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300 font-medium">
                    {tool.name}
                  </span>
                </span>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-20" />
    </div>
  );
}
