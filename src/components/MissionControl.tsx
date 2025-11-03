"use client";

import { Section } from "./Section";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  CpuChipIcon,
  PlayCircleIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";

const actionCards = [
  {
    icon: BoltIcon,
    title: "Predictive Intent",
    description:
      "Sequence updated: adjusting thermal load to 62% to pre-empt catalyst decay in Line B.",
    impact: "5.8% energy savings",
    actor: "Axiom Sense",
    mode: "Autonomous ready"
  },
  {
    icon: CpuChipIcon,
    title: "Adaptive Logic Bridge",
    description:
      "Natural language request translated to IEC 61131-3 Structured Text with inline verification.",
    impact: "Deployment ETA 17s",
    actor: "Engineer Nova",
    mode: "Collaborative"
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Maintenance Twin Handoff",
    description:
      "AR overlay synced to field unit. Step-by-step torque sequence streaming to HoloLens devices.",
    impact: "Technician ready",
    actor: "FieldOps Crew",
    mode: "Guided"
  }
];

const timeline = [
  {
    time: "14:05:12",
    label: "Anomaly attention",
    detail: "Vibration delta in Servo Cluster 4 within tolerance band; flagged for trend observation."
  },
  {
    time: "14:05:29",
    label: "AI co-agent",
    detail:
      "Suggested control patch applied in sandbox. Awaiting gestalt approval to promote to live cell."
  },
  {
    time: "14:06:02",
    label: "Cross-reality sync",
    detail:
      "Mixed reality session initiated – 3 operators, 1 AI observer. Thermal lens cascaded to wearables."
  },
  {
    time: "14:06:18",
    label: "Outcome verification",
    detail:
      "KPIs stabilized; cascading adjustments queued. Post-action report compiled for compliance."
  }
];

type KPIStatus = "positive" | "neutral" | "negative";

type KPI = {
  label: string;
  value: string;
  trend: string;
  status: KPIStatus;
};

const kpis: KPI[] = [
  { label: "Output yield", value: "98.7%", trend: "+1.2%", status: "positive" },
  { label: "Energy index", value: "0.87", trend: "-0.04", status: "positive" },
  { label: "Interventions", value: "3 pending", trend: "AI assisted", status: "neutral" },
  { label: "Downtime risk", value: "0.3%", trend: "-42%", status: "positive" }
];

const statusColor: Record<KPIStatus, string> = {
  positive: "text-success",
  neutral: "text-white/70",
  negative: "text-danger"
};

export function MissionControl() {
  return (
    <Section
      id="mission-control"
      eyebrow="Mission Control"
      title="Adaptive mission surface orchestrating intent, execution, and verification."
      description="Real-time orchestration hub where AI agents, human experts, and automation fabric co-create outcomes."
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {actionCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-white/10 bg-panel/80 p-6 backdrop-blur transition hover:border-accent/60"
              >
                <div className="flex items-center gap-3">
                  <card.icon className="h-8 w-8 text-accent" />
                  <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {card.mode}
                  </div>
                </div>
                <h3 className="mt-4 font-display text-xl text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{card.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                  <span>{card.actor}</span>
                  <span className="text-accent">{card.impact}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-panel to-panel/60 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Temporal Thread
                </div>
                <h3 className="mt-2 font-display text-2xl text-white">
                  Spatial-temporal stream: North Line B
                </h3>
              </div>
              <PlayCircleIcon className="h-12 w-12 text-accent" />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {timeline.map((item) => (
                <div key={`${item.time}-${item.label}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/40">
                    {item.time}
                  </div>
                  <div className="mt-1 font-semibold text-white">{item.label}</div>
                  <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-panel/80 p-6">
            <div className="flex items-center gap-3">
              <UserGroupIcon className="h-6 w-6 text-accent" />
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">Presence Map</div>
            </div>
            <div className="mt-4 space-y-4">
              {[
                { role: "Process Engineer", mode: "XL Console", status: "Focus" },
                { role: "Field Technician", mode: "AR Glass", status: "Active Guidance" },
                { role: "Control AI", mode: "Edge Cell", status: "Adaptive Learning" }
              ].map((entry) => (
                <div
                  key={entry.role}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.04] px-4 py-3"
                >
                  <div>
                    <div className="text-sm text-white">{entry.role}</div>
                    <div className="text-xs text-slate-400">{entry.mode}</div>
                  </div>
                  <div className="rounded-full border border-accent/40 bg-accent/20 px-4 py-1 text-xs text-accent">
                    {entry.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-panel to-panel/60 p-6">
            <div className="flex items-center gap-3">
              <ArrowTrendingUpIcon className="h-6 w-6 text-accent" />
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">KPI Pulse</div>
            </div>
            <div className="mt-5 space-y-4">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="flex items-baseline justify-between">
                  <div>
                    <div className="text-sm text-white/80">{kpi.label}</div>
                    <div className={`${statusColor[kpi.status]} text-xs`}>{kpi.trend}</div>
                  </div>
                  <div className="font-display text-2xl text-white">{kpi.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
