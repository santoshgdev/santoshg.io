"use client";

import { useState, useCallback, useEffect } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  type Edge,
  type NodeMouseHandler,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";

import { diagrams, profile } from "@/lib/data";
import { DiagramNode } from "@/components/diagram-node";

const nodeTypes = { default: DiagramNode };

const diagram = diagrams[0];

const initialEdges: Edge[] = diagram.edges.map((e) => ({
  ...e,
  type: "smoothstep",
  markerEnd: { type: MarkerType.ArrowClosed, color: "oklch(0.3 0.015 270)" },
  style: {
    strokeWidth: 1.5,
    stroke: e.animated ? "oklch(0.38 0.05 270)" : "oklch(0.3 0.015 270)",
  },
  labelStyle: { fontSize: 10, fill: "oklch(0.52 0.015 260)" },
  labelBgStyle: { fill: "transparent" },
}));

const typeBadgeColors: Record<string, string> = {
  client: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  service: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  database: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  infra: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  external: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  queue: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
};

type SelectedNodeData = {
  id: string;
  label: string;
  type: string;
  description?: string;
};

export function HeroDiagram() {
  const [nodes, , onNodesChange] = useNodesState(diagram.nodes as never);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<SelectedNodeData | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const onNodeClick: NodeMouseHandler = useCallback((_, node) => {
    const d = node.data as { label?: unknown; type?: unknown; description?: unknown };
    setSelectedNode({
      id: node.id,
      label: String(d.label ?? ""),
      type: String(d.type ?? "service"),
      description: d.description ? String(d.description) : undefined,
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Glass nav */}
      <nav
        style={{ position: "fixed", top: 0, zIndex: 50 }}
        className="w-full backdrop-blur-md bg-background/40 border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">
            {profile.name}
          </span>
          <div className="flex items-center gap-6">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* React Flow diagram */}
      <div className="absolute inset-0">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          colorMode="dark"
          onNodeClick={onNodeClick}
          onPaneClick={() => setSelectedNode(null)}
          proOptions={{ hideAttribution: true }}
        >
          <Background gap={32} size={0.8} color="oklch(0.18 0.01 270)" />
          <Controls
            position="bottom-right"
            className="!shadow-none !border-border !bg-card/80 !backdrop-blur-sm"
          />
        </ReactFlow>
      </div>

      {/* Glass hero panel — bottom-left */}
      <div
        className="absolute bottom-12 left-12 z-10 backdrop-blur-md rounded-2xl p-6 max-w-xs"
        style={{
          background:
            "linear-gradient(oklch(0.07 0.01 270 / 0.6), oklch(0.07 0.01 270 / 0.6)) padding-box, linear-gradient(135deg, rgba(139,92,246,0.5), rgba(99,102,241,0.3)) border-box",
          border: "1px solid transparent",
        }}
      >
        <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
          KRW Platform
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-1">
          {profile.name}
        </h1>
        <p className="text-sm text-muted-foreground mb-3">{profile.title}</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {profile.bio}
        </p>
      </div>

      {/* Scroll hint — bottom center */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none"
          >
            <p className="text-xs font-mono text-muted-foreground tracking-widest">
              scroll to explore
            </p>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="text-muted-foreground text-sm"
            >
              ▼
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Node detail panel — slides in from right */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            key="node-panel"
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-80 bg-card/95 backdrop-blur-xl border-l border-border z-40 p-6 flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedNode(null)}
              className="self-end text-muted-foreground hover:text-foreground transition-colors mb-6 text-xs font-mono tracking-wide"
            >
              ✕ close
            </button>

            {/* Type badge */}
            <span
              className={`self-start text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded border mb-4 ${
                typeBadgeColors[selectedNode.type] ?? typeBadgeColors.service
              }`}
            >
              {selectedNode.type}
            </span>

            {/* Node name */}
            <h2 className="text-xl font-bold mb-3 leading-snug">
              {selectedNode.label}
            </h2>

            {/* Description */}
            {selectedNode.description && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedNode.description}
              </p>
            )}

            {/* Divider */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-xs font-mono text-muted-foreground">
                Node ID:{" "}
                <span className="text-primary">{selectedNode.id}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
