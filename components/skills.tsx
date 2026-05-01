import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" style={{ paddingBlock: 64, scrollMarginTop: 64 }}>
      {/* Section heading */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#B8A05E", fontSize: 12, letterSpacing: "0.1em" }}>05</span>
          <h2 style={{ font: "600 26px/1.2 var(--font-sans)", letterSpacing: "-0.015em", color: "#F1ECDD", margin: 0 }}>Skills</h2>
        </div>
        <hr style={{ height: 1, background: "#233238", border: 0 }} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 32,
      }}>
        {skills.map((group) => (
          <div key={group.category}>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#B8A05E",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginBottom: 12,
            }}>
              {group.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {group.items.map((item) => (
                <span key={item} style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  padding: "3px 8px",
                  border: "1px solid #2D3D44",
                  borderRadius: 4,
                  color: "#8A9197",
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
