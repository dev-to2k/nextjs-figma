import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thanh Trung Truong | Full Stack Developer",
    template: "%s | Thanh Trung Truong",
  },
  description:
    "Portfolio of Thanh Trung Truong, a Senior Full Stack Developer specializing in React, Next.js, Java Spring Boot, and AI-driven development.",
  keywords: [
    "Thanh Trung Truong",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Thanh Trung Truong" }],
  creator: "Thanh Trung Truong",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Thanh Trung Truong | Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in building scalable web applications with modern technologies.",
    siteName: "Thanh Trung Truong Portfolio",
    images: [
      {
        url: "/og-image.png", // You should add an og-image.png to your public folder
        width: 1200,
        height: 630,
        alt: "Thanh Trung Truong Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanh Trung Truong | Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in building scalable web applications.",
    creator: "@yourusername", // Update with your actual handle if available
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import SmoothScroll from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TranslationProvider } from "@/components/providers/TranslationProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark" data-theme="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased transition-colors duration-500 ease-in-out`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <TranslationProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
