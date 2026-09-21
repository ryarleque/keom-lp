import { THESIS, TRACE, type TraceTone } from "@/lib/v2-content";
import { Reveal } from "./Reveal";
import { Section } from "./primitives";

const DOT: Record<TraceTone, string> = {
  ok: "border-k-brand/60 bg-k-brand-dim",
  warn: "border-k-warn bg-k-warn-dim",
  lost: "border-dashed border-k-danger/70 bg-transparent",
};

export function Thesis() {
  return (
    <Section id="producto" labelledBy="thesis-title">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-6">
          <h2 id="thesis-title" className="font-k-sans">
            <span className="k-h2 block text-k-soft">{THESIS.soft}</span>
            <span className="mt-3 block text-[clamp(2.5rem,1.5rem+4vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-k-ink">
              {THESIS.strong}
            </span>
          </h2>
          <Reveal as="p" className="k-lead mt-10 max-w-[42ch] text-k-soft">
            {THESIS.close}
          </Reveal>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7 lg:pt-3">
          {TRACE.map((t, i) => {
            const last = i === TRACE.length - 1;
            return (
              <Reveal
                key={t.text}
                as="li"
                className="relative pb-11 pl-10 last:pb-0"
              >
                {!last ? (
                  <span
                    aria-hidden
                    className={`absolute bottom-0 left-[7px] top-6 w-px ${
                      i === TRACE.length - 2
                        ? "border-l border-dashed border-k-line-strong"
                        : "bg-k-line-strong"
                    }`}
                  />
                ) : null}
                <span
                  aria-hidden
                  className={`absolute left-0 top-1.5 size-[15px] rounded-full border ${DOT[t.tone]}`}
                />
                <p className="k-label text-k-mute">{t.tag}</p>
                <p
                  className={`mt-2 text-[1.375rem] font-medium leading-snug tracking-[-0.02em] md:text-[1.75rem] ${
                    last ? "text-k-mute" : "text-k-ink"
                  }`}
                >
                  {t.text}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
