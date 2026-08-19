import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'motion/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './BentoGrid.css'

/* ── SVG Icons ── */
const icons = {
  user: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  brain: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
    </svg>
  ),
  tool: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  heart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  rocket: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
}

/* ── Card Data: 5 perfectly fitted Bento Cards (2x4 Grid Block) ── */
const cards = [
  {
    id: 'featured-about',
    span: 'full-tall',
    glow: 'mixed',
    gradient: 'dark',
    icon: null,
    title: null,
    featured: true,
    featuredTitle: (
      <>
        Luis Alexander <span className="highlight-green">Fernandez Paz</span>
        <br />
        <span className="highlight-violet">Desarrollador de Software</span>
      </>
    ),
    desc: 'Apasionado por transformar requerimientos complejos en software intuitivo, robusto y escalable. Experiencia en desarrollo web moderno, sistemas empresariales, APIs seguras y apps móviles.',
    techs: ['React', 'Angular', 'TypeScript', 'Spring Boot', 'C# .NET', 'Kotlin', 'MySQL', 'PostgreSQL'],
  },
  {
    id: 'tech-profile',
    icon: icons.code,
    iconColor: 'green',
    glow: 'green',
    gradient: 'green',
    title: 'Perfil Técnico',
    desc: 'Arquitecturas limpias, principios SOLID, diseño de bases de datos relacionales y desarrollo modular.',
    stats: [
      { value: '15+', label: 'Proyectos realizados' },
      { value: '4+', label: 'Años programando' },
    ],
  },
  {
    id: 'soft-skills',
    icon: icons.brain,
    iconColor: 'violet',
    glow: 'violet',
    gradient: 'violet',
    title: 'Habilidades Blandas',
    desc: 'Comunicación asertiva, pensamiento analítico, adaptabilidad rápida y trabajo en equipo colaborativo.',
    cta: 'Conocer más',
  },
  {
    id: 'tools-stack',
    icon: icons.tool,
    iconColor: 'cyan',
    glow: 'green',
    gradient: 'green',
    title: 'Herramientas Diarias',
    desc: 'Git, GitHub, Docker, Postman, Firebase, AWS S3, Make, Figma, VS Code y Linux/Windows.',
    cta: 'Ver herramientas',
  },
  {
    id: 'philosophy',
    icon: icons.heart,
    iconColor: 'rose',
    glow: 'violet',
    gradient: 'violet',
    title: 'Mi Filosofía',
    desc: 'La tecnología debe ser simple para el usuario y rentable para el negocio. Tú me cuentas la idea, yo me encargo de todo el código.',
    cta: 'Contáctame',
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: 0.06 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Glow overlay layer */}
      <motion.div
        className="bento-card-glow-layer"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Corner accent */}
      <motion.div
        className={`bento-card-corner bento-card-corner-${card.iconColor || card.glow}`}
        animate={isHovered ? { scale: 1 } : { scale: 0.5 }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
      />

      <div className="bento-card-content">
        {/* Featured card */}
        {card.featured ? (
          <>
            <motion.div
              className="bento-card-icon bento-card-icon-green"
              style={{ marginBottom: '1rem' }}
              animate={isHovered ? {
                rotate: [0, -5, 5, -3, 0],
                scale: 1.12,
              } : {
                rotate: 0,
                scale: 1,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
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
                    y: -2,
                    opacity: 1,
                    transition: { delay: 0.02 * i, duration: 0.25 },
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
                scale: 1.1,
                rotate: [0, -3, 3, -2, 0],
              } : {
                scale: 1,
                rotate: 0,
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <motion.h4
              className="bento-card-title"
              animate={isHovered ? {
                letterSpacing: '0.01em',
              } : {
                letterSpacing: '-0.01em',
              }}
              transition={{ duration: 0.25 }}
            >
              {card.title}
            </motion.h4>

            {/* Description */}
            <motion.p
              className="bento-card-desc"
              animate={isHovered ? {
                color: 'rgba(243, 244, 246, 0.85)',
              } : {
                color: 'var(--text-muted)',
              }}
              transition={{ duration: 0.3 }}
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
                    animate={isHovered ? { scale: 1.04 } : { scale: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="bento-stat-value">
                      <AnimatedCounter value={stat.value} suffix={typeof stat.value === 'string' && stat.value.includes('%') ? '%' : ''} />
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
                animate={isHovered ? { gap: '0.65rem' } : { gap: '0.45rem' }}
                transition={{ duration: 0.25 }}
              >
                {card.cta}
                <motion.svg
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  animate={isHovered ? { x: 3 } : { x: 0 }}
                  transition={{ duration: 0.25 }}
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
    <section id="sobre-mi" className="bento-section">
      <div className="container">
        <div ref={ref} className={`bento-header${visible ? ' reveal visible' : ' reveal'}`}>
          <h2 className="section-title">
            Sobre <span className="text-gradient">mí</span>
          </h2>
          <p className="section-subtitle">
            Conoce mi perfil técnico, trayectoria, metodología de trabajo y habilidades clave.
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
