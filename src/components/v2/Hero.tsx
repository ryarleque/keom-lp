import { whatsappUrl } from "@/lib/keom";
import { ALT, CTA, HERO, SHOTS } from "@/lib/v2-content";
import { Button, Container, DemoNote, Label, Shot } from "./primitives";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-28 md:pt-40">
      <Container>
        <Label tone="brand">{HERO.eyebrow}</Label>
        <h1 id="hero-title" className="k-display mt-6 max-w-[19ch]">
          {HERO.title}
        </h1>
        <p className="k-lead mt-6 max-w-[54ch] text-k-soft">{HERO.lead}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappUrl("hero")} external>
            {CTA.demo}
          </Button>
          <Button href="#como-funciona" variant="secondary">
            {CTA.how}
          </Button>
        </div>
        <Label className="mt-8">{HERO.support}</Label>
      </Container>

      <Container className="mt-14 md:mt-20" wide>
        <div className="relative">
          <div className="k-rise max-h-[430px] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_60%,transparent)] md:max-h-[640px]">
            <Shot
              d={SHOTS.heroDesktop}
              m={SHOTS.heroMobile}
              alt={ALT.hero}
              priority
              className="shadow-k-screen"
            />
          </div>
          <div className="k-rise absolute bottom-[16%] right-[-1.5%] hidden w-[42%] md:block">
            <Shot d={SHOTS.alertCard} alt={ALT.alertCard} className="shadow-k-screen" />
          </div>
          <DemoNote className="mt-3 text-right" />
        </div>
      </Container>
    </section>
  );
}
