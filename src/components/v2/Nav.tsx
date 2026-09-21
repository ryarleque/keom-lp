"use client";

import { useEffect, useRef, useState } from "react";
import { KeomMark } from "../KeomMark";
import { whatsappUrl } from "@/lib/keom";
import { CTA, NAV_V2 } from "@/lib/v2-content";
import { Button } from "./primitives";

function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <KeomMark size={26} title="KEOM" />
      <span className="text-[1.0625rem] font-semibold tracking-[0.08em] text-k-ink">
        KEOM
      </span>
    </span>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  // Cambia a superficie sólida al pasar 24 px (el observer también resuelve el estado inicial).
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Menú móvil: cierra con Escape, bloquea el scroll y mantiene el foco dentro.
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    menu.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab" || !menu.current) return;
      const items = menu.current.querySelectorAll<HTMLElement>("a, button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <div ref={sentinel} aria-hidden className="absolute left-0 top-6 h-px w-px" />
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
          solid
            ? "border-k-line bg-k-bg/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Principal"
          className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8"
        >
          <a href="#top" aria-label="KEOM, ir al inicio" className="rounded-md">
            <Wordmark />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_V2.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.9375rem] text-k-soft transition-colors duration-200 hover:text-k-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button href={whatsappUrl("nav")} external size="sm">
                {CTA.demo}
              </Button>
            </div>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
              className="k-press grid size-11 place-items-center rounded-[10px] text-k-ink md:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                {open ? (
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {open ? (
        <div
          id="menu-movil"
          ref={menu}
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
          className="fixed inset-0 z-40 flex flex-col bg-k-bg px-5 pt-24 pb-8 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_V2.map((l) => (
              <li key={l.href} className="border-b border-k-line">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center text-[1.5rem] font-medium tracking-[-0.02em] text-k-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={whatsappUrl("nav-movil")} external className="mt-auto w-full">
            {CTA.demo}
          </Button>
        </div>
      ) : null}
    </>
  );
}
