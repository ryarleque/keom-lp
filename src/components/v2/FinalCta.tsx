import { KeomMark } from "../KeomMark";
import { whatsappUrl } from "@/lib/keom";
import { CTA, FINAL } from "@/lib/v2-content";
import { Button, Section } from "./primitives";

export function FinalCta() {
  return (
    <Section id="contacto" labelledBy="final-title" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_50%_100%,rgb(61_220_132/0.09),transparent_70%)]"
      />
      <div className="mx-auto max-w-[46rem] text-center">
        <h2 id="final-title" className="k-display">
          {FINAL.title}
        </h2>
        <p className="k-lead mx-auto mt-6 max-w-[40ch] text-k-soft">{FINAL.lead}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={whatsappUrl("cta-final")} external>
            {CTA.demo}
          </Button>
          <Button
            href={whatsappUrl("cta-final-whatsapp", CTA.whatsappMessage)}
            external
            variant="secondary"
          >
            {CTA.whatsapp}
          </Button>
        </div>
        <div className="mt-20 flex flex-col items-center gap-3">
          <KeomMark size={36} title="KEOM" />
          <p className="text-[1.125rem] font-semibold tracking-[0.08em] text-k-ink">KEOM</p>
          <p className="k-label text-k-mute">{FINAL.tagline}</p>
        </div>
      </div>
    </Section>
  );
}
