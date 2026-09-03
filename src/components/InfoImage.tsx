import { INTEGRATIONS, SERVICES } from "@/lib/keom";
import { Band } from "./Band";
import { Photo } from "./Photo";

function Row({
  reverse = false,
  photo,
  title,
  body,
  chips,
}: {
  reverse?: boolean;
  photo: "products" | "spa";
  title: React.ReactNode;
  body: string;
  chips: string[];
}) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <Photo
        name={photo}
        className={`aspect-[4/3] w-full ${reverse ? "lg:order-2" : ""}`}
      />
      <div className={reverse ? "lg:order-1" : ""}>
        <h3 className="text-[1.7rem] font-semibold leading-[1.12] text-ink sm:text-[2.1rem]">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
          {body}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {chips.map((c) => (
            <li
              key={c}
              className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-[0.72rem] tracking-wide text-ink-soft"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function InfoImage() {
  return (
    <Band tone="white">
      <div className="flex flex-col gap-20">
        <Row
          photo="products"
          title={
            <>
              Se suma a tus herramientas.
              <br />
              No las reemplaza.
            </>
          }
          body="Si ya usas un CRM, KEOM se integra a tu proceso. Si no, te da una vista simple de consultas y próximos pasos."
          chips={INTEGRATIONS}
        />
        <Row
          reverse
          photo="spa"
          title={
            <>
              No es un chatbot de WhatsApp.
              <br />
              No es otro CRM.
            </>
          }
          body="Es una plataforma de inteligencia y recuperación de oportunidades: entiende qué quiere cada clienta, detecta cuáles se enfrían y decide la próxima acción."
          chips={SERVICES}
        />
      </div>
    </Band>
  );
}
