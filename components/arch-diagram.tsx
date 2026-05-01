"use client";

import { useState } from "react";
import type { DiagramDef } from "@/lib/data";

const TYPE_LABELS: Record<string, string> = {
  external: "EXTERNAL",
  database: "STORE",
  service: "SERVICE",
  queue: "QUEUE",
  infra: "INFRA",
  client: "CLIENT",
};

const NW = 160, NH = 76;

function edgePath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const ax = a.x + NW / 2, ay = a.y + NH / 2;
  const bx = b.x + NW / 2, by = b.y + NH / 2;
  const mx = (ax + bx) / 2;
  return `M ${ax} ${ay} C ${mx} ${ay}, ${mx} ${by}, ${bx} ${by}`;
}

export function ArchDiagram({ diagram }: { diagram: DiagramDef }) {
  const W = 720, H = 420;
  const nodeById = Object.fromEntries(diagram.nodes.map(n => [n.id, n]));
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div style={{
      position: "relative",
      width: "100%",
      aspectRatio: "720 / 420",
      border: "1px solid #233238",
      borderRadius: 8,
      background: "#16242A",
      overflow: "hidden",
    }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: "block" }}>
        <defs>
          <pattern id="arch-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="#233238" opacity="0.8"/>
          </pattern>
          <marker id="arch-arrow" viewBox="0 0 10 10" refX="9" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#8A9197"/>
          </marker>
        </defs>
        <rect width={W} height={H} fill="url(#arch-dots)" />

        {diagram.edges.map(([from, to], i) => (
          <path key={i}
            d={edgePath(nodeById[from], nodeById[to])}
            fill="none"
            stroke="#8A9197"
            strokeWidth="1"
            opacity={hover && (hover === from || hover === to) ? 1 : 0.4}
            markerEnd="url(#arch-arrow)"
          />
        ))}

        {diagram.nodes.map(n => (
          <g key={n.id}
             transform={`translate(${n.x}, ${n.y})`}
             onMouseEnter={() => setHover(n.id)}
             onMouseLeave={() => setHover(null)}
             style={{ cursor: "pointer" }}>
            <rect width={NW} height={NH} rx={6}
                  fill="#101A1D"
                  stroke={hover === n.id ? "#B8A05E" : "#233238"}
                  strokeWidth={hover === n.id ? 1.5 : 1}/>
            <line x1="12" y1="14" x2="12" y2="20"
                  stroke="#B8A05E" strokeWidth="2" strokeLinecap="round"/>
            <text x="22" y="20" fill="#8A9197"
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="9" letterSpacing="1.4">
              {TYPE_LABELS[n.type] || "NODE"}
            </text>
            <text x="12" y="42" fill="#F1ECDD"
                  fontFamily="Inter, sans-serif"
                  fontSize="13" fontWeight="600">{n.label}</text>
            <text x="12" y="60" fill="#8A9197"
                  fontFamily="Inter, sans-serif"
                  fontSize="11">{n.desc}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
