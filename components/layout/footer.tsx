import Link from "next/link";
import { Logo } from "@/components/navigation/logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted">
              Pioneering the future of sound through neural synthesis and emotional-reactive algorithms.
            </p>
            <div className="mt-4 flex gap-3">
              {["x", "ig", "yt"].map((k) => (
                <div key={k} className="h-10 w-10 rounded-lg glass grid place-items-center text-white/70">
                  {k.toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          {[
            { title: "Explore", links: ["Trending Now", "Global Genres", "AI Radios", "Live Concerts"] },
            { title: "Developer AI", links: ["Neural API", "Algorithm Transparency", "Documentation"] },
            { title: "Community", links: ["Artist Hub", "Fan Clubs", "DAO Governance", "Events"] }
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs tracking-[0.25em] uppercase text-white/50">{col.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="hover:text-white">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-white/50">Support</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {["Help Center", "System Status", "Legal & Privacy", "Contact Us"].map((l) => (
                <li key={l}><Link href="#" className="hover:text-white">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Auralis Neural Systems. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
