import { MapPin } from "lucide-react";

import Marquee from "@/components/Marquee";
import ViewWorkBtn from "@/components/ViewWorkBtn";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between pt-28 pb-0">
      <div className="max-w-6xl mx-auto px-6 w-full flex-1 flex flex-col justify-center pb-16">
        <div className="mb-6">
          <p
            className="text-xs uppercase tracking-widest text-muted-foreground mb-8 flex flex-wrap items-center gap-3 font-mono">
            <span>Shahab Athar</span>
            <span className="text-border">—</span>
            <span>Automation Engineer</span>
            <span className="text-border hidden sm:inline">—</span>
            <span className="hidden sm:inline">Fullstack Developer</span>
          </p>
          <h1 className="font-extrabold leading-[0.88] tracking-tight font-display" style={{
            fontSize: "clamp(4.5rem, 12vw, 10rem)",
          }}>
            I build things
            <br />
            <span style={{ color: "var(--accent)" }}>people love</span>
            <br />
            for the web.
          </h1>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-border pt-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Multan, Pakistan
            </span>
            <span className="text-border hidden sm:inline">·</span>
            <span>Web & Automation</span>
            <span className="text-border hidden sm:inline">·</span>
            <span>Open to Freelance & Contract</span>
          </div>
          <ViewWorkBtn />
        </div>
      </div>
      <Marquee />
    </section>
  );
}
