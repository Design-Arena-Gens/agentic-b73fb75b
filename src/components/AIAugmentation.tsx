"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";
import {
  ChatBubbleBottomCenterTextIcon,
  ShieldCheckIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

const assistants = [
  {
    name: "Sense",
    icon: SparklesIcon,
    mission: "Anticipates operator intent and pre-builds action pathways.",
    highlights: [
      "Learns from sensor context & behavioral cues",
      "Generates guard-railed automation scripts",
      "Streams counterfactual simulations"
    ],
    badge: "Predictive"
  },
  {
    name: "Lex",
    icon: ChatBubbleBottomCenterTextIcon,
    mission: "Conversational co-creator bridging human language and deterministic logic.",
    highlights: [
      "Understands domain terminology and standards",
      "Produces explainable IEC 61131-3 blocks",
      "Negotiates intents in multi-user sessions"
    ],
    badge: "Linguistic"
  },
  {
    name: "Sentinel",
    icon: ShieldCheckIcon,
    mission: "Safeguards operations with continuous compliance and resilience checks.",
    highlights: [
      "Evaluates risk posture pre-deployment",
      "Verifies safety envelopes in real time",
      "Maintains auditable policy ledger"
    ],
    badge: "Guardian"
  }
];

export function AIAugmentation() {
  return (
    <Section
      id="ai-augmentation"
      eyebrow="AI augmentation"
      title="Specialized AI co-agents collaborate in every workflow transition."
      description="Each Axiom agent interprets context from the unified asset graph, digital twin, and human intent to compress decision loops while keeping humans in purposeful control."
    >
      <div className="grid gap-8 md:grid-cols-3">
        {assistants.map((assistant, index) => (
          <motion.div
            key={assistant.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel/70 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30" />
            <div className="relative flex items-center gap-4">
              <assistant.icon className="h-10 w-10 text-accent" />
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-accent">{assistant.badge}</div>
                <h3 className="font-display text-2xl text-white">{assistant.name}</h3>
              </div>
            </div>
            <p className="relative mt-4 text-sm text-slate-300">{assistant.mission}</p>
            <ul className="relative mt-5 space-y-3 text-sm text-white/70">
              {assistant.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
