---
name: KEOM V2
description: Landing de KEOM. Oscura, dirigida por producto, con una sola pieza verde de marca.
version: 2.0
colors:
  background: "#0a0d11"
  backgroundRaised: "#0f1318"
  surface: "#141a21"
  surfaceHigh: "#1a222b"
  border: "rgba(255,255,255,0.08)"
  borderStrong: "rgba(255,255,255,0.14)"
  textPrimary: "#eef2f5"
  textSecondary: "#a3aeb9"
  textMuted: "#75828f"
  brand: "#3ddc84"
  brandSoft: "#92e6b6"
  brandInk: "#06210f"
  brandDim: "rgba(61,220,132,0.12)"
  danger: "#f0574e"
  dangerDim: "rgba(240,87,78,0.14)"
  warning: "#e6a23c"
  warningDim: "rgba(230,162,60,0.14)"
typography:
  fontSans: "Geist, system-ui, sans-serif"
  fontMono: "Geist Mono, ui-monospace, monospace"
  weights: [400, 500, 600]
  display:  { size: "clamp(2.5rem, 1.4rem + 4.6vw, 4.5rem)", lineHeight: 1.02, weight: 600, tracking: "-0.035em" }
  h2:       { size: "clamp(2rem, 1.3rem + 2.6vw, 3.25rem)",  lineHeight: 1.06, weight: 600, tracking: "-0.03em" }
  h3:       { size: "1.25rem",   lineHeight: 1.3,  weight: 600, tracking: "-0.01em" }
  lead:     { size: "clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)", lineHeight: 1.55, weight: 400 }
  body:     { size: "1rem",      lineHeight: 1.65, weight: 400 }
  small:    { size: "0.875rem",  lineHeight: 1.5,  weight: 400 }
  label:    { size: "0.75rem",   lineHeight: 1.4,  weight: 500, tracking: "0.12em", family: mono, transform: uppercase }
spacing:
  unit: 4
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 144]
  sectionLarge: { desktop: 144, mobile: 96 }
  sectionMedium: { desktop: 96, mobile: 72 }
  sectionSmall: { desktop: 56, mobile: 40 }
  gutter: { mobile: 20, desktop: 32 }
rounded:
  chip: 6
  control: 10
  panel: 14
  dot: 999
borders:
  hairline: "1px solid var(--border)"
  strong: "1px solid var(--border-strong)"
shadows:
  screen: "0 40px 90px -50px rgba(0,0,0,0.85)"
  focusRing: "0 0 0 2px var(--background), 0 0 0 4px var(--brand)"
  glowState: "0 0 40px -12px rgba(61,220,132,0.45)"
motion:
  easeOut: "cubic-bezier(0.23, 1, 0.32, 1)"
  easeInOut: "cubic-bezier(0.77, 0, 0.175, 1)"
  duration: { press: 120, ui: 200, reveal: 320, media: 600 }
  stagger: 60
  reveal: { translateY: 8, opacity: [0, 1] }
layout:
  contentWidth: 1200
  wideWidth: 1280
  measure: { display: "16ch to 22ch", lead: "56ch", body: "62ch" }
breakpoints: { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 }
---

# KEOM V2: sistema visual

Este archivo es la fuente de verdad visual de la landing V2. Si cambias un valor aquí, cámbialo en `src/app/globals.css` (bloque `@theme`) en el mismo commit. Si algo del código contradice este archivo, gana este archivo.

## Tesis de diseño

KEOM detecta oportunidades que dejaron de avanzar. La página tiene que sentirse igual: **calma, precisión y un solo foco por pantalla**. No se vende con adornos, se vende enseñando el producto real y contando un problema que el visitante reconoce ("mañana te confirmo" y después nada).

Tres decisiones sostienen todo lo demás:

1. **El producto es el material visual.** Capturas reales de KEOM, grandes y legibles. No hay ilustraciones, robots ni orbes.
2. **La tipografía lleva la jerarquía.** Un solo sans (Geist), pocos pesos, escala editorial. Los bordes finos y el tono de superficie separan; las sombras casi no existen.
3. **El verde de KEOM es una señal, no una decoración.** Aparece en acción, estado sano y foco. El rojo y el ámbar aparecen solo cuando indican riesgo.

## Personalidad visual

Premium, oscura, operativa, cinematográfica sin ser de ciencia ficción. Referencias de tono: consola de operaciones, bitácora editorial. No es cyberpunk, cripto, gaming ni demo de IA.

## Layout

- Contenido en 1200 px; pantallas de producto hasta 1280 px. Gutter 20 px móvil, 32 px escritorio.
- Ritmo de secciones: `large` (144/96) para momentos de historia, `medium` (96/72) para bloques de apoyo, `small` (56/40) para transiciones cortas. Nunca dos secciones seguidas con el mismo padding y la misma composición.
- Alternar composición: editorial de texto, pantalla ancha, dos columnas asimétricas, bento con pieza dominante, video centrado. **Prohibido** el patrón "título + 3 tarjetas iguales + icono" más de una vez en la página.
- Medida de lectura: titulares 16 a 22 caracteres por línea, párrafos hasta 62.

## Color

- Fondo casi negro con un matiz frío (`#0a0d11`). Tres niveles de superficie por tono, no por sombra: `backgroundRaised` para bandas, `surface` para paneles, `surfaceHigh` para el elemento activo.
- Bordes de 1 px a 8 % de blanco; 14 % para hover o elemento activo.
- Texto: `textPrimary` para titulares y datos, `textSecondary` para párrafos (contraste ≈ 8:1), `textMuted` solo para etiquetas de 12 px o más (contraste ≈ 4.8:1). Nunca texto informativo por debajo de eso.
- `brand` `#3ddc84` conserva la identidad verde de KEOM. `brandSoft` es el relleno del CTA principal con texto `brandInk`.
- Riesgo = `danger`; atención = `warning`; sano/recuperado = `brand`. Las capturas ya usan la misma semántica.
- Glow: solo `glowState`, solo para un estado activo. Dos radiales verdes muy tenues, ambos apenas perceptibles: luz ambiente detrás del video y cierre del CTA final. Nada más.

## Tipografía

- **Geist** para todo el texto, **Geist Mono** solo para datos pequeños (tiempos, puntajes, etiquetas de sección). Nada de una tercera familia.
- Pesos 400, 500 y 600. Un titular usa un peso; no se mezclan cinco pesos por sección.
- Titulares en mayúscula inicial de oración. Las etiquetas mono en mayúsculas son la única excepción, una por sección como máximo.
- Sin guiones largos en el copy visible. Frases cortas, verbos concretos.

## Superficies y tarjetas

- Una tarjeta solo existe si agrupa contenido que se lee junto. **No anidar tarjetas** dentro de tarjetas.
- Radios: `chip` 6, `control` 10 (botones, inputs), `panel` 14 (pantallas y paneles). Nada de "todo redondeado". Las píldoras (`dot` 999) son solo puntos de estado.
- Sin sombras de tarjeta. La única sombra es `screen`, para las capturas grandes del hero y del video.

## Pantallas de producto

- Siempre capturas reales, exportadas en WebP con `width` y `height` explícitos (sin salto de layout).
- Marco: borde `hairline`, radio `panel`, fondo `surface`, sin marco de dispositivo. La captura ya trae su barra superior.
- Toda cifra visible en una captura es de demostración. Cada bloque que muestra datos lleva la leyenda **"Datos demostrativos"** en `small` + `textMuted`, pegada a la pantalla.
- Recortes intencionales: hero (pantalla completa), tarjeta única (señal de riesgo), lista, reporte. Cada sección usa un recorte distinto para no repetirse.

## Botones y CTA

- Un CTA primario por vista: relleno `brandSoft`, texto `brandInk`, radio `control`, 48 px de alto, `label` en Geist 500 (no mono, no mayúsculas).
- Secundario: borde `borderStrong`, texto `textPrimary`. Terciario: enlace con subrayado en hover.
- El destino de "Agendar demo" es siempre `whatsappUrl()`. Focus visible: `focusRing`.
- Zona táctil mínima de 44 px.

## Iconos

Trazo de 1.5 px, tamaño 16 a 20 px, color heredado del texto. No van dentro de "azulejos" sobre los títulos. Solo icono cuando sustituye una palabra (WhatsApp, reloj, advertencia).

## Movimiento

Regla: si la animación no explica algo, se quita.

| Uso | Herramienta | Duración | Curva |
|---|---|---|---|
| Press de botón | CSS `transform: scale(0.97)` | 120 ms | easeOut |
| Hover / foco | CSS transición de color y borde | 200 ms | easeOut |
| Aparición de bloque | CSS opacity + translateY 8 px | 320 ms | easeOut |
| Cambio de captura en sticky / pestañas | CSS crossfade de opacity | 200 a 280 ms | easeOut |
| Entrada del video | CSS scale 0.98 → 1 + opacity | 600 ms, una sola vez | easeOut |
| Splash de marca (símbolo, KEOM, lema, barra) | CSS opacity + translateY 12 px, barra con scaleX | 900 ms escalonado; visible 2.9 s la primera vez, 1.3 s después en la sesión | easeOut |
| Contador | rAF corto, una sola cifra | 900 ms | easeOut |

- Solo `transform` y `opacity`. Nunca animar `width`, `height`, `top`, `left`.
- Escalonado máximo de 60 ms, máximo 4 elementos.
- Se puede interrumpir: los estados se controlan por clase, no por timeline. Nada de bucles ni elementos flotando.
- `prefers-reduced-motion: reduce`: todo aparece estático, el video no se reproduce solo, el contador muestra el valor final.
- Sin scroll-jacking, sin scrub atado al scroll, sin parallax agresivo. Se prefiere CSS y un hook con `IntersectionObserver`. No se usa una librería de animación en V2.

## Responsive

- Diseñar móvil como experiencia propia, no como escritorio apilado. Puntos de control: 375, 390, 430, 768, 1024, 1280, 1440+.
- El H1 nunca baja de 2.5rem y no se corta. El CTA principal aparece antes del primer scroll.
- Las capturas caben sin scroll horizontal; en móvil se usan las capturas móviles (`m-*`) o recortes de tarjeta.
- El sticky de "Detecta / Prioriza / Actúa" existe solo desde `lg`. Debajo de `lg` es flujo vertical con una captura por paso.
- Nada de `position: sticky` que atrape el scroll en móvil. Menú móvil de pantalla completa con foco atrapado y cierre con Escape.

## Accesibilidad

- HTML semántico, un solo `h1`, jerarquía `h2` > `h3` sin saltos. `nav`, `main`, `footer`, `section` con `aria-labelledby`.
- Foco visible en todo elemento interactivo; orden de tabulación = orden visual.
- Botón (`button`) para acciones, enlace (`a`) para navegación.
- `alt` descriptivo en capturas (qué muestra y que son datos demostrativos); `alt=""` y `aria-hidden` en lo decorativo.
- Video con controles nativos, póster, sin autoplay con sonido; sin autoplay si el usuario pidió menos movimiento.
- Contraste AA como mínimo sobre fondo oscuro; no usar `textMuted` para información esencial.

## Rendimiento (parte del diseño)

- LCP del hero = el H1 (texto), no una imagen. La captura del hero carga con prioridad pero no bloquea el texto.
- Video: `preload="none"` + póster, la fuente se asigna al acercarse a la vista, se pausa fuera de pantalla, proporción 16:9 reservada.
- Fuentes con `next/font` (Geist y Geist Mono, `display: swap`). Splash de marca al cargar (ver Movimiento): solo transform y opacity, más corto en visitas repetidas de la sesión, con `prefers-reduced-motion` se muestra estático, y se oculta sin JavaScript. Su tiempo se ajusta en `HOLD_MS`, `SEEN_HOLD_MS` y `FADE_MS` de `components/v2/Splash.tsx`.

## Anti-patrones (prohibido)

- Gradientes azul/morado "de IA" y blobs de gradiente gigantes.
- Tarjetas dentro de tarjetas.
- Azulejos de icono sobre cada título.
- Exceso de píldoras y badges (máximo una etiqueta por bloque).
- Todo redondeado; radios mayores de 14 px en contenido.
- Blur aleatorio y glassmorphism sin función.
- Neón, brillos permanentes, cuadrículas de fondo, partículas.
- Animación decorativa o en bucle.
- Testimonios, logos de clientes, porcentajes o ingresos inventados. KEOM está en pre-lanzamiento.
- Presentar KEOM como chatbot o autorrespondedor, o el tiempo de respuesta como métrica principal.
