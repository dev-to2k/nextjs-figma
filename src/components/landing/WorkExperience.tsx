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

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

const SectionReveal: React.FC<SectionRevealProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`section-reveal ${className}`}>
      {children}
    </div>
  );
};

const TechBadge = ({ name }: { name: string }) => {
  const getIcon = (techName: string) => {
    switch (techName) {
      case "Java Spring Boot":
        return <SiSpringboot className="text-primary/70" />;
      case "Angular":
        return <SiAngular className="text-primary/60" />;
      case "Kafka":
        return <SiApachekafka className="text-foreground/80" />;
      case "MSSQL Stored Procedures":
        return <DiMsqlServer className="text-primary/50" />;
      case "Oracle":
        return <SiOracle className="text-primary/65" />;
      case "JWT & Encryption":
        return <SiJsonwebtokens className="text-foreground/70" />;
      case "TypeScript":
        return <SiTypescript className="text-primary/70" />;
      case "Next.js":
        return <SiNextdotjs className="text-foreground" />;
      case "Bootstrap":
        return <SiBootstrap className="text-primary/55" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-primary/75" />;
      default:
        return null;
    }
  };
  return (
    <span className="tech-icon flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group">
      {getIcon(name)}
      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{name}</span>
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
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".work-title", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".work-bottom",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".work-bottom", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".tech-icon",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
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
        { scale: 0.95, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out",
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
        <SectionReveal>
          <div className="work-bottom flex flex-col items-center text-center">
            <p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("workExperience.bottomText") }}
            />
            <h2 className="work-title text-2xl md:text-3xl font-bold text-foreground mb-12">
              {t("workExperience.title")}
            </h2>

            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-24 bg-primary/5 blur-3xl rounded-full -z-10"></div>
              <div className="flex flex-wrap justify-center gap-4 md:gap-5 items-center max-w-3xl">
                {techStack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Map Modal */}
      {showMapModal && (
          <div
            ref={modalRef}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
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
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 border border-border flex items-center justify-center transition-all flex-shrink-0 hover:border-border/50"
                  >
                    <FaTimes className="text-foreground" />
                  </button>
                </div>
                
                {/* Tab Navigation */}
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => setActiveTab("map")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === "map"
                        ? "bg-primary/20 text-primary border border-primary/50"
                        : "bg-muted text-muted-foreground border border-border hover:bg-muted/80"
                    }`}
                  >
                    🗺️ Map
                  </button>
                  <button
                    onClick={() => setActiveTab("images")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === "images"
                        ? "bg-primary/20 text-primary border border-primary/50"
                        : "bg-muted text-muted-foreground border border-border hover:bg-muted/80"
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
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs font-semibold text-foreground">Location</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-[500px] bg-muted">
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
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-background/80 hover:bg-background border border-border flex items-center justify-center transition-all backdrop-blur-sm hover:border-primary/50"
                        >
                          <span className="text-foreground text-xl">‹</span>
                        </button>
                        <button
                          onClick={() =>
                            setCurrentImageIndex(
                              (prev) => (prev + 1) % companyImages.length
                            )
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-background/80 hover:bg-background border border-border flex items-center justify-center transition-all backdrop-blur-sm hover:border-primary/50"
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
                                ? "bg-primary w-6"
                                : "bg-border hover:bg-primary/50"
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
