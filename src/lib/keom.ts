// KEOM landing — contenido compartido.
// Todo el ejemplo gira en torno a un centro estético ficticio, "Lumina".
// Pre-lanzamiento: sin clientes, métricas ni testimonios reales. Las cifras van
// etiquetadas como "ejemplo".

// TODO(keom): reemplazar por el número / link real de WhatsApp comercial.
const WHATSAPP_NUMBER = "51999999999";

export function whatsappUrl(context = "landing"): string {
  const text = encodeURIComponent(
    `Hola KEOM, quiero agendar una demo. (via ${context})`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// Navegación (one-page: ancla a las secciones que existen)
export const NAV: { label: string; href: string }[] = [
  { label: "Producto", href: "#producto" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Paneles", href: "#paneles" },
  { label: "Integraciones", href: "#integraciones" },
  { label: "Contacto", href: "#contacto" },
];

// Copy del hero
export const HERO = {
  eyebrow: "Inteligencia que recupera ventas",
  title: "¿Cuánto dinero estás perdiendo por responder tarde?",
  answer: "La mayoría de negocios no lo sabe.",
  body: "KEOM detecta oportunidades estancadas, impulsa la siguiente acción y te ayuda a recuperar ventas.",
  ctaPrimary: "Agendar demo",
  ctaSecondary: "¿Cómo funciona?",
};

// Mini-stats bajo el hero
export const HERO_STATS: { icon: "shield" | "clock" | "trend"; label: string }[] = [
  { icon: "shield", label: "Más ventas recuperadas" },
  { icon: "clock", label: "Equipos más enfocados" },
  { icon: "trend", label: "Resultados medibles" },
];

// Splash: la marca KEOM significa Keep Every Opportunity Moving.
export const KEEP_LINES = [
  "Keep every consulta.",
  "Keep every follow-up.",
  "Keep every cita.",
];
export const KEEP_TAGLINE = "Keep Every Opportunity Moving";

// Fotos: stock (Unsplash) en public/photos/ + el mockup de producto.
export const PHOTOS = {
  heroDash: { src: "/assets/hero-dashboard.png", w: 1035, h: 900, alt: "Panel de KEOM en una laptop: oportunidades en riesgo, ventas recuperadas y próxima acción sugerida (datos de ejemplo)" },
  dashboard: { src: "/photos/dashboard.jpg", w: 1600, h: 1200, alt: "Panel de KEOM: oportunidades en riesgo, ventas recuperadas y próxima acción" },
  herodark: { src: "/photos/herodark.jpg", w: 1400, h: 933, alt: "Sesión de tratamiento en un centro estético, con aceites y velas" },
  salon: { src: "/photos/salon.jpg", w: 1400, h: 934, alt: "Interior de un centro estético" },
  hero: { src: "/photos/hero.jpg", w: 1600, h: 1064, alt: "Tratamiento facial en un centro estético" },
  facial: { src: "/photos/facial.jpg", w: 1200, h: 800, alt: "Aplicación de mascarilla facial" },
  consult: { src: "/photos/consult.jpg", w: 1200, h: 800, alt: "Esteticista atendiendo a una clienta" },
  treatment: { src: "/photos/treatment.jpg", w: 1200, h: 800, alt: "Tratamiento corporal en cabina" },
  products: { src: "/photos/products.jpg", w: 1200, h: 800, alt: "Trabajo administrativo en el centro estético" },
  spa: { src: "/photos/spa.jpg", w: 1600, h: 1067, alt: "Cabina de tratamiento en calma" },
  glow: { src: "/photos/glow.jpg", w: 1200, h: 800, alt: "Detalle de rostro después de un tratamiento" },
} as const;

export type PhotoName = keyof typeof PHOTOS;

export type OppStatus = "en-riesgo" | "seguimiento" | "cita" | "recuperada";

export const STATUS_LABEL: Record<OppStatus, string> = {
  "en-riesgo": "En riesgo",
  seguimiento: "Seguimiento",
  cita: "Cita reservada",
  recuperada: "Recuperada",
};

export const STATUS_COLOR: Record<OppStatus, string> = {
  "en-riesgo": "var(--at-risk)",
  seguimiento: "var(--amber)",
  cita: "var(--cyan)",
  recuperada: "var(--recovered)",
};

export interface Opportunity {
  cliente: string;
  servicio: string;
  intent: string;
  from: number;
  to: number;
  status: OppStatus;
  signal: string;
  silencio: string;
}

// Tablero de oportunidades — ejemplos del centro estético
export const BOARD: Opportunity[] = [
  {
    cliente: "Camila R.",
    servicio: "Limpieza facial profunda",
    intent: "Pidió precio y disponibilidad, se quedó en visto",
    from: 58,
    to: 79,
    status: "seguimiento",
    signal: "Alta intención y 3 días en silencio. Seguimiento enviado.",
    silencio: "3 días",
  },
  {
    cliente: "Andrea M.",
    servicio: "Botox tercio superior",
    intent: "Preguntó por la promo del mes, sin respuesta del equipo",
    from: 41,
    to: 41,
    status: "en-riesgo",
    signal: "Nadie respondió hace 4 h. Lead de alta intención.",
    silencio: "4 horas",
  },
  {
    cliente: "Lucía T.",
    servicio: "Depilación láser, piernas completas",
    intent: "Comparó precios y pidió horarios de la tarde",
    from: 52,
    to: 74,
    status: "cita",
    signal: "Se ofreció disponibilidad. Cita reservada para el sábado.",
    silencio: "1 día",
  },
  {
    cliente: "Fiorella S.",
    servicio: "Peeling químico",
    intent: "Consultó por sesiones, respondió tibio y se enfrió",
    from: 34,
    to: 61,
    status: "seguimiento",
    signal: "Reactivación con info de resultados. Volvió a responder.",
    silencio: "6 días",
  },
  {
    cliente: "Valeria G.",
    servicio: "Paquete novia",
    intent: "Cotizó, agendó y confirmó la sesión de prueba",
    from: 47,
    to: 90,
    status: "recuperada",
    signal: "Recordatorio de cita. Asistió y dejó la separación.",
    silencio: "0",
  },
];

// Sección 2 (blanco): el costo de responder tarde
export const PAIN_POINTS: {
  icon: "chat" | "clock" | "eye" | "bell";
  title: string;
  body: string;
}[] = [
  { icon: "chat", title: "Clientes esperan y se van", body: "Respuestas tardías pierden oportunidades todos los días." },
  { icon: "clock", title: "Tu equipo no sabe qué priorizar", body: "Demasiados mensajes, pocas señales claras." },
  { icon: "eye", title: "Falta visibilidad de oportunidades", body: "No sabes qué está en riesgo hasta que es tarde." },
  { icon: "bell", title: "Seguimientos se olvidan", body: "Sin recordatorios ni próximos pasos claros." },
];

// Sección 3 (oscuro): cómo funciona KEOM, en 4 pasos
export type StepRow =
  | { kind: "bubble"; mine?: boolean; text: string; time?: string }
  | { kind: "tag"; text: string }
  | { kind: "alert"; title: string; sub: string }
  | { kind: "success"; title: string; sub: string }
  | { kind: "hint"; text: string };

export const FLOW_STEPS: {
  title: string;
  from: string;
  status: string;
  rows: StepRow[];
}[] = [
  {
    title: "Cliente escribe por WhatsApp",
    from: "Cliente",
    status: "En línea",
    rows: [
      { kind: "bubble", text: "Hola, ¿cuánto cuesta el tratamiento?", time: "10:31" },
    ],
  },
  {
    title: "KEOM responde y detecta la intención",
    from: "KEOM",
    status: "Automático",
    rows: [
      { kind: "bubble", mine: true, text: "¡Hola! El tratamiento tiene un valor de S/ 250. ¿Te gustaría agendar una cita?", time: "10:31" },
      { kind: "tag", text: "Intención detectada: precio" },
      { kind: "tag", text: "Estado: interesado" },
    ],
  },
  {
    title: "El cliente no responde: KEOM lo pone en riesgo",
    from: "Cliente",
    status: "Visto: hoy a las 10:32",
    rows: [
      { kind: "bubble", mine: true, text: "Sí, por favor", time: "10:32" },
      { kind: "alert", title: "Oportunidad en riesgo", sub: "Sin respuesta por 3h" },
      { kind: "hint", text: "Siguiente acción sugerida: enviar recordatorio" },
    ],
  },
  {
    title: "KEOM sugiere la siguiente acción y recupera la venta",
    from: "KEOM",
    status: "Automático",
    rows: [
      { kind: "bubble", mine: true, text: "¡Perfecto! Te agendé para el jueves a las 4:00 pm.", time: "11:05" },
      { kind: "success", title: "Cita agendada", sub: "Jueves 16 de mayo · 4:00 pm" },
    ],
  },
];

// Sección 5 (Paneles) — datos de ejemplo
export const VENDOR_ROWS: {
  name: string;
  initials: string;
  opp: string;
  status: string;
  tone: "danger" | "warn";
}[] = [
  { name: "Andrea Torres", initials: "AT", opp: "Tratamiento facial", status: "Sin respuesta 3h", tone: "danger" },
  { name: "Juan Pérez", initials: "JP", opp: "Paquete premium", status: "Sin respuesta 2h", tone: "danger" },
  { name: "María López", initials: "ML", opp: "Sesión demostrativa", status: "Seguimiento 45m", tone: "warn" },
];

export const OWNER_METRICS: {
  label: string;
  value: string;
  delta: string;
  tone: "mint" | "danger" | "info";
  trend: number[];
}[] = [
  {
    label: "Ingresos recuperados",
    value: "S/ 45,780",
    delta: "27% vs. mes anterior",
    tone: "mint",
    trend: [8, 10, 9, 13, 12, 16, 18, 17, 22, 26, 24, 31],
  },
  {
    label: "Oportunidades en riesgo",
    value: "32",
    delta: "18% vs. mes anterior",
    tone: "danger",
    trend: [10, 12, 11, 14, 13, 16, 15, 19, 21, 20, 26, 30],
  },
  {
    label: "Tasa de respuesta",
    value: "78%",
    delta: "11% vs. mes anterior",
    tone: "info",
    trend: [6, 8, 9, 8, 11, 13, 12, 16, 18, 21, 24, 27],
  },
  {
    label: "Ventas recuperadas",
    value: "S/ 12,480",
    delta: "31% vs. mes anterior",
    tone: "mint",
    trend: [7, 9, 8, 11, 14, 13, 17, 16, 21, 24, 28, 33],
  },
];

// KEOM en seis pasos
export const STEPS: { title: string; body: string; photo: keyof typeof PHOTOS }[] = [
  { title: "Entiende", body: "Lee la conversación y sabe qué tratamiento quiere la clienta y qué tan decidida está.", photo: "consult" },
  { title: "Detecta", body: "Marca las consultas que se están enfriando antes de que se pierdan.", photo: "glow" },
  { title: "Prioriza", body: "Ordena a quién responder primero según intención y valor.", photo: "facial" },
  { title: "Actúa", body: "Responde, hace seguimiento y ofrece horarios cuando corresponde.", photo: "treatment" },
  { title: "Escala", body: "Si hace falta criterio humano, pasa el contexto completo a la esteticista.", photo: "products" },
  { title: "Mide", body: "Muestra qué citas se recuperaron y su impacto en el mes.", photo: "spa" },
];

// Conversación de ejemplo para la secuencia problema -> solución
export const RECOVERY_CHAT: { who: "cliente" | "negocio"; text: string }[] = [
  { who: "cliente", text: "Hola, ¿hacen limpieza facial profunda? ¿Qué precio tiene?" },
  { who: "negocio", text: "¡Hola! Sí. La sesión está S/ 180." },
  { who: "cliente", text: "¿Tienen espacio esta semana en la tarde?" },
  { who: "negocio", text: "Déjame confirmar la agenda y te aviso." },
  { who: "cliente", text: "Ok, quedo atenta." },
];

// Sección 4 (IA + Humano)
export const AI_TASKS = [
  "Detectar señales de intención",
  "Priorizar lo que realmente importa",
  "Responder rápido y de forma consistente",
  "Sugerir próximas acciones inteligentes",
];
export const HUMAN_TASKS = [
  "Negociar y resolver objeciones",
  "Cerrar ventas y generar confianza",
  "Atender casos delicados",
  "Construir relaciones a largo plazo",
];

export const SERVICES = [
  "Limpieza facial",
  "Botox y rellenos",
  "Depilación láser",
  "Peelings",
  "Tratamientos corporales",
  "Paquetes novia",
];

export const INTEGRATIONS: {
  name: string;
  brand: "whatsapp" | "calendar" | "hubspot" | "kommo" | "gmail" | "more";
  color?: string;
}[] = [
  { name: "WhatsApp", brand: "whatsapp", color: "#25D366" },
  { name: "Google Calendar", brand: "calendar", color: "#4285F4" },
  { name: "HubSpot", brand: "hubspot", color: "#FF7A59" },
  { name: "Kommo", brand: "kommo", color: "#2C7BE5" },
  { name: "Gmail", brand: "gmail", color: "#EA4335" },
  { name: "Y más...", brand: "more" },
];
