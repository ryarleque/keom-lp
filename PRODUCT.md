# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary (product):** Small and mid-sized businesses in Peru that receive a high volume of inbound commercial inquiries and use WhatsApp as a main sales channel. Target verticals: aesthetic/beauty clinics, dental practices, real estate, academies and private education, automotive, and service businesses.

Two distinct product users inside those businesses:

- **Sales reps** — work the Sales Dashboard, which answers "What should I do next?" (opportunities needing attention, high-intent leads, pending follow-ups, conversations that need a human, upcoming appointments, next best action).
- **Owners / managers** — work the Business Dashboard, which answers "Is KEOM helping my business generate more value?" (new opportunities, opportunities at risk, recovered opportunities, bookings, sales, conversion rate, revenue at risk, recovered revenue).

**Primary (this landing page):** the business owner or manager evaluating whether KEOM recovers revenue they are currently losing, deciding whether to book a demo.

## Product Purpose

KEOM — **Keep Every Opportunity Moving** — is a B2B opportunity-intelligence and opportunity-recovery platform. It detects commercial opportunities that are starting to stall, understands each prospect's intent and conversation context, and determines (or executes) the next best action to move them toward conversion.

It exists because businesses lose sales they already paid to generate: replies come too late, nobody follows up, a conversation is forgotten, a quote goes unanswered, a high-intent buyer is not recognized, and there is no visibility into which opportunities need attention or how much money is leaking.

Success means stalled opportunities turned into conversations, bookings and revenue — measured as opportunities detected, opportunities at risk, opportunities recovered, bookings, sales, and recovered revenue, not "messages answered."

## Positioning

KEOM is **not** an "AI chatbot for WhatsApp" and **not** "another CRM." Its position is an **Opportunity Intelligence + Opportunity Recovery Platform**.

The differentiator a neighboring product could not truthfully copy: KEOM is built around **what happens next** — the next commercial action for each opportunity — so an opportunity is never left forgotten without a reason or a next action. Most tools help manage conversations; KEOM manages what follows the conversation.

It complements the salesperson rather than replacing them: the AI handles routine work (FAQs, classification, follow-up, availability, confirmations) so people can focus on high-value clients, negotiation, objections, and closing.

## Operating Context

- **First product / first use case: WhatsApp.** End-to-end flow: Marketing / Ads / Social Media → WhatsApp → KEOM → Understand intent → Detect opportunity → Determine next best action → AI action or human action → Booking / Follow-up / Sale → Measure results.
- **Six-stage working model:** Understand, Detect, Prioritize, Act, Escalate, Measure.
- **Opportunity Recovery** is a headline scenario: a prospect asks about a service, requests a price, asks availability, receives information, then goes silent; KEOM recognizes the prior buying intent, detects that the opportunity has stopped, and recommends or executes a follow-up.
- **Two dashboards** (see Users) for two audiences with two different questions.
- **First market:** Peru; Spanish-speaking businesses; WhatsApp as the primary commercial channel. Customer-facing surfaces target Spanish.

## Capabilities and Constraints

- Analyzes conversations and commercial context to infer: what the client wants, how interested they are, what happened in the conversation, whether the opportunity is progressing, whether there is risk of losing it, and what should happen next.
- Recommends or executes actions: reply, follow up, provide information, offer availability, book an appointment, send an appointment reminder, request salesperson intervention.
- Escalates to a human with full context when an opportunity needs negotiation, human judgment, or special attention.
- Integrations: works alongside an existing CRM (HubSpot, Kommo, Zoho, or others); when the business has no CRM, KEOM can provide a simple system to view opportunities, conversations, next steps, appointments, follow-ups, and results.
- Metrics it is designed to report: opportunities detected, opportunities at risk, opportunities recovered, bookings, sales, conversion rate, revenue at risk, recovered revenue.
- Vocabulary to preserve: "opportunity" (not merely "lead" or "message"), "next best action", "opportunity recovery", "revenue at risk", "recovered revenue", "The AI handles the routine. Humans handle what matters."

## Brand Commitments

- **Name:** KEOM, set as an all-caps wordmark. Expansion / tagline: **Keep Every Opportunity Moving.**
- **Logo:** provided by the client — an infinity-loop mark fused with an upward arrow, cyan-to-blue gradient on deep navy, wordmark "KEOM" with the lockup tagline "KEEP EVERY OPPORTUNITY MOVING". Source file to be committed to the repo (`public/`); until then the raster preview shared in chat is the reference.
- **Core messaging** (authored in English in the brief; landing copy is Spanish — Spanish wording to be confirmed with the client, meaning must be preserved):
  - Main tagline: "Keep Every Opportunity Moving."
  - Main value proposition: "Find the opportunities you're about to lose and move them toward the next best action."
  - Alternative: "Your next customer may already be in your inbox."
  - Differentiation: "Most tools help you manage conversations. KEOM manages what happens next."
  - Human + AI: "Your sales team sells. KEOM makes sure they know who needs them next." / "The AI handles the routine. Humans handle what matters."
  - Results: "Turn stalled opportunities into conversations, bookings and revenue."
- **Personality:** premium, modern, intelligent, trustworthy, precise, B2B, global, simple, results-oriented. Emphasize movement, momentum, opportunities, decisions, commercial intelligence, and measurable business outcomes. Must not read as a generic AI startup.
- **Hard "do not":** never present KEOM as an "AI chatbot for WhatsApp" or as "another CRM."
- **Colors and typography:** not yet formally defined. The logo implies a deep-navy ground with a cyan→blue gradient accent; the visual system is to be proposed in design.

## Evidence on Hand

- **Stage: pre-launch.** No publicly operating product, no customers, no pilots, no testimonials, no case studies, no press, no benchmarks, and no real quantitative results or revenue figures yet.
- Future work **must not fabricate**: customer names or logos, "trusted by" / social-proof walls, testimonials, quantitative outcomes ("X% more revenue", "recovered $Y"), user counts, or funding/press claims.
- Real assets on hand: the business brief (`keom-brief.md`) and the client logo (to be committed). Target verticals and the Peru/WhatsApp market are real product intent, not signed customers.
- **Conversion action for the landing:** schedule a demo / talk to the team. There is no self-serve signup and no free trial.

## Product Principles

1. Every opportunity either moves forward, gets the right action, or reaches a clear outcome — none is silently forgotten.
2. Decide and act on what happens next, not only on what was said.
3. The AI does the routine; humans do what matters — KEOM makes a sales team's time more valuable, it does not replace the team.
4. Measure business outcomes (recovered opportunities, bookings, revenue), not activity.
5. Fit into the business's existing stack; do not force a rip-and-replace.

## Opportunity model (landing V2)

Durable product truth used to write the landing. Separate from visual decisions (see `DESIGN.md`).

**Core object:** the *Opportunity*. Not the message, not the lead.

**Chain:** Conversation → Intent → Opportunity → Stalling signal → Risk → Priority → Next Best Action → AI or Human execution → Recovered opportunity → Recovered appointment → Recovered revenue.

**Signals KEOM reads:** intent, conversation state, elapsed time, pending action, potential value, risk.

**Time is a signal, not the KPI.** "Sin respuesta hace 3 h" is evidence that an opportunity may have stalled. It feeds a decision together with intent, context and value. The business metric is opportunities and revenue recovered, never response speed. Do not headline "cada hora sin respuesta cuesta dinero" or "responder más rápido".

**Core thesis (Spanish, landing):** "Tus oportunidades no siempre se pierden de inmediato. Primero dejan de avanzar."

**Four problems, one root cause (stalled opportunities):**
1. Oportunidades esperando atención.
2. Seguimientos pendientes.
3. Prioridades poco claras.
4. Poca visibilidad.

**Audience for the first use case:** appointment-driven service businesses with high WhatsApp volume, starting with aesthetic clinics and similar. The landing reader is the owner or manager.

**Real product surfaces (from `keom-platform`, demo data):** "Clientes en riesgo" (seller: risk level, potential value, score, siguiente mejor acción, Abrir WhatsApp), "Necesitan tu atención" (seller: opportunities that require a human), "Reportes" (owner: ingresos recuperados, oportunidades recuperadas, tasa de recuperación, en riesgo). Anything shown from these is demo data and must be labelled "Datos demostrativos".

**Integration honesty:** WhatsApp is the initial, available flow. Google Calendar, HubSpot, Kommo and Gmail are "Próximamente". Do not imply otherwise.

**Contact:** WhatsApp only (`+51 938 244 200`). The email in the V1 code was a placeholder and is not shown.
