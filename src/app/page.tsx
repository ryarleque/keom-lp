import { Splash } from "@/components/Splash";
import { SiteHeader, StickyDemoButton } from "@/components/SiteChrome";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Splash />
      <SiteHeader />
      <StickyDemoButton />
      <main>
        <Hero />
        {/* redesign in progress — sections land one at a time */}
        <div className="flex min-h-[60vh] items-center justify-center bg-bg px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            Secciones 2–7 en construcción
          </p>
        </div>
      </main>
    </>
  );
}
