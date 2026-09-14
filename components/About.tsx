import Image from "next/image";
import skillsData from "@/data/skills.json";

type SkillsType = string[];

const skills = skillsData as SkillsType;

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="aspect-[4/5] bg-card border border-border overflow-hidden relative mb-8">
              <Image src="/assets/about.jpeg" fill alt="Developer at work"
                className="w-full h-full object-cover object-[100%_100%] opacity-80" />

              <div
                className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.7)_100%)]" />

              <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="text-xs text-muted-foreground">
                  Multan, 2024
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "6", label: "Years experience" },
                { value: "23", label: "Projects shipped" },
                { value: "40K", label: "Monthly active users" },
                { value: "3", label: "Design awards" },
              ].map(({ value, label }) => (
                <div key={label} className="border border-border p-4 bg-card">
                  <div className="text-3xl font-extrabold font-display" style={{ color: "var(--accent)" }}>
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pt-4">
            <h2 className="font-extrabold leading-tight mb-8 font-display" style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
            }}>
              A developer who gives a damn about{" "}
              <span style={{ color: "var(--accent)" }}>UX.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.9375rem]">
              <p>
                I&apos;m Shahab Athar. Fullstack developer, and an automation
                engineer, always the person in the room asking &ldquo;but how
                does it feel to use?&rdquo; I&apos;ve been building projects for
                the web for 8 years and automation 3+ years.
              </p>
              <p>
                I build software that is fast, scalable, accessible, and
                maintainable (otherwise my ocd acts up). I care about the
                details whether I am working on a website or an automation
                workflow, and I write code that the next developer won&apos;t
                resent me for.
              </p>
              <p>
                Currently freelancing. Available for both full-stack web
                development and automation.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
                Tools & Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill}
                    className="text-sm text-muted-foreground border border-border px-3 py-1.5 transition-colors duration-150 cursor-default hover:border-accent hover:text-accent">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
                Currently
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                {[
                  "building an automated lead generation system",
                  "architecting a a risk-parity forecasting engine to fix my portfolio",
                  "reading 1117 BC: the year civilizations collapsed (i like history)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
