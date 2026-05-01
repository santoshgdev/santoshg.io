import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section style={{ paddingBlock: 64, scrollMarginTop: 64 }}>
      {/* Kicker */}
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        color: "#8A9197",
        textTransform: "uppercase",
        marginBottom: 20,
      }}>
        Open to interesting problems
      </p>

      {/* Hero line */}
      <p style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: "clamp(26px, 3.3vw, 38px)",
        lineHeight: 1.22,
        letterSpacing: "-0.025em",
        color: "#F1ECDD",
        maxWidth: "72ch",
        marginBottom: 36,
      }}>
        {profile.heroLine}
      </p>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: 12, flexWrap: "nowrap", alignItems: "center" }}>
        <a href="#experience" style={{
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
          View experience
        </a>
        <a href="#contact" style={{
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
          Get in touch ↗
        </a>
      </div>
    </section>
  );
}
