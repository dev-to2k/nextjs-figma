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
  SiJsonwebtokens,
  SiNextdotjs,
  SiOracle,
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
      case "TypeScript":
        return <SiTypescript className="text-blue-600" />;
      case "Next.js":
        return <SiNextdotjs className="text-white" />;
      case "Bootstrap":
        return <SiBootstrap className="text-purple-600" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-cyan-400" />;
      default:
        return null;
    }
  };
  return (
    <span className="tech-icon flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 hover:text-white dark:hover:text-white light:hover:text-zinc-900 hover:border-purple-500/50 dark:hover:border-purple-500/50 light:hover:border-purple-400/70 transition-all cursor-default">
      {getIcon(name)}
      <span className="text-sm dark:text-zinc-300 light:text-zinc-700">{name}</span>
    </span>
  );
};

export default function WorkExperience() {
  const containerRef = useRef<any>(null);
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

  const techStack = [
    "Java Spring Boot",
    "Angular",
    "Kafka",
    "MSSQL Stored Procedures",
    "Oracle",
    "JWT & Encryption",
    "TypeScript",
    "Next.js",
    "Bootstrap",
    "Tailwind CSS",
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".work-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".work-title", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".work-bottom",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".work-bottom", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".tech-icon",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: ".work-bottom", start: "top 75%" },
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
    <>
      <section
        id="experience"
        ref={containerRef}
        className="py-20 px-4 md:px-12 max-w-7xl mx-auto"
      >
        <div className="work-bottom flex flex-col items-center text-center">
          <p
            className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("workExperience.bottomText") }}
          />
          <h2 className="work-title text-2xl md:text-3xl font-bold text-white dark:text-white light:text-zinc-900 mb-12">
            {t("workExperience.title")}
          </h2>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-24 bg-purple-500/5 blur-3xl rounded-full -z-10"></div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5 items-center max-w-3xl">
              {techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>

            {/* Animated Lines SVG */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 -z-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                <defs>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g className="stroke-purple-500/10 stroke-1">
                  <path d="M50 0 Q 50 150 400 350" />
                  <path d="M200 0 Q 200 150 400 350" />
                  <path d="M350 0 Q 350 150 400 350" />
                  <path d="M500 0 Q 500 150 400 350" />
                  <path d="M650 0 Q 650 150 400 350" />
                  <path d="M750 0 Q 750 150 400 350" />
                </g>
                <g
                  className="stroke-[url(#glow)] stroke-3"
                  style={{ filter: "drop-shadow(0 0 4px #ec4899)" }}
                >
                  <path
                    d="M50 0 Q 50 150 400 350"
                    pathLength="1"
                    className="animate-flow-1"
                  />
                  <path
                    d="M200 0 Q 200 150 400 350"
                    pathLength="1"
                    className="animate-flow-2"
                  />
                  <path
                    d="M350 0 Q 350 150 400 350"
                    pathLength="1"
                    className="animate-flow-3"
                  />
                  <path
                    d="M500 0 Q 500 150 400 350"
                    pathLength="1"
                    className="animate-flow-1"
                  />
                  <path
                    d="M650 0 Q 650 150 400 350"
                    pathLength="1"
                    className="animate-flow-2"
                  />
                  <path
                    d="M750 0 Q 750 150 400 350"
                    pathLength="1"
                    className="animate-flow-3"
                  />
                </g>
              </svg>
            </div>
            <style jsx>{`
              .animate-flow-1 {
                stroke-dasharray: 0.3 1;
                stroke-dashoffset: 1;
                animation: flow 3s linear infinite;
              }
              .animate-flow-2 {
                stroke-dasharray: 0.3 1;
                stroke-dashoffset: 1;
                animation: flow 3s linear infinite 0.5s;
              }
              .animate-flow-3 {
                stroke-dasharray: 0.3 1;
                stroke-dashoffset: 1;
                animation: flow 3s linear infinite 1s;
              }
              @keyframes flow {
                0% {
                  stroke-dashoffset: 1;
                }
                100% {
                  stroke-dashoffset: -0.3;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

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
                      {t("workExperience.addressLabel")}
                    </h3>
                    <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-600">{t("workExperience.address")}</p>
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
    </>
  );
}
