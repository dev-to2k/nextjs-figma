"use client";

import { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useGSAP(
    () => {
      if (buttonRef.current) {
        if (isVisible) {
          gsap.fromTo(
            buttonRef.current,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            }
          );
        } else {
          gsap.to(buttonRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.2,
            ease: "power2.in",
          });
        }
      }
    },
    { dependencies: [isVisible] }
  );

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {isVisible && (
        <button
          ref={buttonRef}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-lg bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary text-muted-foreground flex items-center justify-center transition-all shadow-lg"
          aria-label="Scroll to top"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <FaArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
}
