"use client";

import { Handle, Position } from "@xyflow/react";

const typeConfig: Record<
  string,
  { border: string; bg: string; dot: string; label: string }
> = {
  client: {
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/[0.08]",
    dot: "bg-indigo-400",
    label: "CLIENT",
  },
  service: {
    border: "border-violet-500/30",
    bg: "bg-violet-500/[0.08]",
    dot: "bg-violet-400",
    label: "SERVICE",
  },
  database: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/[0.08]",
    dot: "bg-emerald-400",
    label: "DATABASE",
  },
  infra: {
    border: "border-slate-500/30",
    bg: "bg-slate-500/[0.08]",
    dot: "bg-slate-400",
    label: "INFRA",
  },
  external: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/[0.08]",
    dot: "bg-amber-400",
    label: "EXTERNAL",
  },
  queue: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/[0.08]",
    dot: "bg-cyan-400",
    label: "QUEUE",
  },
};

export function DiagramNode({
  data,
  selected,
}: {
  data: { label: string; type: string; description?: string };
  selected?: boolean;
}) {
  const cfg = typeConfig[data.type] ?? typeConfig.service;
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      />
      <div
        className={`rounded-xl border px-4 py-3 min-w-[160px] transition-all duration-150 ${cfg.border} ${cfg.bg} ${
          selected
            ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
            : ""
        }`}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
          <span className="text-[9px] font-mono tracking-widest text-muted-foreground">
            {cfg.label}
          </span>
        </div>
        <div className="font-semibold text-sm text-foreground leading-snug">
          {data.label}
        </div>
        {data.description && (
          <div className="text-[11px] text-muted-foreground mt-1 leading-snug">
            {data.description}
          </div>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      />
    </>
  );
}
