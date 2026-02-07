import { PageTransition } from "@/components/ui/page-transition";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <PageTransition>
        <div className="mx-auto grid min-h-screen max-w-[1100px] place-items-center px-4 py-10">
          {children}
        </div>
      </PageTransition>
    </div>
  );
}
