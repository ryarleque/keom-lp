"use client";

import { useState } from "react";
import { CONTACT, CONTACT_COPY, whatsappUrl } from "@/lib/keom";
import { Section } from "./Section";
import { Mail, WhatsApp } from "./icons";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.78rem] font-medium text-on-paper-soft">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-paper-line bg-white px-3.5 py-2.5 text-[0.9rem] text-on-paper outline-none transition-colors placeholder:text-on-paper-mute focus:border-mint-strong";

export function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Sin backend: se abre WhatsApp con el mensaje ya redactado.
    const lines = [
      "Hola KEOM, quiero agendar una demo.",
      form.nombre && `Nombre: ${form.nombre}`,
      form.empresa && `Empresa: ${form.empresa}`,
      form.email && `Email: ${form.email}`,
      form.mensaje && `Mensaje: ${form.mensaje}`,
    ].filter(Boolean);
    window.open(whatsappUrl("contacto", lines.join("\n")), "_blank", "noopener");
  }

  return (
    <Section tone="paper" id="contacto" className="bg-paper-2">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        {/* left: pitch + contact info */}
        <div className="lg:pt-2">
          <h2 className="text-[2rem] font-extrabold leading-[1.08] tracking-[-0.015em] text-on-paper sm:text-[2.6rem]">
            {CONTACT_COPY.title}
          </h2>
          <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-on-paper-soft">
            {CONTACT_COPY.body}
          </p>

          <ul className="mt-9 flex flex-wrap gap-x-12 gap-y-5">
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-paper-line text-mint-strong">
                <WhatsApp size={16} />
              </span>
              <span className="flex flex-col">
                <span className="text-[0.8rem] font-semibold text-on-paper">
                  WhatsApp
                </span>
                <span className="text-[0.82rem] text-on-paper-soft">
                  {CONTACT.whatsappDisplay}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-paper-line text-on-paper">
                <Mail size={16} />
              </span>
              <span className="flex flex-col">
                <span className="text-[0.8rem] font-semibold text-on-paper">
                  Email
                </span>
                <span className="text-[0.82rem] text-on-paper-soft">
                  {CONTACT.email}
                </span>
              </span>
            </li>
          </ul>
        </div>

        {/* right: form -> opens WhatsApp with the message pre-filled */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-paper-line bg-white p-6 shadow-[0_20px_50px_-30px_rgba(14,23,32,0.25)] sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre">
              <input
                className={inputClass}
                value={form.nombre}
                onChange={set("nombre")}
                autoComplete="name"
              />
            </Field>
            <Field label="Empresa">
              <input
                className={inputClass}
                value={form.empresa}
                onChange={set("empresa")}
                autoComplete="organization"
              />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Email">
              <input
                type="email"
                className={inputClass}
                value={form.email}
                onChange={set("email")}
                autoComplete="email"
              />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Mensaje">
              <textarea
                rows={4}
                className={`${inputClass} resize-y`}
                value={form.mensaje}
                onChange={set("mensaje")}
              />
            </Field>
          </div>

          <button
            type="submit"
            className="press mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-mint-strong px-6 py-3.5 font-display text-[0.85rem] font-bold uppercase tracking-[0.08em] text-white hover:brightness-105"
          >
            {CONTACT_COPY.cta}
          </button>
          <p className="mt-3 text-center text-[0.76rem] text-on-paper-mute">
            {CONTACT_COPY.note}
          </p>
        </form>
      </div>
    </Section>
  );
}
