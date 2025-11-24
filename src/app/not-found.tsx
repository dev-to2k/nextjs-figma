"use client";

import { useState } from "react";
import FuzzyText from "@/components/animate-text/FuzzyText";
import Link from "next/link";

export default function NotFound() {
  const [hoverIntensity, setHoverIntensity] = useState(0.8);
  const [enableHover, setEnableHover] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white px-4">
      <div className="text-center space-y-8">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
          fontSize="clamp(4rem, 20vw, 15rem)"
          fontWeight={900}
          color="#fff"
        >
          404
        </FuzzyText>

        <div className="space-y-4 mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-300">
            Page Not Found
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

