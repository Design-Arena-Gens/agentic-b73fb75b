"use client";

import { Section } from "./Section";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Initiate trial"
      title="Deploy Axiom within your automation ecosystem."
      description="Connect with our integration cell to map your assets, capture your control surfaces, and activate adaptive intelligence."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-panel/70 p-8">
          <div className="text-xs uppercase tracking-[0.3em] text-white/50">Engagement pathway</div>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs text-accent">
                1
              </span>
              <div>
                <div className="font-semibold text-white">Discovery Pulse</div>
                <p>Rapid digitization of assets, OT network footprint, and operational goals.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs text-accent">
                2
              </span>
              <div>
                <div className="font-semibold text-white">Pilot Orchestration</div>
                <p>Deploy in controlled cell with AI co-agent oversight and compliance wrap.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs text-accent">
                3
              </span>
              <div>
                <div className="font-semibold text-white">Scale Mesh</div>
                <p>Lift to full operations with continuous learning, governance, and support.</p>
              </div>
            </li>
          </ul>
        </div>
        <form className="space-y-6 rounded-3xl border border-white/10 bg-panel/60 p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm text-white/70">
              Name
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30"
                placeholder="Samira Lee"
              />
            </label>
            <label className="text-sm text-white/70">
              Role
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30"
                placeholder="Automation Director"
              />
            </label>
          </div>
          <label className="text-sm text-white/70">
            Organization
            <input
              type="text"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30"
              placeholder="Axiom Manufacturing"
            />
          </label>
          <label className="text-sm text-white/70">
            Operational Focus
            <textarea
              className="mt-2 h-28 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30"
              placeholder="Outline your lines, control stack, and immediate objectives."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-accent py-3 font-semibold text-slate-900 shadow-glow transition hover:bg-white"
          >
            Initiate Deployment Dialogue
          </button>
        </form>
      </div>
    </Section>
  );
}
