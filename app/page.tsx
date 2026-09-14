import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import Projects from "@/components/Projects";
import ProjectsGrid from "@/components/ProjectsGrid";

import projects from "@/data/projects.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      {/*
  <Projects /> */}
      <ProjectsGrid projects={projects} className="mt-10" />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
