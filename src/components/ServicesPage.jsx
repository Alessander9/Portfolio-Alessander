import { useState, useEffect } from 'react'
import { SERVICES_DATA, SERVICES_ROUTE_PREFIX } from '../data/servicesData'
import { SITE_TITLE } from '../data/projects'
import './ServicesPage.css'

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

function ArrowUpRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

const CATEGORY_FILTERS = [
  { id: 'all', label: 'Todos', count: 9 },
  { id: 'web', label: 'Páginas Web', count: 2 },
  { id: 'mobile', label: 'Apps Celulares', count: 1 },
  { id: 'ecommerce', label: 'Tiendas & Catálogos', count: 2 },
  { id: 'ai', label: 'Inteligencia Artificial', count: 2 },
  { id: 'edtech', label: 'Cursos & Asesoría', count: 2 },
]

/* ── Componente: Tarjeta de Solución Explicada Fácil con 2 Botones ── */
export function ProductCard({
  id,
  num,
  title,
  category,
  description,
  video,
  poster,
  metrics = [],
  features = [],
  accent = '#00E676',
  whatsappUrl,
  detailUrl,
}) {
  const defaultWhatsapp = whatsappUrl || '#'
  const targetDetailUrl = detailUrl || `${SERVICES_ROUTE_PREFIX}${id}`

  return (
    <article className="product-card" id={id} style={{ '--card-accent': accent }}>
      {/* 1. Video Principal (Autoplay, Loop, Muted, Sin Controles) */}
      <div className="product-video-wrapper">
        <video
          src={video}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="product-video-element"
        />

        <div className="product-video-overlay" />

        <div className="product-video-badge">
          <span
            className="product-video-dot"
            style={{ backgroundColor: accent, boxShadow: `0 0 10px ${accent}` }}
          />
          <span>MIRA EL VIDEO</span>
        </div>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="product-card-body">
        <div className="product-meta-header">
          {num && <span className="product-num-tag">{num}</span>}
          {category && (
            <span
              className="product-category-tag"
              style={{
                color: accent,
                borderColor: `${accent}44`,
                backgroundColor: `${accent}12`,
              }}
            >
              {category}
            </span>
          )}
        </div>

        <h2 className="product-card-title">{title}</h2>

        <p className="product-card-desc">{description}</p>

        {metrics && metrics.length >= 2 && (
          <div className="product-metrics-row">
            <div className="product-metric-col">
              <span className="product-metric-val" style={{ color: accent }}>
                {metrics[0].value}
              </span>
              <span className="product-metric-lbl">{metrics[0].label}</span>
            </div>
            <div className="product-metric-col">
              <span className="product-metric-val" style={{ color: accent }}>
                {metrics[1].value}
              </span>
              <span className="product-metric-lbl">{metrics[1].label}</span>
            </div>
          </div>
        )}

        {features && features.length > 0 && (
          <div className="product-features-row">
            {features.map((feat, idx) => (
              <span key={idx} className="product-feature-chip">
                {feat}
              </span>
            ))}
          </div>
        )}

        {/* EXACTAMENTE 2 BOTONES: Cotizar solucion - Ver detalle */}
        <div className="product-actions-grid">
          <a
            href={defaultWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="product-btn-quote"
            title="Cotizar esta solución por WhatsApp"
          >
            <WhatsAppIcon />
            <span>Cotizar solucion</span>
          </a>

          <a
            href={targetDetailUrl}
            className="product-btn-demo"
            title={`Ver información y detalles de ${title}`}
          >
            <span>Ver detalle</span>
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </article>
  )
}

/* ── Página Principal de Servicios ── */
export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    document.title = 'Servicios y Soluciones Digitales | Luis Alexander Fernandez Paz'
    window.scrollTo(0, 0)
    return () => {
      document.title = SITE_TITLE
    }
  }, [])

  const filteredProducts = activeFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((p) => p.filterCategory === activeFilter)

  return (
    <div className="services-page">
      {/* Botón Volver */}
      <a href="#inicio" className="services-back">
        <ArrowLeftIcon />
        <span>Volver al inicio</span>
      </a>

      {/* Hero Header */}
      <header className="services-hero">
        <div className="services-badge">
          <span className="services-badge-dot" />
          Servicios para tu Negocio
        </div>
        <h1 className="services-title">
          Soluciones digitales para <span className="text-gradient">vender más</span> y trabajar mejor
        </h1>
        <p className="services-subtitle">
          Elige la solución que tu negocio necesita. Puedes ver los videos demostrativos, revisar qué incluye cada servicio y cotizar directamente por WhatsApp sin rodeos.
        </p>

        {/* Filtros de Categoría */}
        <div className="services-filter-tabs">
          {CATEGORY_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`services-filter-tab ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              <span>{f.label}</span>
              <span className="filter-count">{f.count}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Grid de Tarjetas de Producto con Video */}
      <section className="products-grid" aria-label="Catálogo de productos con video">
        {filteredProducts.map((product) => {
          const whatsappUrl = `https://wa.me/51999999999/?text=${encodeURIComponent(product.quoteMsg)}`
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              num={product.num}
              title={product.title}
              category={product.category}
              description={product.desc}
              video={product.video}
              poster={product.poster}
              metrics={[product.stat1, product.stat2]}
              features={product.tags}
              accent={product.accentColor}
              whatsappUrl={whatsappUrl}
              detailUrl={`${SERVICES_ROUTE_PREFIX}${product.id}`}
            />
          )
        })}
      </section>

      {/* Metodología de Trabajo Explicada Simple */}
      <section className="services-process-section" aria-label="Cómo trabajamos">
        <div className="services-process-header">
          <h2 className="section-title">
            ¿Cómo trabajamos <span className="text-gradient">juntos</span>?
          </h2>
          <p className="section-subtitle">
            Un camino claro y sin complicaciones técnicas para que disfrutes ver nacer tu proyecto.
          </p>
        </div>

        <div className="services-process-grid">
          <div className="process-step-card">
            <div className="process-step-number">01</div>
            <h3 className="process-step-title">1. Me cuentas tu idea</h3>
            <p className="process-step-desc">
              Conversamos sobre lo que vendes, a quién quieres llegar y qué necesitas para darte la solución más adecuada.
            </p>
          </div>

          <div className="process-step-card">
            <div className="process-step-number">02</div>
            <h3 className="process-step-title">2. Te muestro la propuesta</h3>
            <p className="process-step-desc">
              Diseñamos una vista previa visual para que veas cómo lucirá tu proyecto antes de escribir código.
            </p>
          </div>

          <div className="process-step-card">
            <div className="process-step-number">03</div>
            <h3 className="process-step-title">3. Lo construimos</h3>
            <p className="process-step-desc">
              Programamos todo para que abra rapidísimo en celulares, reciba pagos y funcione sin fallos.
            </p>
          </div>

          <div className="process-step-card">
            <div className="process-step-number">04</div>
            <h3 className="process-step-title">4. ¡Lanzamiento y apoyo!</h3>
            <p className="process-step-desc">
              Publicamos tu proyecto en internet, te enseño paso a paso a usarlo y te acompaño en cada duda.
            </p>
          </div>
        </div>
      </section>

      {/* Banner CTA Final */}
      <section className="services-cta-banner" aria-label="Llamada a la acción">
        <div className="services-cta-content">
          <h2 className="services-cta-title">
            ¿Tienes una idea o proyecto en mente?
          </h2>
          <p className="services-cta-desc">
            Escríbeme por WhatsApp, cuéntame qué necesitas y te responderé con una propuesta clara, sin enredos y con cotización sin compromiso.
          </p>
          <div className="services-cta-actions">
            <a
              href="https://wa.me/51999999999/?text=Hola%20Luis%2C%20tengo%20un%20proyecto%20en%20mente%20y%20quisiera%20cotizar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-cta"
            >
              <WhatsAppIcon />
              Hablemos por WhatsApp
            </a>
            <a href="#inicio" className="btn-home-cta">
              Ver portafolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
