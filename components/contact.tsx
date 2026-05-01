import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" style={{ paddingBlock: 64, scrollMarginTop: 64 }}>
      {/* Section heading */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#B8A05E", fontSize: 12, letterSpacing: "0.1em" }}>07</span>
          <h2 style={{ font: "600 26px/1.2 var(--font-sans)", letterSpacing: "-0.015em", color: "#F1ECDD", margin: 0 }}>Contact</h2>
        </div>
        <hr style={{ height: 1, background: "#233238", border: 0 }} />
      </div>

      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        color: "#C9C4B5",
        lineHeight: 1.62,
        maxWidth: "52ch",
        marginBottom: 32,
      }}>
        Open to interesting problems and conversations. Reach out via email or find me on GitHub and LinkedIn.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {/* Email — primary */}
        <a href={`mailto:${profile.email}`} style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 18px",
          background: "#B8A05E",
          color: "#101A1D",
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          fontWeight: 500,
          borderRadius: 4,
          border: "1px solid transparent",
          textDecoration: "none",
        }}>
          {profile.email}
        </a>

        {/* GitHub — ghost */}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 18px",
          background: "transparent",
          color: "#C9C4B5",
          fontSize: 13,
          fontFamily: "var(--font-sans)",
          borderRadius: 4,
          border: "1px solid #233238",
          textDecoration: "none",
        }}>
          GitHub
        </a>

        {/* LinkedIn — ghost */}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 18px",
          background: "transparent",
          color: "#C9C4B5",
          fontSize: 13,
          fontFamily: "var(--font-sans)",
          borderRadius: 4,
          border: "1px solid #233238",
          textDecoration: "none",
        }}>
          LinkedIn
        </a>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid #1A282E" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "#8A9197",
          margin: 0,
        }}>
          © 2026 Santosh Gummidipundi · {profile.email}
        </p>
      </div>
    </section>
  );
}
