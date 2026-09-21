import { WhatsApp } from "../icons";
import { INTEGRATIONS } from "@/lib/v2-content";
import { Section } from "./primitives";

export function Integrations() {
  const { main, others } = INTEGRATIONS;
  return (
    <Section id="integraciones" labelledBy="integrations-title" size="md" tone="raised">
      <div className="max-w-[46rem]">
        <h2 id="integrations-title" className="k-h2">
          {INTEGRATIONS.title}
        </h2>
        <p className="k-lead mt-5 max-w-[52ch] text-k-soft">{INTEGRATIONS.lead}</p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-k-line bg-k-line lg:grid-cols-12">
        <div className="bg-k-surface p-7 sm:p-9 lg:col-span-6">
          <div className="flex items-center gap-3">
            <WhatsApp size={28} className="text-k-brand" />
            <h3 className="k-h3 text-[1.5rem]">{main.name}</h3>
            <span className="k-label ml-1 rounded-md bg-k-brand-dim px-2 py-1 text-k-brand">
              {main.status}
            </span>
          </div>
          <p className="k-body mt-4 max-w-[40ch] text-k-soft">{main.body}</p>
        </div>

        <ul className="grid grid-cols-2 gap-px bg-k-line lg:col-span-6">
          {others.map((o) => (
            <li key={o.name} className="flex flex-col justify-between gap-6 bg-k-surface p-6 sm:p-7">
              <span className="text-[1.0625rem] font-medium text-k-ink">{o.name}</span>
              <span className="k-label text-k-mute">{o.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
