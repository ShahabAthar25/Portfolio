"use client";

import { useState } from "react";
import Image from "next/image";

import { Project } from "@/lib/types/projects";
import Link from "next/link";

export default function ProjectCard({
  project,
  size = "normal",
}: {
  project: Project;
  size?: "hero" | "normal";
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="relative overflow-hidden cursor-pointer border border-border min-h-96" style={{
        height: size === "hero"
          ? "clamp(320px, 58vh, 520px)" : "clamp(240px, 42vh, 400px)",
      }} onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image src={project.heroImage} alt={project.name} fill className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: hovered ? 0.55 : 0.28, transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "opacity 0.6s ease, transform 0.7s ease",
          }} />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to top, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.35) 55%, rgba(10,10,10,0.08) 100%)",
        }} />

        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
          {/* Top */}
          <div className="flex items-start justify-between">
            <span className="text-xs text-foreground font-mono">
              {project.name}
            </span>
            <span className="text-xs px-3 py-1.5 font-medium font-mono" style={{
              background: "var(--accent)",
              color: "var(--accent-foreground)", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)"
                : "translateY(-6px)", transition: "opacity 0.22s ease, transform 0.22s ease",
            }}>
              Case Study →
            </span>
          </div>

          {/* Bottom */}
          <div>
            <h2 className="font-extrabold font-display leading-tight mb-2" style={{
              fontSize: size === "hero"
                ? "clamp(2.25rem, 5vw, 4.5rem)" : "clamp(1.75rem, 3vw, 3rem)", color: hovered ? "var(--accent)"
                  : "var(--foreground)", transition: "color 0.3s",
            }}>
              {project.name}
            </h2>
            <p className="text-sm text-foreground font-mono">
              {project.category} · {project.year}
            </p>
            <p className="text-sm text-foreground mt-3 leading-relaxed" style={{ maxWidth: "540px" }}>
              {project.desc}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
