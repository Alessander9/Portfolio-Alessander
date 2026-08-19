import React, { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { cn } from '../../lib/utils'
import './case-study-flip-stack.css'

function FlipCard({
  item,
  index,
  total,
  progress,
  reduceMotion,
}) {
  const segment = 1 / Math.max(total, 1)
  const start = index * segment
  const end = Math.min(start + segment, 1)
  const entryStart = Math.max(0, start - segment)
  const entryEnd =
    index === 0
      ? 0.0001
      : Math.min(start, entryStart + segment * 0.7)
  const exitStart = start
  const exitEnd = end
  const stackedCardGap = Math.min(24, 72 / Math.max(total - 1, 1))
  const stackedOffset = index * stackedCardGap
  const restingOffset = Math.min(index * 12, 34)
  const restingScale = 1 - Math.min(index * 0.012, 0.035)

  const exitYPercent = useTransform(
    progress,
    [exitStart, exitEnd],
    reduceMotion ? [0, 0] : [0, -118]
  )
  const exitStackOffset = useTransform(
    progress,
    [exitStart, exitEnd],
    reduceMotion ? [0, 0] : [0, stackedOffset]
  )
  const exitY = useMotionTemplate`calc(${exitYPercent}% + ${exitStackOffset}px)`
  const rotateX = useTransform(
    progress,
    [exitStart, exitEnd],
    reduceMotion ? [0, 0] : [0, 22]
  )
  const opacity = useTransform(
    progress,
    [exitStart, exitEnd],
    reduceMotion ? [1, 0] : [1, 1]
  )
  const entryScale = useTransform(
    progress,
    [entryStart, entryEnd],
    index === 0 ? [1, 1] : [restingScale, 1]
  )
  const entryY = useTransform(
    progress,
    [entryStart, entryEnd],
    index === 0 ? [0, 0] : [restingOffset, 0]
  )

  const domain = item.url ? item.url.replace(/^https?:\/\//, '').replace(/\/.*$/, '') : ''

  return (
    <motion.article
      className="flip-stack-article"
      style={{
        y: exitY,
        rotateX,
        opacity,
        zIndex: total - index,
        transformOrigin: '50% 50%',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      <motion.div
        className="flip-card-body"
        style={{
          backgroundColor: item.background || '#13131c',
          color: item.foreground ?? '#ffffff',
          y: entryY,
          scale: entryScale,
          transformOrigin: '50% 100%',
        }}
      >
        {/* Left Column: Case details */}
        <div className="flip-card-content">
          <div className="flip-card-top-row">
            <span className="flip-card-number">
              {item.number ?? String(index + 1).padStart(2, '0')}
            </span>
            {item.eyebrow && (
              <span className="flip-card-badge">
                <span className="flip-card-dot" />
                {item.eyebrow}
              </span>
            )}
          </div>

          <div className="flip-card-main-info">
            <h3 className="flip-card-title">
              {item.title}
            </h3>
            <p className="flip-card-desc">
              {item.description}
            </p>

            {(item.url || item.slug) && (
              <div className="flip-card-actions">
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flip-card-cta-btn"
                  >
                    <span>Visitar sitio web</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
                {item.slug && (
                  <a
                    href={`#/proyecto/${item.slug}`}
                    className="flip-card-cta-btn flip-card-cta-outline"
                  >
                    <span>Ver caso de estudio</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Screenshot Browser Mockup */}
        <div className="flip-card-mockup-wrapper">
          <div className="flip-browser-bar">
            <span className="flip-browser-dot dot-red" />
            <span className="flip-browser-dot dot-yellow" />
            <span className="flip-browser-dot dot-green" />
            <span className="flip-browser-url">{domain}</span>
          </div>
          <div className="flip-card-image-box">
            <img
              src={item.image}
              alt={item.imageAlt || item.title}
              className="flip-card-img"
              loading={index < 2 ? 'eager' : 'lazy'}
              draggable={false}
            />
            <div className="flip-image-glow-overlay" />
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

export function CaseStudyFlipStack({
  items = [],
  className = '',
  hint = 'Desliza hacia abajo para explorar',
  heading = 'Sitios Web en Producción.',
  endLabel = '¿Tienes un proyecto en mente?',
}) {
  const stackRef = useRef(null)
  const reduceMotion = useReducedMotion() ?? false
  const safeItems = items.length > 0 ? items : []
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    mass: 0.8,
    restDelta: 0.0005,
  })
  const cardProgress = reduceMotion ? scrollYProgress : smoothProgress

  return (
    <div className={cn('case-study-flip-stack-root', className)}>
      {/* Intro Heading Section */}
      <section className="flip-stack-intro-section">
        <div className="flip-stack-hint">
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
          <span>{hint}</span>
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{
              duration: 1.4,
              delay: 0.18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ↓
          </motion.span>
        </div>

        <div className="flip-stack-heading-wrap">
          <h2 className="flip-stack-heading">
            {heading}
          </h2>
        </div>
      </section>

      {/* Sticky Scroll Stack Container */}
      <div
        ref={stackRef}
        className="flip-stack-scroll-wrapper"
        style={{ height: `${(Math.max(safeItems.length, 1) + 1) * 100}vh` }}
      >
        <div className="flip-stack-sticky-stage">
          <div className="flip-stack-stage-perspective">
            {[...safeItems].reverse().map((item, reverseIndex) => {
              const index = safeItems.length - reverseIndex - 1
              return (
                <FlipCard
                  key={`${item.title}-${index}`}
                  item={item}
                  index={index}
                  total={safeItems.length}
                  progress={cardProgress}
                  reduceMotion={reduceMotion}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Outro CTA Section */}
      <section className="flip-stack-outro-section">
        <p className="flip-stack-end-label">
          {endLabel}
        </p>
        <a
          href="https://wa.me/51999999999/?text=Hola%20Luis%2C%20tengo%20un%20proyecto%20en%20mente"
          target="_blank"
          rel="noopener noreferrer"
          className="flip-stack-contact-btn"
        >
          Hablemos por WhatsApp
        </a>
      </section>
    </div>
  )
}

export default CaseStudyFlipStack
