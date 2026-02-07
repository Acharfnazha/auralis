"use client";

import * as React from "react";

export function RadialGauge({ value = 0.74, label = "Utilization" }: { value?: number; label?: string }) {
  const r = 72;
  const c = 2 * Math.PI * r;
  const pct = Math.min(1, Math.max(0, value));
  const dash = c * pct;

  return (
    <div className="grid place-items-center">
      <svg width="190" height="190" viewBox="0 0 190 190">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9b4dff" />
            <stop offset="70%" stopColor="#ff7ac6" />
            <stop offset="100%" stopColor="#5eead4" />
          </linearGradient>
        </defs>
        <circle cx="95" cy="95" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" />
        <circle
          cx="95"
          cy="95"
          r={r}
          fill="none"
          stroke="url(#g)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
          transform="rotate(-90 95 95)"
        />
      </svg>
      <div className="-mt-[120px] text-center">
        <div className="text-4xl font-semibold">{Math.round(pct * 100)}%</div>
        <div className="mt-1 text-xs tracking-[0.2em] uppercase text-white/45">{label}</div>
      </div>
    </div>
  );
}
