import { HERO, HERO_STATS, PHOTOS } from "@/lib/keom";
import { Button, Eyebrow } from "./ui";
import { Shield, Clock, TrendUp } from "./icons";

const STAT_ICON = {
  shield: Shield,
  clock: Clock,
  trend: TrendUp,
} as const;

export function Hero() {
  const dash = PHOTOS.heroDash;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-bg text-ink"
    >
      {/* soft mint glow behind the mockup */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 82% 32%, rgba(61,220,132,0.12), transparent 70%), radial-gradient(50% 60% at 8% 90%, rgba(61,220,132,0.06), transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-32">
        {/* left: copy */}
        <div className="max-w-[34rem]">
          <Eyebrow>{HERO.eyebrow}</Eyebrow>

          <h1 className="mt-4 text-[2rem] font-extrabold uppercase leading-[1.06] tracking-[0] [text-wrap:normal] sm:text-[2.5rem] lg:text-[2.9rem]">
            {HERO.title}
          </h1>

          <p className="mt-5 text-lg font-medium text-ink sm:text-xl">
            {HERO.answer}
          </p>
          <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
            {HERO.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contacto" variant="solid">
              {HERO.ctaPrimary}
            </Button>
            <Button href="#como-funciona" variant="ghost">
              {HERO.ctaSecondary}
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            {HERO_STATS.map((s) => {
              const Icon = STAT_ICON[s.icon];
              return (
                <li key={s.label} className="flex max-w-[9rem] flex-col gap-2.5">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-mint/40 text-mint">
                    <Icon size={18} />
                  </span>
                  <span className="text-[0.86rem] leading-snug text-ink-soft">
                    {s.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* right: product mockup, bleeding off the right edge */}
        <div className="relative lg:-mr-16 xl:-mr-28">
          <img
            src={dash.src}
            width={dash.w}
            height={dash.h}
            alt={dash.alt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full max-w-[560px] select-none sm:max-w-[640px] lg:max-w-none"
          />
          <p className="mt-3 text-right font-mono text-[0.58rem] uppercase tracking-[0.18em] text-ink-mute lg:pr-16 xl:pr-28">
            Panel de ejemplo
          </p>
        </div>
      </div>
    </section>
  );
}
