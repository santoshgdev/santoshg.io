"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { SectionHeading } from "./experience";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <SectionHeading title="Projects" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 transition-all duration-200 cursor-default"
            style={
              hoveredIndex === i
                ? {
                    borderColor: "oklch(0.68 0.2 270 / 0.4)",
                    boxShadow: "0 8px 32px oklch(0.68 0.2 270 / 0.05)",
                  }
                : undefined
            }
          >
            {/* Folder icon */}
            <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-bold text-sm text-foreground leading-snug">
                {project.name}
              </h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors shrink-0"
                >
                  ↗
                </a>
              )}
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-md font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
