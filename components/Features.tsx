"use client";

import { useState } from "react";

import { Project } from "@/lib/types/projects";

import CodeLine from "./CodeLine";

export default function Features({ project: project }: { project: Project }) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const highlights = project.features.filter((f) => f.highlight);

  return (
    <div className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10 font-mono">
          What was built
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5 items-start">
          {/* ── Code block ── */}
          <div className="border border-border overflow-hidden" style={{ background: "#080808" }}>
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: "#3a3a3a" }} />
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: "#3a3a3a" }} />
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: "#3a3a3a" }} />
              <span className="ml-3 text-xs text-muted-foreground font-mono">
                capabilities.ts
              </span>
            </div>

            {/* Code */}
            <div className="p-5 overflow-x-auto">
              <div className="font-mono" style={{ minWidth: "340px" }}>
                <CodeLine n={1} />
                <CodeLine n={2}>
                  <span style={{ color: "#4a7a4a" }}>{`// engineered for ${project.name}`}</span>
                </CodeLine>
                <CodeLine n={3} />
                <CodeLine n={4}>
                  <span style={{ color: "#7aabcf" }}>const</span>{" "}
                  <span style={{ color: "var(--foreground)" }}>features</span>{" "}
                  <span style={{ color: "#484038" }}>{"= {"}</span>
                </CodeLine>

                {project.features.map((f, i) => (
                  <div key={f.key} style={{
                    background: activeKey === f.key ? "rgba(197,241,53,0.055)" : "transparent",
                    borderLeft: activeKey === f.key ? "2px solid #C5F135" : "2px solid transparent",
                    transition: "background 0.18s, border-color 0.18s", cursor: "default",
                  }} onMouseEnter={() =>
                    setActiveKey(f.key)}
                    onMouseLeave={() => setActiveKey(null)}
                  >
                    <CodeLine n={i + 5}>
                      {" "}
                      <span style={{ color: "#C5F135" }}>{f.key}</span>
                      <span style={{ color: "#3c3428" }}>: </span>
                      <span style={{ color: "#a87040" }}>&quot;</span>
                      <span style={{ color: "#c2bdb5" }}>{f.desc}</span>
                      <span style={{ color: "#a87040" }}>&quot;</span>
                      <span style={{ color: "#3c3428" }}>,</span>
                    </CodeLine>
                  </div>
                ))}

                <CodeLine n={project.features.length + 5}>
                  <span style={{ color: "#484038" }}>{"}"}</span>
                </CodeLine>
                <CodeLine n={project.features.length + 6}>
                  <span style={{ color: "#C5F135", animation: "csBlinkCursor 1.1s step-end infinite", }}>
                    ▌
                  </span>
                </CodeLine>
              </div>
            </div>
          </div>

          {/* ── Highlight cards ── */}
          <div className="flex flex-col gap-3">
            {highlights.map((f, i) => {
              const active = activeKey === f.key;
              return (
                <div key={f.key} className="relative overflow-hidden border p-6 flex flex-col gap-3 cursor-default" style={{
                  borderColor: active ? "var(--accent)" : "var(--border)", background: active ? "rgba(197,241,53,0.04)"
                    : "var(--card)", transition: "border-color 0.18s, background 0.18s",
                }} onMouseEnter={() =>
                  setActiveKey(f.key)}
                  onMouseLeave={() => setActiveKey(null)}
                >
                  {/* Ghost number watermark */}
                  <span
                    className="absolute bottom-2 right-4 text-[6rem] font-extrabold leading-none select-none pointer-events-none font-display"
                    style={{
                      color: active ? "var(--accent)" : "var(--foreground)", opacity: active ? 0.08 : 0.035,
                      transition: "opacity 0.25s, color 0.25s",
                    }}>
                    0{i + 1}
                  </span>

                  <span className="text-xs tabular-nums font-mono" style={{
                    color: active ? "var(--accent)"
                      : "var(--muted-foreground)", transition: "color 0.18s",
                  }}>
                    0{i + 1}
                  </span>
                  <h4 className="text-base font-bold leading-snug font-display">
                    {f.label}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed relative z-10">
                    {f.detail ?? f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
