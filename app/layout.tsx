import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Initialize Bricolage Grotesque
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  adjustFontFallback: false, // 👈 Fixes the Next.js calculation crash
});

// Initialize DM Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Initialize JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Shahab Athar - Automation Engineer | Web developer",
  description:
    "Portfolio of Shahab Athar an automation engineer and a web develeper",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}>

      <body className="min-h-full flex flex-col">{children}</body>

    </html>
  );
}
