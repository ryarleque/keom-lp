import { FLOW_STEPS, type StepRow } from "@/lib/keom";
import { Section } from "./Section";
import { SectionHeading } from "./ui";
import { ArrowRight, Calendar, Target, Warning, WhatsApp } from "./icons";

function ChatRow({ row }: { row: StepRow }) {
  if (row.kind === "bubble") {
    return (
      <div className={`flex ${row.mine ? "justify-end" : "justify-start"}`}>
        <div
          className={`max-w-[86%] rounded-2xl px-3 py-2 text-[0.82rem] leading-snug ${
            row.mine
              ? "rounded-br-sm bg-[color-mix(in_oklab,var(--mint)_40%,#0f2a1c)] text-ink"
              : "rounded-bl-sm bg-surface-2 text-ink-soft"
          }`}
        >
          {row.text}
          {row.time ? (
            <span className="ml-2 align-baseline text-[0.62rem] text-ink-mute">
              {row.time}
            </span>
          ) : null}
        </div>
      </div>
    );
  }

  if (row.kind === "tag") {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-surface-2 px-2.5 py-2 text-[0.76rem] text-ink-soft">
        <Target size={14} className="shrink-0 text-mint" />
        {row.text}
      </div>
    );
  }

  if (row.kind === "alert") {
    return (
      <div className="rounded-lg border border-danger/25 bg-[color-mix(in_oklab,var(--danger)_10%,transparent)] px-3 py-2.5">
        <p className="flex items-center gap-2 text-[0.8rem] font-semibold text-danger">
          <Warning size={15} className="shrink-0" />
          {row.title}
        </p>
        <p className="mt-0.5 pl-6 text-[0.74rem] text-ink-soft">{row.sub}</p>
      </div>
    );
  }

  if (row.kind === "success") {
    return (
      <div className="rounded-lg border border-mint/25 bg-mint-dim px-3 py-2.5">
        <p className="flex items-center gap-2 text-[0.8rem] font-semibold text-mint">
          <Calendar size={15} className="shrink-0" />
          {row.title}
        </p>
        <p className="mt-0.5 pl-6 text-[0.74rem] text-ink-soft">{row.sub}</p>
      </div>
    );
  }

  // hint
  return (
    <p className="text-[0.76rem] leading-snug text-ink-soft">{row.text}</p>
  );
}

export function HowItWorks() {
  return (
    <Section tone="dark" id="como-funciona">
      <SectionHeading sub="De la conversación a la acción, en 4 pasos simples.">
        Cómo funciona KEOM
      </SectionHeading>

      <ol className="mt-14 grid items-start gap-x-4 gap-y-10 lg:grid-cols-4">
        {FLOW_STEPS.map((step, i) => (
          <li key={step.title} className="relative flex flex-col">
            {/* connector arrow to the next step */}
            {i < FLOW_STEPS.length - 1 ? (
              <span
                aria-hidden
                className="absolute -right-3 top-3 hidden text-ink-mute lg:block"
              >
                <ArrowRight size={18} />
              </span>
            ) : null}

            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-mint/50 font-mono text-[0.7rem] font-semibold text-mint">
                {i + 1}
              </span>
              <h3 className="text-[0.92rem] font-semibold leading-snug text-ink">
                {step.title}
              </h3>
            </div>

            <div className="mt-4 flex flex-col gap-2.5 rounded-2xl border border-line bg-surface p-4">
              <div className="flex items-center gap-2 border-b border-line pb-2.5">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-surface-2 text-mint">
                  <WhatsApp size={13} />
                </span>
                <span className="text-[0.78rem] font-semibold text-ink">
                  {step.from}
                </span>
                <span className="text-[0.66rem] text-ink-mute">
                  {step.status}
                </span>
              </div>
              {step.rows.map((row, r) => (
                <ChatRow key={r} row={row} />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
