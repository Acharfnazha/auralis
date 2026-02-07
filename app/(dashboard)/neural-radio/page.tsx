"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Radio, Sparkles } from "lucide-react";
import { usePlayer } from "@/lib/player/player-context";
import { tracks } from "@/lib/data/mock";

export default function NeuralRadioPage() {
  const { play } = usePlayer();

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-[var(--font-grotesk)] text-5xl font-semibold">Neural Radio</h1>
            <p className="mt-2 text-sm text-muted">Always-on streams synthesized to match your day.</p>
          </div>
          <NeonButton variant="secondary" className="h-10 px-4">
            <Sparkles className="h-4 w-4" />
            Generate Station
          </NeonButton>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "Midnight Focus", desc: "Low distraction, high coherence", track: tracks[0] },
          { name: "Neon Energy", desc: "Fast tempo, bright synths", track: tracks[2] },
          { name: "Ambient Intelligence", desc: "Soft textures, wide space", track: tracks[1] }
        ].map((s, idx) => (
          <ScrollReveal key={s.name} delay={0.05 * idx}>
            <GlassCard strong className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{s.name}</div>
                <Radio className="h-5 w-5 text-neon" />
              </div>
              <div className="mt-1 text-sm text-muted">{s.desc}</div>
              <NeonButton className="mt-5 h-10 px-4" onClick={() => play(s.track)}>
                Play Station
              </NeonButton>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
