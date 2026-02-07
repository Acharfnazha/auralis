import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & { strong?: boolean };

export function GlassCard({ strong, className, ...props }: Props) {
  return (
    <div
      className={cn(
        strong ? "glass-strong" : "glass",
        "rounded-[26px] shadow-soft",
        className
      )}
      {...props}
    />
  );
}
