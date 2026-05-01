"use client";

import { useState } from "react";
import { projects, diagrams } from "@/lib/data";
import { ArchDiagram } from "@/components/arch-diagram";

const KIND_LABEL: Record<string, string> = {
  work: "Work",
  consulting: "Consulting",
  research: "Research",
  "open-source": "Open Source",
};

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="projects" style={{ paddingBlock: 64, scrollMarginTop: 64 }}>
      {/* Section heading */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#B8A05E", fontSize: 12, letterSpacing: "0.1em" }}>02</span>
          <h2 style={{ font: "600 26px/1.2 var(--font-sans)", letterSpacing: "-0.015em", color: "#F1ECDD", margin: 0 }}>Selected Projects</h2>
        </div>
        <p style={{ fontSize: 14, color: "#8A9197", marginBottom: 16 }}>
          Work I've led or contributed to — at companies, in research, on the side. Click any line to expand.
        </p>
        <hr style={{ height: 1, background: "#233238", border: 0 }} />
      </div>

      {/* TOC rows */}
      <div>
        {projects.map((project, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderTop: i === 0 ? "none" : "1px solid #1A282E" }}>
              {/* TOC line */}
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "16px 0",
                  display: "grid",
                  gridTemplateColumns: "36px 1fr auto auto",
                  gap: 14,
                  alignItems: "center",
                  color: "inherit",
                }}
              >
                {/* Number */}
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#8A9197",
                  opacity: 0.6,
                  textAlign: "left",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title + badge + dotted leader */}
                <span style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: 17,
                    color: "#F1ECDD",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    flexShrink: 1,
                    minWidth: 0,
                  }}>
                    {project.name}
                  </span>
                  {project.status === "on-going" && (
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#B8A05E",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}>
                      ● on-going
                    </span>
                  )}
                  {/* Dotted leader */}
                  <span style={{
                    flex: 1,
                    borderBottom: "1px dotted #233238",
                    minWidth: 24,
                    marginBottom: 3,
                    flexShrink: 0,
                  }} />
                </span>

                {/* Period */}
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "#8A9197",
                  whiteSpace: "nowrap",
                }}>
                  {project.period}
                </span>

                {/* Caret */}
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  color: isOpen ? "#B8A05E" : "#8A9197",
                  transition: "color 0.15s ease",
                  userSelect: "none",
                }}>
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Expanded panel */}
              {isOpen && (
                <div className="fade-slide-in" style={{
                  padding: "0 0 28px 50px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}>
                  {/* Kind + role */}
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12.5,
                    color: "#8A9197",
                    margin: 0,
                  }}>
                    {KIND_LABEL[project.kind]} · {project.role}
                  </p>

                  {/* Summary */}
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    color: "#C9C4B5",
                    lineHeight: 1.62,
                    margin: 0,
                    maxWidth: "68ch",
                  }}>
                    {project.summary}
                  </p>

                  {/* Highlights */}
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {project.highlights.map((h, j) => (
                      <li key={j} style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        color: "#8A9197",
                        display: "flex",
                        gap: 8,
                      }}>
                        <span style={{ color: "#B8A05E", flexShrink: 0 }}>—</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Inline diagram */}
                  {"diagramId" in project && project.diagramId && (() => {
                    const diagram = diagrams.find(d => d.id === project.diagramId);
                    return diagram ? (
                      <div style={{ maxWidth: 720 }}>
                        <ArchDiagram diagram={diagram} />
                      </div>
                    ) : null;
                  })()}

                  {/* Stack tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.stack.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        padding: "3px 8px",
                        border: "1px solid #2D3D44",
                        borderRadius: 4,
                        color: "#8A9197",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.links.length > 0 && (
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      {project.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 12.5,
                          color: "#B8A05E",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                        }}>
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
