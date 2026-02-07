"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { NeonButton } from "@/components/ui/neon-button";
import { Play } from "lucide-react";

export function OrbitalVisualizer({
  title = "Visualizer Orbit",
  subtitle = "Real-time AI frequency mapping"
}: {
  title?: string;
  subtitle?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });

  const glowX = useTransform(sx, [0, 1], ["-12%", "12%"]);
  const glowY = useTransform(sy, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-8 shadow-soft"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 400px at 20% 10%, rgba(155,77,255,0.22), transparent 70%), radial-gradient(500px 360px at 90% 20%, rgba(94,234,212,0.12), transparent 70%)"
        }}
      />

      <motion.div
        className="pointer-events-none absolute -inset-16 opacity-60 blur-2xl"
        style={{
          translateX: glowX,
          translateY: glowY,
          background:
            "radial-gradient(600px 600px at 50% 50%, rgba(155,77,255,0.26), transparent 60%)"
        }}
      />

      <div className="relative mx-auto grid max-w-xl place-items-center text-center">
        <div className="relative mt-3 grid h-[240px] w-[240px] place-items-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-white/10"
              animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.2, 0.45] }}
              transition={{
                duration: 5 + i * 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 0.4
              }}
              style={{
                boxShadow: "0 0 0 1px rgba(155,77,255,0.18), 0 0 70px rgba(155,77,255,0.08)"
              }}
            />
          ))}
          <motion.div
            className="h-16 w-16 rounded-full bg-[rgba(155,77,255,0.9)]"
            animate={{ scale: [1, 1.06, 1], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 40px rgba(155,77,255,0.55)", "0 0 0 rgba(0,0,0,0)"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mt-2 font-[var(--font-grotesk)] text-4xl font-semibold tracking-tight">
          <span className="text-white">{title.split(" ")[0]} </span>
          <span className="text-gradient">{title.split(" ").slice(1).join(" ")}</span>
        </div>
        <div className="mt-2 text-xs tracking-[0.28em] uppercase text-neon/80">
          {subtitle}
        </div>

        <NeonButton className="mt-6 h-12 px-7">
          <Play className="h-4 w-4" />
          Enter Orbit
        </NeonButton>
      </div>
    </div>
  );
}
