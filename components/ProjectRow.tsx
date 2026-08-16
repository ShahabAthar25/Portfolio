import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

type Metric = { value: string; label: string; sub: string };
type Phase = { phase: string; title: string; desc: string };

type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  desc: string;
  tech: string[];
  role: string;
  duration: string;
  heroImage: string;
  secondaryImage: string;
  challenge: string;
  approach: string;
  metrics: Metric[];
  process: Phase[];
  outcome: string;
};

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <div tabIndex={0} role="button" className="group relative overflow-hidden border-b border-border cursor-pointer">
      {/* Muted background image reveal */}
      <Image src={project.heroImage} alt="" aria-hidden fill
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-0 group-hover:opacity-[0.14] transition-opacity duration-500 ease-out" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-5 mb-1">
            <span className="text-xs text-muted-foreground flex-shrink-0 tabular-nums font-mono">
              {project.id}
            </span>
            <h3
              className="font-extrabold leading-[0.9] tracking-tight font-display text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300 ease-out"
              style={{ fontSize: "clamp(2.75rem, 5.5vw, 5rem)" }}>
              {project.name}
            </h3>
          </div>

          {/* Description: slides down on hover */}
          <div
            className="max-h-0 opacity-0 group-hover:max-h-[60px] group-hover:opacity-100 transition-all duration-350 ease-out pl-[calc(1.5rem+1px)] overflow-hidden">
            <p className="text-sm text-muted-foreground leading-relaxed pt-2 pb-1">
              {project.desc}
            </p>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-4 pl-[calc(1.5rem+1px)]">
            <span className="text-sm text-muted-foreground">
              {project.category}
            </span>
            <span className="text-border text-xs">·</span>
            <span className="text-sm text-muted-foreground">
              {project.year}
            </span>
            <span className="text-border text-xs">·</span>
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} /* 5. Replaced inline border-color style with group-hover:border */
                className="text-xs text-muted-foreground border border-border group-hover:border-[rgba(197,241,53,0.35)] transition-colors duration-350 px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: arrow + label */}
        <div className="flex flex-col items-end gap-2 pt-2 flex-shrink-0">
          <ArrowUpRight
            className="w-7 h-7 text-muted-foreground group-hover:text-[var(--accent)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-all duration-300 ease-out" />

          <span
            className="text-xs text-[var(--accent)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250 ease-out whitespace-nowrap">
            Case Study →
          </span>
        </div>
      </div>
    </div>
  );
}
