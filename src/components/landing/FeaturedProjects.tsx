"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { DiMsqlServer } from "react-icons/di";
import { FaGlobe, FaTimes } from "react-icons/fa";
import {
  SiAngular,
  SiApachekafka,
  SiBootstrap,
  SiFramer,
  SiJsonwebtokens,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const TechBadge = ({ name }: { name: string }) => {
  const getIcon = (techName: string) => {
    switch (techName) {
      case "Java Spring Boot":
        return <SiSpringboot className="text-foreground/50" />;
      case "Angular":
        return <SiAngular className="text-foreground/50" />;
      case "Kafka":
        return <SiApachekafka className="text-foreground/50" />;
      case "MSSQL Stored Procedures":
        return <DiMsqlServer className="text-foreground/50" />;
      case "Oracle":
        return <SiOracle className="text-foreground/50" />;
      case "JWT & Encryption":
        return <SiJsonwebtokens className="text-foreground/50" />;
      case "Bootstrap":
        return <SiBootstrap className="text-foreground/50" />;
      case "React":
        return <SiReact className="text-foreground/50" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-foreground/50" />;
      case "Next.js":
        return <SiNextdotjs className="text-foreground/70" />;
      case "TypeScript":
        return <SiTypescript className="text-foreground/50" />;
      case "Framer Motion":
        return <SiFramer className="text-foreground/50" />;
      case "Node.js":
        return <SiNodedotjs className="text-foreground/50" />;
      default:
        return null;
    }
  };

  return (
    <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary border border-border hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-300 cursor-default group">
      {getIcon(name)}
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {name}
      </span>
    </span>
  );
};

export default function FeaturedProjects() {
  const containerRef = useRef(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useTranslation();
  const [showMapModal, setShowMapModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeTab, setActiveTab] = useState<"map" | "images">("map");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const companyImages = [
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSytXjy0fxF2dx_32B94Asl9vTWOND98y0dKP2BAmnCnkZcV1trgObLorGCEmnrsURsJUs_foWUad-9qhFSdIt2-MtIAMr6elni4UJHbzmdEtBaJoLo0J_7kq3MqtVhSEQ9p_MDI=s483-k-no",
  ];

  useGSAP(
    () => {
      const projects = gsap.utils.toArray(".project-row");
      projects.forEach((project: any) => {
        gsap.fromTo(
          project,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
            },
          },
        );
      });

      // Timeline line animation
      gsap.fromTo(
        ".timeline-line",
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%",
          },
        },
      );

      // Timeline dots animation
      gsap.fromTo(
        ".timeline-dot",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (showMapModal && modalRef.current && modalContentRef.current) {
      gsap.fromTo(
        modalRef.current,
        { backdropFilter: "blur(0px)", opacity: 0 },
        {
          backdropFilter: "blur(12px)",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
      );
      gsap.fromTo(
        modalContentRef.current,
        { scale: 0.9, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "back.out(1.2)",
          delay: 0.1,
        },
      );
    }
  }, [showMapModal]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 px-4 md:px-12 max-w-7xl mx-auto"
    >
      <div className="relative flex flex-col gap-32">
        {/* Timeline Container */}
        <div className="timeline-container absolute left-1/2 -translate-x-1/2 w-px h-full top-0 hidden lg:block pointer-events-none">
          <div className="timeline-line absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/5 origin-top"></div>

          {/* Timeline Dots */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="timeline-dot relative">
              <div className="w-3 h-3 rounded-full bg-foreground border-2 border-background shadow-[0_0_12px_rgba(var(--foreground),0.3)]"></div>
              <div className="absolute inset-0 rounded-full bg-foreground/30 animate-ping"></div>
            </div>
          </div>
          <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="timeline-dot relative">
              <div className="w-3 h-3 rounded-full bg-foreground/60 border-2 border-background shadow-[0_0_12px_rgba(var(--foreground),0.15)]"></div>
              <div className="absolute inset-0 rounded-full bg-foreground/20 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* ═══════════════ Project 1 - EDM Agent ═══════════════ */}
        <div className="project-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
          <div className="order-2 lg:order-1">
            <h4 className="text-foreground/60 font-semibold mb-2 tracking-widest uppercase text-xs">
              {t("projects.featured")}
            </h4>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tight">
              {t("edmAgent.title")}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm mb-6 font-mono">
              <span className="flex items-center gap-2">
                <div className="p-1 rounded-sm relative w-8 h-8 flex items-center justify-center">
                  <Image
                    src="https://companieslogo.com/img/orig/G.MI-a0608447.png?t=1720244491"
                    alt="Generali"
                    fill
                    className="object-contain p-0.5 grayscale"
                  />
                </div>
                {t("edmAgent.company")}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-foreground/20" />
              <span className="flex items-center gap-2">
                <span>📅</span> {t("edmAgent.date")}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-foreground/20" />
              <span className="flex items-center gap-2">
                <span>👥</span> {t("edmAgent.team")}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-foreground/20" />
              <span className="flex items-center gap-2">
                <span>👨‍💻</span> {t("edmAgent.role")}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-foreground/20" />
              {/* Globe Button with Tooltip */}
              <div className="relative">
                <button
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => setShowMapModal(true)}
                  className="w-8 h-8 rounded-lg bg-secondary border border-border hover:border-foreground/30 flex items-center justify-center transition-all hover:scale-110 cursor-pointer group/globe"
                >
                  <FaGlobe className="text-base text-muted-foreground group-hover/globe:text-foreground transition-colors" />
                </button>

                {/* Tooltip */}
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-card border border-border rounded-xl whitespace-nowrap shadow-2xl pointer-events-none z-50">
                    <div className="text-sm text-foreground font-medium mb-0.5">
                      {locale === "en"
                        ? require("../../../public/locales/en.json")
                            .workExperience.addressLabel
                        : require("../../../public/locales/vi.json")
                            .workExperience.addressLabel}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {locale === "en"
                        ? require("../../../public/locales/en.json")
                            .workExperience.address
                        : require("../../../public/locales/vi.json")
                            .workExperience.address}
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-card" />
                  </div>
                )}
              </div>
            </div>

            {/* Description card */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border mb-6 hover:border-foreground/15 transition-all duration-500 z-10 group/card">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent rounded-2xl -z-10" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("edmAgent.description")}
              </p>

              <details className="group/details">
                <summary className="flex items-center gap-2 text-foreground/70 text-sm font-medium cursor-pointer hover:text-foreground transition-colors select-none">
                  <span>{t("projects.viewDetails")}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-open/details:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-4 pl-4 border-l border-foreground/10 space-y-2 text-sm text-muted-foreground">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: t(`edmAgent.details.point${i}`),
                      }}
                    />
                  ))}
                </div>
              </details>
            </div>

            <div className="flex flex-wrap gap-2.5 text-sm font-mono">
              <TechBadge name="Java Spring Boot" />
              <TechBadge name="Next.js" />
              <TechBadge name="React" />
              <TechBadge name="Angular" />
              <TechBadge name="Kafka" />
              <TechBadge name="MSSQL Stored Procedures" />
              <TechBadge name="Oracle" />
              <TechBadge name="JWT & Encryption" />
              <TechBadge name="Bootstrap" />
            </div>
          </div>

          {/* Project 1 Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent" />

              {/* Window Title Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-secondary flex items-center justify-between px-3 border-b border-border">
                <span className="text-[10px] text-muted-foreground font-mono">
                  Sales Activity Management System
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10 border border-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10 border border-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/30 border border-foreground/20" />
                </div>
              </div>

              {/* Action Bar */}
              <div className="absolute top-8 left-0 right-0 h-12 bg-secondary/50 border-b border-border flex items-center px-4 gap-4">
                <div className="flex flex-col items-center gap-1 opacity-80">
                  <div className="w-4 h-4 bg-foreground/20 rounded-sm" />
                  <div className="w-8 h-1 bg-foreground/10 rounded-full" />
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-foreground/5 rounded-sm border border-border" />
                  <div className="w-6 h-6 bg-foreground/5 rounded-sm border border-border" />
                  <div className="w-6 h-6 bg-foreground/5 rounded-sm border border-border" />
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-foreground/10 border border-foreground/10 rounded text-[8px] text-foreground/60">
                    Promote
                  </div>
                  <div className="px-2 py-1 bg-foreground/5 border border-border rounded text-[8px] text-muted-foreground">
                    Demote
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="absolute top-20 inset-0 p-4 bg-background">
                <div className="flex gap-4 h-full">
                  {/* Sidebar */}
                  <div className="w-1/4 h-full bg-secondary rounded-lg border border-border p-2 flex flex-col gap-2">
                    <div className="w-full h-2 bg-foreground/10 rounded" />
                    <div className="w-3/4 h-2 bg-foreground/10 rounded" />
                    <div className="w-full h-2 bg-foreground/10 rounded" />
                    <div className="w-5/6 h-2 bg-foreground/10 rounded" />
                  </div>
                  {/* Data Grid */}
                  <div className="flex-1 h-full bg-secondary rounded-lg border border-border p-2">
                    <div className="grid grid-cols-4 gap-2 mb-2 border-b border-border pb-2">
                      <div className="h-2 bg-foreground/15 rounded" />
                      <div className="h-2 bg-foreground/15 rounded" />
                      <div className="h-2 bg-foreground/15 rounded" />
                      <div className="h-2 bg-foreground/15 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-foreground/5 rounded w-full" />
                      <div className="h-2 bg-foreground/5 rounded w-full" />
                      <div className="h-2 bg-foreground/5 rounded w-full" />
                      <div className="h-2 bg-foreground/5 rounded w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-4 bg-foreground/5 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>

        {/* ═══════════════ Project 2 - EDM (Security) ═══════════════ */}
        <div className="project-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group relative z-10">
          <div className="order-2 lg:order-1">
            <h4 className="text-foreground/60 font-semibold mb-2 tracking-widest uppercase text-xs">
              {t("projects.featured")}
            </h4>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tight">
              {t("edmProject.title") || "Enterprise Document Management (EDM)"}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm mb-6 font-mono">
              <span className="flex items-center gap-2">
                <div className="p-1 rounded-sm relative w-8 h-8 flex items-center justify-center">
                  <Image
                    src="https://companieslogo.com/img/orig/G.MI-a0608447.png?t=1720244491"
                    alt="Generali"
                    fill
                    className="object-contain p-0.5 grayscale"
                  />
                </div>
                {t("edmProject.company") || "Generali Vietnam"}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-foreground/20" />
              <span className="flex items-center gap-2">
                <span>📅</span> {t("edmProject.date") || "Jun 2023 - Present"}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-foreground/20" />
              <span className="flex items-center gap-2">
                <span>👥</span> {t("edmProject.team") || "Team: 4"}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-foreground/20" />
              <span className="flex items-center gap-2">
                <span>👨‍💻</span>{" "}
                {t("edmProject.role") || "Role: Core System Builder"}
              </span>
            </div>

            {/* Description card */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border mb-6 hover:border-foreground/15 transition-all duration-500 z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent rounded-2xl -z-10" />
              <p
                className="text-muted-foreground leading-relaxed mb-4"
                dangerouslySetInnerHTML={{
                  __html:
                    t("edmProject.description") ||
                    "A secure document management system focusing on Security & Data Optimization.",
                }}
              />

              <details className="group/details">
                <summary className="flex items-center gap-2 text-foreground/70 text-sm font-medium cursor-pointer hover:text-foreground transition-colors select-none">
                  <span>{t("projects.viewDetails")}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-open/details:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-4 pl-4 border-l border-foreground/10 space-y-2 text-sm text-muted-foreground">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: t(`edmProject.details.point${i}`) || "",
                      }}
                    />
                  ))}
                </div>
              </details>
            </div>

            <div className="flex flex-wrap gap-2.5 text-sm font-mono">
              <TechBadge name="Java Spring Boot" />
              <TechBadge name="Angular" />
              <TechBadge name="Oracle" />
              <TechBadge name="JWT & Encryption" />
            </div>
          </div>

          {/* Project 2 Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent" />

              {/* Window Title Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-secondary flex items-center justify-between px-3 border-b border-border">
                <span className="text-[10px] text-muted-foreground font-mono">
                  Enterprise Document Management (EDM)
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10 border border-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10 border border-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/30 border border-foreground/20" />
                </div>
              </div>

              {/* Action Bar */}
              <div className="absolute top-8 left-0 right-0 h-12 bg-secondary/50 border-b border-border flex items-center px-4 gap-4">
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-foreground/10 border border-foreground/10 rounded text-[8px] text-foreground/60">
                    Search
                  </div>
                  <div className="px-2 py-1 bg-foreground/5 border border-border rounded text-[8px] text-muted-foreground">
                    Upload
                  </div>
                  <div className="px-2 py-1 bg-foreground/5 border border-border rounded text-[8px] text-muted-foreground">
                    Download
                  </div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="flex-1 h-6 bg-foreground/5 rounded border border-border px-2 flex items-center">
                  <span className="text-[8px] text-muted-foreground">
                    🔍 Search documents...
                  </span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="absolute top-20 inset-0 p-4 bg-background">
                <div className="flex gap-4 h-full">
                  {/* Document List */}
                  <div className="flex-1 h-full bg-secondary rounded-lg border border-border p-2">
                    <div className="grid grid-cols-5 gap-2 mb-2 border-b border-border pb-2">
                      <div className="h-2 bg-foreground/15 rounded" />
                      <div className="h-2 bg-foreground/15 rounded col-span-2" />
                      <div className="h-2 bg-foreground/15 rounded" />
                      <div className="h-2 bg-foreground/15 rounded" />
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <div className="w-4 h-4 bg-foreground/10 rounded" />
                          <div className="h-2 bg-foreground/5 rounded flex-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Preview Panel */}
                  <div className="w-1/3 h-full bg-secondary rounded-lg border border-border p-2 flex flex-col gap-2">
                    <div className="w-full h-16 bg-foreground/5 rounded-lg flex items-center justify-center">
                      <span className="text-[8px] text-muted-foreground">
                        📄 Preview
                      </span>
                    </div>
                    <div className="w-full h-2 bg-foreground/10 rounded" />
                    <div className="w-3/4 h-2 bg-foreground/10 rounded" />
                  </div>
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-4 bg-foreground/5 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>

      {/* ═══════════════ Map Modal ═══════════════ */}
      {showMapModal && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-background/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowMapModal(false)}
        >
          <div
            ref={modalContentRef}
            className="relative bg-card border border-border rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-border">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {locale === "en"
                      ? require("../../../public/locales/en.json")
                          .workExperience.addressLabel
                      : require("../../../public/locales/vi.json")
                          .workExperience.addressLabel}
                  </h3>
                  <p className="text-muted-foreground">
                    {locale === "en"
                      ? require("../../../public/locales/en.json")
                          .workExperience.address
                      : require("../../../public/locales/vi.json")
                          .workExperience.address}
                  </p>
                </div>
                <button
                  onClick={() => setShowMapModal(false)}
                  className="w-10 h-10 rounded-xl bg-secondary hover:bg-muted border border-border hover:border-foreground/20 flex items-center justify-center transition-all flex-shrink-0"
                >
                  <FaTimes className="text-foreground" />
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setActiveTab("map")}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "map"
                      ? "bg-foreground text-background border border-foreground"
                      : "bg-secondary text-muted-foreground border border-border hover:bg-muted"
                  }`}
                >
                  🗺️ Map
                </button>
                <button
                  onClick={() => setActiveTab("images")}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "images"
                      ? "bg-foreground text-background border border-foreground"
                      : "bg-secondary text-muted-foreground border border-border hover:bg-muted"
                  }`}
                >
                  📸 Images
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "map" ? (
              <div className="relative h-[500px]">
                <iframe
                  src="https://www.google.com/maps?q=10.786838292312446,106.68577731533401&hl=vi&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-foreground">
                      Location
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-[500px] bg-secondary">
                {companyImages.length > 0 && (
                  <>
                    <div className="relative w-full h-full">
                      <Image
                        src={companyImages[currentImageIndex]}
                        alt={`Company Introduction ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Navigation Arrows */}
                    {companyImages.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setCurrentImageIndex(
                              (prev) =>
                                (prev - 1 + companyImages.length) %
                                companyImages.length,
                            )
                          }
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-background/80 hover:bg-background border border-border flex items-center justify-center transition-all backdrop-blur-sm"
                        >
                          <span className="text-foreground text-xl">‹</span>
                        </button>
                        <button
                          onClick={() =>
                            setCurrentImageIndex(
                              (prev) => (prev + 1) % companyImages.length,
                            )
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-background/80 hover:bg-background border border-border flex items-center justify-center transition-all backdrop-blur-sm"
                        >
                          <span className="text-foreground text-xl">›</span>
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {companyImages.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {companyImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-foreground w-6"
                                : "bg-foreground/30 hover:bg-foreground/50"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
