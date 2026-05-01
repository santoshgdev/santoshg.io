"use client";

import { diagrams } from "@/lib/data";
import { ArchDiagram } from "@/components/arch-diagram";

export function Diagrams() {
  return (
    <section id="diagrams" style={{ paddingBlock: 64, scrollMarginTop: 64 }}>
      {/* Section heading */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#B8A05E", fontSize: 12, letterSpacing: "0.1em" }}>04</span>
          <h2 style={{ font: "600 26px/1.2 var(--font-sans)", letterSpacing: "-0.015em", color: "#F1ECDD", margin: 0 }}>Architecture Diagrams</h2>
        </div>
        <p style={{ fontSize: 14, color: "#8A9197", marginBottom: 16 }}>
          System designs from production work — hover nodes to highlight connections.
        </p>
        <hr style={{ height: 1, background: "#233238", border: 0 }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {diagrams.map((diagram) => (
          <div key={diagram.id}>
            <h3 style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 17,
              color: "#F1ECDD",
              margin: "0 0 6px 0",
            }}>
              {diagram.title}
            </h3>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              color: "#8A9197",
              margin: "0 0 16px 0",
              lineHeight: 1.55,
            }}>
              {diagram.description}
            </p>
            <ArchDiagram diagram={diagram} />
          </div>
        ))}
      </div>
    </section>
  );
}
