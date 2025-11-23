"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const container = useRef(null);
  const { t } = useTranslation();

  useGSAP(
    () => {
      gsap.to(".orbit-ring-1", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(".orbit-ring-2", {
        rotation: -360,
        duration: 40,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(".orbit-ring-3", {
        rotation: 360,
        duration: 50,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(".central-orb", {
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  return (
    <footer
      id="contact"
      ref={container}
      className="relative w-full py-20 overflow-hidden flex flex-col items-center justify-center min-h-[400px]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/20 blur-[100px] rounded-full -z-10"></div>

      {/* Connecting Lines from Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 overflow-hidden pointer-events-none">
        <div className="w-px h-full bg-linear-to-b from-purple-500/20 to-transparent absolute left-1/2 -translate-x-1/2"></div>
        <div className="w-px h-full bg-linear-to-b from-purple-500/10 to-transparent absolute left-[45%] -translate-x-1/2 skew-x-12 origin-top"></div>
        <div className="w-px h-full bg-linear-to-b from-purple-500/10 to-transparent absolute left-[55%] -translate-x-1/2 -skew-x-12 origin-top"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center">
        {/* Central Orb */}
        <div className="central-orb relative w-24 h-24 md:w-32 md:h-32 bg-linear-to-b from-purple-600 to-purple-900 rounded-full shadow-[0_0_50px_rgba(168,85,247,0.6)] flex items-center justify-center z-20">
          {/* Inner Glow */}
          <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-md"></div>

          {/* Logo Symbol */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-30 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          >
            <path
              d="M10 10 L30 10 L10 30 L30 30"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Orbit Rings */}
        <div className="orbit-ring-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] border border-purple-500/20 rounded-[100%]"></div>
        <div className="orbit-ring-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[120px] border border-purple-500/10 rounded-[100%]"></div>
        <div className="orbit-ring-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[140px] border border-purple-500/5 rounded-[100%]"></div>

        {/* Orbiting Particles (Static for now, could be animated) */}
        <div className="orbit-ring-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_5px_#a855f7]"></div>
          <div className="absolute bottom-[20%] right-[15%] w-1 h-1 bg-purple-500/50 rounded-full"></div>
        </div>
        <div className="orbit-ring-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[120px] pointer-events-none">
          <div className="absolute top-[50%] -right-0.5 w-1.5 h-1.5 bg-white/80 rounded-full shadow-[0_0_5px_white]"></div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 mt-16 w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white dark:text-white light:text-zinc-900 font-semibold mb-4">{t("footer.about") || "About"}</h3>
            <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm leading-relaxed">
              {t("footer.aboutDescription") || "Full Stack Developer passionate about creating exceptional digital experiences with modern technologies."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white dark:text-white light:text-zinc-900 font-semibold mb-4">{t("footer.quickLinks") || "Quick Links"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors">
                  {t("nav.home") || "Home"}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors">
                  {t("nav.experience") || "Experience"}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors">
                  {t("nav.projects") || "Projects"}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors">
                  {t("nav.contact") || "Contact"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white dark:text-white light:text-zinc-900 font-semibold mb-4">{t("footer.contact") || "Contact"}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                <FaEnvelope className="text-purple-400 dark:text-purple-400 light:text-purple-600" />
                <a href="mailto:thanhtrung.1010.2k@gmail.com" className="hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors">
                  thanhtrung.1010.2k@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                <svg className="w-4 h-4 text-purple-400 dark:text-purple-400 light:text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:0948868324" className="hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors">
                  0948 868 324
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://github.com/dev-to2k"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 dark:bg-white/5 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 hover:bg-purple-500/20 dark:hover:bg-purple-500/20 light:hover:bg-purple-100 hover:border-purple-500/50 dark:hover:border-purple-500/50 light:hover:border-purple-400/70 flex items-center justify-center transition-all group"
            aria-label="GitHub"
          >
            <FaGithub className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 group-hover:text-purple-400 dark:group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/dev-to2k/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 dark:bg-white/5 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 hover:bg-purple-500/20 dark:hover:bg-purple-500/20 light:hover:bg-purple-100 hover:border-purple-500/50 dark:hover:border-purple-500/50 light:hover:border-purple-400/70 flex items-center justify-center transition-all group"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 group-hover:text-purple-400 dark:group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors" />
          </a>
          <a
            href="mailto:thanhtrung.1010.2k@gmail.com"
            className="w-10 h-10 rounded-full bg-white/5 dark:bg-white/5 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 hover:bg-purple-500/20 dark:hover:bg-purple-500/20 light:hover:bg-purple-100 hover:border-purple-500/50 dark:hover:border-purple-500/50 light:hover:border-purple-400/70 flex items-center justify-center transition-all group"
            aria-label="Email"
          >
            <FaEnvelope className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 group-hover:text-purple-400 dark:group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 dark:border-white/10 light:border-zinc-200 pt-6 text-center">
          <p className="text-zinc-500 dark:text-zinc-500 light:text-zinc-600 text-sm">
            {t("footer.copyright")?.replace("{year}", new Date().getFullYear().toString()) || `© ${new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind CSS.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
