import { OrbitalVisualizer } from "@/components/visuals/orbital-visualizer";
import { NowPlayingCard } from "@/components/cards/now-playing-card";
import { NeuralInsights } from "@/components/cards/neural-insights";
import { QueueCard } from "@/components/cards/queue";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { moodPlaylists } from "@/lib/data/mock";
import { Moon, Zap, Waves, Disc3, Sparkles } from "lucide-react";

const iconMap: Record<string, any> = {
  moon: Moon,
  bolt: Zap,
  wave: Waves,
  disc: Disc3
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <ScrollReveal>
            <OrbitalVisualizer />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <GlassCard strong className="p-5">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-white/50">
                <Sparkles className="h-3.5 w-3.5 text-neon" />
                Neural Playlists
              </div>

              <div className="mt-4 space-y-2">
                {moodPlaylists.map((p) => {
                  const Icon = iconMap[p.icon];
                  return (
                    <div
                      key={p.id}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                    >
                      <Icon className="h-4 w-4 text-white/70" />
                      <div className="text-sm font-medium">{p.title}</div>
                      <div className="ml-auto rounded-full bg-white/5 px-2 py-1 text-[11px] text-white/70">
                        {Math.round(p.match * 100)}% Match
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        <div className="space-y-6">
          <ScrollReveal delay={0.05}>
            <NowPlayingCard />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <NeuralInsights />
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={0.08}>
        <QueueCard />
      </ScrollReveal>
    </div>
  );
}
