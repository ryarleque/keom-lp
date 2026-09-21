import { ALT, DEMO_LABEL, PROBLEMS, SHOTS } from "@/lib/v2-content";
import { Reveal } from "./Reveal";
import { Section, Shot } from "./primitives";

export function Problems() {
  return (
    <Section labelledBy="problems-title" size="md">
      <div className="max-w-[46rem]">
        <h2 id="problems-title" className="k-h2">
          {PROBLEMS.title}
        </h2>
        <p className="k-lead mt-5 max-w-[52ch] text-k-soft">{PROBLEMS.lead}</p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <Reveal className="rounded-[14px] border border-k-line bg-k-surface p-6 sm:p-8 lg:col-span-7">
          <p className="k-label text-k-danger">{PROBLEMS.main.n}</p>
          <h3 className="k-h3 mt-4 text-[1.5rem] md:text-[1.75rem]">
            {PROBLEMS.main.title}
          </h3>
          <p className="k-body mt-3 max-w-[44ch] text-k-soft">
            {PROBLEMS.main.body}
          </p>
          <div className="mt-8">
            <Shot
              d={SHOTS.riskStalled}
              m={SHOTS.riskStalledMobile}
              alt={ALT.riskStalled}
              bare
            />
            <p className="k-small mt-3 text-k-mute">{DEMO_LABEL}</p>
          </div>
        </Reveal>

        <ul className="flex flex-col divide-y divide-k-line border-y border-k-line lg:col-span-5 lg:justify-between">
          {PROBLEMS.others.map((p, i) => (
            <Reveal key={p.n} as="li" delay={i * 60} className="flex-1 py-7 first:pt-6 last:pb-6">
              <p className="k-label text-k-mute">{p.n}</p>
              <h3 className="k-h3 mt-3">{p.title}</h3>
              <p className="k-body mt-2 max-w-[42ch] text-k-soft">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal as="p" className="k-h3 mt-14 max-w-[36ch] text-[1.5rem] text-k-ink md:text-[1.875rem]">
        <span className="text-k-brand">KEOM</span>{" "}
        {PROBLEMS.close.replace(/^KEOM /, "")}
      </Reveal>
    </Section>
  );
}
