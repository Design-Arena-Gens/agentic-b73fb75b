"use client";

import { Section } from "./Section";
import { DynamicProcessCanvas } from "./DynamicProcessCanvas";

const signals = [
  { label: "Thermal gradient", value: "Δ 14.2°C", context: "Zone 3 to Zone 4" },
  { label: "Stress envelope", value: "Safe", context: "Max 62% of tolerance" },
  { label: "Flow vectors", value: "Stabilized", context: "Variance < 0.2%" },
  { label: "Anomaly guard", value: "Green", context: "No anomalies flagged" }
];

export function DynamicProcessCanvasSection() {
  return (
    <Section
      id="dynamic-process-canvas"
      eyebrow="Dynamic process canvas"
      title="Interact with a 4D digital twin that blends spatial context, time, and operational intelligence."
      description="Smart zoom transitions effortlessly from plant topology to component telemetry while gesture-ready controls adapt to operator intent."
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <DynamicProcessCanvas />
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-panel/70 p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">
              Context layers
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Thermal, stress, vibration, and flow overlays orchestrate together, while the temporal
              scrubber weaves historical data streams into the live twin for predictive decisions.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {signals.map((signal) => (
                <li
                  key={signal.label}
                  className="flex items-start justify-between rounded-2xl border border-white/5 bg-white/[0.04] px-4 py-3"
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {signal.label}
                    </div>
                    <div className="text-xs text-slate-400">{signal.context}</div>
                  </div>
                  <div className="font-semibold text-accent">{signal.value}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-panel to-panel/40 p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Gesture lexicon</div>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div>
                <span className="font-semibold text-white">Pinch to timeline:</span> Dilate and
                compress time-window overlays to inspect anomalies.
              </div>
              <div>
                <span className="font-semibold text-white">Rotate sweep:</span> Reorient full cell or
                isolate subsystem with contextual legends.
              </div>
              <div>
                <span className="font-semibold text-white">Flow tether:</span> Drag vector to
                simulate rerouting; predictive AI evaluates outcomes instantly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
