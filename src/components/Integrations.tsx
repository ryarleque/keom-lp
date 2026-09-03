import { INTEGRATIONS } from "@/lib/keom";
import { Section } from "./Section";
import { Calendar, Hub, Mail, WhatsApp } from "./icons";

function BrandMark({ brand, color }: { brand: string; color?: string }) {
  let glyph: React.ReactNode = null;
  if (brand === "whatsapp") glyph = <WhatsApp size={16} />;
  else if (brand === "calendar") glyph = <Calendar size={16} />;
  else if (brand === "hubspot") glyph = <Hub size={16} />;
  else if (brand === "gmail") glyph = <Mail size={16} />;
  else if (brand === "kommo")
    glyph = (
      <span className="font-display text-[0.85rem] font-extrabold leading-none">
        K
      </span>
    );
  if (!glyph) return null;
  return (
    <span
      className="grid h-4 w-4 shrink-0 place-items-center"
      style={color ? { color } : undefined}
    >
      {glyph}
    </span>
  );
}

export function Integrations() {
  return (
    <Section tone="dark" id="integraciones" pad="none" innerClassName="py-12 sm:py-16">
      <p className="text-center font-display text-[0.9rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
        Se integra con las herramientas que ya usas
      </p>

      <ul className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
        {INTEGRATIONS.map((it) => (
          <li
            key={it.name}
            className={`inline-flex items-center gap-2.5 rounded-xl border border-line bg-surface/60 px-5 py-3 text-[0.88rem] ${
              it.brand === "more" ? "text-ink-mute" : "text-ink-soft"
            }`}
          >
            <BrandMark brand={it.brand} color={it.color} />
            {it.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
