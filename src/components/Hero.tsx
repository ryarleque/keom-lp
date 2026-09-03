import { HERO, PHOTOS, whatsappUrl } from "@/lib/keom";

export function Hero() {
  const p = PHOTOS.herodark;
  return (
    <section
      id="top"
      className="relative flex min-h-[92dvh] items-center overflow-hidden bg-night text-on-night"
    >
      {/* subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 18%, rgba(55,214,238,0.12), transparent 55%), radial-gradient(90% 70% at 10% 90%, rgba(14,52,127,0.28), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pb-14 pt-28 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:pb-16 lg:pt-24">
        <div className="max-w-2xl">
          <h1 className="text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.02em] sm:text-[3.7rem]">
            {HERO.title}
          </h1>
          <p className="mt-5 text-base font-medium text-on-night-soft sm:text-lg">
            {HERO.answer}
          </p>
          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-on-night-soft">
            {HERO.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl("hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="press rounded-full bg-white px-6 py-3 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-night"
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="#problema"
              className="press rounded-full border border-white/25 px-6 py-3 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-on-night hover:border-white/60"
            >
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-[540px] lg:ml-auto">
          <div
            className="overflow-hidden rounded-2xl border border-white/10"
            style={{
              boxShadow:
                "0 50px 130px -50px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-white/10 bg-night/90 px-4 py-3 backdrop-blur-sm sm:block">
            <p className="font-mono text-[0.9rem] font-semibold text-cyan-bright">
              47 min
            </p>
            <p className="mt-0.5 font-mono text-[0.54rem] uppercase tracking-[0.2em] text-on-night-soft">
              respuesta promedio hoy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
