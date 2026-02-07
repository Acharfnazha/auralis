import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        neon: "var(--neon)",
        mint: "var(--mint)",
        pink: "var(--pink)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "rgba(255,255,255,0.08)"
      },
      borderRadius: {
        xl2: "1.5rem"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(155,77,255,0.25), 0 18px 60px rgba(155,77,255,0.15)",
        soft: "0 12px 40px rgba(0,0,0,0.45)"
      },
      keyframes: {
        floaty: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-6px)" } },
        shimmer: { "0%": { transform: "translateX(-120%)" }, "100%": { transform: "translateX(120%)" } }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
