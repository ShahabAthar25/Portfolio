import ProjectCard from "./ProjectCard";

import { Project } from "@/lib/types/projects";

export default function ProjectsGrid({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) {
  const n = projects.length;

  if (n === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-28 flex flex-col items-center gap-4">
        <span className="text-4xl font-extrabold text-foreground/20 font-display">
          —
        </span>
        <p className="text-sm text-foreground font-mono">
          No projects in this category yet.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {projects.map((project, index) => {
        const positionInPattern = index % 4;

        // Item 0 is hero (span 2), items 1 & 2 are half-width (span 1), item 3 is full-width (span 2)
        const isHero = positionInPattern === 0;
        const isFullWidth = positionInPattern === 0 || positionInPattern === 3;

        return (
          <div key={project.id || index} className={isFullWidth ? "md:col-span-2" : ""}>
            <ProjectCard project={project} size={isHero ? "hero" : "normal"} />
          </div>
        );
      })}
    </div>
  );
}
