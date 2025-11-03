"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";

const channels = [
  {
    mode: "AR Glass Surface",
    description: "Immersive overlays align with the 4D twin for hands-free interventions.",
    timeline: "Live, 60 fps contextual anchors",
    gradient: "from-[#2B1D82] via-[#122556] to-[#081329]"
  },
  {
    mode: "Gesture & Voice Control",
    description: "Operators sculpt logic and inspect machinery with natural modalities.",
    timeline: "Edge interpreter < 30 ms loop",
    gradient: "from-[#0A636C] via-[#104D56] to-[#081D32]"
  },
  {
    mode: "Mobile Field Console",
    description: "Technicians receive AI-guided steps, diagnostics, and secure approvals.",
    timeline: "Offline-first, sync less than 3 s",
    gradient: "from-[#6042A6] via-[#352168] to-[#10152D]"
  }
];

export function CrossReality() {
  return (
    <Section
      id="cross-reality"
      eyebrow="Cross reality sync"
      title="Wearable, spatial, and traditional surfaces stay synchronized through the edge-cloud continuum."
      description="Axiom composites depth-sensed environments, semantic gestures, and natural language cues into a unified orchestration stream."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {channels.map((channel, index) => (
          <motion.div
            key={channel.mode}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-panel/70"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60" />
            <div
              className={`relative h-48 w-full transform-gpu bg-gradient-to-br ${channel.gradient} opacity-80 transition duration-500 group-hover:scale-105`}
            />
            <div className="relative space-y-4 p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-accent">{channel.timeline}</div>
              <h3 className="font-display text-2xl text-white">{channel.mode}</h3>
              <p className="text-sm text-slate-300">{channel.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
