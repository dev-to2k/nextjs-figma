"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
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
import { DiMsqlServer } from "react-icons/di";

gsap.registerPlugin(ScrollTrigger);

const TechBadge = ({ name }: { name: string }) => {
  const getIcon = (techName: string) => {
    switch (techName) {
      case "Java Spring Boot":
        return <SiSpringboot className="text-green-500" />;
      case "Angular":
        return <SiAngular className="text-red-500" />;
      case "Kafka":
        return <SiApachekafka className="text-white" />;
      case "MSSQL Stored Procedures":
        return <DiMsqlServer className="text-blue-500" />;
      case "Oracle":
        return <SiOracle className="text-red-600" />;
      case "JWT & Encryption":
        return <SiJsonwebtokens className="text-pink-500" />;
      case "Bootstrap":
        return <SiBootstrap className="text-purple-600" />;
      case "React":
        return <SiReact className="text-blue-400" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-cyan-400" />;
      case "Next.js":
        return <SiNextdotjs className="text-white" />;
      case "TypeScript":
        return <SiTypescript className="text-blue-500" />;
      case "Framer Motion":
        return <SiFramer className="text-purple-500" />;
      case "Node.js":
        return <SiNodedotjs className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 dark:bg-white/5 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 hover:text-white dark:hover:text-white light:hover:text-zinc-900 hover:border-purple-500/50 dark:hover:border-purple-500/50 light:hover:border-purple-400/70 transition-colors cursor-default">
      {getIcon(name)}
      <span className="dark:text-zinc-300 light:text-zinc-700">{name}</span>
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
          }
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
        }
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
        }
      );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (showMapModal && modalRef.current && modalContentRef.current) {
      gsap.fromTo(
        modalRef.current,
        { backdropFilter: "blur(0px)", opacity: 0 },
        {
          backdropFilter: "blur(8px)",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        modalContentRef.current,
        { scale: 0.8, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "back.out(1.2)",
          delay: 0.1,
        }
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
          <div className="timeline-line absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-500/30 via-purple-500/20 to-purple-500/10 origin-top"></div>
          
          {/* Timeline Dots */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="timeline-dot relative">
              <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-red-400 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
              <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75"></div>
            </div>
          </div>
          <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="timeline-dot relative">
              <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
              <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75"></div>
            </div>
          </div>
        </div>

        {/* Project 1 - EDM Agent (Latest) */}
        <div className="project-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
          <div className="order-2 lg:order-1">
            <h4 className="text-red-500 font-semibold mb-2 tracking-wide uppercase text-sm">
              {t("projects.featured")}
            </h4>
            <h3 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-zinc-900 mb-2">
              {t("edmAgent.title")}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm mb-6 font-mono">
              <span className="flex items-center gap-2">
                <div className="p-1 rounded-sm relative w-8 h-8 flex items-center justify-center">
                  <Image
                    src="https://companieslogo.com/img/orig/G.MI-a0608447.png?t=1720244491"
                    alt="Generali"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                {t("edmAgent.company")}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-600"></span>
              <span className="flex items-center gap-2">
                <span className="text-red-500">📅</span> {t("edmAgent.date")}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-600"></span>
              <span className="flex items-center gap-2">
                <span className="text-red-500">👥</span> {t("edmAgent.team")}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-600"></span>
              <span className="flex items-center gap-2">
                <span className="text-red-500">👨‍💻</span> {t("edmAgent.role")}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-600"></span>
              {/* Globe Button with Tooltip */}
              <div className="relative">
                <button
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => setShowMapModal(true)}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all hover:scale-110 cursor-pointer group"
                >
                  <FaGlobe className="text-lg text-purple-400 group-hover:text-purple-300 transition-colors" />
                </button>

                {/* Tooltip */}
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-zinc-900 border border-purple-500/30 rounded-lg whitespace-nowrap shadow-lg pointer-events-none z-50">
                    <div className="text-sm text-white font-semibold mb-1">
                      {locale === "en" 
                        ? require("../../../public/locales/en.json").workExperience.addressLabel
                        : require("../../../public/locales/vi.json").workExperience.addressLabel}
                    </div>
                    <div className="text-xs text-zinc-300">
                      {locale === "en" 
                        ? require("../../../public/locales/en.json").workExperience.address
                        : require("../../../public/locales/vi.json").workExperience.address}
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-zinc-900"></div>
                  </div>
                )}
              </div>
            </div>

            <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-zinc-50 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-zinc-200 mb-6 hover:border-red-500/30 dark:hover:border-red-500/30 light:hover:border-red-400/50 transition-colors z-10">
              <div className="absolute inset-0 bg-linear-to-br from-red-500/10 dark:from-red-500/10 light:from-red-400/5 to-transparent rounded-2xl -z-10"></div>
              <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed mb-4">
                {t("edmAgent.description")}
              </p>

              <details className="group">
                <summary className="flex items-center gap-2 text-red-400 text-sm font-medium cursor-pointer hover:text-red-300 transition-colors select-none">
                  <span>{t("projects.viewDetails")}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-open:rotate-180"
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
                <div className="mt-4 pl-4 border-l-2 border-red-500/20 dark:border-red-500/20 light:border-red-400/30 space-y-2 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("edmAgent.details.point1"),
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("edmAgent.details.point2"),
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("edmAgent.details.point3"),
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("edmAgent.details.point4"),
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("edmAgent.details.point5"),
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("edmAgent.details.point6"),
                    }}
                  ></p>
                </div>
              </details>
            </div>

            <div className="flex flex-wrap gap-4 text-zinc-400 text-sm font-mono">
              <TechBadge name="Java Spring Boot" />
              <TechBadge name="Angular" />
              <TechBadge name="Kafka" />
              <TechBadge name="MSSQL Stored Procedures" />
              <TechBadge name="Oracle" />
              <TechBadge name="JWT & Encryption" />
              <TechBadge name="Bootstrap" />
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Image Placeholder - Windows Style UI */}
            <div className="aspect-video rounded-xl overflow-hidden bg-[#1a0505] border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 relative">
              <div className="absolute inset-0 bg-linear-to-br from-red-900/20 to-transparent"></div>

              {/* Windows Title Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#2a0a0a] flex items-center justify-between px-3 border-b border-white/5">
                <span className="text-[10px] text-zinc-400 font-sans">
                  EDM Agent Management System
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
              </div>

              {/* Action Bar (Ribbon) */}
              <div className="absolute top-8 left-0 right-0 h-12 bg-[#1f0808] border-b border-white/5 flex items-center px-4 gap-4">
                <div className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 cursor-pointer">
                  <div className="w-4 h-4 bg-red-500/80 rounded-sm"></div>
                  <div className="w-8 h-1 bg-zinc-600 rounded-full"></div>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-white/10 rounded-sm border border-white/5"></div>
                  <div className="w-6 h-6 bg-white/10 rounded-sm border border-white/5"></div>
                  <div className="w-6 h-6 bg-white/10 rounded-sm border border-white/5"></div>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-[8px] text-red-300">
                    Promote
                  </div>
                  <div className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[8px] text-zinc-400">
                    Demote
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="absolute top-20 inset-0 p-4 bg-[#0f0303]">
                <div className="flex gap-4 h-full">
                  {/* Sidebar */}
                  <div className="w-1/4 h-full bg-white/5 rounded border border-white/5 p-2 flex flex-col gap-2">
                    <div className="w-full h-2 bg-white/10 rounded"></div>
                    <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                    <div className="w-full h-2 bg-white/10 rounded"></div>
                    <div className="w-5/6 h-2 bg-white/10 rounded"></div>
                  </div>
                  {/* Data Grid */}
                  <div className="flex-1 h-full bg-white/5 rounded border border-white/5 p-2">
                    <div className="grid grid-cols-4 gap-2 mb-2 border-b border-white/5 pb-2">
                      <div className="h-2 bg-red-500/20 rounded"></div>
                      <div className="h-2 bg-red-500/20 rounded"></div>
                      <div className="h-2 bg-red-500/20 rounded"></div>
                      <div className="h-2 bg-red-500/20 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/5 rounded w-full"></div>
                      <div className="h-2 bg-white/5 rounded w-full"></div>
                      <div className="h-2 bg-white/5 rounded w-full"></div>
                      <div className="h-2 bg-white/5 rounded w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-red-600/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Project 2 - Portal Craft */}
        <div className="project-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group relative z-10">
          <div className="order-2 lg:order-1">
            <h4 className="text-blue-500 font-semibold mb-2 tracking-wide uppercase text-sm">
              {t("projects.featured")}
            </h4>
            <h3 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-zinc-900 mb-2">
              {t("portalCraft.title") || "E-commerce Applications"}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm mb-6 font-mono">
              <span className="flex items-center gap-2">
                <span className="text-blue-500">🏢</span>
                {t("portalCraft.company") || "Portal Craft"}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-600"></span>
              <span className="flex items-center gap-2">
                <span className="text-blue-500">📅</span> {t("portalCraft.date") || "2022 - 2024"}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-600"></span>
              <span className="flex items-center gap-2">
                <span className="text-blue-500">👥</span> {t("portalCraft.team") || "Team: 3-5"}
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-600"></span>
              <span className="flex items-center gap-2">
                <span className="text-blue-500">👨‍💻</span> {t("portalCraft.role") || "Role: Frontend Developer (Remote)"}
              </span>
            </div>

            <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-zinc-50 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-zinc-200 mb-6 hover:border-blue-500/30 dark:hover:border-blue-500/30 light:hover:border-blue-400/50 transition-colors z-10">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 dark:from-blue-500/10 light:from-blue-400/5 to-transparent rounded-2xl -z-10"></div>
              <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed mb-4">
                {t("portalCraft.description") || "Developed multiple e-commerce applications with Lazada integration, focusing on group buying features and seamless shopping experiences. Built with ReactJS and Node.js support."}
              </p>

              <details className="group">
                <summary className="flex items-center gap-2 text-blue-400 text-sm font-medium cursor-pointer hover:text-blue-300 transition-colors select-none">
                  <span>{t("projects.viewDetails")}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-open:rotate-180"
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
                <div className="mt-4 pl-4 border-l-2 border-blue-500/20 space-y-2 text-sm text-zinc-400">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("portalCraft.details.point1") || "Developed <strong>Co-bee</strong> e-commerce app with <strong>Lazada integration</strong> for seamless product synchronization and order management.",
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("portalCraft.details.point2") || "Built <strong>Co-hoot</strong> e-commerce platform with advanced shopping features and Lazada marketplace connectivity.",
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("portalCraft.details.point3") || "Implemented <strong>Buy Together</strong> feature for group purchasing, enabling users to join groups and share deals on Co-bee platform.",
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("portalCraft.details.point4") || "Utilized <strong>ReactJS</strong> for frontend development with focus on performance and user experience.",
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("portalCraft.details.point5") || "Provided <strong>Node.js</strong> support for backend integration and API development.",
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("portalCraft.details.point6") || "Worked <strong>remotely</strong> in a distributed team environment, ensuring effective communication and collaboration.",
                    }}
                  ></p>
                </div>
              </details>
            </div>

            <div className="flex flex-wrap gap-4 text-zinc-400 text-sm font-mono">
              <TechBadge name="React" />
              <TechBadge name="Node.js" />
              <TechBadge name="Bootstrap" />
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Image Placeholder - E-commerce UI */}
            <div className="aspect-video rounded-xl overflow-hidden bg-[#050a1a] border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-transparent"></div>

              {/* Browser Title Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#0a1528] flex items-center justify-between px-3 border-b border-white/5">
                <span className="text-[10px] text-zinc-400 font-sans">
                  Co-bee / Co-hoot E-commerce Platform
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="absolute top-8 inset-0 p-4 bg-[#030510]">
                <div className="flex flex-col gap-3 h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-16 h-8 bg-blue-500/20 rounded border border-blue-500/30"></div>
                      <div className="w-20 h-8 bg-white/5 rounded border border-white/10"></div>
                    </div>
                    <div className="w-24 h-8 bg-white/5 rounded border border-white/10"></div>
                  </div>
                  
                  {/* Product Grid */}
                  <div className="grid grid-cols-3 gap-2 flex-1">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="bg-white/5 rounded border border-white/10 p-2">
                        <div className="w-full h-16 bg-white/10 rounded mb-2"></div>
                        <div className="h-2 bg-white/10 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-white/10 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      {showMapModal && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black/80 dark:bg-black/80 light:bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowMapModal(false)}
        >
          <div
            ref={modalContentRef}
            className="relative bg-gradient-to-br from-[#2a1b3d] to-[#1a1025] dark:from-[#2a1b3d] dark:to-[#1a1025] light:from-white light:to-zinc-50 border border-purple-500/30 dark:border-purple-500/30 light:border-purple-400/50 rounded-2xl overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-white/10 dark:border-white/10 light:border-zinc-200">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 mb-1">
                    {locale === "en" 
                      ? require("../../../public/locales/en.json").workExperience.addressLabel
                      : require("../../../public/locales/vi.json").workExperience.addressLabel}
                  </h3>
                  <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-600">
                    {locale === "en" 
                      ? require("../../../public/locales/en.json").workExperience.address
                      : require("../../../public/locales/vi.json").workExperience.address}
                  </p>
                </div>
                <button
                  onClick={() => setShowMapModal(false)}
                  className="w-10 h-10 rounded-full bg-white/5 dark:bg-white/5 light:bg-zinc-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-zinc-200 border border-white/10 dark:border-white/10 light:border-zinc-300 hover:border-purple-500/50 dark:hover:border-purple-500/50 light:hover:border-purple-400/70 flex items-center justify-center transition-all flex-shrink-0"
                >
                  <FaTimes className="text-white dark:text-white light:text-zinc-900" />
                </button>
              </div>
              
              {/* Tab Navigation */}
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setActiveTab("map")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === "map"
                      ? "bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-100 text-purple-300 dark:text-purple-300 light:text-purple-700 border border-purple-500/50 dark:border-purple-500/50 light:border-purple-400/70"
                      : "bg-white/5 dark:bg-white/5 light:bg-zinc-100 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 border border-white/10 dark:border-white/10 light:border-zinc-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-zinc-200"
                  }`}
                >
                  🗺️ Map
                </button>
                <button
                  onClick={() => setActiveTab("images")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === "images"
                      ? "bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-100 text-purple-300 dark:text-purple-300 light:text-purple-700 border border-purple-500/50 dark:border-purple-500/50 light:border-purple-400/70"
                      : "bg-white/5 dark:bg-white/5 light:bg-zinc-100 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 border border-white/10 dark:border-white/10 light:border-zinc-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-zinc-200"
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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-zinc-800">Location</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-[500px] bg-zinc-900">
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
                              (prev) => (prev - 1 + companyImages.length) % companyImages.length
                            )
                          }
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 flex items-center justify-center transition-all backdrop-blur-sm"
                        >
                          <span className="text-white text-xl">‹</span>
                        </button>
                        <button
                          onClick={() =>
                            setCurrentImageIndex(
                              (prev) => (prev + 1) % companyImages.length
                            )
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 flex items-center justify-center transition-all backdrop-blur-sm"
                        >
                          <span className="text-white text-xl">›</span>
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
                                ? "bg-purple-400 w-6"
                                : "bg-white/30 hover:bg-white/50"
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
