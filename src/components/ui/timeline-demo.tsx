"use client";

import Timeline from "@/components/ui/timeline";

const settings = {
  textColor: "var(--text-main, #ffffff)",
  mutedTextColor: "var(--text-muted, #a1a1aa)",
  activeColor: "#00E676",
  backgroundColor: "var(--bg-color, #0a0a0a)",
  duration: 1.4,
};

export default function TimelineDemo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  return (
    <main className="bg-background text-foreground">
      {/* Lead-in so the pinned timeline has somewhere to scroll in from. */}
      <section className="flex h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trayectoria & Hitos
        </p>
        <h1 className="max-w-[18ch] text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Evolución profesional paso a paso.
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Desliza para explorar la línea de tiempo interactiva con hitos y logros clave.
        </p>
        <span className="mt-2 animate-bounce text-muted-foreground">&darr;</span>
      </section>

      {/* Usage: custom copy, a branded accent, tuned reveal speed. */}
      <Timeline
        title="Mi Historia"
        periodLabel="2020 — 2026"
        backgroundColor={s.backgroundColor}
        textColor={s.textColor}
        mutedTextColor={s.mutedTextColor}
        activeColor={s.activeColor}
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        imageAlt="Desarrollo y trabajo profesional"
        duration={s.duration}
      />
    </main>
  );
}
