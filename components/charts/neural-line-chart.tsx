"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const data = [
  { t: "00:00", v: 2.1 },
  { t: "06:00", v: 3.2 },
  { t: "12:00", v: 2.6 },
  { t: "18:00", v: 4.7 },
  { t: "23:59", v: 4.1 }
];

export function NeuralLineChart() {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 0, right: 8, top: 12, bottom: 0 }}>
          <defs>
            <linearGradient id="neonFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(155,77,255,0.55)" />
              <stop offset="100%" stopColor="rgba(155,77,255,0)" />
            </linearGradient>
          </defs>
          <XAxis dataKey="t" tick={{ fill: "rgba(244,244,248,0.45)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              background: "rgba(12,12,16,0.85)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 14,
              color: "white"
            }}
            labelStyle={{ color: "rgba(255,255,255,0.65)" }}
          />
          <Area
            type="monotone"
            dataKey="v"
            stroke="rgba(155,77,255,1)"
            strokeWidth={2}
            fill="url(#neonFill)"
            dot={false}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
