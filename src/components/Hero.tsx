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

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-6">
            {HERO_STATS.map((s) => {
              const Icon = STAT_ICON[s.icon];
              return (
                <li key={s.label} className="flex w-[7.5rem] flex-col gap-2.5">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-line-2 text-ink">
                    <Icon size={18} />
                  </span>
                  <span className="text-[0.84rem] leading-snug text-ink-soft">
                    {s.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* right: floating product mockup (transparent PNG) */}
        <div className="relative lg:-mr-8 lg:-mt-4 xl:-mr-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10"
            style={{
              background:
                "radial-gradient(55% 55% at 58% 44%, rgba(61,220,132,0.18), transparent 72%)",
            }}
          />
          <img
            src={dash.src}
            width={dash.w}
            height={dash.h}
            alt={dash.alt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full select-none"
            style={{
              filter: "drop-shadow(0 40px 70px rgba(0,0,0,0.55))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
