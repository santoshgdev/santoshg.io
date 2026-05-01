"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const navItems = [
  { id: "experience",   num: "01", label: "Experience" },
  { id: "projects",     num: "02", label: "Selected Projects" },
  { id: "publications", num: "03", label: "Publications" },
  { id: "diagrams",     num: "04", label: "Diagrams" },
  { id: "skills",       num: "05", label: "Skills" },
  { id: "now",          num: "06", label: "Now" },
  { id: "contact",      num: "07", label: "Contact" },
];

export function Sidebar() {
  const [active, setActive] = useState("experience");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div>
        {/* Kicker */}
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "#8A9197",
          textTransform: "uppercase",
          marginBottom: 12,
        }}>
          // Portfolio
        </p>

        {/* Name */}
        <h1 style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 600,
          fontSize: "clamp(28px, 3.5vw, 44px)",
          letterSpacing: "-0.04em",
          color: "#F1ECDD",
          margin: "0 0 8px 0",
          lineHeight: 1.1,
        }}>
          {profile.name}
        </h1>

        {/* Title */}
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          color: "#C9C4B5",
          marginBottom: 6,
        }}>
          {profile.title}
        </p>

        {/* Location */}
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "#8A9197",
          marginBottom: 20,
        }}>
          {profile.location}
        </p>

        {/* Bio */}
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          lineHeight: 1.55,
          color: "#8A9197",
          maxWidth: 300,
          marginBottom: 40,
        }}>
          {profile.bio}
        </p>

        {/* Nav */}
        <nav className="hidden lg:block">
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
            {navItems.map(({ id, num, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "28px 14px 1fr",
                      gap: 14,
                      alignItems: "center",
                      padding: "6px 0",
                      textDecoration: "none",
                      color: isActive ? "#F1ECDD" : "#8A9197",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = "#F1ECDD";
                    }}
                    onMouseLeave={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = "#8A9197";
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11.5,
                      color: isActive ? "#B8A05E" : "inherit",
                      letterSpacing: "0.05em",
                    }}>
                      {num}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11.5,
                      color: "#8A9197",
                      opacity: 0.4,
                    }}>/</span>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      fontWeight: isActive ? 600 : 400,
                    }}>
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Resume link */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "var(--font-mono)",
          fontSize: 11.5,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#8A9197",
          textDecoration: "none",
          border: "1px solid #233238",
          borderRadius: 4,
          padding: "6px 10px",
          marginBottom: 16,
          transition: "color 0.15s ease, border-color 0.15s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.color = "#B8A05E";
          (e.currentTarget as HTMLElement).style.borderColor = "#B8A05E";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.color = "#8A9197";
          (e.currentTarget as HTMLElement).style.borderColor = "#233238";
        }}
      >
        Resume ↓
      </a>

      {/* Social icons */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 8 }}>
        {/* GitHub */}
        <a href={profile.github} target="_blank" rel="noopener noreferrer"
          style={{ color: "#8A9197", transition: "color 0.15s ease" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#B8A05E"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#8A9197"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
          style={{ color: "#8A9197", transition: "color 0.15s ease" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#B8A05E"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#8A9197"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>

        {/* Email */}
        <a href={`mailto:${profile.email}`}
          style={{ color: "#8A9197", transition: "color 0.15s ease" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#B8A05E"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#8A9197"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>

        {/* Google Scholar — book-open icon */}
        <a href={profile.scholar} target="_blank" rel="noopener noreferrer"
          style={{ color: "#8A9197", transition: "color 0.15s ease" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#B8A05E"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#8A9197"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
