"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Heart, Gift } from "lucide-react";
import { tracks } from "@/lib/data/mock";
import { usePlayer } from "@/lib/player/player-context";

export default function ArtistHubPage() {
  const { play } = usePlayer();

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <GlassCard strong className="relative overflow-hidden p-0">
          <div
            className="h-[260px] w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), transparent 60%), radial-gradient(900px 300px at 10% 20%, rgba(255,122,198,0.22), transparent 60%), radial-gradient(700px 300px at 70% 20%, rgba(155,77,255,0.22), transparent 60%)"
            }}
          />
          <div className="absolute inset-0 flex items-end p-8">
            <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="flex items-end gap-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-[22px] border border-white/15 bg-black/20">
                  <Image src="/covers/artist-venom.svg" alt="VÆNØM" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-[var(--font-grotesk)] text-4xl font-semibold tracking-tight">
                    VÆNØM
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    AI‑Synthesized Phonk • Cyber‑Tokyo
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <NeonButton className="h-10 px-5">
                      <Heart className="h-4 w-4" /> Follow
                    </NeonButton>
                    <NeonButton variant="secondary" className="h-10 px-5">
                      <Gift className="h-4 w-4" /> Tip Artist
                    </NeonButton>
                  </div>
                </div>
              </div>

              <GlassCard strong className="p-5 md:min-w-[340px]">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-white/45">AI Affinity</div>
                    <div className="mt-2 text-3xl font-semibold text-neon">98.2%</div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[82%] bg-neon" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-white/45">Total Streams</div>
                    <div className="mt-2 text-3xl font-semibold">1.4B</div>
                    <div className="mt-1 text-xs text-mint">+12% this week</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-3">
        <ScrollReveal>
          <GlassCard strong className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div className="font-[var(--font-grotesk)] text-2xl font-semibold">Top Tracks</div>
              <button className="text-sm text-white/60 hover:text-white">View All</button>
            </div>

            <div className="mt-4 space-y-3">
              {tracks.slice(0, 3).map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => play(t)}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/7 transition"
                >
                  <div className="w-6 text-xs text-white/40 tabular-nums">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10">
                    <Image src={t.cover} alt={t.title} fill className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{t.title} (Synthesis Remix)</div>
                    <div className="truncate text-xs text-muted">{t.artist} • {Math.round(t.durationSec/60)}:{String(t.durationSec%60).padStart(2,'0')}</div>
                  </div>
                  <div className="ml-auto text-xs text-white/50">{(8 + idx * 1.1).toFixed(1)}M</div>
                </button>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        <div className="space-y-6">
          <ScrollReveal delay={0.05}>
            <GlassCard strong className="p-6">
              <div className="font-[var(--font-grotesk)] text-xl font-semibold">Live Events</div>
              <div className="mt-4 space-y-4">
                {[
                  { d: "Oct 24, 2024", t: "Metaverse World Tour", sub: "Decentraland Arena • 22:00 GMT" },
                  { d: "Nov 12, 2024", t: "The Underground IRL", sub: "Tokyo Dome, JP • 20:00 JST" }
                ].map((e) => (
                  <div key={e.t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[11px] tracking-[0.25em] uppercase text-neon/80">{e.d}</div>
                    <div className="mt-1 font-semibold">{e.t}</div>
                    <div className="mt-1 text-xs text-muted">{e.sub}</div>
                    <button className="mt-3 h-9 w-full rounded-full border border-white/10 bg-white/5 text-xs font-semibold hover:bg-white/8">
                      Get Tickets
                    </button>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <GlassCard strong className="p-6">
              <div className="font-[var(--font-grotesk)] text-xl font-semibold">Fan Governance</div>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-mint/15 px-2 py-1 text-[11px] text-mint">ACTIVE</span>
                    <span className="text-xs text-white/40">12h left</span>
                  </div>
                  <div className="mt-2 text-sm font-medium">Choose the single cover art for “Digital Afterlife”</div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-white/50">Community voting</span>
                    <button className="text-neon hover:text-white font-semibold">Vote Now</button>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 opacity-70">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-white/10 px-2 py-1 text-[11px] text-white/60">CLOSED</span>
                    <span className="text-xs text-white/40">Result: YES (84%)</span>
                  </div>
                  <div className="mt-2 text-sm font-medium">Collaborate with “Lunar AI”?</div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
