"use client";

import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { motion } from "framer-motion";
import { Logo } from "@/components/navigation/logo";

export default function SignupPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="w-full max-w-[420px]"
    >
      <div className="mb-6 flex justify-center">
        <Logo />
      </div>

      <GlassCard strong className="p-7">
        <div className="text-xl font-semibold">Create your Auralis ID</div>
        <div className="mt-1 text-sm text-muted">Save playlists and personalize mood discovery.</div>

        <form className="mt-6 space-y-3">
          <input
            className="h-11 w-full rounded-full bg-black/30 border border-white/10 px-4 text-sm outline-none focus:border-white/20"
            placeholder="Display name"
            type="text"
          />
          <input
            className="h-11 w-full rounded-full bg-black/30 border border-white/10 px-4 text-sm outline-none focus:border-white/20"
            placeholder="Email"
            type="email"
          />
          <input
            className="h-11 w-full rounded-full bg-black/30 border border-white/10 px-4 text-sm outline-none focus:border-white/20"
            placeholder="Password"
            type="password"
          />
          <NeonButton className="w-full h-11">Create Account</NeonButton>
        </form>

        <div className="mt-4 text-xs text-white/60">
          Already have an account?{" "}
          <Link href="/login" className="text-neon hover:text-white">Sign in</Link>
        </div>
      </GlassCard>
    </motion.div>
  );
}
