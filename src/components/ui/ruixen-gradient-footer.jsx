import {
  useEffect,
  useId,
  useRef,
  useState,
  useCallback,
} from "react";
import { gsap } from "gsap";

const VBW = 1271;
const VBH = 599;

const RUIXEN_STOPS = [
  { offset: 0, color: "#340B05" },
  { offset: 0.1827, color: "#0358F7" },
  { offset: 0.2837, color: "#5092C7" },
  { offset: 0.4135, color: "#E1ECFE" },
  { offset: 0.5866, color: "#FFD400" },
  { offset: 0.6827, color: "#FA3D1D" },
  { offset: 0.8029, color: "#FD02F5" },
  { offset: 1, color: "#FFC0FD00" },
];

function bellHeights(n, peak, valley) {
  const out = [];
  const mid = (n - 1) / 2;
  for (let i = 0; i < n; i++) {
    const t = mid === 0 ? 0 : Math.abs(i - mid) / mid;
    const eased = 1 - Math.pow(t, 1.24);
    out.push(peak * VBH * (valley + (1 - valley) * eased));
  }
  return out;
}

const clamp01 = (v) => Math.max(0, Math.min(1, v));

export function RuixenGradientFooter({
  children,
  gradientHeight = "85px",
  minReveal = 0.15,
  bars = 13,
  blur = 14,
  peak = 0.7,
  valley = 0.45,
  stops = RUIXEN_STOPS,
  className = "",
  style = {},
  retractRatio = 0.38,
}) {
  const uid = useId().replace(/:/g, "");
  const bandRef = useRef(null);
  const svgRef = useRef(null);
  const rectsRef = useRef([]);
  const footerRef = useRef(null);

  const isRetractedRef = useRef(false);
  const retractTimelineRef = useRef(null);
  const idleWaveRef = useRef(null);
  const [retractedClass, setRetractedClass] = useState(false);

  // Trigger the elastic repulsion & energetic retractile bounce
  const triggerRetraction = useCallback(() => {
    if (isRetractedRef.current || !bandRef.current) return;
    isRetractedRef.current = true;
    setRetractedClass(true);

    if (retractTimelineRef.current) retractTimelineRef.current.kill();
    if (idleWaveRef.current) idleWaveRef.current.kill();

    const validRects = rectsRef.current.filter(Boolean);
    const topGrid = footerRef.current?.querySelector(".footer-top-grid");
    const bottomBar = footerRef.current?.querySelector(".footer-bottom-bar");
    const whatsappBtn = document.querySelector(".whatsapp-btn");
    const socialDock = document.querySelector(".social-sidebar-fixed") || document.querySelector(".spd-dock-vertical");

    const tl = gsap.timeline({
      onComplete: () => {
        // Idle breathing wave when docked
        if (bandRef.current && isRetractedRef.current) {
          idleWaveRef.current = gsap.to(validRects, {
            scaleY: (i) => 0.85 + Math.sin(i * 0.8) * 0.18,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
              each: 0.05,
              from: "center",
            },
          });
        }
      },
    });
    retractTimelineRef.current = tl;

    // 1. Repulsion Peak: Wave rises, text lifts, WhatsApp pops UP with energetic bounce
    tl.to(bandRef.current, {
      scaleY: 1.1,
      duration: 0.25,
      ease: "power2.out",
    })
    .to(
      topGrid,
      {
        y: -40,
        duration: 0.25,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      bottomBar,
      {
        y: -25,
        duration: 0.25,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      socialDock,
      {
        y: -28,
        scale: 1.04,
        duration: 0.25,
        ease: "power2.out",
      },
      "<"
    )
    // WhatsApp High Jump Pop
    .to(
      whatsappBtn,
      {
        y: -50,
        scale: 1.24,
        rotation: -12,
        boxShadow: "0 0 35px rgba(37, 211, 102, 0.8), 0 10px 25px rgba(0, 0, 0, 0.4)",
        duration: 0.28,
        ease: "back.out(2)",
      },
      "<"
    )
    // 2. Retractile Drop: Wave collapses, text and elements drop DOWN
    .to(
      topGrid,
      {
        y: 12,
        duration: 0.35,
        ease: "power2.in",
      }
    )
    .to(
      bottomBar,
      {
        y: 8,
        duration: 0.35,
        ease: "power2.in",
      },
      "<"
    )
    .to(
      socialDock,
      {
        y: 16,
        scale: 0.96,
        duration: 0.35,
        ease: "power2.in",
      },
      "<"
    )
    // WhatsApp Squash Dip
    .to(
      whatsappBtn,
      {
        y: 28,
        scale: 0.88,
        rotation: 8,
        duration: 0.32,
        ease: "power3.in",
      },
      "<"
    )
    .to(
      bandRef.current,
      {
        scaleY: retractRatio,
        duration: 1.3,
        ease: "elastic.out(1.2, 0.45)",
      },
      "-=0.1"
    )
    // 3. Elastic Spring Settle: Text & Elements settle softly, WhatsApp does juicy spring jiggle
    .to(
      [topGrid, bottomBar],
      {
        y: 0,
        duration: 1.3,
        ease: "elastic.out(1.2, 0.4)",
        stagger: 0.03,
      },
      "<"
    )
    .to(
      socialDock,
      {
        y: 0,
        scale: 1,
        duration: 1.4,
        ease: "elastic.out(1.2, 0.4)",
      },
      "<"
    )
    // WhatsApp Juicy Elastic Bounce
    .to(
      whatsappBtn,
      {
        y: 0,
        scale: 1,
        rotation: 0,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(37, 211, 102, 0.3)",
        duration: 1.6,
        ease: "elastic.out(1.5, 0.32)",
      },
      "<"
    )
    // 4. Staggered harmonic bounce on color bars
    .to(
      validRects,
      {
        scaleY: 0.7,
        transformOrigin: "bottom center",
        duration: 1.2,
        ease: "elastic.out(1.2, 0.45)",
        stagger: {
          each: 0.03,
          from: "center",
        },
      },
      "-=1.3"
    );
  }, [retractRatio]);

  // Reset repulsion and retraction when scrolling back up
  const resetRetraction = useCallback((currentT) => {
    if (!isRetractedRef.current) return;
    isRetractedRef.current = false;
    setRetractedClass(false);

    if (retractTimelineRef.current) retractTimelineRef.current.kill();
    if (idleWaveRef.current) idleWaveRef.current.kill();

    const topGrid = footerRef.current?.querySelector(".footer-top-grid");
    const bottomBar = footerRef.current?.querySelector(".footer-bottom-bar");
    const whatsappBtn = document.querySelector(".whatsapp-btn");
    const socialDock = document.querySelector(".social-sidebar-fixed") || document.querySelector(".spd-dock-vertical");

    if (topGrid && bottomBar) {
      gsap.to(topGrid, {
        y: -35 * currentT,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(bottomBar, {
        y: -20 * currentT,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (whatsappBtn) {
      gsap.to(whatsappBtn, {
        y: 0,
        scale: 1,
        rotation: 0,
        boxShadow: "",
        duration: 0.35,
        ease: "power2.out",
      });
    }

    if (socialDock) {
      gsap.to(socialDock, {
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power2.out",
      });
    }

    if (bandRef.current) {
      gsap.to(bandRef.current, {
        scaleY: minReveal + (1 - minReveal) * currentT,
        duration: 0.35,
        ease: "power2.out",
      });
    }

    const validRects = rectsRef.current.filter(Boolean);
    if (validRects.length > 0) {
      gsap.to(validRects, {
        scaleY: 1,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  }, [minReveal]);

  useEffect(() => {
    const el = bandRef.current;
    if (!el) return;
    const doc = el.ownerDocument;
    const win = doc.defaultView ?? window;

    const measure = () => {
      const h = el.offsetHeight || 1;
      const left =
        doc.documentElement.scrollHeight - win.innerHeight - win.scrollY;
      const t = clamp01((h - left) / h);

      // Trigger recoil when reaching the bottom (t >= 0.94)
      if (t >= 0.94 && !isRetractedRef.current) {
        triggerRetraction();
      } else if (t < 0.72 && isRetractedRef.current) {
        resetRetraction(t);
      } else if (!isRetractedRef.current) {
        // Natural scroll tracking: wave rises & physically repels text upwards
        gsap.to(el, {
          scaleY: minReveal + (1 - minReveal) * t,
          duration: 0.15,
          ease: "power1.out",
          overwrite: "auto",
        });

        const topGrid = footerRef.current?.querySelector(".footer-top-grid");
        const bottomBar = footerRef.current?.querySelector(".footer-bottom-bar");
        const whatsappBtn = document.querySelector(".whatsapp-btn");
        const socialDock = document.querySelector(".social-sidebar-fixed") || document.querySelector(".spd-dock-vertical");

        if (topGrid) {
          gsap.to(topGrid, {
            y: -35 * t,
            duration: 0.15,
            ease: "power1.out",
            overwrite: "auto",
          });
        }
        if (bottomBar) {
          gsap.to(bottomBar, {
            y: -20 * t,
            duration: 0.15,
            ease: "power1.out",
            overwrite: "auto",
          });
        }

        // Lift floating elements visibly when approaching footer
        if (t > 0.2) {
          const factor = (t - 0.2) / 0.8;
          if (whatsappBtn) {
            gsap.to(whatsappBtn, {
              y: -32 * factor,
              duration: 0.15,
              ease: "power1.out",
              overwrite: "auto",
            });
          }
          if (socialDock) {
            gsap.to(socialDock, {
              y: -20 * factor,
              duration: 0.15,
              ease: "power1.out",
              overwrite: "auto",
            });
          }
        }
      }
    };

    measure();
    win.addEventListener("scroll", measure, { passive: true });
    win.addEventListener("resize", measure, { passive: true });
    return () => {
      win.removeEventListener("scroll", measure);
      win.removeEventListener("resize", measure);
      if (retractTimelineRef.current) retractTimelineRef.current.kill();
      if (idleWaveRef.current) idleWaveRef.current.kill();
    };
  }, [minReveal, triggerRetraction, resetRetraction]);

  const colW = VBW / bars;

  return (
    <footer
      ref={footerRef}
      className={`ruixen-footer-root ${className} ${retractedClass ? "footer-retracted" : ""}`}
      style={{ ...style }}
    >
      {/* Retracted Horizon Beam line */}
      <div className="footer-beam-accent" aria-hidden="true" />

      {children}

      <div
        ref={bandRef}
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: gradientHeight,
          pointerEvents: "none",
          transformOrigin: "bottom",
          transform: `scaleY(${minReveal})`,
          willChange: "transform",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <svg
          ref={svgRef}
          style={{ height: "100%", width: "100%", display: "block" }}
          viewBox={`0 0 ${VBW} ${VBH}`}
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`grad-${uid}`} x1="0" y1="1" x2="0" y2="0">
              {stops.map((s, i) => (
                <stop key={i} offset={s.offset} stopColor={s.color} />
              ))}
            </linearGradient>
            <filter
              id={`blur-${uid}`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation={blur} />
            </filter>
          </defs>
          {bellHeights(bars, peak, valley).map((barH, i) => (
            <g key={i} filter={`url(#blur-${uid})`}>
              <rect
                ref={(node) => {
                  rectsRef.current[i] = node;
                }}
                x={i * colW}
                y={VBH - barH}
                width={colW * 1.23}
                height={barH}
                fill={`url(#grad-${uid})`}
              />
            </g>
          ))}
        </svg>
      </div>
    </footer>
  );
}

export default RuixenGradientFooter;
