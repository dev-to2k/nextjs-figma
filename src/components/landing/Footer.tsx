"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { CONTACT } from "@/constants/contact";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="relative w-full py-16 border-t border-border"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {t("footer.about") || "About"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("footer.aboutDescription") || "Full Stack Developer passionate about creating exceptional digital experiences with modern technologies."}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {t("footer.quickLinks") || "Quick Links"}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.home") || "Home"}
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.experience") || "Experience"}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.projects") || "Projects"}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.contact") || "Contact"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {t("footer.contact") || "Contact"}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <FaEnvelope className="text-primary/60 flex-shrink-0" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <svg className="w-4 h-4 text-primary/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href={`tel:${CONTACT.phone.replace(/ /g, "")}`} className="hover:text-primary transition-colors">
                    {CONTACT.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={CONTACT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href={CONTACT.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>

              <p className="text-xs text-muted-foreground">
                {t("footer.copyright")?.replace("{year}", new Date().getFullYear().toString()) || `© ${new Date().getFullYear()} All rights reserved.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
