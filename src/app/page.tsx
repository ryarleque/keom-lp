import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/v2/Nav";
import { Hero } from "@/components/v2/Hero";
import { Thesis } from "@/components/v2/Thesis";
import { Problems } from "@/components/v2/Problems";
import { HowItWorks } from "@/components/v2/HowItWorks";
import { TimeSignal } from "@/components/v2/TimeSignal";
import { Steps } from "@/components/v2/Steps";
import { HumanAI } from "@/components/v2/HumanAI";
import { Roles } from "@/components/v2/Roles";
import { Outcomes } from "@/components/v2/Outcomes";
import { Integrations } from "@/components/v2/Integrations";
import { FinalCta } from "@/components/v2/FinalCta";
import { Footer } from "@/components/v2/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[10px] focus:bg-k-brand-soft focus:px-4 focus:py-2 focus:text-k-brand-ink"
      >
        Saltar al contenido
      </a>
      <SmoothScroll />
      <Nav />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Thesis />
        <Problems />
        <HowItWorks />
        <TimeSignal />
        <Steps />
        <HumanAI />
        <Roles />
        <Outcomes />
        <Integrations />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
