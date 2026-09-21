import { whatsappUrl } from "@/lib/keom";
import { FINAL, FOOTER, NAV_V2 } from "@/lib/v2-content";
import { Container } from "./primitives";

export function Footer() {
  return (
    <footer className="border-t border-k-line py-12">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[1.0625rem] font-semibold tracking-[0.08em]">KEOM</p>
          <p className="k-small mt-2 text-k-soft">{FINAL.tagline}</p>
          <p className="k-small mt-4 text-k-mute">
            {FOOTER.status} · {FOOTER.place}
          </p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_V2.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="k-small text-k-soft transition-colors duration-200 hover:text-k-ink">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl("footer")}
                target="_blank"
                rel="noopener noreferrer"
                className="k-small text-k-soft transition-colors duration-200 hover:text-k-ink"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </Container>
      <Container className="mt-10">
        <p className="k-small text-k-mute">© {new Date().getFullYear()} KEOM</p>
      </Container>
    </footer>
  );
}
