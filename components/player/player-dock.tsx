"use client";

import * as React from "react";
import Image from "next/image";
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePlayer } from "@/lib/player/player-context";

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function PlayerDock() {
  const { current, isPlaying, toggle, progress, seek, durationSec } = usePlayer();
  const [vol, setVol] = React.useState(0.8);

  if (!current) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-[1100px] glass-strong rounded-[28px] border border-white/10 px-4 py-3 shadow-soft">
        <div className="flex items-center gap-4">
          <div className="flex min-w-[220px] items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10">
              <Image src={current.cover} alt={current.title} fill className="object-cover" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{current.title}</div>
              <div className="truncate text-xs text-muted">{current.artist}</div>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/5">
                <Shuffle className="h-4 w-4 text-white/70" />
              </button>
              <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/5">
                <SkipBack className="h-4 w-4 text-white/80" />
              </button>
              <button
                onClick={toggle}
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-black shadow-soft"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-[1px]" />}
              </button>
              <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/5">
                <SkipForward className="h-4 w-4 text-white/80" />
              </button>
              <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/5">
                <Repeat2 className="h-4 w-4 text-white/70" />
              </button>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="w-10 text-right text-[11px] text-white/60 tabular-nums">
                {formatTime(progress * durationSec)}
              </div>
              <div
                className="relative h-2 flex-1 cursor-pointer rounded-full bg-white/10"
                onClick={(e) => {
                  const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                  const p = (e.clientX - rect.left) / rect.width;
                  seek(p);
                }}
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-neon"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full opacity-50">
                  <div className="h-full w-1/2 animate-shimmer neon-gradient" />
                </div>
              </div>
              <div className="w-10 text-[11px] text-white/60 tabular-nums">
                {formatTime(durationSec)}
              </div>
            </div>
          </div>

          <div className="hidden md:flex min-w-[190px] items-center justify-end gap-3">
            <Volume2 className="h-4 w-4 text-white/70" />
            <div className="w-28">
              <input
                aria-label="Volume"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={vol}
                onChange={(e) => setVol(parseFloat(e.target.value))}
                className={cn(
                  "w-full accent-[var(--neon)]",
                  "[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/10",
                  "[&::-webkit-slider-thumb]:-mt-[3px] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
