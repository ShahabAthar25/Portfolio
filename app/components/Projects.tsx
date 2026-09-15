import ProjectsGrid from "@/components/ProjectsGrid";
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <div className="my-10 px-6 py-24" id="work">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-xs uppercase tracking-widest text-foreground mb-5 font-mono">
          Portfolio · 2023–2024
        </p>
        <h1
          className="font-extrabold leading-[0.88] tracking-tight font-display"
          style={{
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
          }}
        >
          Selected Work
        </h1>
      </div>
      <ProjectsGrid projects={projects} className="mt-10" />
    </div>
  );
}
