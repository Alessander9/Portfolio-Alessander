// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./timeline.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/* Inline stand-in for @gsap/react's useGSAP. Mirrors its default
   `revertOnUpdate: false`: one gsap.context lives for the component's
   lifetime, the callback is re-added when dependencies change, and the
   context is reverted only on unmount. A callback may return its own
   cleanup, which runs before the next re-add and on unmount. */
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

export type JourneyItem = {
  id: string;
  year: string;
  month: string;
  content: string;
  image?: string;
  imageAlt?: string;
  order: number;
};

type SplitTextInstance = InstanceType<typeof SplitText>;

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  items?: JourneyItem[];
  /** Reveal animation duration, in seconds. */
  duration?: number;
  /** Fallback reveal duration when `duration` is omitted, in seconds. */
  scrollDuration?: number;
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

const topJourneyData: JourneyItem[] = [
  {
    id: "fase-1-contacto",
    year: "FASE 01",
    month: "Contacto & Tu Idea",
    content: "Conversamos sobre tu negocio, a quién quieres llegar y lo que necesitas para definir juntos la mejor solución.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Contacto inicial y conceptualización de la idea",
    order: 1,
  },
  {
    id: "fase-3-diseno",
    year: "FASE 03",
    month: "Diseño Visual",
    content: "Diseñamos una vista previa interactiva para que veas y apruebes exactamente cómo lucirá antes de programar.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Diseño visual y prototipado interactivo",
    order: 3,
  },
  {
    id: "fase-5-qa",
    year: "FASE 05",
    month: "Pruebas de Calidad",
    content: "Probamos que todo abra rapidísimo y funcione a la perfección en celulares, tablets y computadoras.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Control de calidad y pruebas multidispositivo",
    order: 5,
  },
  {
    id: "fase-7-soporte",
    year: "FASE 07",
    month: "Soporte y Crecimiento",
    content: "Te enseño paso a paso a usar tu proyecto y te brindo soporte continuo para que sigas creciendo sin límites.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Mantenimiento, soporte y acompañamiento",
    order: 7,
  },
];

const bottomJourneyData: JourneyItem[] = [
  {
    id: "fase-2-planificacion",
    year: "FASE 02",
    month: "Plan de Trabajo",
    content: "Organizamos el cronograma de entregas, las funciones clave y un presupuesto cerrado y claro sin sorpresas.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Planificación técnica, requerimientos y fechas",
    order: 2,
  },
  {
    id: "fase-4-desarrollo",
    year: "FASE 04",
    month: "Construcción del Software",
    content: "Programamos cada sección con la mejor tecnología, compartiéndote avances continuos para tu tranquilidad.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Programación de software y desarrollo ágil",
    order: 4,
  },
  {
    id: "fase-6-despliegue",
    year: "FASE 06",
    month: "Lanzamiento Oficial",
    content: "Conectamos tu propio dominio en internet (.com), activamos la seguridad y tu proyecto queda abierto al mundo.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Publicación en internet y lanzamiento oficial",
    order: 6,
  },
];

const allJourneyItems: JourneyItem[] = [
  ...topJourneyData,
  ...bottomJourneyData,
].sort((a, b) => a.order - b.order);

export default function Timeline({
  title = "Cómo trabajamos",
  periodLabel = "Fase 01 — Fase 07",
  textColor = "var(--text-main, #ffffff)",
  mutedTextColor = "var(--text-muted, #9CA3AF)",
  activeColor = "#00E676",
  backgroundColor = "transparent",
  imageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  imageAlt = "Equipo colaborando en desarrollo de software",
  duration,
  scrollDuration = 1.2,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);
  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
    boxShadow: `0 0 10px ${activeColor}`,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  useGSAP(() => {
    const section = sectionRef.current;

    if (!section) return;

    const isMobile = window.innerWidth < 600;
    const slidePercent = isMobile ? -57 : -65;
    const lineWidth = isMobile ? "65%" : "98%";
    const lineStart = isMobile ? "top 30%" : "top 25%";
    const slideEnd = isMobile ? "82% 50%" : "92% bottom";
    const lineEnd = isMobile ? "80% 50%" : "92% bottom";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: slideEnd,
        scrub: true,
      },
      defaults: {
        ease: "none",
      },
    });

    tl.fromTo(
      wholeSliderRef.current,
      { xPercent: 0 },
      { xPercent: slidePercent },
    );

    if (reducedMotion) {
      gsap.set(".journey-line", { width: lineWidth });
      return;
    }

    gsap.to(".journey-line", {
      width: lineWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: lineStart,
        end: lineEnd,
        scrub: true,
      },
    });
  }, { dependencies: [reducedMotion], scope: sectionRef });

  useGSAP(() => {
    const section = sectionRef.current;

    if (!section) return;

    const items = allJourneyItems;

    if (reducedMotion) {
      items.forEach((item) => {
        gsap.set(`.jl-${item.id}`, { scaleY: 1 });
        gsap.set(`.jd-${item.id}`, { scale: 1 });
        gsap.set(`.img-${item.id}`, { opacity: 1, scale: 1, y: 0 });
        gsap.set(`.title-${item.id}`, { opacity: 1, clearProps: "transform" });
        gsap.set(`.description-${item.id}`, {
          opacity: 1,
          clearProps: "transform",
        });
      });
      return;
    }

    items.forEach((item) => {
      const isTop = topJourneyData.some((topItem) => topItem.id === item.id);
      gsap.set(`.jl-${item.id}`, {
        scaleY: 0,
        transformOrigin: "bottom bottom",
      });
      gsap.set(`.jd-${item.id}`, { scale: 0 });
      gsap.set(`.img-${item.id}`, {
        opacity: 0,
        scale: 0.88,
        y: isTop ? -16 : 16,
      });
      gsap.set(`.title-${item.id}`, { opacity: 1 });
      gsap.set(`.description-${item.id}`, { opacity: 1 });
    });

    const titleSplits: Partial<Record<string, SplitTextInstance>> = {};
    const descriptionSplits: Partial<Record<string, SplitTextInstance>> = {};

    items.forEach((item) => {
      try {
        titleSplits[item.id] = new SplitText(`.title-${item.id}`, {
          type: "chars, words, lines",
          mask: "lines",
        });

        descriptionSplits[item.id] = new SplitText(`.description-${item.id}`, {
          type: "chars, words, lines",
          mask: "lines",
        });
      } catch (e) {
        // Fallback gracefully if SplitText throws
      }
    });

    const createItemTimeline = (
      item: JourneyItem,
      startPos: number,
      endPos: number,
    ) => {
      const lineSelector = `.jl-${item.id}`;
      const dotSelector = `.jd-${item.id}`;
      const imgSelector = `.img-${item.id}`;
      const titleLines = titleSplits[item.id]?.lines?.length 
        ? titleSplits[item.id]!.lines 
        : [`.title-${item.id}`];
      const descriptionLines = descriptionSplits[item.id]?.lines?.length 
        ? descriptionSplits[item.id]!.lines 
        : [`.description-${item.id}`];

      const isTop = topJourneyData.some((topItem) => topItem.id === item.id);

      if (!isTop) {
        gsap.set(lineSelector, { transformOrigin: "top top" });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `${startPos}% 30%`,
          end: `${endPos}% 50%`,
          scrub: true,
        },
      });

      timeline
        .to(lineSelector, {
          scaleY: 1,
          duration: normalizedDuration * 0.4,
        })
        .to(
          dotSelector,
          {
            scale: 1,
            duration: normalizedDuration * 0.4,
          },
          "<",
        )
        .fromTo(
          imgSelector,
          {
            opacity: 0,
            scale: 0.88,
            y: isTop ? -16 : 16,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: normalizedDuration * 0.65,
            ease: "power2.out",
          },
          "<0.05",
        )
        .fromTo(
          titleLines,
          { y: isTop ? -14 : 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: -0.6 * normalizedDuration,
            duration: normalizedDuration * 0.75,
            stagger: 0.02,
            ease: "power2.out",
          },
        )
        .fromTo(
          descriptionLines,
          { y: isTop ? -10 : 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: normalizedDuration * 0.75,
            stagger: 0.02,
            ease: "power2.out",
          },
          "<0.05",
        );

      return timeline;
    };

    const positions: ReadonlyArray<readonly [number, number]> =
      window.innerWidth < 600
        ? [
            [22, 32],
            [28, 38],
            [36, 46],
            [45, 55],
            [52, 62],
            [60, 70],
            [69, 79],
          ]
        : [
            [6, 26],
            [16, 36],
            [26, 46],
            [35, 55],
            [45, 65],
            [55, 75],
            [65, 85],
          ];

    items.forEach((item, index) => {
      const [startPos, endPos] = positions[index] || [
        Math.min(85, 6 + index * 10),
        Math.min(95, 26 + index * 10),
      ];
      createItemTimeline(item, startPos, endPos);
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      Object.values(titleSplits).forEach((split) => split?.revert?.());
      Object.values(descriptionSplits).forEach((split) => split?.revert?.());
      window.removeEventListener("resize", handleResize);
    };
  }, { dependencies: [normalizedDuration, reducedMotion], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="timeline-section h-[200vw] max-[600px]:h-[400vh] w-full relative"
      style={sectionStyle}
    >
      <div className="timeline-sticky-viewport">
        <div ref={wholeSliderRef} className="timeline-slider-track">
          <div className="timeline-image-card">
            <img
              src={imageUrl}
              alt={imageAlt}
              draggable={false}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="timeline-canvas">
            <div className="timeline-central-axis">
              <div className="timeline-axis-dot" style={activeStyle}></div>
              <div
                className="timeline-axis-line journey-line"
                style={activeStyle}
              ></div>
              <div className="timeline-axis-dot" style={activeStyle}></div>
            </div>

            <div className="timeline-top-half">
              <div className="timeline-title-col">
                <h2 className="timeline-title-heading">{title}</h2>
              </div>

              <div className="timeline-top-items-row">
                {topJourneyData.map((item) => (
                  <div key={`top-${item.id}`} className="timeline-top-item">
                    <div className="timeline-stem-wrapper-top">
                      <div
                        className={`timeline-item-stem-top jl-${item.id}`}
                        style={activeStyle}
                      ></div>
                      <div
                        className={`timeline-item-dot-top jd-${item.id}`}
                        style={activeStyle}
                      ></div>
                    </div>

                    <div className="timeline-item-copy-top">
                      {item.image && (
                        <div className={`timeline-item-img-card img-${item.id}`}>
                          <img
                            src={item.image}
                            alt={item.imageAlt || `${item.year} ${item.month}`}
                            loading="lazy"
                            className="timeline-item-img"
                          />
                        </div>
                      )}
                      <h4 className={`title-${item.id} timeline-item-title`}>
                        <span className="timeline-item-year">{item.year}</span>
                        <span className="timeline-item-dot-sep">·</span>
                        <span className="timeline-item-month">{item.month}</span>
                      </h4>
                      <p
                        className={`description-${item.id} timeline-item-desc`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="timeline-bottom-half">
              <div className="timeline-period-col">
                <p className="timeline-period-label" style={mutedTextStyle}>
                  {periodLabel}
                </p>
              </div>

              <div className="timeline-bottom-items-row">
                {bottomJourneyData.map((item) => (
                  <div key={`bottom-${item.id}`} className="timeline-bottom-item">
                    <div className="timeline-stem-wrapper-bottom">
                      <div
                        className={`timeline-item-dot-bottom jd-${item.id}`}
                        style={activeStyle}
                      ></div>
                      <div
                        className={`timeline-item-stem-bottom jl-${item.id}`}
                        style={activeStyle}
                      ></div>
                    </div>

                    <div className="timeline-item-copy-bottom">
                      {item.image && (
                        <div className={`timeline-item-img-card img-${item.id}`}>
                          <img
                            src={item.image}
                            alt={item.imageAlt || `${item.year} ${item.month}`}
                            loading="lazy"
                            className="timeline-item-img"
                          />
                        </div>
                      )}
                      <h4 className={`title-${item.id} timeline-item-title`}>
                        <span className="timeline-item-year">{item.year}</span>
                        <span className="timeline-item-dot-sep">·</span>
                        <span className="timeline-item-month">{item.month}</span>
                      </h4>
                      <p
                        className={`description-${item.id} timeline-item-desc`}
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
      </div>
    </section>
  );
}
