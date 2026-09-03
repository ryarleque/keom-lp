import { CONTACT, CONTACT_COPY, whatsappUrl } from "@/lib/keom";
import { Section } from "./Section";
import { Mail, WhatsApp } from "./icons";

export function Contacto() {
  return (
    <Section tone="paper" id="contacto" className="bg-paper-2">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-h2 font-extrabold tracking-[-0.015em] text-on-paper">
          {CONTACT_COPY.title}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-md leading-relaxed text-on-paper-soft">
          {CONTACT_COPY.body}
        </p>

        <a
          href={whatsappUrl("contacto")}
          target="_blank"
          rel="noopener noreferrer"
          className="press mt-8 inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-3.5 font-display text-sm font-bold uppercase tracking-[0.06em] text-white hover:brightness-105"
        >
          <WhatsApp size={18} />
          {CONTACT_COPY.cta}
        </a>

        <p className="mt-4 text-sm text-on-paper-mute">{CONTACT_COPY.note}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-paper-line pt-8">
          <span className="flex items-center gap-2.5 text-base text-on-paper-soft">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-paper-line text-[#25D366]">
              <WhatsApp size={15} />
            </span>
            {CONTACT.whatsappDisplay}
          </span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2.5 text-base text-on-paper-soft transition-colors hover:text-on-paper"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-paper-line text-on-paper">
              <Mail size={15} />
            </span>
            {CONTACT.email}
          </a>
        </div>
      </div>
    </Section>
  );
}
