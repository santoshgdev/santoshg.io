import { now } from "@/lib/data";

export function Now() {
  return (
    <section id="now" style={{ paddingBlock: 64, scrollMarginTop: 64 }}>
      {/* Section heading */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#B8A05E", fontSize: 12, letterSpacing: "0.1em" }}>06</span>
          <h2 style={{ font: "600 26px/1.2 var(--font-sans)", letterSpacing: "-0.015em", color: "#F1ECDD", margin: 0 }}>Now</h2>
        </div>
        <p style={{ fontSize: 14, color: "#8A9197", marginBottom: 16 }}>
          A few things on my plate.
        </p>
        <hr style={{ height: 1, background: "#233238", border: 0 }} />
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        {now.map((item, i) => (
          <li key={i} style={{
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
          }}>
            <span style={{
              color: "#B8A05E",
              fontSize: 16,
              lineHeight: 1.62,
              flexShrink: 0,
            }}>
              ●
            </span>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              color: "#C9C4B5",
              lineHeight: 1.62,
            }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
