import { ALT, DEMO_LABEL, HUMAN_AI, SHOTS } from "@/lib/v2-content";
import { Reveal } from "./Reveal";
import { Section, Shot } from "./primitives";

function Tick({ tone }: { tone: "brand" | "soft" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`mt-[5px] shrink-0 ${tone === "brand" ? "text-k-brand" : "text-k-soft"}`}
    >
      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HumanAI() {
  return (
    <Section labelledBy="human-title">
      <h2 id="human-title" className="k-h2 max-w-[22ch]">
        {HUMAN_AI.title}
      </h2>

      <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-x-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          <div>
            <h3 className="k-label text-k-brand">{HUMAN_AI.aiTitle}</h3>
            <ul className="mt-5 space-y-3">
              {HUMAN_AI.ai.map((t) => (
                <li key={t} className="k-body flex gap-3 text-k-ink">
                  <Tick tone="brand" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="k-label text-k-soft">{HUMAN_AI.humanTitle}</h3>
            <ul className="mt-5 space-y-3">
              {HUMAN_AI.human.map((t) => (
                <li key={t} className="k-body flex gap-3 text-k-soft">
                  <Tick tone="soft" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="lg:col-span-7">
          <Shot d={SHOTS.alerts} m={SHOTS.alertsMobile} alt={ALT.alerts} className="shadow-k-screen" />
          <p className="k-small mt-3 text-k-mute">{DEMO_LABEL}</p>
          <p className="k-body mt-6 max-w-[52ch] text-k-soft">{HUMAN_AI.callout}</p>
        </Reveal>
      </div>
    </Section>
  );
}
