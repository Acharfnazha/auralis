import { TopNav } from "@/components/navigation/top-nav";
import { Sidebar } from "@/components/navigation/sidebar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/ui/page-transition";
import { PlayerProvider } from "@/lib/player/player-context";
import { tracks } from "@/lib/data/mock";
import { PlayerDock } from "@/components/player/player-dock";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlayerProvider initialQueue={tracks}>
      <div className="min-h-screen">
        <TopNav />
        <div className="mx-auto flex max-w-[1200px] gap-6 px-4 pb-28 pt-6">
          <Sidebar />
          <main className="min-w-0 flex-1">
            <PageTransition>{children}</PageTransition>
            <Footer />
          </main>
        </div>
        <PlayerDock />
      </div>
    </PlayerProvider>
  );
}
