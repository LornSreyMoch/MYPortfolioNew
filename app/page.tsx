import AboutMe from "@/components/main/Aboutme";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <section id="home">
          <Hero />
        </section>
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </main>
  );
}
