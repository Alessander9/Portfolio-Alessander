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
    <div id="sobre-mi" className="timeline-demo-root">
      {/* Lead-in so the pinned timeline has somewhere to scroll in from. */}
      <section className="timeline-leadin">
        <span className="timeline-leadin-badge">
          Trayectoria & Hitos
        </span>
        <h2 className="timeline-leadin-title">
          Seis años, un recorrido interactivo.
        </h2>
        <p className="timeline-leadin-desc">
          Sigue deslizando — la sección se fija en pantalla, la línea de tiempo avanza horizontalmente y cada hito revela su historia.
        </p>
        <span className="timeline-leadin-arrow">&darr;</span>
      </section>

      {/* Realistic usage: custom copy, a branded accent, tuned reveal speed. */}
      <Timeline
        title="Product Storyline"
        periodLabel="2020 — 2026"
        backgroundColor={s.backgroundColor}
        textColor={s.textColor}
        mutedTextColor={s.mutedTextColor}
        activeColor={s.activeColor}
        imageUrl="https://cdn.21st.dev/assets/mirror/b0/b0c41784074f76ac5fb6b447da87780c901135841317a096241371f24bc13ddd.jpg"
        imageAlt="Team at work in a bright studio"
        duration={s.duration}
      />

      <section className="timeline-leadout">
        Desde las primeras notas de investigación hasta lanzamientos en producción y soluciones con IA.
      </section>
    </div>
  );
}
