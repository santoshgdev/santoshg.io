"use client";

import { useState, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  type Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { diagrams, type Diagram } from "@/lib/data";
import { SectionHeading } from "./experience";
import { DiagramNode } from "./diagram-node";

const nodeTypes = { default: DiagramNode };

function FlowDiagram({ diagram }: { diagram: Diagram }) {
  const initialEdges: Edge[] = diagram.edges.map((e) => ({
    ...e,
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { strokeWidth: 1.5, stroke: "oklch(0.35 0.015 280)" },
    labelStyle: { fontSize: 10, fill: "oklch(0.5 0.015 240)" },
    labelBgStyle: { fill: "transparent" },
  }));

  const [nodes, , onNodesChange] = useNodesState(diagram.nodes as never);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-[420px] rounded-xl border border-border overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        colorMode="dark"
        className="bg-card"
      >
        <Background gap={24} size={0.5} color="oklch(0.25 0.015 280)" />
        <Controls className="!shadow-none !border-border !bg-card" />
        <MiniMap
          nodeStrokeWidth={2}
          className="!border-border !rounded-lg overflow-hidden !bg-card"
        />
      </ReactFlow>
    </div>
  );
}

export function Diagrams() {
  const [active, setActive] = useState(0);

  return (
    <section id="diagrams">
      <SectionHeading title="Architecture Diagrams" />
      <p className="text-sm text-muted-foreground -mt-4 mb-8">
        Interactive system diagrams — pan, zoom, and explore.
      </p>

      {diagrams.length > 1 && (
        <div className="flex gap-2 mb-6 flex-wrap">
          {diagrams.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setActive(i)}
              className={`text-xs font-mono px-4 py-1.5 rounded-full border transition-all duration-150 ${
                active === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>
      )}

      <p className="text-sm text-muted-foreground mb-4">{diagrams[active].description}</p>
      <FlowDiagram diagram={diagrams[active]} />
    </section>
  );
}
