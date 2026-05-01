import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" style={{ paddingBlock: 64, scrollMarginTop: 64 }}>
      {/* Section heading */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#B8A05E", fontSize: 12, letterSpacing: "0.1em" }}>01</span>
          <h2 style={{ font: "600 26px/1.2 var(--font-sans)", letterSpacing: "-0.015em", color: "#F1ECDD", margin: 0 }}>Experience</h2>
        </div>
        <p style={{ fontSize: 14, color: "#8A9197", marginBottom: 16 }}>
          Ten years across clinical research, biostatistics, and data engineering.
        </p>
        <hr style={{ height: 1, background: "#233238", border: 0 }} />
      </div>

      {/* Experience rows */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {experience.map((job, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 32,
              padding: "24px 12px",
              borderTop: i === 0 ? "none" : "1px solid #1A282E",
            }}
          >
            {/* Period */}
            <div style={{ width: 130, flexShrink: 0, paddingTop: 2 }}>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12.5,
                color: "#8A9197",
                whiteSpace: "nowrap",
              }}>
                {job.period}
              </span>
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 17,
                color: "#F1ECDD",
                margin: "0 0 4px 0",
              }}>
                {job.role}
              </h3>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12.5,
                color: "#8A9197",
                margin: "0 0 10px 0",
              }}>
                {job.company} · {job.location}
              </p>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "#C9C4B5",
                lineHeight: 1.62,
                margin: "0 0 14px 0",
              }}>
                {job.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {job.tags.map((tag) => (
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
