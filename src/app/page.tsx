import { Splash } from "@/components/Splash";
import { SiteHeader, StickyDemoButton } from "@/components/SiteChrome";
import { Hero } from "@/components/Hero";
import { BusinessEquation } from "@/components/BusinessEquation";
import { RecoverySequence } from "@/components/RecoverySequence";
import { BoardSection } from "@/components/BoardSection";
import { HowItWorksCarousel } from "@/components/HowItWorksCarousel";
import { InfoImage } from "@/components/InfoImage";
import { Contacto } from "@/components/Contacto";
import { AiHuman, Dashboards, SiteFooter } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Splash />
      <SiteHeader />
      <StickyDemoButton />
      <main>
        <Hero />
        <BusinessEquation />
        <RecoverySequence />
        <BoardSection />
        <Dashboards />
        <HowItWorksCarousel />
        <AiHuman />
        <InfoImage />
        <Contacto />
      </main>
      <SiteFooter />
    </>
  );
}
