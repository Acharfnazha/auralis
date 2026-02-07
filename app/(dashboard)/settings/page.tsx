"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div>
          <h1 className="font-[var(--font-grotesk)] text-5xl font-semibold">Settings</h1>
          <p className="mt-2 text-sm text-muted">Preferences for mood discovery and interface tuning.</p>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <ScrollReveal>
          <GlassCard strong className="p-6">
            <div className="text-sm font-semibold">Discovery Preferences</div>
            <div className="mt-4 space-y-4">
              <div>
                <div className="text-xs text-white/60">Energy bias</div>
                <input type="range" min={0} max={100} defaultValue={72} className="mt-2 w-full accent-[var(--neon)]" />
              </div>
              <div>
                <div className="text-xs text-white/60">Focus bias</div>
                <input type="range" min={0} max={100} defaultValue={64} className="mt-2 w-full accent-[var(--mint)]" />
              </div>
              <div>
                <div className="text-xs text-white/60">Preferred genres</div>
                <input
                  className="mt-2 h-11 w-full rounded-full bg-black/30 border border-white/10 px-4 text-sm outline-none focus:border-white/20"
                  placeholder="Techno, Lo‑Fi, Ambient..."
                />
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <GlassCard strong className="p-6">
            <div className="text-sm font-semibold">Interface</div>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div>
                  <div className="text-sm font-medium">Glass intensity</div>
                  <div className="text-xs text-muted">Increase blur + border glow.</div>
                </div>
                <select className="h-10 rounded-full bg-black/30 border border-white/10 px-3 text-sm outline-none">
                  <option>Balanced</option>
                  <option>Ultra Glass</option>
                  <option>Performance</option>
                </select>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div>
                  <div className="text-sm font-medium">Reduced motion</div>
                  <div className="text-xs text-muted">Turn off heavy animations.</div>
                </div>
                <input type="checkbox" className="h-5 w-5 accent-[var(--neon)]" />
              </div>

              <NeonButton className="h-11 w-full">Save Preferences</NeonButton>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
}
