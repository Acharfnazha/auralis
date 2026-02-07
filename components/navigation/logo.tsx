import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-[rgba(155,77,255,0.22)] border border-white/10 neon-ring">
        <div className="h-3.5 w-3.5 rounded-full bg-[rgba(155,77,255,0.9)]" />
      </div>
      <div className="font-[var(--font-grotesk)] text-lg font-semibold tracking-tight">
        AURALIS
      </div>
    </div>
  );
}
