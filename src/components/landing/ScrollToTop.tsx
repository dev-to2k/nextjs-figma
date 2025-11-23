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
      if (window.scrollY > 300) {
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
              duration: 0.5,
              ease: "power2.out",
            }
          );
        } else {
          gsap.to(buttonRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      }
    },
    { dependencies: [isVisible] }
  );

  const scrollToTop = () => {
    if (lenis) {
      // Use Lenis for smooth scrolling
      lenis.scrollTo(0, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      // Fallback to native smooth scroll
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
          className="fixed bottom-8 right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-600 dark:to-pink-600 light:from-purple-500 light:to-pink-500 hover:from-purple-500 hover:to-pink-500 dark:hover:from-purple-500 dark:hover:to-pink-500 light:hover:from-purple-400 light:hover:to-pink-400 text-white shadow-lg shadow-purple-500/50 dark:shadow-purple-500/50 light:shadow-purple-400/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
          aria-label="Scroll to top"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <FaArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20"></div>
        </button>
      )}
    </>
  );
}

