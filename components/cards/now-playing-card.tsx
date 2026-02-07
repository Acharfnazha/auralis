"use client";

import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { usePlayer } from "@/lib/player/player-context";

export function NowPlayingCard() {
  const { current } = usePlayer();
  if (!current) return null;

  return (
    <GlassCard strong className="p-5">
      <div className="flex items-center justify-between">
        <div className="text-[11px] tracking-[0.25em] uppercase text-neon/90">
          Now Playing
        </div>
        <div className="text-white/40">•••</div>
      </div>

      <div className="mt-4 rounded-[18px] bg-white p-3">
        <div className="relative aspect-square overflow-hidden rounded-[14px]">
          <Image src={current.cover} alt={current.title} fill className="object-cover" />
        </div>
      </div>

      <div className="mt-4 text-lg font-semibold">{current.title}</div>
      <div className="text-sm text-muted">{current.artist}</div>

      <div className="mt-4">
        <div className="text-[10px] tracking-[0.22em] uppercase text-white/45">
          Mood Spectrum
        </div>
        <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[70%] neon-gradient" />
        </div>
      </div>
    </GlassCard>
  );
}
