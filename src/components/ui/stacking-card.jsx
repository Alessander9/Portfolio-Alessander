import React, { useRef, forwardRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
import { cn } from '../../lib/utils'
import './stacking-card.css'

export function Card({
  i,
  title,
  description,
  url,
  image,
  category,
  tech = [],
  color = '#111119',
  progress,
  range,
  targetScale,
  total,
}) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className="stacking-card-item-sticky"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${i * 28}px)`,
        }}
        className="stacking-card-body"
      >
        <div className="stacking-card-inner">
          {/* Left Info Column */}
          <div className="stacking-card-info">
            {category && (
              <span className="stacking-card-badge">
                <span className="stacking-card-dot" />
                {category}
              </span>
            )}
            <h3 className="stacking-card-title">{title}</h3>
            <p className="stacking-card-desc">{description}</p>

            {tech.length > 0 && (
              <div className="stacking-card-tech-list">
                {tech.map((t) => (
                  <span key={t} className="stacking-tech-tag">{t}</span>
                ))}
              </div>
            )}

            <div className="stacking-card-actions">
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stacking-card-link-btn"
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
            </div>
          </div>

          {/* Right Image Mockup Preview */}
          <div className="stacking-card-preview-wrapper">
            <div className="stacking-browser-bar">
              <span className="stacking-browser-dot dot-red" />
              <span className="stacking-browser-dot dot-yellow" />
              <span className="stacking-browser-dot dot-green" />
              <span className="stacking-browser-url">{url?.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}</span>
            </div>
            <div className="stacking-card-image-box">
              <motion.div
                className="stacking-card-image-motion"
                style={{ scale: imageScale }}
              >
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="stacking-card-img"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const StackingCards = forwardRef(({ projects = [], className = '' }, ref) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={container} className={cn('stacking-cards-root', className)}>
      <div className="stacking-cards-list">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.04
          const step = 1 / projects.length
          return (
            <Card
              key={project.name || project.title || i}
              i={i}
              title={project.name || project.title}
              description={project.desc || project.description}
              url={project.url || project.demo || project.link}
              image={project.image || project.link}
              category={project.category}
              tech={project.tech}
              color={project.color}
              progress={scrollYProgress}
              range={[i * step, 1]}
              targetScale={targetScale}
              total={projects.length}
            />
          )
        })}
      </div>
    </div>
  )
})

StackingCards.displayName = 'StackingCards'

export default StackingCards
