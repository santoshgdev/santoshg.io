import { publications, profile } from "@/lib/data";

export function Publications() {
  return (
    <section id="publications" style={{ paddingBlock: 64, scrollMarginTop: 64 }}>
      {/* Section heading */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#B8A05E", fontSize: 12, letterSpacing: "0.1em" }}>03</span>
          <h2 style={{ font: "600 26px/1.2 var(--font-sans)", letterSpacing: "-0.015em", color: "#F1ECDD", margin: 0 }}>Publications</h2>
        </div>
        <hr style={{ height: 1, background: "#233238", border: 0 }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {publications.map((pub, i) => (
          <div key={i} style={{
            display: "flex",
            gap: 24,
            padding: "20px 0",
            borderTop: i === 0 ? "none" : "1px solid #1A282E",
            alignItems: "flex-start",
          }}>
            {/* Year */}
            <div style={{ width: 60, flexShrink: 0 }}>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#8A9197",
              }}>
                {pub.year}
              </span>
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <a href={pub.href} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 15,
                color: "#F1ECDD",
                textDecoration: "none",
                display: "inline",
                lineHeight: 1.4,
              }}
              >
                {pub.title}
              </a>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                color: "#8A9197",
                margin: "4px 0 0 0",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", color: "#B8A05E", fontSize: 12 }}>{pub.venue}</span>
                {" · "}
                {pub.authors}
              </p>
            </div>

            {/* External link icon */}
            <a href={pub.href} target="_blank" rel="noopener noreferrer"
              style={{ color: "#8A9197", flexShrink: 0, paddingTop: 2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid #1A282E" }}>
        <a href={profile.scholar} target="_blank" rel="noopener noreferrer" style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12.5,
          color: "#8A9197",
          textDecoration: "none",
        }}
        >
          Full list on Google Scholar ↗
        </a>
      </div>
    </section>
  );
}
