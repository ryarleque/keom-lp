// KEOM landing V2: contenido en un solo lugar.
// Pre-lanzamiento: sin clientes, métricas ni testimonios reales. Toda cifra que
// aparece en una pantalla de producto es demostrativa.
// Regla del proyecto: sin guiones largos en el texto visible.

export const DEMO_LABEL = "Datos demostrativos";

export const NAV_V2: { label: string; href: string }[] = [
  { label: "Producto", href: "#producto" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Paneles", href: "#paneles" },
  { label: "Integraciones", href: "#integraciones" },
];

export const CTA = {
  demo: "Agendar demo",
  how: "Ver cómo funciona",
  whatsapp: "Hablar por WhatsApp",
  whatsappMessage: "Hola, quiero conocer más sobre KEOM.",
};

/* ---------- Capturas reales (keom-platform, datos demostrativos) ---------- */

export interface ShotSrc {
  src: string;
  w: number;
  h: number;
}

const p = (name: string, w: number, h: number): ShotSrc => ({
  src: `/product/${name}.webp`,
  w,
  h,
});

export const SHOTS = {
  heroDesktop: p("seller-risk", 2400, 1500),
  heroMobile: p("m-seller-risk", 780, 1688),
  alertCard: p("t-alert-card", 1175, 815),
  riskStalled: p("t-risk-2", 1175, 466),
  riskStalledMobile: p("m-risk-2", 732, 736),
  timeCard: p("t-risk-1", 1175, 466),
  timeCardMobile: p("m-risk-1", 732, 736),
  detect: p("t-risk-12", 1175, 942),
  detectMobile: p("m-risk-12", 732, 1494),
  prioritize: p("t-risk-123", 1175, 1418),
  act: p("t-risk-3", 1175, 466),
  actMobile: p("m-risk-3", 732, 736),
  alerts: p("t-seller-alerts", 1720, 1160),
  alertsMobile: p("m-seller-alerts", 780, 1688),
  seller: p("t-seller-risk", 1720, 1400),
  sellerMobile: p("m-seller-risk", 780, 1688),
  admin: p("t-admin-reports", 1720, 1930),
  adminMobile: p("m-admin-reports", 780, 1688),
} as const;

export const ALT = {
  hero: "Pantalla Clientes en riesgo de KEOM con cuatro oportunidades ordenadas por riesgo, valor potencial y siguiente mejor acción. Datos demostrativos.",
  alertCard:
    "Alerta de KEOM para Juan Pérez: la oportunidad necesita una persona para confirmar horario. Datos demostrativos.",
  riskStalled:
    "Tarjeta de KEOM: Javier Morales, riesgo alto, canceló su última cita, con la siguiente mejor acción sugerida. Datos demostrativos.",
  timeCard:
    "Tarjeta de KEOM: Luis Fernández, riesgo alto, puntaje 88, valor potencial S/ 350, sin seguimiento hace 4 días y siguiente mejor acción. Datos demostrativos.",
  detect:
    "Dos clientes en riesgo detectados por KEOM: sin seguimiento por 4 días y cita cancelada. Datos demostrativos.",
  prioritize:
    "Tres oportunidades ordenadas por puntaje de riesgo: 88, 76 y 55, cada una con su valor potencial. Datos demostrativos.",
  act: "Oportunidad de Camila Rojas con la siguiente mejor acción y el botón para abrir WhatsApp. Datos demostrativos.",
  alerts:
    "Pantalla Necesitan tu atención de KEOM: una oportunidad de S/ 1,200 que requiere una persona para confirmar horario. Datos demostrativos.",
  seller:
    "Vista del vendedor en KEOM: lista de clientes en riesgo con puntaje, valor y acciones. Datos demostrativos.",
  admin:
    "Vista del dueño en KEOM: ingresos recuperados, oportunidades recuperadas, tasa de recuperación, clientes en riesgo e ingresos en el tiempo. Datos demostrativos.",
};

/* ---------- 2. Hero ---------- */

export const HERO = {
  eyebrow: "Keep Every Opportunity Moving",
  title: "Detecta las oportunidades que estás a punto de perder.",
  lead: "KEOM identifica cuándo una oportunidad deja de avanzar, prioriza quién necesita atención y ayuda a tu equipo a ejecutar la siguiente mejor acción.",
  support: "Human + AI · WhatsApp · Next Best Action",
};

/* ---------- 3. Tesis ---------- */

export const THESIS = {
  soft: "Tus oportunidades no siempre se pierden de inmediato.",
  strong: "Primero dejan de avanzar.",
  close:
    "KEOM ayuda a detectar esos momentos antes de que una oportunidad valiosa termine olvidada.",
};

export type TraceTone = "ok" | "warn" | "lost";

export const TRACE: { tag: string; text: string; tone: TraceTone }[] = [
  { tag: "Consulta", text: "Un cliente pregunta por precio.", tone: "ok" },
  { tag: "Intención", text: "Otro pide disponibilidad.", tone: "ok" },
  { tag: "Cotización", text: "Se envía una cotización.", tone: "ok" },
  { tag: "Pendiente", text: "Alguien dice “mañana te confirmo”.", tone: "warn" },
  { tag: "Sin movimiento", text: "Y después, nada.", tone: "lost" },
];

/* ---------- 4. Cuatro problemas ---------- */

export const PROBLEMS = {
  title: "Oportunidades que necesitan movimiento.",
  lead: "Cuatro síntomas de un mismo problema: conversaciones con intención de compra que dejaron de avanzar.",
  close: "KEOM convierte estas señales en prioridades y próximas acciones.",
  main: {
    n: "01",
    title: "Oportunidades esperando atención",
    body: "Clientes con intención comercial que todavía no recibieron la siguiente acción.",
  },
  others: [
    {
      n: "02",
      title: "Seguimientos pendientes",
      body: "Conversaciones que deberían continuar, pero quedaron detenidas.",
    },
    {
      n: "03",
      title: "Prioridades poco claras",
      body: "Tu equipo recibe muchos mensajes, pero no siempre sabe cuáles requieren atención primero.",
    },
    {
      n: "04",
      title: "Poca visibilidad",
      body: "Sabes cuántos leads llegaron. No siempre sabes cuáles estabas cerca de convertir y terminaste perdiendo.",
    },
  ],
};

/* ---------- 5. Cómo funciona (video) ---------- */

// El archivo se optimiza en public/videos. Si no existe, el reproductor muestra solo el póster.
export const VIDEO = {
  src: "/videos/keom-how-it-works.mp4",
  poster: "/videos/keom-how-it-works-poster.webp",
  w: 1920,
  h: 1080,
  eyebrow: "Cómo funciona",
  title: "De una conversación detenida a una oportunidad recuperada.",
  lead: "KEOM detecta cuándo una oportunidad deja de avanzar, entiende el riesgo y ayuda a ejecutar la siguiente mejor acción.",
  caption: "Escenas ilustrativas. Las cifras que aparecen son datos demostrativos.",
  playLabel: "Reproducir video: cómo funciona KEOM",
  stages: [
    { n: "01", title: "Conversación", body: "Llega un mensaje con intención comercial." },
    { n: "02", title: "Riesgo detectado", body: "KEOM ve que la oportunidad dejó de avanzar." },
    { n: "03", title: "Next Best Action", body: "Define qué hacer y quién lo hace." },
    { n: "04", title: "Oportunidad recuperada", body: "El cliente vuelve y la cita se confirma." },
  ],
};

/* ---------- 6. El tiempo como señal ---------- */

export const TIME = {
  title: "El tiempo es una señal. La oportunidad es lo importante.",
  lead: "Las horas ayudan a KEOM a entender que una conversación puede haberse detenido. La decisión no depende solo del tiempo, sino del contexto, la intención y el estado de la oportunidad.",
  // x, y: posición del marcador sobre la captura (porcentaje).
  notes: [
    {
      n: "1",
      title: "Último mensaje: hace 4 días",
      body: "Una señal de que la conversación pudo detenerse. Por sí sola no decide nada.",
      x: 45.8,
      y: 49.5,
    },
    {
      n: "2",
      title: "Riesgo alto, puntaje 88",
      body: "KEOM combina intención, contexto y tiempo para estimar cuánto riesgo hay.",
      x: 50,
      y: 17.5,
    },
    {
      n: "3",
      title: "Valor potencial: S/ 350",
      body: "Ayuda a ordenar cuál oportunidad se atiende primero.",
      x: 27.5,
      y: 80,
    },
    {
      n: "4",
      title: "Siguiente mejor acción",
      body: "Retomar la conversación y ofrecer disponibilidad esta semana.",
      x: 95.8,
      y: 32.8,
    },
  ],
};

/* ---------- 7. Detecta / Prioriza / Actúa ---------- */

export const STEPS = {
  title: "KEOM convierte señales en decisiones.",
  items: [
    {
      key: "detecta",
      n: "01",
      name: "Detecta",
      body: "Detecta intención, conversaciones detenidas y señales de riesgo.",
      alt: ALT.detect,
    },
    {
      key: "prioriza",
      n: "02",
      name: "Prioriza",
      body: "Ordena oportunidades según intención, riesgo y valor potencial.",
      alt: ALT.prioritize,
    },
    {
      key: "actua",
      n: "03",
      name: "Actúa",
      body: "Ejecuta la siguiente mejor acción o involucra a una persona cuando hace falta.",
      alt: ALT.act,
    },
  ],
};

/* ---------- 8. Human + AI ---------- */

export const HUMAN_AI = {
  title: "Automatiza lo repetitivo. Escala lo que necesita criterio humano.",
  aiTitle: "KEOM se encarga de",
  ai: [
    "Detectar intención",
    "Encontrar conversaciones detenidas",
    "Identificar el riesgo",
    "Priorizar oportunidades",
    "Recomendar la siguiente mejor acción",
    "Ejecutar acciones seguras",
    "Hacer seguimiento cuando corresponde",
  ],
  humanTitle: "Tu equipo se encarga de",
  human: [
    "Negociar",
    "Resolver excepciones",
    "Responder objeciones complejas",
    "Construir confianza",
    "Tomar decisiones sensibles",
    "Cerrar cuando hace falta criterio",
  ],
  callout:
    "KEOM trabaja en segundo plano. Cuando una persona suma valor, la oportunidad aparece en Necesitan tu atención, con el resumen y lo que falta hacer.",
};

/* ---------- 9. Vendedor / Admin ---------- */

export const ROLES = {
  title: "Una vista para quien vende. Otra para quien dirige.",
  seller: {
    tab: "Vendedor",
    lead: "Qué hacer ahora, en orden.",
    items: [
      "Clientes en riesgo con nivel de riesgo y valor potencial",
      "Puntaje y siguiente mejor acción de cada cliente",
      "Abrir WhatsApp con un clic",
      "Necesitan tu atención: lo que solo una persona puede resolver",
    ],
  },
  admin: {
    tab: "Admin / dueño",
    lead: "Si KEOM está recuperando dinero.",
    items: [
      "Ingresos recuperados y oportunidades recuperadas",
      "Tasa de recuperación y clientes en riesgo",
      "Ingresos recuperados a lo largo del tiempo",
      "Recuperación por servicio y por qué se pierden oportunidades",
    ],
  },
};

/* ---------- 10. Resultados de negocio ---------- */

export const OUTCOMES = {
  title: "No se trata de responder más. Se trata de perder menos oportunidades.",
  items: [
    { title: "Oportunidades recuperadas", body: "Conversaciones detenidas que vuelven a avanzar." },
    { title: "Citas recuperadas", body: "Clientes que confirman después de un seguimiento a tiempo." },
    { title: "Ingresos recuperados", body: "El valor de cada oportunidad que no se pierde, medido en soles." },
    { title: "Mejor priorización", body: "Tu equipo sabe a quién escribir primero y qué decirle." },
    { title: "Visibilidad comercial", body: "Ves cuántos leads llegaron y también cuáles estabas cerca de convertir." },
  ],
  note: "KEOM está en pre-lanzamiento. Las cifras de las pantallas son datos demostrativos, no resultados de clientes.",
};

/* ---------- 11. Integraciones ---------- */

export const INTEGRATIONS = {
  title: "Trabaja sobre las herramientas que tu equipo ya usa.",
  lead: "KEOM empieza en WhatsApp y está pensado para convivir con tu CRM y tu calendario.",
  main: {
    name: "WhatsApp",
    status: "Disponible",
    body: "Donde empieza el flujo. KEOM lee las conversaciones y te avisa qué oportunidad se detuvo.",
  },
  others: [
    { name: "Google Calendar", status: "Próximamente" },
    { name: "HubSpot", status: "Próximamente" },
    { name: "Kommo", status: "Próximamente" },
    { name: "Gmail", status: "Próximamente" },
  ],
};

/* ---------- 12. CTA final y footer ---------- */

export const FINAL = {
  title: "Una oportunidad detenida todavía puede recuperarse.",
  lead: "KEOM te ayuda a detectarla antes de que termine olvidada.",
  tagline: "Keep Every Opportunity Moving",
};

export const FOOTER = {
  status: "Pre-lanzamiento",
  place: "Lima, Perú",
};
