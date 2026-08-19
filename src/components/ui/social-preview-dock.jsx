import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import "./social-preview-dock.css";

const SPRING_MOVE = {
  type: "spring",
  stiffness: 620,
  damping: 46,
  mass: 0.8,
};
const SPRING_SIZE = {
  type: "spring",
  stiffness: 700,
  damping: 54,
  mass: 0.8,
};
const FADE = { duration: 0.16, ease: [0.22, 1, 0.36, 1] };

const MARGIN = 16;
const EMPTY_YEAR = 364;

const DEFAULT_BANNER_COLORS = {
  linkedin: ["#1e1b4b", "#3b82f6", "#00e676", "#1d4ed8"],
  whatsapp: ["#052e16", "#15803d", "#22c55e", "#10b981"],
  x: ["#18181b", "#fbbf24", "#ec4899", "#8b5cf6"],
};

const GITHUB_API = "https://api.github.com/users";
const CONTRIBUTIONS_API = "https://github-contributions-api.jogruber.de/v4";

export function useGithubLive(username, enabled) {
  const [live, setLive] = React.useState({});

  React.useEffect(() => {
    if (!enabled || !username) return;
    let alive = true;

    const json = (url) =>
      fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));

    Promise.allSettled([
      json(`${GITHUB_API}/${username}`),
      json(`${CONTRIBUTIONS_API}/${username}?y=last`),
    ]).then(([user, graph]) => {
      if (!alive) return;
      const next = {};
      if (user.status === "fulfilled") next.avatar = user.value?.avatar_url;
      if (graph.status === "fulfilled") {
        next.total = graph.value?.total?.lastYear;
        next.days = graph.value?.contributions;
      }
      setLive(next);
    });

    return () => {
      alive = false;
    };
  }, [username, enabled]);

  return live;
}

export const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const GithubMark = () => (
  <svg viewBox="0 0 256 250" fill="currentColor" aria-hidden="true">
    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0" />
  </svg>
);

export const LinkedinMark = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
    <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
  </svg>
);

export const WhatsAppMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const XMark = () => (
  <svg viewBox="0 0 251 256" fill="currentColor" aria-hidden="true">
    <path d="M149.079 108.399L242.33 0h-22.098l-80.97 94.12L74.59 0H0l97.796 142.328L0 256h22.1l85.507-99.395L175.905 256h74.59L149.073 108.399zM118.81 143.58l-9.909-14.172l-78.84-112.773h33.943l63.625 91.011l9.909 14.173l82.705 118.3H186.3l-67.49-96.533z" />
  </svg>
);

function formatDay(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function ContributionHeatmap({ days, label }) {
  const [tip, setTip] = React.useState(null);
  const gridRef = React.useRef(null);

  const trackTip = (e) => {
    const cell = e.target.closest("[data-day]");
    const day = cell && days[Number(cell.dataset.day)];
    if (!cell || !day?.date) return setTip(null);
    setTip({
      x: cell.offsetLeft + cell.offsetWidth / 2,
      y: cell.offsetTop,
      text: `${day.count} aporte${day.count === 1 ? "" : "s"} el ${formatDay(day.date)}`,
    });
  };

  return (
    <div className="spd-heatmap-container">
      <div
        ref={gridRef}
        role="img"
        aria-label={label}
        className="spd-heatmap-grid"
        onMouseMove={trackTip}
        onMouseLeave={() => setTip(null)}
      >
        {days.map((day, i) => (
          <span
            key={day.date || i}
            data-day={i}
            data-level={day.level}
            aria-hidden="true"
            className="spd-heatmap-cell"
          />
        ))}
      </div>
      {tip && (
        <div
          role="tooltip"
          style={{
            left: Math.min(
              Math.max(tip.x, 80),
              (gridRef.current?.offsetWidth ?? 0) - 80,
            ),
            top: tip.y,
          }}
          className="spd-tooltip"
        >
          {tip.text}
        </div>
      )}
    </div>
  );
}

export function GithubCard({ profile, live }) {
  const days = React.useMemo(() => {
    if (live.days?.length) return live.days;
    const levels = profile.levels ?? "";
    return Array.from({ length: levels.length || EMPTY_YEAR }, (_, i) => ({
      date: "",
      count: 0,
      level: Number(levels[i] ?? 0),
    }));
  }, [live.days, profile.levels]);

  const total = live.total ?? profile.contributions;
  const caption =
    total === undefined
      ? "Contribuciones en el último año"
      : `${total.toLocaleString()} contribuciones en el último año`;

  return (
    <div className="spd-card spd-github-card">
      <div className="spd-user-header">
        {profile.avatar || live.avatar ? (
          <img
            src={live.avatar ?? profile.avatar}
            alt=""
            className="spd-avatar"
          />
        ) : null}
        <div>
          <p className="spd-username">{profile.username}</p>
          <p className="spd-caption">{caption}</p>
        </div>
      </div>
      <ContributionHeatmap days={days} label={caption} />
    </div>
  );
}

export function Banner({ colors = [], className = "", style = {} }) {
  const gradient = colors.length
    ? `linear-gradient(135deg, ${colors.join(", ")})`
    : "linear-gradient(135deg, #1e1b4b, #3b82f6)";
  return (
    <div
      className={cn("spd-banner-wrap", className)}
      style={{ background: gradient, ...style }}
    />
  );
}

export function LinkedinCard({ profile, live, colors }) {
  return (
    <div className="spd-card spd-linkedin-card">
      <Banner colors={colors} className="spd-banner-linkedin" />
      <div className="spd-card-body">
        <img
          src={live?.avatar ?? profile?.avatar ?? "https://github.com/Alessander9.png"}
          alt=""
          className="spd-overlap-avatar"
        />
        <p className="spd-name">{profile?.name ?? "Luis Alexander Fernandez Paz"}</p>
        <div className="spd-card-row">
          <p className="spd-headline">
            {profile?.headline ?? "Desarrollador Full-Stack & Mobile"}
            <br />
            {profile?.location ?? "Lima, Perú"}
          </p>
          {profile?.links?.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              className="spd-action-btn"
            >
              Conectar
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function WhatsAppCard({ phone, profile }) {
  return (
    <div className="spd-card spd-linkedin-card" style={{ width: '280px' }}>
      <Banner colors={DEFAULT_BANNER_COLORS.whatsapp} className="spd-banner-linkedin" style={{ height: '44px' }} />
      <div className="spd-card-body" style={{ paddingTop: '0.75rem' }}>
        <p className="spd-name" style={{ marginTop: 0 }}>WhatsApp Directo</p>
        <p className="spd-headline" style={{ color: '#22c55e', fontWeight: 600 }}>
          {profile?.name ?? "Luis Alexander Fernandez Paz"}
        </p>
        <p className="spd-bio" style={{ marginTop: '0.4rem', fontSize: '0.82rem' }}>
          Escríbeme directamente para cotizaciones o consultas de proyectos.
        </p>
      </div>
    </div>
  );
}

export function XCard({ profile, live, colors }) {
  return (
    <div className="spd-card spd-x-card">
      {profile.cover ? (
        <div
          className="spd-banner-wrap spd-banner-x"
          style={{ backgroundImage: `url(${profile.cover})`, backgroundSize: 'cover' }}
        />
      ) : (
        <Banner colors={colors} className="spd-banner-x" />
      )}
      <div className="spd-card-body">
        <div className="spd-card-row" style={{ alignItems: 'flex-start' }}>
          <img
            src={live.avatar ?? profile.avatar}
            alt=""
            className="spd-overlap-avatar"
          />
          {profile.links?.x && (
            <a
              href={profile.links.x}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              className="spd-action-btn spd-action-btn-x"
            >
              Seguir
            </a>
          )}
        </div>
        {profile.xHandle && (
          <p className="spd-handle">@{profile.xHandle}</p>
        )}
        <p className="spd-bio">{profile.bio}</p>
      </div>
    </div>
  );
}

export function EmailCard({ email, profile }) {
  return (
    <div className="spd-card spd-linkedin-card" style={{ width: '280px' }}>
      <Banner colors={["#00e676", "#128C7E", "#0f172a"]} className="spd-banner-linkedin" style={{ height: '40px' }} />
      <div className="spd-card-body" style={{ paddingTop: '0.75rem' }}>
        <p className="spd-name" style={{ marginTop: 0 }}>Contacto directo</p>
        <p className="spd-headline" style={{ wordBreak: 'break-all', color: '#00e676', fontWeight: 600 }}>
          {email}
        </p>
        <p className="spd-bio" style={{ marginTop: '0.5rem' }}>
          Haz clic para copiar el correo o escribir un mensaje.
        </p>
      </div>
    </div>
  );
}

function defaultItems(profile, live, bannerColors, email) {
  const links = profile.links ?? {};
  return [
    email && {
      id: "email",
      label: "Email",
      href: `mailto:${email}`,
      icon: <MailIcon />,
      card: <EmailCard email={email} profile={profile} />,
      isEmail: true,
    },
    links.github && {
      id: "github",
      label: "GitHub",
      href: links.github,
      icon: <GithubMark />,
      card: <GithubCard profile={profile} live={live} />,
    },
    links.linkedin && {
      id: "linkedin",
      label: "LinkedIn",
      href: links.linkedin,
      icon: <LinkedinMark />,
      card: (
        <LinkedinCard
          profile={profile}
          live={live}
          colors={bannerColors.linkedin}
        />
      ),
    },
    links.x && {
      id: "x",
      label: "X (Twitter)",
      href: links.x,
      icon: <XMark />,
      card: <XCard profile={profile} live={live} colors={bannerColors.x} />,
    },
  ].filter(Boolean);
}

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function SocialPreviewDock({
  profile = {},
  items,
  email,
  live = true,
  bannerColors = DEFAULT_BANNER_COLORS,
  className = "",
  orientation = "vertical", // "vertical" for sidebar, "horizontal" for dock
}) {
  const github = useGithubLive(
    profile.username ?? "",
    live && !items && !!profile.username,
  );

  const links = React.useMemo(
    () => items ?? defaultItems(profile, github, bannerColors, email),
    [items, profile, github, bannerColors, email],
  );

  const wrapperRef = React.useRef(null);
  const panelRef = React.useRef(null);
  const btnRefs = React.useRef([]);

  const [active, setActive] = React.useState(null);
  const [box, setBox] = React.useState({ x: 0, y: 0, width: 0, height: 0 });
  const [emailCopied, setEmailCopied] = React.useState(false);
  const openRef = React.useRef(false);
  const appearing = !openRef.current;

  useIsoLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!active || !wrapper) return;
    const card = panelRef.current?.querySelector(
      `[data-card="${active.id}"]`,
    );
    const btn = btnRefs.current[active.index];
    if (!card || !btn) return;

    const width = card.offsetWidth;
    const height = card.offsetHeight;

    if (orientation === "vertical") {
      const btnRect = btn.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      
      const targetY = btnRect.top - wrapperRect.top + btnRect.height / 2 - height / 2;
      const clampedY = Math.max(
        -wrapperRect.top + MARGIN,
        Math.min(targetY, window.innerHeight - wrapperRect.top - height - MARGIN)
      );

      setBox({ x: 0, y: clampedY, width, height });
    } else {
      const originLeft = wrapper.getBoundingClientRect().left;
      const centered =
        btn.offsetLeft + btn.offsetWidth / 2 - width / 2;
      const x = Math.max(
        MARGIN - originLeft,
        Math.min(centered, window.innerWidth - MARGIN - width - originLeft),
      );

      setBox({ x, y: 0, width, height });
    }
    openRef.current = true;
  }, [active, github, orientation]);

  const hide = React.useCallback(() => {
    openRef.current = false;
    setActive(null);
  }, []);

  const handleLinkClick = (item, e) => {
    if (item.isEmail && email) {
      e.preventDefault();
      navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    }
  };

  const visible = active !== null && box.width > 0;

  return (
    <div
      ref={wrapperRef}
      onMouseLeave={hide}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) hide();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") hide();
      }}
      className={cn(
        "social-preview-dock-wrapper",
        orientation === "vertical" ? "spd-sidebar-mode" : "spd-dock-mode",
        className
      )}
    >
      <div
        style={{ pointerEvents: visible ? "auto" : "none" }}
        className={cn(
          "spd-panel-container",
          orientation === "vertical" ? "spd-panel-right" : "spd-panel-top"
        )}
      >
        <motion.div
          ref={panelRef}
          initial={false}
          animate={{
            x: orientation === "vertical" ? 0 : box.x,
            y: orientation === "vertical" ? box.y : 0,
            width: box.width,
            height: box.height,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            opacity: FADE,
            x: appearing ? { duration: 0 } : SPRING_MOVE,
            y: appearing ? { duration: 0 } : SPRING_MOVE,
            width: appearing ? { duration: 0 } : SPRING_SIZE,
            height: appearing ? { duration: 0 } : SPRING_SIZE,
          }}
          className="spd-panel"
        >
          <AnimatePresence initial={false}>
            {active && (
              <motion.div
                key={active.id}
                data-card={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={FADE}
                className="spd-card-content"
              >
                {links[active.index]?.card}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div
        className={cn(
          "spd-dock-row",
          orientation === "vertical" ? "spd-dock-vertical" : "spd-dock-horizontal"
        )}
      >
        {links.map((item, i) => (
          <a
            key={item.id}
            ref={(el) => {
              btnRefs.current[i] = el;
            }}
            href={item.href}
            target={item.isEmail ? undefined : "_blank"}
            rel={item.isEmail ? undefined : "noopener noreferrer"}
            aria-label={item.label}
            onClick={(e) => handleLinkClick(item, e)}
            onMouseEnter={() => setActive({ index: i, id: item.id })}
            onFocus={() => setActive({ index: i, id: item.id })}
            className="spd-dock-link"
            title={item.isEmail ? (emailCopied ? "¡Copiado!" : "Copiar email") : item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialPreviewDock;
