"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "diagrams", label: "Diagrams" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("experience");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibilityMap: Record<string, number> = {};

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibilityMap[id] = entry.intersectionRatio;
          });

          // Pick the section with the highest visibility ratio
          const best = Object.entries(visibilityMap).sort(
            ([, a], [, b]) => b - a
          )[0];
          if (best && best[1] > 0) {
            setActiveSection(best[0]);
          }
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Top: name, title, bio */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground leading-tight">
          {profile.name}
        </h1>
        <p className="mt-3 text-base font-medium text-foreground/70">
          {profile.title}
        </p>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
          {profile.bio}
        </p>
      </div>

      {/* Middle: navigation */}
      <nav className="hidden lg:block mt-12">
        <ul className="space-y-1">
          {sections.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`group flex items-center gap-4 py-2 transition-all duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`h-px transition-all duration-200 bg-primary ${
                      isActive ? "w-10 opacity-100" : "w-5 opacity-40 group-hover:w-8 group-hover:opacity-70"
                    }`}
                  />
                  <span
                    className={`text-xs font-mono uppercase tracking-widest transition-colors duration-200`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom: social links */}
      <div className="flex items-center gap-5 mt-12 lg:mt-0">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors tracking-wide"
        >
          GitHub
        </a>
        <span className="text-border text-xs">·</span>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors tracking-wide"
        >
          LinkedIn
        </a>
        <span className="text-border text-xs">·</span>
        <a
          href={`mailto:${profile.email}`}
          className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors tracking-wide"
        >
          Email
        </a>
      </div>
    </>
  );
}
