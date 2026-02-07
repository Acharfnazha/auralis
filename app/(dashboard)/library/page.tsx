"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { tracks } from "@/lib/data/mock";
import { usePlayer } from "@/lib/player/player-context";
import { Heart, Clock, Plus } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";

export default function LibraryPage() {
  const { play } = usePlayer();

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-[var(--font-grotesk)] text-5xl font-semibold">Library</h1>
            <p className="mt-2 text-sm text-muted">Your saved playlists, likes, and listening history.</p>
          </div>
          <NeonButton variant="secondary" className="h-10 px-4">
            <Plus className="h-4 w-4" />
            New Playlist
          </NeonButton>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-3">
        <ScrollReveal>
          <GlassCard strong className="p-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Heart className="h-4 w-4 text-pink" />
              Liked Tracks
            </div>
            <div className="mt-4 space-y-3">
              {tracks.slice(0, 3).map((t) => (
                <button
                  key={t.id}
                  onClick={() => play(t)}
                  className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 hover:bg-white/7 transition text-left"
                >
                  <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/10">
                    <Image src={t.cover} alt={t.title} fill className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{t.title}</div>
                    <div className="truncate text-xs text-muted">{t.artist}</div>
                  </div>
                </button>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <GlassCard strong className="p-6 lg:col-span-2">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Clock className="h-4 w-4 text-mint" />
              Recent Sessions
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {tracks.map((t) => (
                <button
                  key={t.id}
                  onClick={() => play(t)}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 hover:bg-white/7 transition text-left"
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10">
                    <Image src={t.cover} alt={t.title} fill className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{t.title}</div>
                    <div className="truncate text-xs text-muted">{t.mood.label} • {Math.round(t.mood.score*100)}% match</div>
                  </div>
                  <div className="ml-auto text-xs text-white/50">≈ {t.durationSec}s</div>
                </button>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
}
