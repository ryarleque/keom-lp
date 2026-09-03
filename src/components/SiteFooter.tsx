import { CONTACT, KEEP_TAGLINE, NAV } from "@/lib/keom";
import { KeomLogo } from "./KeomMark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xs">
          <KeomLogo markSize={26} />
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {KEEP_TAGLINE}
          </p>
          <p className="mt-3 text-sm text-ink-mute">Lima, Perú</p>
        </div>

        <nav className="flex flex-col gap-2.5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-ink-soft">
          <span className="font-semibold text-ink">Contacto</span>
          <span>{CONTACT.whatsappDisplay}</span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="transition-colors hover:text-ink"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-5 py-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-mute sm:px-8">
          © {year} KEOM · Pre-lanzamiento
        </p>
      </div>
    </footer>
  );
}
