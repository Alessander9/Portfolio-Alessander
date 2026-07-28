import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'motion/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './BentoGrid.css'

/* ── SVG Icons ── */
const icons = {
  web: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  mobile: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  backend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  database: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  design: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </svg>
  ),
  cloud: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
    </svg>
  ),
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  lightning: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
}

/* ── Card Data ── */
const cards = [
  {
    id: 'featured',
    span: 'full-tall',
    glow: 'mixed',
    gradient: 'dark',
    icon: null,
    title: null,
    featured: true,
    featuredTitle: (
      <>
        Construyo soluciones <span className="highlight-green">digitales</span>{' '}
        que impulsan tu <span className="highlight-violet">negocio</span>
      </>
    ),
    desc: 'Cada proyecto comienza con una idea clara y termina con un producto funcional, optimizado y listo para crecer contigo.',
    techs: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'React Native'],
  },
  {
    id: 'web',
    icon: icons.web,
    iconColor: 'green',
    glow: 'green',
    gradient: 'green',
    title: 'Desarrollo Web',
    desc: 'Sitios y aplicaciones web modernas, rápidas y responsivas con las mejores tecnologías del mercado.',
    cta: 'Ver proyectos',
  },
  {
    id: 'mobile',
    icon: icons.mobile,
    iconColor: 'violet',
    glow: 'violet',
    gradient: 'violet',
    title: 'Apps Móviles',
    desc: 'Aplicaciones nativas y multiplataforma para iOS y Android con React Native y Expo.',
    cta: 'Saber más',
  },
  {
    id: 'backend',
    icon: icons.backend,
    iconColor: 'cyan',
    glow: 'green',
    gradient: 'green',
    title: 'APIs y Backend',
    desc: 'APIs escalables y seguras con Node.js, Express, y bases de datos SQL y NoSQL.',
    stats: [
      { value: '15+', label: 'APIs creadas' },
      { value: '99.9%', label: 'Uptime' },
    ],
  },
  {
    id: 'database',
    icon: icons.database,
    iconColor: 'amber',
    glow: 'violet',
    gradient: 'violet',
    title: 'Bases de Datos',
    desc: 'Diseño, optimización y administración de bases de datos relacionales y no relacionales.',
    cta: 'Ver stack',
  },
  {
    id: 'design',
    icon: icons.design,
    iconColor: 'rose',
    glow: 'mixed',
    gradient: 'dark',
    title: 'UI / UX Design',
    desc: 'Interfaces centradas en el usuario con diseños modernos, accesibles y atractivos.',
    cta: 'Ver diseño',
  },
  {
    id: 'devops',
    icon: icons.cloud,
    iconColor: 'green',
    glow: 'green',
    gradient: 'green',
    title: 'Cloud & DevOps',
    desc: 'Despliegues automatizados, infraestructura en la nube y CI/CD con Docker y AWS.',
    cta: 'Ver proyectos',
  },
]

/* ── Animated Counter ── */
function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.round(v))
  const [display, setDisplay] = useState('0')

  const numericValue = parseFloat(value)
  const isNumeric = !isNaN(numericValue)

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(value)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(motionValue, numericValue, {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          })
          observer.unobserve(el)
          return () => controls.stop()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [isNumeric, numericValue, motionValue, value])

  useEffect(() => {
    if (!isNumeric) return
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplay(`${latest}${suffix}`)
    })
    return unsubscribe
  }, [isNumeric, rounded, suffix])

  return <span ref={ref}>{display}</span>
}

/* ── Individual Card ── */
function BentoCard({ card, index }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    cardRef.current?.style.setProperty('--mouse-x', `${x}%`)
    cardRef.current?.style.setProperty('--mouse-y', `${y}%`)
  }

  const spanClass = card.span === 'full-tall'
    ? 'bento-card--full-tall'
    : card.span === '2'
    ? 'bento-card--span-2'
    : ''

  const isTall = card.span === 'full-tall' || card.span === 'tall'

  return (
    <motion.div
      ref={cardRef}
      className={[
        'bento-card',
        `bento-card-gradient-${card.gradient}`,
        `bento-card-glow-${card.glow}`,
        spanClass,
        isTall ? 'bento-card--tall' : '',
      ].filter(Boolean).join(' ')}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: 0.08 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Glow overlay layer (animated border shimmer) */}
      <motion.div
        className="bento-card-glow-layer"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Corner accent */}
      <motion.div
        className={`bento-card-corner bento-card-corner-${card.iconColor || card.glow}`}
        animate={isHovered ? { scale: 1 } : { scale: 0.5 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      />

      <div className="bento-card-content">
        {/* Featured card (large hero card) */}
        {card.featured ? (
          <>
            <motion.div
              className="bento-card-icon bento-card-icon-green"
              style={{ marginBottom: '1.5rem' }}
              animate={isHovered ? {
                rotate: [0, -5, 5, -3, 0],
                scale: 1.15,
              } : {
                rotate: 0,
                scale: 1,
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {icons.rocket}
            </motion.div>
            <h3 className="bento-card-featured-title">{card.featuredTitle}</h3>
            <p className="bento-card-featured-desc">{card.desc}</p>
            <div className="bento-tech-list">
              {card.techs.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="bento-tech-tag"
                  initial={{ opacity: 1, y: 0 }}
                  animate={isHovered ? {
                    y: -3,
                    opacity: 1,
                    transition: { delay: 0.03 * i, duration: 0.3 },
                  } : {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Icon with hover wobble */}
            <motion.div
              className={`bento-card-icon bento-card-icon-${card.iconColor}`}
              animate={isHovered ? {
                scale: 1.12,
                rotate: [0, -3, 3, -2, 0],
              } : {
                scale: 1,
                rotate: 0,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {card.icon}
            </motion.div>

            {/* Title with letter-spacing animation */}
            <motion.h4
              className="bento-card-title"
              animate={isHovered ? {
                letterSpacing: '0.02em',
              } : {
                letterSpacing: '-0.01em',
              }}
              transition={{ duration: 0.3 }}
            >
              {card.title}
            </motion.h4>

            {/* Description */}
            <motion.p
              className="bento-card-desc"
              animate={isHovered ? {
                color: 'rgba(243, 244, 246, 0.8)',
              } : {
                color: 'var(--text-muted)',
              }}
              transition={{ duration: 0.4 }}
            >
              {card.desc}
            </motion.p>

            {/* Stats (if any) */}
            {card.stats && (
              <div className="bento-stats">
                {card.stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="bento-stat"
                    animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bento-stat-value">
                      <AnimatedCounter value={stat.value}                  suffix={typeof stat.value === 'string' && stat.value.includes('%') ? '%' : ''} />
                    </div>
                    <div className="bento-stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTA (if any) */}
            {card.cta && (
              <motion.span
                className="bento-card-cta"
                animate={isHovered ? { gap: '0.75rem' } : { gap: '0.5rem' }}
                transition={{ duration: 0.3 }}
              >
                {card.cta}
                <motion.svg
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  animate={isHovered ? { x: 4 } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </motion.svg>
              </motion.span>
            )}
          </>
        )}
      </div>
    </motion.div>
  )
}

/* ── BentoGrid Section ── */
export default function BentoGrid() {
  const [ref, visible] = useScrollReveal(0.08)

  return (
    <section id="servicios" className="bento-section">
      <div className="container">
        <div ref={ref} className={`bento-header${visible ? ' reveal visible' : ' reveal'}`}>
          <h2 className="section-title">
            ¿Qué puedo <span className="text-gradient">hacer</span> por ti?
          </h2>
          <p className="section-subtitle">
            Transformo tus ideas en soluciones digitales funcionales, desde la idea hasta el despliegue.
          </p>
        </div>

        <div className="bento-grid">
          {cards.map((card, i) => (
            <BentoCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
