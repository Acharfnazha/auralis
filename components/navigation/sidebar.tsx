"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/navigation/logo";
import { Sparkles, Compass, Library, Gauge, User, Settings } from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: Sparkles },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/neural-engine", label: "Neural Engine", icon: Gauge },
  { href: "/library", label: "Library", icon: Library },
  { href: "/artist-hub", label: "Artist Hub", icon: User },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-[280px] lg:flex-col lg:gap-6 lg:px-4 lg:py-5">
      <Logo className="px-2" />

      <div className="glass-strong rounded-[26px] p-3">
        <div className="px-3 py-2 text-[11px] tracking-[0.22em] text-muted uppercase">
          Smart Discovery
        </div>
        <nav className="space-y-1">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
                  active
                    ? "bg-white/6 border border-white/10"
                    : "hover:bg-white/5 border border-transparent"
                )}
              >
                <Icon className={cn("h-4 w-4", active ? "text-neon" : "text-white/70 group-hover:text-white")} />
                <span className={cn(active ? "text-white" : "text-white/80 group-hover:text-white")}>{label}</span>
                {active && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_18px_rgba(155,77,255,0.7)]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="glass rounded-[26px] p-4">
        <div className="text-xs text-white/80 font-medium">New Discovery</div>
        <div className="mt-1 text-xs text-muted">
          Let Auralis synthesize a track based on your current focus state.
        </div>
        <button className="mt-3 h-10 w-full rounded-full bg-white text-black text-sm font-semibold">
          Generate Now
        </button>
      </div>
    </aside>
  );
}
