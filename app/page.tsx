import { Sidebar } from "@/components/sidebar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Publications } from "@/components/publications";
import { Diagrams } from "@/components/diagrams";
import { Skills } from "@/components/skills";
import { Now } from "@/components/now";
import { Contact } from "@/components/contact";
import { Spotlight } from "@/components/spotlight";

export default function Home() {
  return (
    <>
      <Spotlight />
      <div className="min-h-screen" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(24px, 4vw, 56px)" }}>
        <div className="lg:flex lg:gap-16">
          <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[320px] lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-between py-16">
            <Sidebar />
          </aside>
          <main className="flex-1 min-w-0 py-16 lg:py-16">
            <Hero />
            <Experience />
            <Projects />
            <Publications />
            <Diagrams />
            <Skills />
            <Now />
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
}
