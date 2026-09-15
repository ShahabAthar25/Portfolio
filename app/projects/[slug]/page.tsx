import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import projectsData from "@/data/projects.json";

import { Project } from "@/lib/types/projects";

import Features from "@/app/projects/[slug]/components/Features";
import ProjectCarousel from "./components/ProjectCarousel";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const projects = projectsData as Project[];
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];

  // Really have to fix my linter conflict one of these days
  const prevProject =
    projectsData[
    (currentIndex - 1 + projectsData.length) % projectsData.length
    ];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/96 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/#work"
            className="flex items-center gap-2 text-sm text-foreground hover:text-foreground transition-colors group font-mono">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Home
          </Link>
          <div className="flex items-center gap-4">
            <Link href={`/projects/${prevProject.slug}`}
              className="text-xs text-foreground hover:text-foreground transition-colors flex items-center gap-1.5 font-mono">
              <ArrowLeft className="w-3 h-3" />
              {prevProject.name}
            </Link>
            <span className="text-border text-xs">·</span>
            <Link href={`/projects/${nextProject.slug}`}
              className="text-xs text-foreground hover:text-foreground transition-colors flex items-center gap-1.5 font-mono">
              {nextProject.name}
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-16 relative">
        <div className="relative h-[55vh] min-h-[380px] bg-card overflow-hidden">
          <Image src={project.heroImage} alt={project.name} fill className=" object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-6 pb-10">
            <span className="text-xs text-foreground tracking-widest uppercase font-mono">
              {project.category}
            </span>
            <h1 className="font-extrabold leading-[0.88] tracking-tight mt-3 font-display" style={{
              fontSize: "clamp(4rem, 10vw, 8.5rem)",
            }}>
              {project.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta strip */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Role", value: project.role },
            { label: "Year", value: project.year },
            { label: "Duration", value: project.duration },
            { label: "Stack", value: project.tech.join(", ") },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs text-foreground uppercase tracking-widest mb-1">
                {label}
              </p>
              <p className="text-sm font-medium leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge + Approach */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-widest text-foreground mb-5">
            The Challenge
          </p>
          <p className="text-xl leading-relaxed font-light">
            {project.challenge}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-foreground mb-5">
            The Approach
          </p>
          <p className="text-xl leading-relaxed font-light">
            {project.approach}
          </p>
        </div>
      </div>

      {/* Features Section */}
      <Features project={project} />

      {/* Metrics */}
      <div className="border-y border-border bg-card">
        <div
          className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {project.metrics.map((m) => (
            <div key={m.label} className="px-0 sm:px-10 first:pl-0 last:pr-0 py-8 sm:py-0">
              <div className="text-5xl font-extrabold mb-2" style={{ color: "var(--accent)" }}>
                {m.value}
              </div>
              <div className="text-sm font-medium mb-0.5 font-mono">
                {m.label}
              </div>
              <div className="text-xs text-foreground">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Images */}
      <div className="px-6 py-20">
        <ProjectCarousel project={project} />
      </div>

      {/* Process */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-foreground mb-14">
            Process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.process.map((phase) => (
              <div key={phase.phase} className="border-t-2 pt-6" style={{ borderColor: "var(--accent)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-foreground">{phase.phase}</span>
                  <h3 className="text-lg font-bold font-mono">{phase.title}</h3>
                </div>
                <p className="text-sm text-foreground leading-relaxed font-mono">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Outcome */}
      <div className="border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-foreground mb-6">
            Outcome
          </p>
          <p className="font-bold leading-tight font-mono" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
            {project.outcome}
          </p>
        </div>
      </div>

      {/* Next project */}
      <Link href={`/projects/${nextProject.slug}`}>
        <div className="border-t border-border">
          <button className="w-full group text-left">
            <div className="max-w-6xl mx-auto px-6 py-16 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-foreground mb-3 font-mono">
                  Next Project
                </p>
                <h2 className="font-extrabold leading-tight group-hover:text-accent transition-colors duration-200" style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                }}>
                  {nextProject.name}
                </h2>
                <p className="text-sm text-foreground mt-2 font-mono">
                  {nextProject.category} · {nextProject.year}
                </p>
              </div>
              <ArrowRight
                className="w-10 h-10 text-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
}
