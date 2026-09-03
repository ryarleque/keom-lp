import { Splash } from "@/components/Splash";
import { SiteHeader, StickyDemoButton } from "@/components/SiteChrome";
import { Hero } from "@/components/Hero";
import { WhyItCosts } from "@/components/WhyItCosts";
import { HowItWorks } from "@/components/HowItWorks";
import { AiHuman } from "@/components/AiHuman";
import { Panels } from "@/components/Panels";

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
        <AiHuman />
        <Panels />
        {/* redesign in progress — sections land one at a time */}
        <div className="flex min-h-[40vh] items-center justify-center bg-bg px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            Secciones 6–7 en construcción
          </p>
        </div>
      </main>
    </>
  );
}
