"use client";

import Timeline from "@/components/ui/timeline";
import "./timeline.css";

const settings = {
  textColor: "var(--text-main, #ffffff)",
  mutedTextColor: "var(--text-muted, #9CA3AF)",
  activeColor: "#00E676",
  backgroundColor: "var(--bg-color, #0B0B10)",
  duration: 1.4,
};

export default function TimelineDemo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  return (
    <div id="proceso" className="timeline-demo-root relative">
      {/* Anchor for backward compatibility with #sobre-mi */}
      <span id="sobre-mi" className="absolute top-0 left-0 pointer-events-none opacity-0" aria-hidden="true" />

      {/* Lead-in so the pinned timeline has somewhere to scroll in from. */}
      <section className="timeline-leadin">
        <span className="timeline-leadin-badge">
          Metodología & Proceso
        </span>
        <h2 className="timeline-leadin-title">
          De tu idea a producción, paso a paso.
        </h2>
        <p className="timeline-leadin-desc">
          Un flujo transparente y estructurado: desde el primer contacto y la planificación, hasta el diseño interactivo, código ágil, pruebas, despliegue y soporte continuo.
        </p>
        <span className="timeline-leadin-arrow">&darr;</span>
      </section>

      {/* Realistic usage: custom copy, a branded accent, tuned reveal speed. */}
      <Timeline
        title="Proceso de Desarrollo"
        periodLabel="Fase 01 — Fase 07"
        backgroundColor={s.backgroundColor}
        textColor={s.textColor}
        mutedTextColor={s.mutedTextColor}
        activeColor={s.activeColor}
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Equipo colaborando en desarrollo de software"
        duration={s.duration}
      />

      <section className="timeline-leadout">
        ¿Tienes una idea o proyecto en mente? Contáctanos y lo transformamos en una solución digital de alto impacto.
      </section>
    </div>
  );
}
