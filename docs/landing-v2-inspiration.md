# Landing V2: referencias de diseño (21st.dev)

Fecha de revisión: 2026-09-21. Se revisaron los listados de categorías de https://21st.dev/community/components (heroes, features, video, scroll, navbar, call-to-action, stats). Solo se leyeron nombres y patrones de cada listado. **No se copió código.** Aquí se guardan principios, no componentes.

Regla para cada patrón: ¿ayuda a explicar KEOM? Si no, se descarta.

## Patrones adoptados

| # | Patrón (referencia) | Principio | Dónde lo usamos | Adaptación |
|---|---|---|---|---|
| 1 | Hero con maqueta de producto ("Hero Section with Device Mockups", "Split Hero With Image Cards") | El producto real es la prueba visual. | Hero | Captura real de "Clientes en riesgo" grande, con "Necesitan tu atención" superpuesta. Sin ilustraciones ni orbes. |
| 2 | Hero editorial, tipografía primero ("Minimalist Hero Fashion", "Editorial Collage Hero") | La jerarquía tipográfica hace el trabajo; menos adornos. | Hero, tesis | H1 en Geist, oración completa, poco tracking negativo, nada de mayúsculas decorativas. |
| 3 | Scroll reveal secuencial ("Scroll Reveal Content", "Scroll Fade Area") | Revelar en orden cuando el orden es el mensaje. | Tesis ("pregunta, pide, cotiza, mañana te confirmo, nada") | Cada línea entra al cruzar el viewport (opacity + 8px de translate, 240 ms). Sin scrub. |
| 4 | Sticky scroll ("Sticky Scroll Reveal", "Sticky Scroll Cards Section") | El texto avanza, la imagen se queda y cambia de estado. | Detecta / Prioriza / Actúa (solo `lg+`) | Sticky con IntersectionObserver, crossfade de captura. En móvil es flujo vertical normal. Sin scroll-jacking. |
| 5 | Bento asimétrico ("Feature Section with Bento Grid", "Stats Bento") | El tamaño de la pieza comunica cuál es la principal. | Cuatro problemas, resultados | Una pieza dominante (oportunidad detenida) y tres señales más chicas. Nunca cuatro tarjetas iguales. |
| 6 | Reproductor con póster ("Video Thumbnail Player", "Video Player") | El video no debe costar carga hasta que hace falta. | Cómo funciona | Póster real, `preload="none"`, fuente al acercarse, pausa fuera de pantalla, controles nativos. |
| 7 | Media que se expande al entrar ("Scroll media expansion hero", "Container Scroll Animation") | Un gesto espacial breve da peso al momento clave. | Video | Solo una entrada de escala 0.98 → 1 con `transform`, una vez. Se descarta el "scrub" atado al scroll. |
| 8 | Navbar que cambia al hacer scroll ("Morphing Scroll Navbar", "Floating Header") | La navegación desaparece en el hero y aparece cuando sirve. | Nav | Transparente al inicio; superficie oscura + borde fino tras 24 px. |
| 9 | Contador ("Number Ticker", "Count Up") | Un solo número que cuenta comunica "esto crece". | Ingresos recuperados (datos demostrativos) | Un contador, `tabular-nums`, se detiene al terminar, estático con movimiento reducido. |
| 10 | CTA mínimo centrado (variantes minimal de CTA) | El cierre no compite con el cuerpo. | CTA final | Titular + una línea + botón. Resplandor radial apenas visible. |

## Patrones considerados y rechazados

- **Shaders y gradientes animados** ("Aurora Veil Shader", "Floating Gradient", "Sonar Grid"): decoran, no explican. Es el sello de plantilla de IA.
- **Video bloqueado por scroll** ("Scroll-Locked Video Hero"): secuestra el scroll y va contra el requisito de scroll normal.
- **Navbar tubelight / 3D / glassmorphism**: efecto sin función.
- **CTA con marquee de texto**: movimiento constante sin propósito.
- **Números con blur o shuffle**: distraen del dato.
- **Parallax de profundidad agresivo**: cuesta rendimiento y comprensión.

## Cómo se tradujo a decisiones de diseño

Las decisiones vinculantes viven en `DESIGN.md`. Este archivo solo explica de dónde salieron.
