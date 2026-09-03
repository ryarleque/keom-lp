---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface brief — KEOM landing (`src/app/page.tsx`)

Scope: single marketing page. Visitor mode: **Persuade**.
Audience: dueña o gerenta de un centro estético en Perú con alto volumen de consultas por WhatsApp, evaluando si KEOM recupera citas que se están perdiendo.
Action: agendar demo → redirect a WhatsApp (`whatsappUrl()` en `src/lib/keom.ts`; `WHATSAPP_NUMBER` es placeholder).
Proof/content: pre-lanzamiento. Sin clientes, métricas ni testimonios reales. Todo el ejemplo es un centro estético ficticio, "Lumina" (Camila / limpieza facial, botox, depilación láser, peeling, paquete novia). Cifras "ejemplo". El hero usa un mockup de dashboard provisto (`public/photos/dashboard.jpg`, textos genéricos "Andrea Torres" aceptados como ejemplo).
Constraints: español, cero em-dashes. Nunca "chatbot de WhatsApp" ni "otro CRM". Stack Next 16 + Tailwind v4 + `motion`. Fotos stock (Unsplash) en `public/photos/`.

Memorable moment: la secuencia sticky (`#problema`) con indicador vertical de pasos; una consulta de limpieza facial se enfría y KEOM la detecta, decide, escribe y la recupera.

## Direction contract

THESIS: Landing de bloques de color en tema claro. Base blanca, bandas azul KEOM profundo (#0e347f) a sangre completa para los momentos emocionales, una sola banda oscura para el tablero. Títulos de sección centrados que contrastan con su fondo. Apoyada en imágenes de un centro estético; poco texto. Refuta el fondo oscuro único ("La Pizarra", seed 82027468) y el hero de dashboard flotante genérico.

OWN-WORLD: Blanco #ffffff, superficies frías claras, tinta #141a22. Azul KEOM #0e347f (texto blanco) para bandas de impacto; una banda oscura #0b1220 para el tablero. Acento cian. Tarjetas rounded-2xl con sombra suave, mucho aire. Display Saira Condensed (títulos centrados); datos en Martian Mono tabular; cuerpo Hanken Grotesk. Fotos sin tratado pesado (contraste con el blanco basta).

STORY: La dueña ve la pregunta ("¿cuánto dinero pierdes por responder tarde?") junto al panel de KEOM, luego la ecuación del problema, entra a la secuencia azul y ve una consulta enfriarse y volver a la agenda, revisa el tablero oscuro, ve las dos vistas, los seis pasos en carrusel, el reparto IA/persona, y escribe por WhatsApp.

FIRST VIEWPORT: Fondo blanco, altura ~92dvh. Izquierda: titular en dos partes ("¿Cuánto dinero estás perdiendo por responder tarde?" / "La mayoría de negocios no lo sabe."), subtítulo de una línea, dos botones (azul sólido "Agendar demo" + borde "¿Cómo funciona?"). Derecha: el mockup de dashboard `dashboard.jpg` en una tarjeta oscura con sombra azul.

FORM: Color-block story en tema claro, dirección fijada por el usuario a partir de su wireframe (`diseno-propuesto.md`, `public/page1.jpeg`, `public/page2.jpeg`). Secciones: Hero(blanco) · Ecuación de negocio(blanco) · #problema (azul, sticky-scrub, indicador vertical) · #tablero (oscuro) · Dashboards(blanco) · #como-funciona (carrusel, superficie pálida, ~2.5 cards) · IA+Personas (azul, dos cards grandes) · InfoImage (blanco, dos filas texto+imagen alternadas) · Contáctanos (azul, botón WhatsApp) · Footer. Splash de ~3s: teletipo de "Keep every…" → "Keep Every Opportunity Moving" → lockup KEOM. Componentes reutilizables: `Band`, `SectionTitle`, `CountUp`, `Reveal`, `Photo`, `HowItWorksCarousel`, `BusinessEquation`, `InfoImage`, `Contacto`.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
