// Built using Hyperiux Vault: https://vault.hyperiux.com - Enhanced for GSAP Pinning & Universal Support
"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

const monthOrder = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
} as const;

type Month = keyof typeof monthOrder;

export type JourneyItem = {
  id: string;
  year: string;
  month: Month;
  content: string;
};

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  duration?: number;
  scrollDuration?: number;
  itemsTop?: JourneyItem[];
  itemsBottom?: JourneyItem[];
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

const defaultTopJourneyData: JourneyItem[] = [
  {
    id: "2020-march",
    year: "2020",
    month: "March",
    content: "Inicios en ingeniería de software, arquitectura frontend y lógica de programación.",
  },
  {
    id: "2021-july",
    year: "2021",
    month: "July",
    content: "Despliegue de las primeras aplicaciones web comerciales y soluciones para clientes.",
  },
  {
    id: "2023-april",
    year: "2023",
    month: "April",
    content: "Especialización en desarrollo móvil con Android nativo (Kotlin) y APIs REST.",
  },
  {
    id: "2026-may",
    year: "2026",
    month: "May",
    content: "Soluciones de Inteligencia Artificial aplicada, automatización y plataformas LMS.",
  },
];

const defaultBottomJourneyData: JourneyItem[] = [
  {
    id: "2020-november",
    year: "2020",
    month: "November",
    content: "Diseño y validación de prototipos UI/UX de alta conversión y experiencia de usuario.",
  },
  {
    id: "2022-october",
    year: "2022",
    month: "October",
    content: "Integración de pasarelas de pago (Stripe, Mercado Pago) y catálogos en tiempo real.",
  },
  {
    id: "2025-september",
    year: "2025",
    month: "September",
    content: "Arquitectura escalable en la nube, microservicios y flujos móviles inteligentes.",
  },
];

export default function Timeline({
  title = "Mi Trayectoria",
  periodLabel = "2020 — 2026",
  textColor = "var(--text-main, #F3F4F6)",
  mutedTextColor = "var(--text-muted, #9CA3AF)",
  activeColor = "#00E676",
  backgroundColor = "transparent",
  imageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  imageAlt = "Luis Alexander - Workspace",
  duration,
  scrollDuration = 1.4,
  itemsTop = defaultTopJourneyData,
  itemsBottom = defaultBottomJourneyData,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const allJourneyItems: JourneyItem[] = [
    ...itemsTop,
    ...itemsBottom,
  ].sort((a, b) => {
    const yearDiff = Number(a.year) - Number(b.year);
    if (yearDiff !== 0) return yearDiff;
    return monthOrder[a.month] - monthOrder[b.month];
  });

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
    boxShadow: `0 0 14px ${activeColor}`,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  useGSAP(() => {
    const section = sectionRef.current;
    const slider = wholeSliderRef.current;
    if (!section || !slider) return;

    if (reducedMotion) {
      gsap.set(".journey-line", { width: "100%" });
      allJourneyItems.forEach((item) => {
        gsap.set(`.jl-${item.id}`, { scaleY: 1 });
        gsap.set(`.jd-${item.id}`, { scale: 1 });
        gsap.set(`.title-${item.id}`, { opacity: 1, y: 0 });
        gsap.set(`.description-${item.id}`, { opacity: 1, y: 0 });
      });
      return;
    }

    // Set initial states for items
    allJourneyItems.forEach((item) => {
      const isTop = itemsTop.some((t) => t.id === item.id);
      gsap.set(`.jl-${item.id}`, {
        scaleY: 0,
        transformOrigin: isTop ? "bottom center" : "top center",
      });
      gsap.set(`.jd-${item.id}`, { scale: 0 });
      gsap.set(`.title-${item.id}`, { opacity: 0.3, y: isTop ? 18 : -18 });
      gsap.set(`.description-${item.id}`, { opacity: 0.2, y: isTop ? 18 : -18 });
    });

    gsap.set(".journey-line", { width: "0%" });

    const getDistance = () => {
      const isMobile = window.innerWidth < 768;
      const extra = isMobile ? window.innerWidth * 0.4 : window.innerWidth * 0.15;
      return Math.max(200, slider.scrollWidth - window.innerWidth + extra);
    };

    // Master Timeline pinned with GSAP ScrollTrigger
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: () => `+=${getDistance()}`,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Horizontal slider movement
    masterTl.to(
      slider,
      {
        x: () => -getDistance(),
        ease: "none",
        duration: 1,
      },
      0
    );

    // Central journey line draws across
    masterTl.to(
      ".journey-line",
      {
        width: "100%",
        ease: "none",
        duration: 0.95,
      },
      0
    );

    // Staggered milestone stem growth, dot scale, and text reveals
    const total = allJourneyItems.length;
    allJourneyItems.forEach((item, idx) => {
      const startTime = (idx / (total + 0.5)) * 0.85 + 0.04;
      const isTop = itemsTop.some((t) => t.id === item.id);

      masterTl.to(
        `.jl-${item.id}`,
        {
          scaleY: 1,
          ease: "power2.out",
          duration: 0.12,
        },
        startTime
      );

      masterTl.to(
        `.jd-${item.id}`,
        {
          scale: 1,
          ease: "back.out(2)",
          duration: 0.12,
        },
        startTime
      );

      masterTl.to(
        `.title-${item.id}`,
        {
          opacity: 1,
          y: 0,
          color: "#ffffff",
          ease: "power2.out",
          duration: 0.14,
        },
        startTime + 0.02
      );

      masterTl.to(
        `.description-${item.id}`,
        {
          opacity: 1,
          y: 0,
          color: mutedTextColor,
          ease: "power2.out",
          duration: 0.14,
        },
        startTime + 0.04
      );
    });

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, { dependencies: [reducedMotion, itemsTop, itemsBottom], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="w-full relative min-h-screen overflow-hidden flex flex-col justify-center"
      style={sectionStyle}
    >
      <div className="w-full h-screen overflow-hidden flex items-center relative">
        <div
          ref={wholeSliderRef}
          className="flex h-[75vh] items-center gap-[4vw] px-[4vw] will-change-transform"
          style={{ width: "max-content" }}
        >
          {/* Tarjeta Visual de Portada */}
          <div className="h-[60vh] w-[340px] shrink-0 overflow-hidden rounded-2xl border border-[rgba(0,230,118,0.25)] bg-[rgba(26,26,36,0.7)] backdrop-blur-md shadow-[0_0_30px_rgba(0,230,118,0.12)] flex flex-col justify-between p-6">
            <div className="h-[65%] w-full overflow-hidden rounded-xl">
              <img
                src={imageUrl}
                alt={imageAlt}
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00E676] uppercase">
                {periodLabel}
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1 leading-tight">
                {title}
              </h3>
              <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                Desliza verticalmente para recorrer los hitos clave de mi evolución profesional.
              </p>
            </div>
          </div>

          {/* Eje de la Línea de Tiempo y Nodos */}
          <div className="relative h-full flex flex-col justify-center" style={{ width: "max-content", minWidth: "1800px" }}>
            {/* Línea Central Verde Neon */}
            <div className="w-full absolute left-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-10">
              <div
                className="w-3.5 h-3.5 rounded-full shrink-0 animate-pulse"
                style={activeStyle}
              />
              <div
                className="h-0.5 w-0 rounded-full journey-line shrink-0"
                style={activeStyle}
              />
              <div
                className="w-3.5 h-3.5 rounded-full shrink-0"
                style={activeStyle}
              />
            </div>

            {/* Fila Superior de Hitos */}
            <div className="flex items-end h-[32vh] pb-6 gap-x-[14vw]">
              {itemsTop.map((item) => (
                <div
                  key={`top-${item.id}`}
                  className="relative shrink-0 w-[280px] md:w-[320px] flex flex-col justify-end pb-5"
                >
                  {/* Stem y Dot */}
                  <div className="absolute left-6 bottom-[-24px] top-0 flex flex-col items-center justify-end pointer-events-none">
                    <div
                      className={`w-0.5 h-full rounded-full jl-${item.id}`}
                      style={activeStyle}
                    />
                    <div
                      className={`w-3 h-3 rounded-full -translate-y-1.5 jd-${item.id}`}
                      style={activeStyle}
                    />
                  </div>

                  {/* Contenido */}
                  <div className="pl-12 pr-4 space-y-1.5">
                    <span className="inline-block font-mono text-xs font-bold text-[#00E676] tracking-wider uppercase">
                      {item.year} · {item.month}
                    </span>
                    <h4
                      className={`title-${item.id} text-lg md:text-xl font-bold leading-tight text-white`}
                    >
                      {item.content.split(',')[0]}
                    </h4>
                    <p
                      className={`description-${item.id} text-xs md:text-sm leading-relaxed`}
                      style={mutedTextStyle}
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Espaciador del eje central */}
            <div className="h-10" />

            {/* Fila Inferior de Hitos */}
            <div className="flex items-start h-[32vh] pt-6 pl-[8vw] gap-x-[16vw]">
              {itemsBottom.map((item) => (
                <div
                  key={`bottom-${item.id}`}
                  className="relative shrink-0 w-[280px] md:w-[320px] flex flex-col justify-start pt-5"
                >
                  {/* Stem y Dot */}
                  <div className="absolute left-6 top-[-24px] bottom-0 flex flex-col items-center justify-start pointer-events-none">
                    <div
                      className={`w-3 h-3 rounded-full translate-y-1.5 jd-${item.id}`}
                      style={activeStyle}
                    />
                    <div
                      className={`w-0.5 h-full rounded-full jl-${item.id}`}
                      style={activeStyle}
                    />
                  </div>

                  {/* Contenido */}
                  <div className="pl-12 pr-4 space-y-1.5">
                    <span className="inline-block font-mono text-xs font-bold text-[#7C3AED] tracking-wider uppercase">
                      {item.year} · {item.month}
                    </span>
                    <h4
                      className={`title-${item.id} text-lg md:text-xl font-bold leading-tight text-white`}
                    >
                      {item.content.split(',')[0]}
                    </h4>
                    <p
                      className={`description-${item.id} text-xs md:text-sm leading-relaxed`}
                      style={mutedTextStyle}
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
