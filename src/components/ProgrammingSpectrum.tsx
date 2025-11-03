"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";

const spectrum = [
  {
    stage: "Drag · Drop Flow",
    description: "Spatial logic composition with context-aware node suggestions.",
    artifacts: [
      "Constraint solver alignment",
      "Live validation overlays",
      "Auto-doc narratives"
    ],
    color: "from-accent/50 via-accent to-accent-secondary"
  },
  {
    stage: "Natural Language Synthesis",
    description: "Conversational intents transcribed into deterministic automation blueprints.",
    artifacts: [
      "IEC 61131-3 parity",
      "Safety interlock infusion",
      "Change impact simulation"
    ],
    color: "from-accent-secondary/40 via-accent-secondary to-accent"
  },
  {
    stage: "Deterministic Runtime",
    description:
      "Edge deployment with deterministic rollback, digital twin verification, and telemetry binding.",
    artifacts: ["Edge cell diff", "Latency guard rails", "Certified handoff ledger"],
    color: "from-white/10 via-accent-secondary/70 to-accent/70"
  }
];

export function ProgrammingSpectrum() {
  return (
    <Section
      id="programming-spectrum"
      eyebrow="Programming spectrum"
      title="Fluidly transition from gestural logic sketching to formal IEC 61131-3 deployment."
      description="Axiom’s codeplane interprets every modality, co-generates deterministic automation code, and validates against the live digital twin before release."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {spectrum.map((step, index) => (
          <motion.div
            key={step.stage}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel/70 p-8 shadow-xl"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${step.color} opacity-20`}
            />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                Phase {index + 1}
              </div>
              <h3 className="mt-3 font-display text-2xl text-white">{step.stage}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {step.artifacts.map((artifact) => (
                  <li key={artifact} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{artifact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
