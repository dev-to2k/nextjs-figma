"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<any>(null);
  const { t } = useTranslation();

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-title", start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".contact-info",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-info", start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".contact-map",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-map", start: "top 80%" },
        },
      );
    },
    { scope: containerRef },
  );

  const contactCards = [
    {
      icon: FaMapMarkerAlt,
      label: t("contact.addressLabel"),
      content: t("contact.address"),
      isLink: false,
    },
    {
      icon: FaEnvelope,
      label: t("contact.emailLabel"),
      content: "contact@example.com",
      href: "mailto:contact@example.com",
      isLink: true,
    },
    {
      icon: FaPhone,
      label: t("contact.phoneLabel"),
      content: "+84 123 456 789",
      href: "tel:+84123456789",
      isLink: true,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 md:px-12 max-w-7xl mx-auto"
    >
      <h2 className="contact-title text-2xl md:text-3xl font-bold text-foreground mb-12 tracking-tight">
        {t("contact.title")}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="contact-info space-y-4">
          {contactCards.map(({ icon: Icon, label, content, href, isLink }) => (
            <div
              key={label}
              className="bg-card border border-border rounded-2xl p-6 hover:border-foreground/15 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/5 transition-colors duration-300">
                  <Icon className="text-foreground/40 group-hover:text-foreground/60 text-xl transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {label}
                  </h3>
                  {isLink ? (
                    <a
                      href={href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">
                      {content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="contact-map">
          <div className="relative rounded-2xl overflow-hidden border border-border h-full min-h-[400px] hover:border-foreground/15 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3259788534475!2d106.68577731533401!3d10.786838292312446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b40774723%3A0x5a8b2d3fca0e7d4f!2s43-45%20T%C3%BA%20X%C6%B0%C6%A1ng%2C%20Ph%C6%B0%E1%BB%9Dng%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u%2C%20Qu%E1%BA%ADn%203%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
