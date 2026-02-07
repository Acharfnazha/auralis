"use client";

import * as React from "react";
import type { Track } from "@/lib/data/mock";

type PlayerState = {
  current?: Track;
  isPlaying: boolean;
  progress: number; // 0..1
  durationSec: number;
};

type PlayerApi = PlayerState & {
  play: (t?: Track) => void;
  pause: () => void;
  toggle: () => void;
  seek: (p: number) => void;
  setQueue: (q: Track[]) => void;
  queue: Track[];
};

const PlayerContext = React.createContext<PlayerApi | null>(null);

export function PlayerProvider({
  initialQueue,
  children
}: {
  initialQueue: Track[];
  children: React.ReactNode;
}) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const rafRef = React.useRef<number | null>(null);

  const [queue, setQueue] = React.useState<Track[]>(initialQueue);
  const [current, setCurrent] = React.useState<Track | undefined>(initialQueue[0]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [durationSec, setDurationSec] = React.useState(current?.durationSec ?? 0);

  // Lazily create audio element (client only).
  React.useEffect(() => {
    if (!audioRef.current) audioRef.current = new Audio();
    const a = audioRef.current;

    const onLoaded = () => setDurationSec(a.duration || (current?.durationSec ?? 0));
    const onEnded = () => {
      // auto-advance
      const idx = current ? queue.findIndex((t) => t.id === current.id) : -1;
      const next = idx >= 0 ? queue[idx + 1] : undefined;
      if (next) play(next);
      else setIsPlaying(false);
    };

    a.addEventListener("loadedmetadata", onLoaded);
    a.addEventListener("ended", onEnded);
    return () => {
      a.removeEventListener("loadedmetadata", onLoaded);
      a.removeEventListener("ended", onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const a = audioRef.current;
    if (!a || !current) return;

    a.src = current.audio;
    a.preload = "metadata";
    setDurationSec(current.durationSec);
    setProgress(0);

    if (isPlaying) {
      a.play().catch(() => setIsPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current?.id]);

  React.useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    if (isPlaying) {
      a.play().catch(() => setIsPlaying(false));
      const tick = () => {
        const d = a.duration || durationSec || 1;
        const p = Math.min(1, (a.currentTime || 0) / d);
        setProgress(p);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    } else {
      a.pause();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [isPlaying, durationSec]);

  const play = React.useCallback(
    (t?: Track) => {
      if (t) setCurrent(t);
      setIsPlaying(true);
    },
    []
  );

  const pause = React.useCallback(() => setIsPlaying(false), []);
  const toggle = React.useCallback(() => setIsPlaying((v) => !v), []);
  const seek = React.useCallback((p: number) => {
    const a = audioRef.current;
    if (!a) return;
    const clamped = Math.min(1, Math.max(0, p));
    const d = a.duration || durationSec || 1;
    a.currentTime = clamped * d;
    setProgress(clamped);
  }, [durationSec]);

  const api: PlayerApi = {
    queue,
    setQueue,
    current,
    isPlaying,
    progress,
    durationSec,
    play,
    pause,
    toggle,
    seek
  };

  return <PlayerContext.Provider value={api}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = React.useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}
