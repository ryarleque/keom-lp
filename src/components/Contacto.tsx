import { Band } from "./Band";
import { whatsappUrl } from "@/lib/keom";

export function Contacto() {
  return (
    <Band tone="blue" id="contacto">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[2.4rem] font-semibold leading-[1.07] text-on-blue sm:text-[3.3rem]">
          Empecemos por tu bandeja de entrada.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-on-blue-soft">
          KEOM está en pre-lanzamiento. Escríbenos por WhatsApp y agendamos una
          demo con el flujo real de tu centro. Sin compromiso.
        </p>
        <div className="mt-9 flex justify-center">
          <a
            href={whatsappUrl("contacto")}
            target="_blank"
            rel="noopener noreferrer"
            className="press rounded-full bg-white px-8 py-4 font-mono text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-blue"
          >
            Escribir por WhatsApp
          </a>
        </div>
        <p className="mt-5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-on-blue-mute">
          Respondemos el mismo día
        </p>
      </div>
    </Band>
  );
}
