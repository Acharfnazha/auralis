"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function NeonButton({
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition will-change-transform disabled:opacity-60 disabled:cursor-not-allowed";
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-6 text-base"
  }[size];

  const variants = {
    primary:
      "bg-white text-black hover:scale-[1.01] active:scale-[0.99] shadow-soft",
    secondary:
      "glass-strong text-white hover:border-white/20 hover:scale-[1.01] active:scale-[0.99]",
    ghost:
      "text-white/80 hover:text-white hover:bg-white/5 border border-white/10"
  }[variant];

  return (
    <button className={cn(base, sizes, variants, className)} {...props}>
      {variant === "secondary" && (
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-60 [mask-image:linear-gradient(180deg,white,transparent)] neon-gradient" />
      )}
      <span className="relative">{props.children}</span>
    </button>
  );
}
