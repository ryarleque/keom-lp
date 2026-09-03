import { Splash } from "@/components/Splash";
import { SiteHeader, StickyDemoButton } from "@/components/SiteChrome";
import { Hero } from "@/components/Hero";
import { WhyItCosts } from "@/components/WhyItCosts";
import { HowItWorks } from "@/components/HowItWorks";
import { AiHuman } from "@/components/AiHuman";
import { Panels } from "@/components/Panels";
import { Integrations } from "@/components/Integrations";
import { Contacto } from "@/components/Contacto";
import { SiteFooter } from "@/components/SiteFooter";

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
        <Integrations />
        <Contacto />
      </main>
      <SiteFooter />
    </>
  );
}
