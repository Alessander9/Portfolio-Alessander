import { useState, useMemo, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { getServiceById, getAllServices, SERVICES_ROUTE_PREFIX } from '../data/servicesData'
import { SITE_TITLE } from '../data/projects'
import { getOptimizedVideoUrl, getCloudinaryPosterUrl } from '../utils/mediaOptimizer'
import './ServiceDetailPage.css'

/* ── Direction-aware Flowing Hover Card (FlowingMenu style) ── */
function FlowingHoverCard({ children, className = '', style = {}, accentColor }) {
  const cardRef = useRef(null)
  const flowLayerRef = useRef(null)

  const getClosestEdge = (x, y, w, h) => {
    const top = y * y
    const bottom = (h - y) * (h - y)
    const left = x * x
    const right = (w - x) * (w - x)
    const min = Math.min(top, bottom, left, right)
    if (min === top) return 'top'
    if (min === bottom) return 'bottom'
    if (min === left) return 'left'
    return 'right'
  }

  const getTransformForEdge = (edge) => {
    switch (edge) {
      case 'top':
        return { x: '0%', y: '-101%' }
      case 'bottom':
        return { x: '0%', y: '101%' }
      case 'left':
        return { x: '-101%', y: '0%' }
      case 'right':
        return { x: '101%', y: '0%' }
      default:
        return { x: '0%', y: '101%' }
    }
  }

  const handleMouseEnter = (e) => {
    if (!cardRef.current || !flowLayerRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const edge = getClosestEdge(x, y, rect.width, rect.height)
    const startPos = getTransformForEdge(edge)

    gsap.killTweensOf(flowLayerRef.current)
    gsap.set(flowLayerRef.current, { ...startPos, opacity: 1 })
    gsap.to(flowLayerRef.current, {
      x: '0%',
      y: '0%',
      duration: 0.45,
      ease: 'power3.out',
    })
  }

  const handleMouseLeave = (e) => {
    if (!cardRef.current || !flowLayerRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const edge = getClosestEdge(x, y, rect.width, rect.height)
    const endPos = getTransformForEdge(edge)

    gsap.killTweensOf(flowLayerRef.current)
    gsap.to(flowLayerRef.current, {
      ...endPos,
      duration: 0.45,
      ease: 'power3.out',
      onComplete: () => {
        if (flowLayerRef.current) {
          gsap.set(flowLayerRef.current, { opacity: 0 })
        }
      },
    })
  }

  return (
    <div
      ref={cardRef}
      className={`flowing-hover-card-wrap ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={flowLayerRef}
        className="flowing-hover-card-layer"
        style={{
          background: accentColor
            ? `radial-gradient(circle at 50% 30%, ${accentColor}28 0%, ${accentColor}10 60%, transparent 100%), linear-gradient(135deg, ${accentColor}1c 0%, rgba(255, 255, 255, 0.04) 100%)`
            : undefined,
          borderColor: accentColor ? `${accentColor}55` : undefined,
        }}
      />
      <div className="flowing-hover-card-inner">{children}</div>
    </div>
  )
}

/* ── SVG Icons ── */
function ArrowLeftIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function ServiceDetailPage({ serviceId }) {
  const service = useMemo(() => getServiceById(serviceId), [serviceId])
  const allServices = useMemo(() => getAllServices(), [])
  const [activeFaq, setActiveFaq] = useState(0)

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Soluciones Digitales | alessanderdev.com`
      
      // Actualizar meta description
      let metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', `${service.title}: ${service.desc}`)
      }

      // Actualizar Open Graph
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', `${service.title} | alessanderdev.com`)
      
      let ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', service.desc)

      // Inyectar Schema.org JSON-LD para este servicio y sus FAQs (Rich Snippets para Google)
      const faqSchema = service.faq && service.faq.length > 0 ? {
        "@type": "FAQPage",
        "mainEntity": service.faq.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      } : null

      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
          "@type": "Person",
          "name": "Luis Alexander Fernandez Paz",
          "url": "https://alessanderdev.com/",
          "image": "https://alessanderdev.com/logoAlex.png"
        },
        "areaServed": "Worldwide",
        "category": service.category,
        "offers": {
          "@type": "Offer",
          "url": `https://alessanderdev.com/#/servicio/${service.id}`,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }

      const fullSchema = faqSchema ? [serviceSchema, faqSchema] : [serviceSchema]
      
      let scriptTag = document.getElementById('service-jsonld')
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = 'service-jsonld'
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(fullSchema)

    } else {
      document.title = 'Servicio no encontrado | alessanderdev.com'
    }

    window.scrollTo(0, 0)

    return () => {
      document.title = SITE_TITLE
      const scriptTag = document.getElementById('service-jsonld')
      if (scriptTag) scriptTag.remove()
    }
  }, [service])

  if (!service) {
    return (
      <div className="service-detail-page container">
        <a href="#/servicios" className="service-detail-back">
          <ArrowLeftIcon />
          <span>Volver a servicios</span>
        </a>
        <div className="service-detail-notfound">
          <h2>Servicio no encontrado</h2>
          <p>El servicio que buscas no existe o ha sido movido.</p>
          <a href="#/servicios" className="btn-service-primary">
            Explorar catálogo de servicios
          </a>
        </div>
      </div>
    )
  }

  const whatsappUrl = `https://wa.me/51999999999/?text=${encodeURIComponent(service.quoteMsg)}`
  const otherServices = allServices.filter((s) => s.id !== service.id)

  return (
    <div className="service-detail-page" style={{ '--service-accent': service.accentColor }}>
      {/* Botón de retorno */}
      <div className="service-detail-top-nav">
        <a href="#/servicios" className="service-detail-back">
          <ArrowLeftIcon />
          <span>Volver a todos los servicios</span>
        </a>
      </div>

      {/* ── HERO DEL SERVICIO CON VIDEO DEMOSTRATIVO ── */}
      <section className="service-hero-section">
        <div className="service-hero-grid">
          {/* Columna Izquierda: Qué es y Beneficio principal */}
          <div className="service-hero-info">
            <div className="service-hero-badges">
              <span className="service-num-badge">{service.num}</span>
              <span
                className="service-cat-badge"
                style={{
                  color: service.accentColor,
                  borderColor: `${service.accentColor}44`,
                  backgroundColor: `${service.accentColor}12`,
                }}
              >
                <span
                  className="service-badge-dot"
                  style={{ backgroundColor: service.accentColor, boxShadow: `0 0 8px ${service.accentColor}` }}
                />
                {service.category}
              </span>
            </div>

            <h1 className="service-hero-title">{service.title}</h1>
            <p className="service-hero-lead">{service.desc}</p>

            {/* Métricas / Puntos Clave */}
            <div className="service-metrics-box">
              <div className="service-metric-item">
                <span className="service-metric-value" style={{ color: service.accentColor }}>
                  {service.stat1.value}
                </span>
                <span className="service-metric-label">{service.stat1.label}</span>
              </div>
              <div className="service-metric-divider" />
              <div className="service-metric-item">
                <span className="service-metric-value" style={{ color: service.accentColor }}>
                  {service.stat2.value}
                </span>
                <span className="service-metric-label">{service.stat2.label}</span>
              </div>
            </div>

            {/* Acciones Principales */}
            <div className="service-hero-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-service-primary"
              >
                <WhatsAppIcon />
                <span>Cotizar solución por WhatsApp</span>
              </a>

              {service.url && (
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-service-secondary"
                >
                  <span>Ver demostración en vivo</span>
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          </div>

          {/* Columna Derecha: Video demostrativo 16:9 */}
          <div className="service-hero-video-container">
            <div className="service-video-frame">
              <video
                key={service.id}
                src={getOptimizedVideoUrl(service.video, 800)}
                poster={service.poster || getCloudinaryPosterUrl(service.video, 800)}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="service-video-player"
              />

              <div className="service-video-overlay" />

              <div className="service-video-live-badge">
                <span
                  className="service-live-dot"
                  style={{ backgroundColor: service.accentColor }}
                />
                <span>MIRA CÓMO SE VE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: ¿QUÉ ES Y QUÉ SOLUCIONA? + ¿QUÉ TE ENTREGAMOS? ── */}
      <section className="service-content-section">
        <div className="service-content-grid">
          {/* Bloque 1: ¿Qué es y qué problema resuelve? */}
          <FlowingHoverCard className="service-overview-card" accentColor={service.accentColor}>
            <div className="service-simple-block">
              <h2 className="service-section-title">
                ¿Qué es y <span className="text-gradient">para qué sirve</span>?
              </h2>
              <p className="service-overview-text">{service.whatIs}</p>
            </div>

            {service.problemSolved && (
              <div className="service-simple-block" style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
                <h3 className="service-simple-subtitle" style={{ color: service.accentColor }}>
                  ¿Qué problema te soluciona?
                </h3>
                <p className="service-overview-text" style={{ marginBottom: '1.5rem' }}>
                  {service.problemSolved}
                </p>
              </div>
            )}

            {/* Etiquetas de ventajas */}
            <div className="service-tags-wrap">
              {service.tags.map((tag, idx) => (
                <span key={idx} className="service-chip-tag">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </FlowingHoverCard>

          {/* Bloque 2: ¿Qué te entregamos listo para usar? */}
          <FlowingHoverCard className="service-deliverables-card" accentColor={service.accentColor}>
            <h2 className="service-section-title">
              ¿Qué te entregamos <span className="text-gradient">listo para usar</span>?
            </h2>
            <ul className="service-checklist">
              {service.included.map((item, idx) => (
                <li key={idx} className="service-checklist-item">
                  <span
                    className="service-check-icon"
                    style={{
                      color: service.accentColor,
                      backgroundColor: `${service.accentColor}18`,
                      borderColor: `${service.accentColor}44`,
                    }}
                  >
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FlowingHoverCard>
        </div>
      </section>

      {/* ── SECCIÓN: ¿EN QUÉ TE AYUDA EN TU NEGOCIO? ── */}
      {service.benefits && (
        <section className="service-benefits-section">
          <div className="service-section-header">
            <h2 className="service-section-title">
              ¿En qué te ayuda y <span className="text-gradient">qué ganas</span> tú?
            </h2>
            <p className="service-section-subtitle">
              Beneficios reales y prácticos pensados para que vendas más, trabajes menos horas y des una imagen profesional.
            </p>
          </div>

          <div className="service-benefits-grid">
            {service.benefits.map((b, idx) => (
              <FlowingHoverCard key={idx} className="service-benefit-card" accentColor={service.accentColor}>
                <div
                  className="service-benefit-num"
                  style={{ color: service.accentColor }}
                >
                  0{idx + 1}
                </div>
                <h3 className="service-benefit-title">{b.title}</h3>
                <p className="service-benefit-desc">{b.desc}</p>
              </FlowingHoverCard>
            ))}
          </div>
        </section>
      )}

      {/* ── SECCIÓN: ¿CÓMO LO HACEMOS? (PASO A PASO) ── */}
      {service.process && (
        <section className="service-process-wrapper">
          <div className="service-section-header">
            <h2 className="service-section-title">
              ¿Cómo lo hacemos? <span className="text-gradient">Paso a paso</span>
            </h2>
            <p className="service-section-subtitle">
              Un proceso fácil, rápido y sin dolores de cabeza. Tú no tienes que preocuparte por nada técnico.
            </p>
          </div>

          <div className="service-steps-grid">
            {service.process.map((step) => (
              <FlowingHoverCard key={step.step} className="service-step-item" accentColor={service.accentColor}>
                <div
                  className="service-step-badge"
                  style={{
                    color: service.accentColor,
                    borderColor: `${service.accentColor}44`,
                    backgroundColor: `${service.accentColor}12`,
                  }}
                >
                  Paso {step.step}
                </div>
                <h3 className="service-step-title">{step.title}</h3>
                <p className="service-step-desc">{step.desc}</p>
              </FlowingHoverCard>
            ))}
          </div>
        </section>
      )}

      {/* ── SECCIÓN: PREGUNTAS FRECUENTES (FAQ) ── */}
      {service.faq && (
        <section className="service-faq-section">
          <div className="service-section-header">
            <h2 className="service-section-title">
              Preguntas <span className="text-gradient">frecuentes</span>
            </h2>
            <p className="service-section-subtitle">
              Respuestas claras y directas a las dudas más habituales.
            </p>
          </div>

          <div className="service-faq-accordion">
            {service.faq.map((item, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div
                  key={idx}
                  className={`service-faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                >
                  <button type="button" className="service-faq-question">
                    <span>{item.q}</span>
                    <span className="service-faq-toggle">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="service-faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* ── SECCIÓN: OTRAS SOLUCIONES DISPONIBLES EN TARJETAS CON VIDEO Y FLOWING HOVER ── */}
      <section className="service-related-section">
        <div className="service-section-header">
          <h2 className="service-section-title">
            Otras soluciones para tu <span className="text-gradient">negocio</span>
          </h2>
          <p className="service-section-subtitle">
            Explora más herramientas y servicios diseñados para potenciar tus ventas y automatizar tu trabajo.
          </p>
        </div>

        <div className="service-related-grid">
          {otherServices.map((other) => (
            <FlowingHoverCard
              key={other.id}
              className="service-related-card"
              accentColor={other.accentColor}
            >
              {/* Video demostrativo de la solución */}
              <div className="service-related-video-box">
                <video
                  src={other.video}
                  poster={other.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="service-related-video"
                />
                <div className="service-related-video-overlay" />
                <span
                  className="service-related-category-badge"
                  style={{
                    color: other.accentColor,
                    borderColor: `${other.accentColor}44`,
                    backgroundColor: `${other.accentColor}18`,
                  }}
                >
                  <span
                    className="service-badge-dot"
                    style={{ backgroundColor: other.accentColor, boxShadow: `0 0 8px ${other.accentColor}` }}
                  />
                  {other.category}
                </span>
              </div>

              {/* Información y acción directa */}
              <div className="service-related-body">
                <h3 className="service-related-card-title">{other.title}</h3>
                <p className="service-related-card-desc">{other.desc}</p>

                <div className="service-related-footer">
                  <a
                    href={`${SERVICES_ROUTE_PREFIX}${other.id}`}
                    className="service-related-btn"
                    style={{
                      '--card-accent': other.accentColor,
                    }}
                  >
                    <span>Ver detalle del servicio</span>
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </FlowingHoverCard>
          ))}
        </div>
      </section>

      {/* ── BANNER CTA FINAL DE CONTACTO ── */}
      <section className="service-cta-banner">
        <div className="service-cta-box">
          <span className="service-cta-badge">Hablemos de tu proyecto</span>
          <h2 className="service-cta-title">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="service-cta-desc">
            Escríbeme por WhatsApp, cuéntame tu idea y te responderé con una propuesta clara, sin enredos y con cotización sin compromiso.
          </p>
          <div className="service-cta-buttons">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-service-primary"
            >
              <WhatsAppIcon />
              <span>Cotizar {service.title}</span>
            </a>
            <a href="#/servicios" className="btn-service-secondary">
              Ver todos los servicios
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
