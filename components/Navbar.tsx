"use client";

import { useEffect, useState } from "react";
import { scrollTo } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? "bg-background/96 backdrop-blur-sm border-b border-border" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")}
          className="text-md font-semibold tracking-tight hover:text-accent transition-colors font-display"
        >
          Shahab Athar
        </button>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-7">
            {["work", "about", "contact"].map((s) => (
              <button key={s} onClick={() => scrollTo(s)}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {s}
              </button>
            ))}
          </nav>
          <span
            className="flex items-center gap-2 text-xs font-medium text-accent-foreground bg-accent px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground" style={{
              animation: "pulse 2s ease-in-out infinite",
            }} />
            Available
          </span>
        </div>
      </div>
    </header>
  );
}
