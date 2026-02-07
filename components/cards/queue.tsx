"use client";

import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { usePlayer } from "@/lib/player/player-context";
import { MoreHorizontal } from "lucide-react";

export function QueueCard() {
  const { queue, play } = usePlayer();

  return (
    <GlassCard strong className="p-4">
      <div className="flex items-center justify-between">
        <div className="text-[11px] tracking-[0.25em] uppercase text-white/50">
          Neural Queue
        </div>
        <button className="text-xs text-neon hover:text-white">View All</button>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {queue.slice(0, 3).map((t) => (
          <button
            key={t.id}
            onClick={() => play(t)}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left hover:bg-white/7 transition"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10">
              <Image src={t.cover} alt={t.title} fill className="object-cover" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{t.title}</div>
              <div className="truncate text-xs text-muted">{t.artist}</div>
            </div>
            <MoreHorizontal className="ml-auto h-4 w-4 text-white/40 group-hover:text-white/70" />
          </button>
        ))}
      </div>
    </GlassCard>
  );
}
