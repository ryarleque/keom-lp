import { OUTCOMES } from "@/lib/v2-content";
import { Reveal } from "./Reveal";
import { Section } from "./primitives";

export function Outcomes() {
  return (
    <Section labelledBy="outcomes-title">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-14">
        <div className="lg:col-span-6">
          <h2 id="outcomes-title" className="k-h2 max-w-[18ch]">
            {OUTCOMES.title}
          </h2>
          <p className="k-small mt-8 max-w-[44ch] text-k-mute">{OUTCOMES.note}</p>
        </div>

        <ul className="divide-y divide-k-line border-y border-k-line lg:col-span-6">
          {OUTCOMES.items.map((o, i) => (
            <Reveal key={o.title} as="li" delay={i * 60} className="py-6">
              <h3 className="k-h3 text-[1.25rem]">{o.title}</h3>
              <p className="k-body mt-2 max-w-[46ch] text-k-soft">{o.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
