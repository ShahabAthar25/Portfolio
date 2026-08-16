import projects from "@/data/projects.json";
import ProjectRow from "@/components/ProjectRow";

export default function Projects() {
  return (
    <section id="work" className="pt-24 pb-0">
      <div className="max-w-6xl mx-auto px-6 flex items-baseline justify-between mb-12">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
          Selected Work
        </h2>
        <span className="text-xs text-muted-foreground">2023–2024</span>
      </div>
      <div className="border-t border-border">
        {projects.map((project, i) => (
          <ProjectRow key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
