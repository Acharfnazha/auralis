import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RadialGauge } from "@/components/charts/radial-gauge";
import { NeuralLineChart } from "@/components/charts/neural-line-chart";
import { NeonButton } from "@/components/ui/neon-button";
import { Download, Zap } from "lucide-react";

export default function NeuralEnginePage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-mint">
              <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_16px_rgba(94,234,212,0.7)]" />
              System Live
            </div>
            <h1 className="mt-2 font-[var(--font-grotesk)] text-5xl font-semibold">Neural Engine Stats</h1>
            <p className="mt-2 text-sm text-muted">
              Real-time inference performance and algorithmic diagnostics.
            </p>
          </div>

          <div className="flex gap-3">
            <NeonButton variant="secondary" className="h-10 px-4">
              <Zap className="h-4 w-4" />
              Optimize Engine
            </NeonButton>
            <NeonButton variant="ghost" className="h-10 px-4">
              <Download className="h-4 w-4" />
              Export Data
            </NeonButton>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-3">
        <ScrollReveal>
          <GlassCard strong className="p-6">
            <div className="text-xs tracking-[0.2em] uppercase text-white/50">Neural Load</div>
            <div className="mt-4">
              <RadialGauge value={0.74} />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-white/60">
              <span>Peak Load: 89%</span>
              <span className="text-mint">Stable</span>
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <GlassCard strong className="p-6 lg:col-span-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/50">Sentiment Analysis</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <div className="text-3xl font-semibold">99.2%</div>
                  <div className="text-sm text-mint">+0.4%</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-neon/20 px-2 py-1 text-[11px] text-neon">LIVE</span>
                <span className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-white/60">24H</span>
              </div>
            </div>
            <div className="mt-4">
              <NeuralLineChart />
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ScrollReveal>
          <GlassCard strong className="p-6">
            <div className="text-xs tracking-[0.2em] uppercase text-white/50">Mood Latency</div>
            <div className="mt-2 text-3xl font-semibold">18ms <span className="text-sm text-neon">avg</span></div>
            <div className="mt-8 text-[10px] tracking-[0.25em] uppercase text-white/35">Pop • Rock • Jazz • Electronic • Lo‑Fi</div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <GlassCard strong className="p-6 lg:col-span-1">
            <div className="text-xs tracking-[0.2em] uppercase text-white/50">System Events</div>
            <div className="mt-4 space-y-4 text-sm">
              {[
                { t: "12:44:02", title: "Sentiment Analysis Layer Re-sync", sub: "Node ID: US-EAST-1 // Status: SUCCESS" },
                { t: "12:43:55", title: "New User Mood Profiling", sub: "User: UID_4029 // Latency: 12ms" },
                { t: "12:43:12", title: "Harmonic Synthesis Cluster Active", sub: "Power Mode: OVERCLOCK" }
              ].map((e) => (
                <div key={e.t} className="flex gap-3">
                  <div className="mt-1 h-4 w-[2px] bg-neon/70 rounded-full" />
                  <div>
                    <div className="text-xs text-white/60">{e.t}</div>
                    <div className="font-medium">{e.title}</div>
                    <div className="text-xs text-muted">{e.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-6">
            <GlassCard strong className="p-6">
              <div className="text-xs tracking-[0.2em] uppercase text-white/50">Processing Speed</div>
              <div className="mt-3 text-4xl font-semibold">14.2</div>
              <div className="text-xs tracking-[0.2em] uppercase text-white/40">TFLOPS Inference</div>
              <div className="mt-6 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[78%] bg-neon" />
              </div>
            </GlassCard>

            <GlassCard strong className="p-4">
              {[
                { label: "Vocal Extraction", on: true, color: "bg-mint" },
                { label: "Tensor Flow", on: true, color: "bg-neon" },
                { label: "Network Buffer", on: true, color: "bg-mint" }
              ].map((x) => (
                <div key={x.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 mb-2 last:mb-0">
                  <div className="text-sm text-white/80">{x.label}</div>
                  <div className={`h-2.5 w-2.5 rounded-full ${x.color}`} />
                </div>
              ))}
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
