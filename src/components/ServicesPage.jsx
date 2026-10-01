import { useState, useRef, useEffect } from 'react'
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

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function VolumeMuteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function VolumeHighIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  )
}

function ExpandIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  )
}

/* ── 9 Soluciones y Productos con Video (Copiados de Soluciones Destacadas) ── */
const PRODUCTS_DATA = [
  {
    id: 'landing-page',
    num: '01',
    category: 'LANDING PAGE DE ALTO IMPACTO',
    filterCategory: 'web',
    title: 'Landing Pages de Alta Conversión',
    desc: 'Landing page moderna con animaciones interactivas, diseño visual premium y optimización técnica para captar clientes potenciales y ventas.',
    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790824448/Landing-Alex.mp4',
    poster: '/production/ninjahouse.jpg',
    stat1: { value: '+95%', label: 'Rendimiento & UX' },
    stat2: { value: '100%', label: 'Conversión Directa' },
    tags: ['UI/UX Premium', 'Animaciones GSAP', 'SEO Optimizado', 'WhatsApp CTA'],
    url: 'https://ninja-house-app.vercel.app/',
    quoteMsg: 'Hola Luis, me interesa cotizar una Landing Page moderna de alto impacto para mi proyecto.',
  },
  {
    id: 'sistema-web',
    num: '02',
    category: 'PLATAFORMA & DEPORTES',
    filterCategory: 'web',
    title: 'Plataforma Web con Pizarra Táctica Digital',
    desc: 'Sistema web de periodismo deportivo y análisis táctico con pizarra interactiva en tiempo real, seguimiento de partidos y panel multimedia.',
    accentColor: '#7C3AED',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790825922/sistemas_web.mp4',
    poster: '/production/charlaTactica.jpg',
    stat1: { value: '<1.1s', label: 'Carga Ultrarrápida' },
    stat2: { value: '100%', label: 'Pizarra Táctica' },
    tags: ['Arquitectura SPA', 'Pizarra Táctil', 'Realtime', 'Panel Admin'],
    url: 'https://charlatactica.vercel.app/',
    quoteMsg: 'Hola Luis, me gustaría cotizar un sistema web interactivo a medida.',
  },
  {
    id: 'app-android',
    num: '03',
    category: 'APPS PARA CELULARES',
    filterCategory: 'mobile',
    title: 'Aplicación Móvil para Teléfonos Android',
    desc: 'Lleva tu negocio al bolsillo de tus clientes con una app rápida, fácil de usar y publicada en Google Play con sincronización en la nube.',
    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790826013/Android.mp4',
    poster: '/production/DelasGradas.jpg',
    stat1: { value: '+85%', label: 'Fidelización' },
    stat2: { value: '100%', label: 'Google Play Ready' },
    tags: ['Kotlin', 'Android Studio', 'Sincronización Cloud', 'Notificaciones Push'],
    url: null,
    quoteMsg: 'Hola Luis, tengo la idea para una app móvil Android y quisiera cotizarla.',
  },
  {
    id: 'e-commerce',
    num: '04',
    category: 'VENTAS ONLINE & CONVERSIÓN',
    filterCategory: 'ecommerce',
    title: 'Tienda Virtual & E-Commerce de Alto Impacto',
    desc: 'Tienda online moderna y escalable con catálogo interactivo, pasarela de pagos integrada, carrito de compras ágil y diseño optimizado para máxima conversión.',
    accentColor: '#7C3AED',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790831432/e-commerce_brutal.mp4',
    poster: '/production/VitalDent.jpg',
    stat1: { value: '+120%', label: 'Ventas Online' },
    stat2: { value: '100%', label: 'Control de Stock' },
    tags: ['Pasarela de Pagos', 'Carrito Ágil', 'Gestión de Inventario', 'Checkout Seguro'],
    url: null,
    quoteMsg: 'Hola Luis, me gustaría cotizar una tienda online o plataforma de E-Commerce moderna para mi negocio.',
  },
  {
    id: 'automatizacion-ia',
    num: '05',
    category: 'INTELIGENCIA ARTIFICIAL & AUTOMATIZACIÓN',
    filterCategory: 'ai',
    title: 'Flujos Inteligentes & Automatización con IA',
    desc: 'Optimizamos y conectamos tus tareas repetitivas mediante agentes de Inteligencia Artificial, integraciones con WhatsApp, CRM, bots y flujos de trabajo autónomos 24/7.',
    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790839392/automatizacion_2.mp4',
    poster: '/production/Charol.jpg',
    stat1: { value: '80%', label: 'Ahorro de Tiempo' },
    stat2: { value: '10x', label: 'Productividad' },
    tags: ['Agentes Autónomos', 'Integración CRM', 'Operación 24/7', 'Flujos WhatsApp'],
    url: null,
    quoteMsg: 'Hola Luis, me interesa automatizar tareas y procesos de mi negocio con Inteligencia Artificial.',
  },
  {
    id: 'cursos-online',
    num: '06',
    category: 'EDTECH & E-LEARNING LMS',
    filterCategory: 'edtech',
    title: 'Campus Virtual & Plataforma de Cursos Online',
    desc: 'Plataforma LMS moderna para venta de cursos, membresías y capacitaciones con aulas virtuales, exámenes interactivos, emisión de certificados y pasarelas de pago integradas.',
    accentColor: '#7C3AED',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790841621/LMS_comercial.mp4',
    poster: '/production/Insteip.jpg',
    stat1: { value: '+1,500', label: 'Estudiantes Activos' },
    stat2: { value: '100%', label: 'Automatizado' },
    tags: ['Aula Virtual', 'Emisión Certificados', 'Cobros Recurrentes', 'Panel Docente'],
    url: null,
    quoteMsg: 'Hola Luis, me interesa cotizar una plataforma web de cursos online y campus virtual.',
  },
  {
    id: 'consultoria',
    num: '07',
    category: 'ASESORÍA & ARQUITECTURA DIGITAL',
    filterCategory: 'edtech',
    title: 'Transformación Digital & Consultoría Tecnológica',
    desc: 'Asesoría técnica y estratégica para empresas y startups: diagnóstico de arquitectura, selección de stack tecnológico, optimización de infraestructura cloud y escalabilidad.',
    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790841685/consultoria_Tech.mp4',
    poster: '/production/SolucionesTecnologicas.png',
    stat1: { value: '100%', label: 'Diagnóstico Integral' },
    stat2: { value: '3x', label: 'Aceleración Técnica' },
    tags: ['Auditoría Cloud', 'Stack Escalable', 'Arquitectura Segura', 'Asesoría 1 a 1'],
    url: null,
    quoteMsg: 'Hola Luis, me interesa agendar una consultoría técnica o de arquitectura de software para mi proyecto.',
  },
  {
    id: 'catalogo-productos',
    num: '08',
    category: 'CATÁLOGO VIRTUAL & VENTAS WHATSAPP',
    filterCategory: 'ecommerce',
    title: 'Catálogo de Productos con Pedidos a WhatsApp',
    desc: 'Catálogo interactivo optimizado para móviles donde tus clientes seleccionan productos, arman su pedido y lo envían detallado directo a tu WhatsApp en un solo toque.',
    accentColor: '#7C3AED',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790842142/catalogo_ventas_wsp.mp4',
    poster: '/production/AgujasAcupuntura.png',
    stat1: { value: '+90%', label: 'Cierre de Pedidos' },
    stat2: { value: '100%', label: 'Autogestionable' },
    tags: ['Envío a WhatsApp', 'Móvil First', 'Autogestión de Precios', 'Sin Comisiones'],
    url: null,
    quoteMsg: 'Hola Luis, me gustaría cotizar un catálogo virtual de productos con pedidos automáticos a WhatsApp.',
  },
  {
    id: 'chatbot-ai',
    num: '09',
    category: 'ATENCIÓN AL CLIENTE & CHATBOTS',
    filterCategory: 'ai',
    title: 'Chatbots Inteligentes con IA Generativa',
    desc: 'Agentes conversacionales inteligentes entrenados con la información de tu negocio para responder dudas, calificar leads, agendar citas y cerrar ventas en WhatsApp y web en tiempo real.',
    accentColor: '#00E676',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790842189/chatbot_ia.mp4',
    poster: '/production/SolucionesTecnologicas.png',
    stat1: { value: '24/7', label: 'Atención Continua' },
    stat2: { value: '+300%', label: 'Capacidad de Cierre' },
    tags: ['IA Generativa', 'Bot para WhatsApp', 'Captación de Leads', 'Respuestas en Segundos'],
    url: null,
    quoteMsg: 'Hola Luis, me gustaría cotizar un Chatbot con Inteligencia Artificial para mi empresa.',
  },
]

const CATEGORY_FILTERS = [
  { id: 'all', label: 'Todos', count: 9 },
  { id: 'web', label: 'Web & Landings', count: 2 },
  { id: 'mobile', label: 'Apps Móviles', count: 1 },
  { id: 'ecommerce', label: 'E-Commerce & Catálogos', count: 2 },
  { id: 'ai', label: 'Inteligencia Artificial', count: 2 },
  { id: 'edtech', label: 'LMS & Consultoría', count: 2 },
]

/* ── Tarjeta de Producto con Video ── */
function ProductVideoCard({ product, onExpand }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    // IntersectionObserver para pausar videos que estén fuera de pantalla (ahorro de recursos)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {})
            setIsPlaying(true)
          } else {
            videoEl.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(videoEl)
    return () => observer.disconnect()
  }, [])

  const togglePlay = (e) => {
    e.stopPropagation()
    const videoEl = videoRef.current
    if (!videoEl) return

    if (videoEl.paused) {
      videoEl.play().then(() => setIsPlaying(true)).catch(() => {})
    } else {
      videoEl.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const videoEl = videoRef.current
    if (!videoEl) return
    videoEl.muted = !videoEl.muted
    setIsMuted(videoEl.muted)
  }

  const whatsappUrl = `https://wa.me/51999999999/?text=${encodeURIComponent(product.quoteMsg)}`

  return (
    <article className="product-card" id={product.id}>
      {/* Contenedor Superior de Video */}
      <div className="product-video-wrapper" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={product.video}
          poster={product.poster}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          className="product-video-element"
        />

        {/* Gradiente ambiental sobre el video */}
        <div className="product-video-overlay" />

        {/* Badge en vivo */}
        <div className="product-video-badge">
          <span
            className="product-video-dot"
            style={{ backgroundColor: product.accentColor, boxShadow: `0 0 10px ${product.accentColor}` }}
          />
          <span>VIDEO DEMO</span>
        </div>

        {/* Controles mínimos flotantes */}
        <div className="product-video-controls" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="video-ctrl-btn"
            onClick={togglePlay}
            title={isPlaying ? 'Pausar video' : 'Reproducir video'}
            aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>

          <button
            type="button"
            className="video-ctrl-btn"
            onClick={toggleMute}
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? <VolumeMuteIcon /> : <VolumeHighIcon />}
          </button>

          <button
            type="button"
            className="video-ctrl-btn expand-btn"
            onClick={() => onExpand(product)}
            title="Ver video en pantalla completa"
            aria-label="Ver video en pantalla completa"
          >
            <ExpandIcon />
          </button>
        </div>
      </div>

      {/* Cuerpo de la tarjeta de producto */}
      <div className="product-card-body">
        {/* Encabezado: Número y Categoría */}
        <div className="product-meta-header">
          <span className="product-num-tag">{product.num}</span>
          <span
            className="product-category-tag"
            style={{ color: product.accentColor, borderColor: `${product.accentColor}33`, background: `${product.accentColor}12` }}
          >
            {product.category}
          </span>
        </div>

        {/* Título de la Solución */}
        <h2 className="product-card-title">{product.title}</h2>

        {/* Descripción concisa */}
        <p className="product-card-desc">{product.desc}</p>

        {/* Métricas destacadas */}
        <div className="product-stats-row">
          <div className="product-stat-box">
            <span className="product-stat-val" style={{ color: product.accentColor }}>
              {product.stat1.value}
            </span>
            <span className="product-stat-lbl">{product.stat1.label}</span>
          </div>
          <div className="product-stat-box">
            <span className="product-stat-val" style={{ color: product.accentColor }}>
              {product.stat2.value}
            </span>
            <span className="product-stat-lbl">{product.stat2.label}</span>
          </div>
        </div>

        {/* Etiquetas de características y stack */}
        <div className="product-tags-list">
          {product.tags.map((tag, idx) => (
            <span key={idx} className="product-tag-pill">{tag}</span>
          ))}
        </div>

        {/* Acciones de la Tarjeta */}
        <div className="product-actions-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="product-btn-primary"
            style={{ '--accent-glow': product.accentColor }}
          >
            <WhatsAppIcon />
            <span>Cotizar solución</span>
          </a>

          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="product-btn-secondary"
              title="Abrir demo funcional"
            >
              <span>Demo en vivo</span>
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/* ── Modal Cinema para ver Video en Grande ── */
function VideoCinemaModal({ product, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!product) return null

  const whatsappUrl = `https://wa.me/51999999999/?text=${encodeURIComponent(product.quoteMsg)}`

  return (
    <div className="cinema-modal-backdrop" onClick={onClose}>
      <div className="cinema-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="cinema-close-btn" onClick={onClose} aria-label="Cerrar modal">
          &times;
        </button>

        <div className="cinema-video-container">
          <video
            ref={videoRef}
            src={product.video}
            poster={product.poster}
            autoPlay
            controls
            playsInline
            className="cinema-video-player"
          />
        </div>

        <div className="cinema-modal-info">
          <div className="cinema-header-row">
            <div>
              <span className="cinema-category-badge">{product.category}</span>
              <h3 className="cinema-title">{product.title}</h3>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cinema-whatsapp-btn"
            >
              <WhatsAppIcon />
              <span>Cotizar ahora</span>
            </a>
          </div>
          <p className="cinema-desc">{product.desc}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Página Principal de Servicios ── */
export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [modalProduct, setModalProduct] = useState(null)

  useEffect(() => {
    document.title = 'Servicios & Soluciones Digitales | Luis Alexander Fernandez Paz'
    window.scrollTo(0, 0)
    return () => {
      document.title = SITE_TITLE
    }
  }, [])

  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.filterCategory === activeFilter)

  return (
    <div className="services-page container">
      {/* Botón Volver */}
      <a href="#inicio" className="services-back">
        <ArrowLeftIcon />
        <span>Volver al inicio</span>
      </a>

      {/* Hero Header */}
      <header className="services-hero">
        <div className="services-badge">
          <span className="services-badge-dot" />
          Catálogo de Productos & Soluciones
        </div>
        <h1 className="services-title">
          Soluciones digitales diseñadas para <span className="text-gradient">generar impacto</span>
        </h1>
        <p className="services-subtitle">
          Explora cada producto con su video interactivo en tiempo real. Desde landing pages de alta conversión y sistemas a medida hasta aplicaciones móviles, e-commerce y automatización con IA.
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
      <section className="products-grid" aria-label="Catálogo de soluciones con video">
        {filteredProducts.map((product) => (
          <ProductVideoCard
            key={product.id}
            product={product}
            onExpand={(p) => setModalProduct(p)}
          />
        ))}
      </section>

      {/* Modal Cinema de Pantalla Completa */}
      {modalProduct && (
        <VideoCinemaModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}

      {/* Metodología de Trabajo */}
      <section className="services-process-section" aria-label="Proceso de trabajo">
        <div className="services-process-header">
          <h2 className="section-title">
            ¿Cómo es el <span className="text-gradient">proceso</span> de trabajo?
          </h2>
          <p className="section-subtitle">
            Un flujo transparente y estructurado para garantizar que tu producto se desarrolle sin contratiempos.
          </p>
        </div>

        <div className="services-process-grid">
          <div className="process-step-card">
            <div className="process-step-number">01</div>
            <h3 className="process-step-title">Descubrimiento & Análisis</h3>
            <p className="process-step-desc">
              Analizamos tus objetivos, requerimientos técnicos, público objetivo y alcance para definir la mejor estrategia y tecnología.
            </p>
          </div>

          <div className="process-step-card">
            <div className="process-step-number">02</div>
            <h3 className="process-step-title">Diseño & Planificación</h3>
            <p className="process-step-desc">
              Estructuración de la arquitectura del proyecto, flujos de usuario y prototipos visuales para asegurar una experiencia atractiva.
            </p>
          </div>

          <div className="process-step-card">
            <div className="process-step-number">03</div>
            <h3 className="process-step-title">Desarrollo Ágil</h3>
            <p className="process-step-desc">
              Construcción con código limpio, testeado y componentes reutilizables, compartiendo avances periódicos para tu retroalimentación.
            </p>
          </div>

          <div className="process-step-card">
            <div className="process-step-number">04</div>
            <h3 className="process-step-title">Lanzamiento & Soporte</h3>
            <p className="process-step-desc">
              Pruebas finales, optimización de velocidad, despliegue en el servidor o tiendas de aplicaciones y soporte post-lanzamiento.
            </p>
          </div>
        </div>
      </section>

      {/* Banner CTA Final */}
      <section className="services-cta-banner" aria-label="Llamada a la acción">
        <div className="services-cta-content">
          <h2 className="services-cta-title">
            ¿Tienes un proyecto o idea en mente?
          </h2>
          <p className="services-cta-desc">
            Cuéntame qué necesitas y hablemos de cómo podemos materializarlo. Te responderé en el menor tiempo posible con una propuesta personalizada y cotización sin compromiso.
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
              Explorar portafolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
