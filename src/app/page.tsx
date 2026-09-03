import { Splash } from "@/components/Splash";
import { SiteHeader, StickyDemoButton } from "@/components/SiteChrome";
import { Hero } from "@/components/Hero";
import { WhyItCosts } from "@/components/WhyItCosts";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Splash />
      <SiteHeader />
      <StickyDemoButton />
      <main>
        <Hero />
        <WhyItCosts />
        <HowItWorks />
        {/* redesign in progress — sections land one at a time */}
        <div className="flex min-h-[50vh] items-center justify-center bg-bg px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            Secciones 4–7 en construcción
          </p>
        </div>
      </main>
    </>
  );
}
