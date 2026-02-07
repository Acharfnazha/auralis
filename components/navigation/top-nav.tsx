"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/navigation/logo";
import { NeonButton } from "@/components/ui/neon-button";

const links = [
  { href: "/explore", label: "Explore" },
  { href: "/neural-radio", label: "Neural Radio" },
  { href: "/artist-hub", label: "Artist Hub" }
];

export function TopNav() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-40 border-b border-white/5 bg-black/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-4 py-4">
        <Logo className="lg:hidden" />

        <div className="hidden lg:flex items-center gap-6">
          <Logo />
          <nav className="flex items-center gap-5 text-sm text-white/70">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "transition hover:text-white",
                  pathname === l.href ? "text-white" : ""
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <div className="glass-strong hidden md:flex items-center gap-2 rounded-full px-4 h-10 w-[420px] border border-white/10">
            <Search className="h-4 w-4 text-white/60" />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
              placeholder="Search neural patterns, artists, or moods..."
            />
          </div>

          <NeonButton variant="secondary" className="h-10 px-4">
            Go Pro
          </NeonButton>

          <button className="grid h-10 w-10 place-items-center rounded-full glass-strong">
            <Bell className="h-4 w-4 text-white/80" />
          </button>

          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neon via-pink to-mint p-[2px]">
            <div className="h-full w-full rounded-full bg-black/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
