import { Sidebar } from "@/components/sidebar";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Diagrams } from "@/components/diagrams";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
      <div className="lg:flex lg:gap-4">
        {/* Left — sticky sidebar */}
        <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[45%] lg:flex lg:flex-col lg:justify-between py-24">
          <Sidebar />
        </aside>

        {/* Right — scrollable content */}
        <main className="lg:w-[55%] py-24 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Diagrams />
          <Contact />
        </main>
      </div>
    </div>
  );
}
