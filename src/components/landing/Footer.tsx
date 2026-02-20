"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";
import { CONTACT } from "@/constants/contact";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="relative w-full py-20 border-t border-border"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-[0.2em]">
                {t("footer.about") || "About"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {t("footer.aboutDescription") ||
                  "Full Stack Developer passionate about creating exceptional digital experiences with modern technologies."}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-[0.2em]">
                {t("footer.quickLinks") || "Quick Links"}
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { href: "#home", label: t("nav.home") || "Home" },
                  {
                    href: "#experience",
                    label: t("nav.experience") || "Experience",
                  },
                  { href: "#projects", label: t("nav.projects") || "Projects" },
                  { href: "#contact", label: t("nav.contact") || "Contact" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group inline-block"
                    >
                      {label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-[0.2em]">
                {t("footer.contact") || "Contact"}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <FaEnvelope className="text-foreground/40 flex-shrink-0" />
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <svg
                    className="w-4 h-4 text-foreground/40 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a
                    href={`tel:${CONTACT.phone.replace(/ /g, "")}`}
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {[
                  { href: CONTACT.githubUrl, icon: FaGithub, label: "GitHub" },
                  {
                    href: CONTACT.linkedinUrl,
                    icon: FaLinkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: `mailto:${CONTACT.email}`,
                    icon: FaEnvelope,
                    label: "Email",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    className="w-9 h-9 rounded-xl bg-secondary border border-border flex items-center justify-center hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm" />
                  </a>
                ))}
              </div>

              <p className="text-xs text-muted-foreground/60 tracking-wide">
                {t("footer.copyright")?.replace(
                  "{year}",
                  new Date().getFullYear().toString(),
                ) || `© ${new Date().getFullYear()} All rights reserved.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
