"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const stats = [
  { label: "Latency", value: "14 ms", detail: "edge control loop" },
  { label: "Assets", value: "18,432", detail: "live graph nodes" },
  { label: "Anomalies", value: "0.02%", detail: "AI-driven false positives" },
  { label: "Collaborators", value: "122", detail: "multi-role presence" }
];

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-white/5 bg-[#050B1A]">
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-10 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[220px]" />
        <div className="absolute left-40 top-20 h-[420px] w-[420px] rounded-full bg-accent-secondary/10 blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,46,86,0.8),_transparent_70%)]" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-accent">
            Axiom HMI · Sentient Automation Surface
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold text-white md:text-7xl">
            Unify industrial cognition, collaboration, and control in one adaptive mesh.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Axiom bridges edge and cloud intelligence so engineers, technicians, and operators
            can reason over 4D twins, program via any modality, and act with predictive clarity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#dynamic-process-canvas"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-slate-900 shadow-glow transition hover:bg-white"
            >
              Explore Dynamic Process Canvas
              <ChevronRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#mission-control"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/10"
            >
              View Mission Console
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-lg sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-sm uppercase tracking-[0.32em] text-white/50">{stat.label}</div>
              <div className="mt-2 font-display text-3xl text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-400">{stat.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
