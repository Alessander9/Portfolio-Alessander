import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RuixenGradientFooter } from './ui/ruixen-gradient-footer'
import {
  GithubCard,
  LinkedinCard,
  WhatsAppCard,
  EmailCard,
  useGithubLive,
} from './ui/social-preview-dock'
import './Footer.css'

// Paleta de colores de Luis Alexander:
// Fondo oscuro (#0B0B10) -> Violeta (#7C3AED) -> Azul eléctrico (#2563EB) -> Cian (#06B6D4) -> Verde Neón (#00E676) -> Mint transparente
const PORTFOLIO_GRADIENT_STOPS = [
  { offset: 0, color: "#0B0B10" },
  { offset: 0.18, color: "#190e38" },
  { offset: 0.35, color: "#7C3AED" },
  { offset: 0.52, color: "#2563EB" },
  { offset: 0.68, color: "#06B6D4" },
  { offset: 0.84, color: "#00E676" },
  { offset: 0.94, color: "#6ee7b7" },
  { offset: 1, color: "rgba(0, 230, 118, 0)" },
]

const PROFILE_DATA = {
  username: "Alessander9",
  name: "Luis Alexander Fernandez Paz",
  headline: "Desarrollador Full-Stack & Mobile",
  location: "Lima, Perú",
  bio: "Desarrollo soluciones web, sistemas y apps de alto impacto.",
  avatar: "https://github.com/Alessander9.png",
  links: {
    github: "https://github.com/Alessander9",
    linkedin: "https://www.linkedin.com/in/alexanderfp91/",
    whatsapp: "https://wa.me/51999999999/?text=Hola%20Luis%2C%20tengo%20un%20proyecto%20en%20mente",
  },
}

const SPRING_MOVE = { type: "spring", stiffness: 620, damping: 46, mass: 0.8 }
const SPRING_SIZE = { type: "spring", stiffness: 700, damping: 54, mass: 0.8 }
const FADE = { duration: 0.16, ease: [0.22, 1, 0.36, 1] }

function FooterConnectLinks() {
  const githubLive = useGithubLive("Alessander9", true)
  const [active, setActive] = useState(null)
  const [box, setBox] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const [emailCopied, setEmailCopied] = useState(false)
  const openRef = useRef(false)
  const appearing = !openRef.current

  const wrapRef = useRef(null)
  const panelRef = useRef(null)
  const linkRefs = useRef([])

  const items = [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/Alessander9",
      card: <GithubCard profile={PROFILE_DATA} live={githubLive} />,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alexanderfp91/",
      card: (
        <LinkedinCard
          profile={PROFILE_DATA}
          live={githubLive}
          colors={["#1e1b4b", "#3b82f6", "#00e676", "#1d4ed8"]}
        />
      ),
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/51999999999/?text=Hola%20Luis%2C%20tengo%20un%20proyecto%20en%20mente",
      card: <WhatsAppCard phone="51999999999" profile={PROFILE_DATA} />,
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:alessander991@gmail.com",
      isEmail: true,
      card: <EmailCard email="alessander991@gmail.com" profile={PROFILE_DATA} />,
    },
  ]

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    if (!active || !wrap) return
    const card = panelRef.current?.querySelector(`[data-card="${active.id}"]`)
    const linkEl = linkRefs.current[active.index]
    if (!card || !linkEl) return

    const cardWidth = card.offsetWidth
    const cardHeight = card.offsetHeight
    const wrapRect = wrap.getBoundingClientRect()
    const linkRect = linkEl.getBoundingClientRect()

    // Align card vertically centered relative to hovered link, placed to the LEFT (or right on mobile)
    const targetY = linkRect.top - wrapRect.top + linkRect.height / 2 - cardHeight / 2
    const targetX = -cardWidth - 16 // float to the left of the column

    setBox({
      x: targetX,
      y: targetY,
      width: cardWidth,
      height: cardHeight,
    })
    openRef.current = true
  }, [active, githubLive])

  const hide = useCallback(() => {
    openRef.current = false
    setActive(null)
  }, [])

  const handleLinkClick = (item, e) => {
    if (item.isEmail) {
      e.preventDefault()
      navigator.clipboard.writeText("alessander991@gmail.com")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2500)
    }
  }

  const visible = active !== null && box.width > 0

  return (
    <div
      ref={wrapRef}
      className="footer-connect-wrap"
      onMouseLeave={hide}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) hide()
      }}
    >
      {/* Floating Preview Card Container */}
      <div
        className="footer-preview-panel-anchor"
        style={{ pointerEvents: visible ? 'auto' : 'none' }}
      >
        <motion.div
          ref={panelRef}
          initial={false}
          animate={{
            x: box.x,
            y: box.y,
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
          className="spd-panel footer-spd-panel"
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
                {items[active.index]?.card}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation List */}
      <ul className="footer-nav-list">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              ref={(el) => {
                linkRefs.current[i] = el
              }}
              href={item.href}
              target={item.isEmail ? undefined : "_blank"}
              rel={item.isEmail ? undefined : "noopener noreferrer"}
              onClick={(e) => handleLinkClick(item, e)}
              onMouseEnter={() => setActive({ index: i, id: item.id })}
              onFocus={() => setActive({ index: i, id: item.id })}
              className="footer-social-hover-link"
            >
              {item.label}
              {item.isEmail && emailCopied && (
                <span className="footer-email-copied-tag">¡Copiado!</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <RuixenGradientFooter
      gradientHeight="85px"
      minReveal={0.15}
      bars={13}
      blur={14}
      stops={PORTFOLIO_GRADIENT_STOPS}
      className="ruixen-footer-root"
    >
      <div className="footer-inner-container">
        <div className="footer-top-grid">
          {/* Brand col */}
          <div className="footer-brand-col">
            <a href="#inicio" className="footer-logo">
              Luis<span className="footer-logo-dot">.</span>
            </a>
            <p className="footer-bio">
              Desarrollador de software especializado en crear sitios web modernos, sistemas y aplicaciones móviles de alto rendimiento.
            </p>
            <div className="footer-status-pill">
              <span className="footer-status-dot" />
              Disponible para proyectos freelance y tiempo completo
            </div>
          </div>

          {/* Navigation col */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Navegación</h4>
            <ul className="footer-nav-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#proyectos-web">Sitios web</a></li>
              {/* <li><a href="#skills">Habilidades</a></li> */}
              <li><a href="#sobre-mi">Sobre mí</a></li>
            </ul>
          </div>

          {/* Connect col with Floating Social Preview Dock Effect */}
          <div className="footer-nav-col footer-connect-col">
            <h4 className="footer-col-heading">Conectar</h4>
            <FooterConnectLinks />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>
            © {currentYear} Luis Alexander Fernandez Paz. Hecho con <span className="footer-heart">♥</span>
          </p>
          <div className="footer-location-tag">
            <span>Lima, Perú</span>
            <span>•</span>
            <span>Remoto disponible</span>
          </div>
        </div>
      </div>
    </RuixenGradientFooter>
  )
}
