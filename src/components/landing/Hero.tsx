"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Hero() {
  const containerRef = useRef(null);
  const { t } = useTranslation();
  const lenis = useLenis();

  // Fallback values if translation is not loaded
  const greeting = t("hero.greeting") || "Hi, I'm";
  const fullName = t("name.fullName") || "Thanh Trung Truong";
  const subtitle = t("hero.subtitle") || "A Designer who";
  const titleLine1 = t("hero.titleLine1") || "Judges a book";
  const titleLine2 = t("hero.titleLine2") || "by its";
  const titleHighlight = t("hero.titleHighlight") || "cover...";
  const caption =
    t("hero.caption") ||
    "BECAUSE IF THE COVER DOES NOT IMPRESS YOU WHAT ELSE CAN?";
  const role = t("hero.role") || "I'm a Software Engineer.";
  const aiTools =
    t("hero.aiTools") ||
    "I leverage AI development tools to enhance productivity and code quality";
  const aiToolsDescription =
    t("hero.aiToolsDescription") ||
    'Proficient in using <strong class="text-purple-400 dark:text-purple-400 light:text-purple-600">Cursor</strong>, <strong class="text-blue-400 dark:text-blue-400 light:text-blue-600">Windsurf</strong>, and <strong class="text-green-400 dark:text-green-400 light:text-green-600">GitHub Copilot</strong> to accelerate development workflows and deliver high-quality solutions.';

  const handleScrollDown = () => {
    if (lenis) {
      lenis.scrollTo(window.innerHeight, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Orbital rings animation
      gsap.to(".hero-orbit-ring-1", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(".hero-orbit-ring-2", {
        rotation: -360,
        duration: 40,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(".hero-orbit-ring-3", {
        rotation: 360,
        duration: 50,
        repeat: -1,
        ease: "linear",
      });

      // Background fade in
      tl.fromTo(
        ".hero-bg",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      )
        // Badge: Bounce down with elastic effect (starts at same time as bg)
        .fromTo(
          ".hero-badge",
          { y: -50, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.5"
        )
        // Subtitle: Slide from left with blur (parallel with badge)
        .fromTo(
          ".hero-subtitle",
          { x: -100, opacity: 0, filter: "blur(10px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        // Title lines: Scale up with rotation and stagger (parallel with subtitle)
        .fromTo(
          ".hero-title-line",
          {
            y: 60,
            opacity: 0,
            scale: 0.5,
            rotationX: -90,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.4)",
          },
          "-=0.3"
        )
        // Underline: Draw animation (starts during title animation)
        .to(
          ".hero-underline",
          {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "power1.inOut",
          },
          "-=0.2"
        )
        // Caption: Typewriter effect (parallel with underline)
        .fromTo(
          ".hero-caption",
          {
            opacity: 0,
            letterSpacing: "0.5em",
            filter: "blur(5px)",
          },
          {
            opacity: 1,
            letterSpacing: "0.2em",
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // Role: Glitch effect with scale and glow (parallel with caption)
        .fromTo(
          ".hero-role",
          {
            y: 40,
            opacity: 0,
            scale: 0.5,
            filter: "blur(10px) brightness(0.5)",
            clipPath: "inset(100% 0% 0% 0%)",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px) brightness(1)",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.3"
        )
        // AI Tools: Fade in with scale (parallel with role)
        .fromTo(
          ".hero-ai-tools",
          {
            y: 30,
            opacity: 0,
            scale: 0.8,
            rotation: -5,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-8 md:py-12 text-center"
    >
      {/* Animated Background Gradient */}
      <div className="hero-bg absolute inset-0 -z-20" style={{ opacity: 0 }}>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 dark:bg-purple-600/20 light:bg-purple-400/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/10 dark:bg-pink-600/10 light:bg-pink-400/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Orbital Rings Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Orbit Rings */}
          <div className="hero-orbit-ring-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] border border-purple-500/20 rounded-[100%]"></div>
          <div className="hero-orbit-ring-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[120px] border border-purple-500/10 rounded-[100%]"></div>
          <div className="hero-orbit-ring-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[140px] border border-purple-500/5 rounded-[100%]"></div>

          {/* Orbiting Particles */}
          <div className="hero-orbit-ring-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] pointer-events-none">
            <div className="absolute top-[10%] left-[20%] w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_5px_#a855f7]"></div>
            <div className="absolute bottom-[20%] right-[15%] w-1 h-1 bg-purple-500/50 rounded-full"></div>
          </div>
          <div className="hero-orbit-ring-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[120px] pointer-events-none">
            <div className="absolute top-[50%] -right-0.5 w-1.5 h-1.5 bg-white/80 rounded-full shadow-[0_0_5px_white]"></div>
          </div>
        </div>
      </div>

      {/* Badge */}
      <div
        className="hero-badge mb-4 md:mb-6"
        style={{ opacity: 0, transform: "translateY(-50px) scale(0.8)" }}
      >
        <span
          className="inline-flex items-center gap-2 text-[10px] md:text-xs font-medium text-purple-300 dark:text-purple-300 light:text-purple-700 bg-purple-950/50 dark:bg-purple-950/50 light:bg-purple-100/80 px-3 py-1.5 rounded-full border border-purple-500/30 dark:border-purple-500/30 light:border-purple-400/50 backdrop-blur-sm"
          suppressHydrationWarning
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          {greeting} {fullName}
        </span>
      </div>

      {/* Main Title Section */}
      <div
        className="max-w-3xl mx-auto mb-4 md:mb-6"
        style={{ perspective: "1000px" }}
      >
        <p
          className="hero-subtitle text-xs md:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-700 font-medium mb-2 md:mb-3"
          style={{
            opacity: 0,
            transform: "translateX(-100px)",
            filter: "blur(10px)",
          }}
        >
          {subtitle}
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 md:mb-3">
          <span
            className="hero-title-line block text-white dark:text-white light:text-zinc-800 mb-1"
            style={{
              opacity: 0,
              transform: "translateY(60px) scale(0.5) rotateX(-90deg)",
            }}
          >
            {titleLine1}
          </span>
          <span
            className="hero-title-line block"
            style={{
              opacity: 0,
              transform: "translateY(60px) scale(0.5) rotateX(-90deg)",
            }}
          >
            <span className="text-white dark:text-white light:text-zinc-800">
              {titleLine2}{" "}
            </span>
            <span className="relative inline-block mx-2">
              {/* Strong Glow Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 dark:from-purple-600 dark:via-pink-500 dark:to-purple-600 light:from-purple-500 light:via-pink-400 light:to-purple-500 blur-2xl opacity-40 dark:opacity-40 light:opacity-30 animate-pulse"></span>

              {/* Text with Hyper Gradient */}
              <span className="relative z-10 text-transparent bg-clip-text bg-[length:300%_auto] animate-gradient bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-purple-600 light:from-purple-600 light:via-pink-500 light:to-purple-600 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] dark:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] light:drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                {titleHighlight}
              </span>

              {/* Animated underline */}
              <svg
                className="absolute w-full h-4 -bottom-2 left-0 text-purple-400 dark:text-purple-400 light:text-purple-600 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] dark:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] light:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q 100 12 200 6"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hero-underline"
                  style={{
                    strokeDasharray: "250",
                    strokeDashoffset: "250",
                  }}
                />
              </svg>
            </span>
          </span>
        </h1>

        <p
          className="hero-caption text-[8px] md:text-[10px] text-zinc-500 dark:text-zinc-500 light:text-zinc-700 uppercase tracking-[0.2em] md:tracking-[0.3em] mt-4 md:mt-6 font-semibold"
          style={{ opacity: 0, letterSpacing: "0.5em", filter: "blur(5px)" }}
        >
          {caption}
        </p>
      </div>

      {/* Role & Description */}
      <div className="max-w-2xl mx-auto space-y-3 md:space-y-4 pb-4">
        <h2
          className="hero-role text-xl md:text-3xl font-bold text-white dark:text-white light:text-zinc-800"
          style={{
            opacity: 0,
            transform: "translateY(40px) scale(0.5)",
            filter: "blur(10px) brightness(0.5)",
            clipPath: "inset(100% 0% 0% 0%)",
          }}
        >
          {role}
        </h2>

        {/* AI DevTools Section */}
        <div
          className="hero-ai-tools mt-4 md:mt-6 max-w-xl mx-auto px-4"
          style={{
            opacity: 0,
            transform: "translateY(30px) scale(0.8) rotate(-5deg)",
          }}
        >
          <p className="text-xs md:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-medium mb-2">
            {aiTools}
          </p>
          <p
            className="text-[10px] md:text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: aiToolsDescription,
            }}
          ></p>
          <div className="flex items-center justify-center gap-2 md:gap-3 mt-3 flex-wrap">
            {/* Cursor Logo */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-100 border border-purple-500/30 dark:border-purple-500/30 light:border-purple-400/50 hover:bg-purple-500/20 dark:hover:bg-purple-500/20 light:hover:bg-purple-200 hover:border-purple-500/50 dark:hover:border-purple-500/50 light:hover:border-purple-500/70 transition-all cursor-default">
              <div className="relative w-3 h-3 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="currentColor"
                    className="text-purple-400 dark:text-purple-400 light:text-purple-600"
                  />
                  <path
                    d="M2 17L12 22L22 17V12L12 17L2 12V17Z"
                    fill="currentColor"
                    className="text-purple-400 dark:text-purple-400 light:text-purple-600"
                  />
                </svg>
              </div>
              <span className="text-[10px] md:text-xs font-medium text-purple-300 dark:text-purple-300 light:text-purple-700">
                Cursor
              </span>
            </div>

            {/* Windsurf Logo */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/10 light:bg-blue-100 border border-blue-500/30 dark:border-blue-500/30 light:border-blue-400/50 hover:bg-blue-500/20 dark:hover:bg-blue-500/20 light:hover:bg-blue-200 hover:border-blue-500/50 dark:hover:border-blue-500/50 light:hover:border-blue-500/70 transition-all cursor-default">
              <div className="relative w-3 h-3 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="currentColor"
                    className="text-blue-400 dark:text-blue-400 light:text-blue-600"
                  />
                  <path
                    d="M2 17L12 22L22 17V12L12 17L2 12V17Z"
                    fill="currentColor"
                    className="text-blue-400 dark:text-blue-400 light:text-blue-600"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    fill="currentColor"
                    className="text-blue-300 dark:text-blue-300 light:text-blue-500"
                  />
                </svg>
              </div>
              <span className="text-[10px] md:text-xs font-medium text-blue-300 dark:text-blue-300 light:text-blue-700">
                Windsurf
              </span>
            </div>

            {/* GitHub Copilot Logo */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 dark:bg-green-500/10 light:bg-green-100 border border-green-500/30 dark:border-green-500/30 light:border-green-400/50 hover:bg-green-500/20 dark:hover:bg-green-500/20 light:hover:bg-green-200 hover:border-green-500/50 dark:hover:border-green-500/50 light:hover:border-green-500/70 transition-all cursor-default">
              <div className="relative w-3 h-3 flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full text-green-400 dark:text-green-400 light:text-green-600"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.787V21.58C5.662 22.302 4.967 20.16 4.967 20.16C4.419 18.773 3.634 18.404 3.634 18.404C2.546 17.659 3.717 17.675 3.717 17.675C4.922 17.759 5.556 18.911 5.556 18.911C6.626 20.746 8.361 20.216 9.048 19.91C9.155 19.14 9.466 18.609 9.81 18.305C7.145 17.988 4.344 16.993 4.344 12.095C4.344 10.71 4.809 9.494 5.579 8.569C5.455 8.27 5.044 6.985 5.696 5.247C5.696 5.247 6.704 4.909 8.997 6.483C9.954 6.207 10.98 6.069 12 6.064C13.02 6.069 14.047 6.207 15.006 6.483C17.297 4.909 18.303 5.247 18.303 5.247C18.956 6.985 18.545 8.27 18.421 8.569C19.192 9.494 19.656 10.709 19.656 12.095C19.656 16.999 16.849 17.988 14.177 18.305C14.607 18.67 14.991 19.33 14.991 20.369V22.787C14.991 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" />
                </svg>
              </div>
              <span className="text-[10px] md:text-xs font-medium text-green-300 dark:text-green-300 light:text-green-700">
                GitHub Copilot
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-4 md:mt-6 flex items-center justify-center gap-3 md:gap-4 flex-wrap">
          <a
            href="mailto:thanhtrung.1010.2k@gmail.com"
            className="flex items-center gap-1.5 text-xs md:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors group"
            aria-label="Email"
          >
            <FaEnvelope className="text-purple-400 dark:text-purple-400 light:text-purple-600 group-hover:scale-110 transition-transform w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline text-[10px] md:text-xs">
              thanhtrung.1010.2k@gmail.com
            </span>
          </a>
          <a
            href="tel:0948868324"
            className="flex items-center gap-1.5 text-xs md:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors group"
            aria-label="Phone"
          >
            <FaPhone className="text-purple-400 dark:text-purple-400 light:text-purple-600 group-hover:scale-110 transition-transform w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline text-[10px] md:text-xs">
              0948 868 324
            </span>
          </a>
          <a
            href="https://github.com/dev-to2k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs md:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors group"
            aria-label="GitHub"
          >
            <FaGithub className="text-purple-400 dark:text-purple-400 light:text-purple-600 group-hover:scale-110 transition-transform w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline text-[10px] md:text-xs">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/dev-to2k/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs md:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors group"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-purple-400 dark:text-purple-400 light:text-purple-600 group-hover:scale-110 transition-transform w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline text-[10px] md:text-xs">
              LinkedIn
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll down"
      >
        <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
          <svg
            className="w-4 h-4 md:w-6 md:h-6 text-purple-400 hover:text-purple-300 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>

      {/* Add gradient animation to CSS */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
