"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";

const nodes = [
  {
    id: "controller",
    label: "Edge Controller",
    status: "Synchronized",
    role: "Deterministic orchestrator",
    impacts: ["Twin parity", "Latency guard", "Patch ledger"]
  },
  {
    id: "sensor",
    label: "Sensor Mesh",
    status: "Streaming",
    role: "Adaptive telemetry fabric",
    impacts: ["1.2M datapoints/s", "Self-healing links", "Semantic tagging"]
  },
  {
    id: "robotics",
    label: "Robotic Cells",
    status: "Coordinated",
    role: "Precision assembly cluster",
    impacts: ["Torque harmonization", "Path optimization", "Shared safety field"]
  },
  {
    id: "quality",
    label: "Quality Lab",
    status: "Augmented",
    role: "AI fused inspection",
    impacts: ["Hyperspectral anomaly detection", "Auto-release criteria", "Traceability"]
  },
  {
    id: "supply",
    label: "Supply Nexus",
    status: "Just-in-time",
    role: "Material intelligence network",
    impacts: ["Predictive requisition", "Supplier handshake", "Sustainability score"]
  }
];

const relationships = [
  { from: "controller", to: "robotics", weight: 0.86 },
  { from: "controller", to: "sensor", weight: 0.92 },
  { from: "controller", to: "quality", weight: 0.78 },
  { from: "sensor", to: "quality", weight: 0.67 },
  { from: "robotics", to: "quality", weight: 0.74 },
  { from: "supply", to: "controller", weight: 0.58 },
  { from: "supply", to: "robotics", weight: 0.61 }
];

const polarMap: Record<string, { x: number; y: number }> = {
  controller: { x: 50, y: 50 },
  sensor: { x: 22, y: 20 },
  robotics: { x: 78, y: 28 },
  quality: { x: 25, y: 78 },
  supply: { x: 80, y: 75 }
};

export function UnifiedAssetGraph() {
  return (
    <Section
      id="asset-graph"
      eyebrow="Unified asset graph"
      title="Every component becomes an intelligent, contextual node in the real-time asset graph."
      description="Axiom fuses telemetry, knowledge, and control states into a living knowledge graph that maps dependencies, opportunities, and risks across the enterprise fabric."
    >
      <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel/70 p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(4,105,150,0.4),_transparent_60%)]" />
          <div className="relative h-[460px] w-full rounded-2xl border border-white/5 bg-white/[0.03]">
            <svg className="absolute inset-0 h-full w-full">
              {relationships.map((edge) => {
                const start = polarMap[edge.from];
                const end = polarMap[edge.to];
                return (
                  <line
                    key={`${edge.from}-${edge.to}`}
                    x1={`${start.x}%`}
                    y1={`${start.y}%`}
                    x2={`${end.x}%`}
                    y2={`${end.y}%`}
                    stroke="url(#ax-gradient)"
                    strokeWidth={3 * edge.weight}
                    opacity={0.6 + edge.weight * 0.3}
                    strokeLinecap="round"
                  />
                );
              })}
              <defs>
                <linearGradient id="ax-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00F7FF" />
                  <stop offset="100%" stopColor="#8C61FF" />
                </linearGradient>
              </defs>
            </svg>
            {nodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{
                  left: `${polarMap[node.id].x}%`,
                  top: `${polarMap[node.id].y}%`,
                  transform: "translate(-50%, -50%)"
                }}
                className="absolute w-52 rounded-2xl border border-white/10 bg-white/[0.05] p-4 shadow"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-accent/80">Node</div>
                <div className="mt-2 font-semibold text-white">{node.label}</div>
                <div className="text-xs text-white/60">{node.status}</div>
                <ul className="mt-3 space-y-2 text-xs text-slate-300">
                  {node.impacts.map((impact) => (
                    <li key={impact} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {nodes.map((node) => (
            <div
              key={`${node.id}-detail`}
              className="rounded-3xl border border-white/10 bg-gradient-to-r from-panel to-panel/30 p-6"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-white/50">
                {node.label}
              </div>
              <div className="mt-2 font-display text-xl text-white">{node.role}</div>
              <p className="mt-3 text-sm text-slate-300">
                Status: <span className="text-accent">{node.status}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
