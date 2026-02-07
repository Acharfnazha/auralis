"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { usePlayer } from "@/lib/player/player-context";
import { BarChart3, Waves, Sparkles } from "lucide-react";

function pct(x: number) {
  return `${Math.round(x * 1000) / 10}%`;
}

export function NeuralInsights() {
  const { current } = usePlayer();
  if (!current) return null;

  const items = [
    {
      label: "Beat Complexity",
      value: `${current.beatComplexity.toFixed(1)}/10`,
      icon: BarChart3
    },
    {
      label: "Mood Coherence",
      value: pct(current.coherence),
      icon: Sparkles
    },
    {
      label: "Spectral Density",
      value: current.energy > 0.7 ? "Medium–High" : "Low–Medium",
      icon: Waves
    }
  ];

  return (
    <GlassCard strong className="p-5">
      <div className="text-[11px] tracking-[0.25em] uppercase text-white/50">
        Neural Insights
      </div>

      <div className="mt-4 space-y-2">
        {items.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[rgba(155,77,255,0.20)] border border-white/10">
              <Icon className="h-4 w-4 text-neon" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-white/80">{label}</div>
            </div>
            <div className="ml-auto text-xs text-neon">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center justify-between text-[11px] text-white/60">
          <span>Processing Load</span>
          <span className="text-neon">12ms latency</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[62%] bg-neon" />
        </div>
      </div>
    </GlassCard>
  );
}
