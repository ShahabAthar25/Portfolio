"use client";

import { useState, useEffect, useCallback } from "react";

import Image from "next/image";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Project } from "@/lib/types/projects";

type CarouselSlide =
  | { kind: "image"; src: string; tag: string; caption: string }
  | { kind: "results"; tag: string };

export default function ProjectCarousel({ project }: { project: Project }) {
  const [current, setCurrent] = useState(0);

  const slides: CarouselSlide[] = [
    {
      kind: "image",
      src: project.heroImage,
      tag: "Overview",
      caption: project.desc,
    },
  ];

  const total = slides.length;

  const go = useCallback(
    (dir: 1 | -1) => setCurrent((c) => (c + dir + total) % total),
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = slides[current];
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="border-t border-border">
      {/* Viewport — full width, no max-w constraint */}
      <div className="relative overflow-hidden" style={{
        height: "clamp(420px, 68vh, 700px)", background: "var(--card)",
      }}>
        {/* Slide track */}
        <div className="flex h-full" style={{
          width: `${total * 100}%`, transform: `translateX(-${(current / total) *
            100}%)`, transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}>
          {slides.map((s, i) => (
            <div key={i} className="relative h-full shrink-0" style={{ width: `${100 / total}%` }}>
              {s.kind === "image" ? (
                <>
                  <Image src={s.src} alt={s.tag} fill className="absolute inset-0 w-full h-full object-cover" style={{
                    opacity:
                      0.45,
                  }} />
                  {/* gradient: heavier at bottom for caption legibility */}
                  <div className="absolute inset-0" style={{
                    background: "linear-gradient(to top, rgba(8,8,8,0.94) 0%, rgba(8,8,8,0.3) 45%, rgba(8,8,8,0) 100%)",
                  }} />
                  {/* Caption — bottom left */}
                  <div className="absolute bottom-0 left-0 right-0 px-8 sm:px-14 pb-14">
                    <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                      {s.caption}
                    </p>
                  </div>
                </>
              ) : (
                /* Results slide */
                <div className="h-full flex flex-col justify-center px-8 sm:px-14" style={{ background: "var(--secondary)" }}>
                  {/* Metrics row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-14">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="leading-none font-extrabold mb-2 font-display" style={{
                          fontSize: "clamp(3rem, 6vw, 5rem)"
                          , color: "var(--accent)",
                        }}>
                          {m.value}
                        </div>
                        <div className="text-sm font-medium mb-0.5">
                          {m.label}
                        </div>
                        <div className="text-xs text-muted-foreground font-display">
                          {m.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Outcome quote */}
                  <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Control bar */}
      <div className="border-t border-border">
        {/* Progress strip — 2px line, lime fill */}
        <div className="h-0.5 bg-border relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-accent" style={{
            width: `${progress}%`,
            transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }} />
        </div>

        {/* Label + dots + arrows */}
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          {/* Left: index — label */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xs text-muted-foreground tabular-nums shrink-0 font-mono">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-border text-xs shrink-0">—</span>
            <span className="text-xs text-foreground truncate font-mono">
              {slide.tag}
            </span>
          </div>

          {/* Right: pill dots + arrows */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Expanding pill dots */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    height: "6px",
                    width: i === current ? "22px" : "6px",
                    borderRadius: "3px",
                    background:
                      i === current ? "var(--accent)" : "var(--border)",
                    transition: "width 0.3s ease, background 0.3s ease",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-1">
              <button onClick={() => go(-1)}
                aria-label="Previous slide"
                className="p-2 border border-border text-muted-foreground hover:border-accent hover:text-accent
            transition-colors duration-150"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => go(1)}
                aria-label="Next slide"
                className="p-2 border border-border text-muted-foreground hover:border-accent hover:text-accent
            transition-colors duration-150"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
