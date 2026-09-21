import { ALT, DEMO_LABEL, SHOTS, TIME } from "@/lib/v2-content";
import { Section, Shot } from "./primitives";

export function TimeSignal() {
  return (
    <Section labelledBy="time-title" size="md">
      <div className="max-w-[48rem]">
        <h2 id="time-title" className="k-h2">
          {TIME.title}
        </h2>
        <p className="k-lead mt-5 max-w-[60ch] text-k-soft">{TIME.lead}</p>
      </div>

      <div className="mx-auto mt-12 max-w-[820px] md:mt-16">
        <div className="relative">
          <Shot
            d={SHOTS.timeCard}
            m={SHOTS.timeCardMobile}
            alt={ALT.timeCard}
            className="shadow-k-screen"
          />
          {TIME.notes.map((n) => (
            <span
              key={n.n}
              aria-hidden
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              className="absolute hidden size-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-k-brand bg-k-bg text-[0.75rem] font-medium text-k-brand md:grid"
            >
              {n.n}
            </span>
          ))}
        </div>
        <p className="k-small mt-3 text-k-mute">{DEMO_LABEL}</p>

        <ol className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {TIME.notes.map((n) => (
            <li key={n.n} className="flex gap-4">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-k-brand text-[0.75rem] font-medium text-k-brand">
                {n.n}
              </span>
              <div>
                <h3 className="k-h3 text-[1rem]">{n.title}</h3>
                <p className="k-small mt-1.5 text-k-soft">{n.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
