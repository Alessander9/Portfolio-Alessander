import { useState, useRef, useEffect } from 'react'
import './WebSites.css'

/* ── SVG Circuitos Electrónicos de Fondo ── */
function CircuitBackground({ accentColor = '#00E676' }) {
  return (
    <div className="showcase-circuits-bg">
      <svg
        className="circuit-lines-svg"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="neonCircuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
            <stop offset="50%" stopColor={accentColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00E676" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Líneas horizontales de circuitos a la izquierda */}
        <path d="M 20 120 L 100 120 L 140 160 L 190 160" stroke="url(#neonCircuitGrad)" strokeWidth="1.6" filter="url(#glowFilter)" />
        <circle cx="20" cy="120" r="3" fill="#00E676" />
        <circle cx="100" cy="120" r="2.5" fill="#7C3AED" />

        <path d="M 10 180 L 120 180 L 150 200 L 190 200" stroke="url(#neonCircuitGrad)" strokeWidth="1.8" filter="url(#glowFilter)" />
        <circle cx="10" cy="180" r="3" fill="#00E676" />

        <path d="M 30 240 L 90 240 L 130 220 L 190 220" stroke="url(#neonCircuitGrad)" strokeWidth="1.6" filter="url(#glowFilter)" />
        <circle cx="30" cy="240" r="2.5" fill="#7C3AED" />

        <path d="M 50 300 L 130 300 L 160 260 L 190 260" stroke="url(#neonCircuitGrad)" strokeWidth="1.6" filter="url(#glowFilter)" />
        <circle cx="50" cy="300" r="3" fill="#00E676" />

        {/* Líneas horizontales de circuitos a la derecha */}
        <path d="M 310 160 L 360 160 L 400 120 L 480 120" stroke="url(#neonCircuitGrad)" strokeWidth="1.6" filter="url(#glowFilter)" />
        <circle cx="480" cy="120" r="3" fill="#00E676" />
        <circle cx="400" cy="120" r="2.5" fill="#7C3AED" />

        <path d="M 310 200 L 350 200 L 380 180 L 490 180" stroke="url(#neonCircuitGrad)" strokeWidth="1.8" filter="url(#glowFilter)" />
        <circle cx="490" cy="180" r="3" fill="#00E676" />

        <path d="M 310 220 L 370 220 L 410 240 L 470 240" stroke="url(#neonCircuitGrad)" strokeWidth="1.6" filter="url(#glowFilter)" />
        <circle cx="470" cy="240" r="2.5" fill="#7C3AED" />

        <path d="M 310 260 L 340 260 L 370 300 L 450 300" stroke="url(#neonCircuitGrad)" strokeWidth="1.6" filter="url(#glowFilter)" />
        <circle cx="450" cy="300" r="3" fill="#00E676" />

        {/* Nodos de circuito y pequeños detalles de datos */}
        <rect x="75" y="117" width="10" height="6" rx="2" fill="rgba(0,230,118,0.35)" />
        <rect x="415" y="177" width="10" height="6" rx="2" fill="rgba(124,58,237,0.35)" />
        <text x="50" y="85" fill="rgba(0,230,118,0.4)" fontSize="9" fontFamily="monospace">93.811</text>
        <text x="420" y="95" fill="rgba(124,58,237,0.4)" fontSize="9" fontFamily="monospace">93.882</text>
      </svg>
    </div>
  )
}

/* ── Gráfico especial para Android con chip y circuitos ── */
function AndroidScreenGraphic() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 50% 50%, #0d1b2a 0%, #030712 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '1.5rem',
      overflow: 'hidden',
    }}>
      {/* Resplandor central */}
      <div style={{
        position: 'absolute',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 230, 118, 0.25) 0%, rgba(0, 229, 255, 0.15) 50%, transparent 70%)',
        filter: 'blur(20px)',
      }} />

      {/* SVG del Logo Android Iluminado */}
      <svg width="84" height="84" viewBox="0 0 24 24" fill="#00E676" style={{
        filter: 'drop-shadow(0 0 16px rgba(0, 230, 118, 0.8))',
        zIndex: 2,
        marginBottom: '1rem',
      }}>
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 2.23 12.95 2 12 2c-.96 0-1.86.23-2.66.63L7.85 1.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 4.26 6 5.92 6 7.8h12c0-1.88-.97-3.54-2.47-4.64zM9 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>

      <span style={{
        color: '#f8fafc',
        fontFamily: 'monospace',
        fontSize: '0.82rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        zIndex: 2,
        background: 'rgba(0, 230, 118, 0.1)',
        padding: '0.25rem 0.75rem',
        borderRadius: '50px',
        border: '1px solid rgba(0, 230, 118, 0.3)',
      }}>
        Android OS
      </span>
    </div>
  )
}

/* ── Datos de las 8 Soluciones / Sitios Web Destacados ── */
const SHOWCASE_ITEMS = [
  {
    id: 'landing-page',
    tabNumber: '01',
    tabName: 'Landing Page',
    categoryIcon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    category: 'LANDING PAGE DE ALTO IMPACTO',
    liveBadge: 'VIDEO DEMO · EN VIVO',
    titlePrefix: 'Diseño & Desarrollo de',
    titleAccent: 'Landing Pages de Alta Conversión',
    accentColor: '#00E676',
    desc: 'Landing page moderna con animaciones interactivas, diseño visual premium y optimización técnica para captar clientes potenciales y ventas.',
    stat1: {
      value: '+95%',
      label: 'Rendimiento & UX',
      sub: 'Carga inmediata en cualquier dispositivo',
    },
    stat2: {
      value: '100%',
      label: 'Conversión Directa',
      sub: 'Integración fluida con WhatsApp y agenda',
    },
    url: 'https://ninja-house-app.vercel.app/',
    quoteMsg: 'Hola Luis, me interesa cotizar una Landing Page moderna de alto impacto para mi proyecto.',
    deviceType: 'browser',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790824448/Landing-Alex.mp4',
    image: '/production/ninjahouse.jpg',
  },
  {
    id: 'sistema-web',
    tabNumber: '02',
    tabName: 'Sistema Web',
    categoryIcon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    category: 'PLATAFORMA & DEPORTES',
    liveBadge: 'VIDEO DEMO · EN VIVO',
    titlePrefix: 'Plataforma Web con Pizarra',
    titleAccent: 'Táctica Digital',
    accentColor: '#7C3AED',
    desc: 'Sistema web de periodismo deportivo y análisis táctico con pizarra interactiva en tiempo real, seguimiento de partidos y panel multimedia.',
    stat1: {
      value: '<1.1s',
      label: 'Carga Ultrarrápida',
      sub: 'Arquitectura SPA optimizada',
    },
    stat2: {
      value: '100%',
      label: 'Pizarra Táctica',
      sub: 'Herramienta interactiva táctil',
    },
    url: 'https://charlatactica.vercel.app/',
    quoteMsg: 'Hola Luis, me gustaría cotizar un sistema web interactivo a medida.',
    deviceType: 'browser',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790825922/sistemas_web.mp4',
    image: '/production/charlaTactica.jpg',
  },
  {
    id: 'app-android',
    tabNumber: '03',
    tabName: 'App Android',
    categoryIcon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    category: 'APPS PARA CELULARES',
    liveBadge: 'VIDEO DEMO · EN VIVO',
    titlePrefix: 'Aplicación Móvil para Teléfonos',
    titleAccent: 'Android',
    accentColor: '#00E676',
    desc: 'Lleva tu negocio al bolsillo de tus clientes con una app rápida, fácil de usar y publicada en Google Play con sincronización en la nube.',
    stat1: {
      value: '+85%',
      label: 'Clientes Fieles',
      sub: 'Tus clientes te compran más seguido',
    },
    stat2: {
      value: '100%',
      label: 'Publicación Oficial',
      sub: 'Aprobada en Google Play Store',
    },
    url: 'https://wa.me/51999999999/?text=Hola%20Luis%2C%20quisiera%20cotizar%20el%20desarrollo%20de%20una%20App%20Android',
    mockupUrl: 'play.google.com/store/apps/details?id=com.luis.androidapp',
    quoteMsg: 'Hola Luis, tengo la idea para una app móvil Android y quisiera cotizarla.',
    deviceType: 'android',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790826013/Android.mp4',
    image: '/production/DelasGradas.jpg',
  },
  {
    id: 'e-commerce',
    tabNumber: '04',
    tabName: 'E-Commerce',
    categoryIcon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    category: 'VENTAS ONLINE & CONVERSIÓN',
    liveBadge: 'VIDEO DEMO · EN VIVO',
    titlePrefix: 'Tienda Virtual & Plataforma de',
    titleAccent: 'E-Commerce de Alto Impacto',
    accentColor: '#7C3AED',
    desc: 'Tienda online moderna y escalable con catálogo interactivo, pasarela de pagos integrada, carrito de compras ágil y diseño optimizado para máxima conversión de ventas.',
    stat1: {
      value: '+120%',
      label: 'Ventas Online',
      sub: 'Pasarela de pagos y checkout rápido',
    },
    stat2: {
      value: '100%',
      label: 'Gestión de Stock',
      sub: 'Control de pedidos e inventario en tiempo real',
    },
    url: 'https://wa.me/51999999999/?text=Hola%20Luis%2C%20quisiera%20cotizar%20una%20tienda%20online%20E-Commerce',
    mockupUrl: 'tienda.e-commerce.com',
    quoteMsg: 'Hola Luis, me gustaría cotizar una tienda online o plataforma de E-Commerce moderna para mi negocio.',
    deviceType: 'browser',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790831432/e-commerce_brutal.mp4',
    image: '/production/VitalDent.jpg',
  },
  {
    id: 'automatizacion-ia',
    tabNumber: '05',
    tabName: 'Automatización IA',
    categoryIcon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8V4H8" /><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M9 13v2" /><path d="M15 13v2" />
      </svg>
    ),
    category: 'INTELIGENCIA ARTIFICIAL & AUTOMATIZACIÓN',
    liveBadge: 'VIDEO DEMO · EN VIVO',
    titlePrefix: 'Flujos Inteligentes &',
    titleAccent: 'Automatización de Procesos con IA',
    accentColor: '#00E676',
    desc: 'Optimizamos y conectamos tus tareas repetitivas mediante agentes de Inteligencia Artificial, integraciones con WhatsApp, CRM, bots y flujos de trabajo autónomos 24/7.',
    stat1: {
      value: '80%',
      label: 'Ahorro de Tiempo',
      sub: 'Respuestas y tareas automáticas 24/7',
    },
    stat2: {
      value: '10x',
      label: 'Productividad',
      sub: 'Reducción de errores y mayor agilidad',
    },
    url: 'https://wa.me/51999999999/?text=Hola%20Luis%2C%20quisiera%20cotizar%20la%20automatizaci%C3%B3n%20de%20procesos%20con%20IA%20para%20mi%20empresa',
    mockupUrl: 'ai-workflows.app/automation',
    quoteMsg: 'Hola Luis, me interesa automatizar tareas y procesos de mi negocio con Inteligencia Artificial.',
    deviceType: 'browser',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790839392/automatizacion_2.mp4',
    image: '/production/Charol.jpg',
  },
  {
    id: 'cursos-online',
    tabNumber: '06',
    tabName: 'Cursos Online',
    categoryIcon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    category: 'EDTECH & E-LEARNING LMS',
    liveBadge: 'VIDEO DEMO · EN VIVO',
    titlePrefix: 'Campus Virtual &',
    titleAccent: 'Plataforma de Cursos Online',
    accentColor: '#7C3AED',
    desc: 'Plataforma LMS moderna para venta de cursos, membresías y capacitaciones con aulas virtuales, exámenes interactivos, emisión de certificados y pasarelas de pago integradas.',
    stat1: {
      value: '+1,500',
      label: 'Estudiantes Activos',
      sub: 'Acceso a lecciones y material 24/7',
    },
    stat2: {
      value: '100%',
      label: 'Automatizado',
      sub: 'Cobros recurrentes y entrega de diplomas',
    },
    url: 'https://wa.me/51999999999/?text=Hola%20Luis%2C%20quisiera%20cotizar%20una%20plataforma%20de%20cursos%20online%20LMS',
    mockupUrl: 'campus.cursosonline.edu',
    quoteMsg: 'Hola Luis, me interesa cotizar una plataforma web de cursos online y campus virtual.',
    deviceType: 'browser',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790841621/LMS_comercial.mp4',
    image: '/production/Insteip.jpg',
  },
  {
    id: 'consultoria',
    tabNumber: '07',
    tabName: 'Consultoría',
    categoryIcon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    category: 'ASESORÍA & ARQUITECTURA DIGITAL',
    liveBadge: 'VIDEO DEMO · EN VIVO',
    titlePrefix: 'Transformación Digital &',
    titleAccent: 'Consultoría Tecnológica Especializada',
    accentColor: '#00E676',
    desc: 'Asesoría técnica y estratégica para empresas y startups: diagnóstico de arquitectura, selección de stack tecnológico, optimización de infraestructura cloud y escalabilidad.',
    stat1: {
      value: '100%',
      label: 'Diagnóstico Integral',
      sub: 'Auditoría de código e infraestructura',
    },
    stat2: {
      value: '3x',
      label: 'Aceleración Técnica',
      sub: 'Decisiones acertadas desde el día 1',
    },
    url: 'https://wa.me/51999999999/?text=Hola%20Luis%2C%20quisiera%20agendar%20una%20sesi%C3%B3n%20de%20Consultor%C3%ADa%20Tecnol%C3%B3gica',
    mockupUrl: 'consulting.tech-advisory.com',
    quoteMsg: 'Hola Luis, me interesa agendar una consultoría técnica o de arquitectura de software para mi proyecto.',
    deviceType: 'browser',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790841685/consultoria_Tech.mp4',
    image: '/production/SolucionesTecnologicas.png',
  },
  {
    id: 'catalogo-productos',
    tabNumber: '08',
    tabName: 'Catálogo Productos',
    categoryIcon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    category: 'CATÁLOGO VIRTUAL & VENTAS WHATSAPP',
    liveBadge: 'VIDEO DEMO · EN VIVO',
    titlePrefix: 'Ventas Directas &',
    titleAccent: 'Catálogo de Productos con Pedidos a WhatsApp',
    accentColor: '#7C3AED',
    desc: 'Catálogo interactivo optimizado para móviles donde tus clientes seleccionan productos, arman su pedido y lo envían detallado directo a tu WhatsApp en un solo toque.',
    stat1: {
      value: '+90%',
      label: 'Cierre de Pedidos',
      sub: 'Compra ágil sin fricción por chat',
    },
    stat2: {
      value: '100%',
      label: 'Autogestionable',
      sub: 'Actualización fácil de precios y catálogo',
    },
    url: 'https://wa.me/51999999999/?text=Hola%20Luis%2C%20quisiera%20cotizar%20un%20Cat%C3%A1logo%20de%20Productos%20con%20pedidos%20a%20WhatsApp',
    mockupUrl: 'catalogo.misproductos.pe',
    quoteMsg: 'Hola Luis, me gustaría cotizar un catálogo virtual de productos con pedidos automáticos a WhatsApp.',
    deviceType: 'browser',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790842142/catalogo_ventas_wsp.mp4',
    image: '/production/AgujasAcupuntura.png',
  },
  {
    id: 'chatbot-ai',
    tabNumber: '09',
    tabName: 'Chatbot AI',
    categoryIcon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth="3" />
        <line x1="15" y1="10" x2="15.01" y2="10" strokeWidth="3" />
      </svg>
    ),
    category: 'ATENCIÓN AL CLIENTE & CHATBOTS INTELIGENTES',
    liveBadge: 'VIDEO DEMO · EN VIVO',
    titlePrefix: 'Atención 24/7 & Conversión con',
    titleAccent: 'Chatbots Inteligentes con IA Generativa',
    accentColor: '#00E676',
    desc: 'Agentes conversacionales inteligentes entrenados con la información de tu negocio para responder dudas, calificar leads, agendar citas y cerrar ventas en WhatsApp y web en tiempo real.',
    stat1: {
      value: '24/7',
      label: 'Disponibilidad Continua',
      sub: 'Atención instantánea sin tiempos de espera',
    },
    stat2: {
      value: '+300%',
      label: 'Capacidad de Atención',
      sub: 'Múltiples conversaciones simultáneas',
    },
    url: 'https://wa.me/51999999999/?text=Hola%20Luis%2C%20quisiera%20cotizar%20un%20Chatbot%20con%20Inteligencia%20Artificial',
    mockupUrl: 'ai-assistant.agent.ai/chat',
    quoteMsg: 'Hola Luis, me gustaría cotizar un Chatbot con Inteligencia Artificial para mi empresa.',
    deviceType: 'browser',
    video: 'https://res.cloudinary.com/piun1mwb/video/upload/v1790842189/chatbot_ia.mp4',
    image: '/production/SolucionesTecnologicas.png',
  },
]

export default function WebSites() {
  // Inicializamos en el índice 0 (01 Landing Page)
  const [currentIndex, setCurrentIndex] = useState(0)
  const tabsTrackRef = useRef(null)

  const currentItem = SHOWCASE_ITEMS[currentIndex]
  const totalItems = SHOWCASE_ITEMS.length

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems)
  }

  // Desplazar suavemente SOLO el track interno de los tabs, sin alterar el viewport de la página
  useEffect(() => {
    const track = tabsTrackRef.current
    if (track) {
      const activeTab = track.children[currentIndex]
      if (activeTab) {
        const trackWidth = track.clientWidth
        const tabLeft = activeTab.offsetLeft
        const tabWidth = activeTab.clientWidth
        track.scrollTo({
          left: Math.max(0, tabLeft - trackWidth / 2 + tabWidth / 2),
          behavior: 'smooth',
        })
      }
    }
  }, [currentIndex])

  const formattedCurrent = String(currentIndex + 1).padStart(2, '0')
  const formattedTotal = String(totalItems).padStart(2, '0')

  const whatsappQuoteUrl = `https://wa.me/51999999999/?text=${encodeURIComponent(currentItem.quoteMsg)}`

  return (
    <section id="proyectos-web" className="websites-showcase-section">
      <div className="showcase-card">
        {/* ── Barra Superior (Pill Badge + Contador y Flechas) ── */}
        <header className="showcase-top-bar">
          <div className="showcase-top-badge">
            <span className="showcase-top-dot" />
            SOLUCIONES DESTACADAS
          </div>

          <div className="showcase-controls">
            <div className="showcase-counter">
              <span className="showcase-counter-current">{formattedCurrent}</span>
              <span className="showcase-counter-total"> / {formattedTotal}</span>
            </div>

            <div className="showcase-nav-buttons">
              <button
                type="button"
                className="showcase-nav-btn"
                onClick={prevSlide}
                aria-label="Solución anterior"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="showcase-nav-btn"
                onClick={nextSlide}
                aria-label="Siguiente solución"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* ── Cuerpo Principal del Showcase (2 Columnas) ── */}
        <div className="showcase-body">
          {/* Columna Izquierda: Información */}
          <div className="showcase-info" key={currentItem.id}>
            {/* Badges de Categoría y Estado En Vivo */}
            <div className="showcase-badges-row">
              <span className="showcase-cat-pill">
                {currentItem.categoryIcon}
                {currentItem.category}
              </span>
              <span className="showcase-live-pill">
                <span className="live-pulse-dot" />
                {currentItem.liveBadge}
              </span>
            </div>

            {/* Título en dos tonos con acento destacado */}
            <h2 className="showcase-heading">
              {currentItem.titlePrefix}{' '}
              <span
                className="showcase-heading-accent"
                style={{ color: currentItem.accentColor }}
              >
                {currentItem.titleAccent}
              </span>
            </h2>

            {/* Descripción */}
            <p className="showcase-desc">{currentItem.desc}</p>

            {/* Métricas / Stats (2 Cajas) */}
            <div className="showcase-stats-grid">
              <div className="showcase-stat-card">
                <div
                  className="showcase-stat-num"
                  style={{ color: currentItem.accentColor }}
                >
                  {currentItem.stat1.value}
                </div>
                <div className="showcase-stat-title">{currentItem.stat1.label}</div>
                <div className="showcase-stat-sub">{currentItem.stat1.sub}</div>
              </div>

              <div className="showcase-stat-card">
                <div
                  className="showcase-stat-num"
                  style={{ color: currentItem.accentColor }}
                >
                  {currentItem.stat2.value}
                </div>
                <div className="showcase-stat-title">{currentItem.stat2.label}</div>
                <div className="showcase-stat-sub">{currentItem.stat2.sub}</div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="showcase-buttons-row">
              <a
                href={currentItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-showcase-primary"
                style={{
                  background: currentItem.accentColor,
                  boxShadow: `0 0 20px ${currentItem.accentColor}55`,
                }}
              >
                Ver Solución Completa
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-showcase-secondary"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Cotizar Proyecto
              </a>
            </div>
          </div>

          {/* Columna Derecha: Mockup con Fondo de Circuitos */}
          <div className="showcase-visual">
            <CircuitBackground accentColor={currentItem.accentColor} />

            {currentItem.deviceType === 'android' ? (
              /* Marco Android Tablet / Smart Display 16:9 */
              <div className="showcase-android-frame">
                <div className="android-frame-topbar">
                  <div className="android-frame-brand">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#00E676">
                      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 2.23 12.95 2 12 2c-.96 0-1.86.23-2.66.63L7.85 1.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 4.26 6 5.92 6 7.8h12c0-1.88-.97-3.54-2.47-4.64zM9 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                    </svg>
                    <span>Android OS</span>
                  </div>
                  <div className="android-camera-dot" />
                  <div className="android-frame-meta">
                    <span className="android-tag-badge">16:9 HD</span>
                    <span className="android-tag-badge store">Google Play</span>
                  </div>
                </div>

                <div className="showcase-screen-content">
                  {currentItem.video ? (
                    <video
                      key={currentItem.video}
                      src={currentItem.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="showcase-screen-img"
                      style={{ objectFit: 'contain', width: '100%', height: '100%', background: '#000000' }}
                    />
                  ) : (
                    <img
                      src={currentItem.image}
                      alt={currentItem.titleAccent}
                      className="showcase-screen-img"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            ) : currentItem.deviceType === 'phone' ? (
              /* Marco Smartphone Vertical */
              <div className="showcase-device-frame">
                <div className="phone-speaker-notch" />
                <div className="phone-camera-hole" />

                <div className="showcase-screen-content">
                  {currentItem.isAndroidSpecial ? (
                    <AndroidScreenGraphic />
                  ) : currentItem.video ? (
                    <video
                      key={currentItem.video}
                      src={currentItem.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="showcase-screen-img"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  ) : (
                    <img
                      src={currentItem.image}
                      alt={currentItem.titleAccent}
                      className="showcase-screen-img"
                      loading="lazy"
                    />
                  )}
                </div>

                <div className="phone-bottom-bar" />
              </div>
            ) : (
              /* Marco Browser Desktop para Sitios Web */
              <div className="showcase-browser-frame">
                <div className="browser-mockup-bar">
                  <span className="browser-mockup-dot red" />
                  <span className="browser-mockup-dot yellow" />
                  <span className="browser-mockup-dot green" />
                  <span className="browser-mockup-url">{currentItem.mockupUrl || currentItem.url}</span>
                </div>
                <div className="showcase-screen-content">
                  {currentItem.video ? (
                    <video
                      key={currentItem.video}
                      src={currentItem.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="showcase-screen-img"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  ) : (
                    <img
                      src={currentItem.image}
                      alt={currentItem.titleAccent}
                      className="showcase-screen-img"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Barra Inferior de Tabs (Navegación Horizontal) ── */}
        <nav className="showcase-bottom-tabs" aria-label="Navegación de soluciones">
          <div className="showcase-tabs-track" ref={tabsTrackRef}>
            {SHOWCASE_ITEMS.map((item, idx) => {
              const isActive = idx === currentIndex
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`showcase-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-selected={isActive}
                >
                  <span className="showcase-tab-num">{item.tabNumber}</span>
                  <span className="showcase-tab-label">{item.tabName}</span>
                </button>
              )
            })}
          </div>
        </nav>
      </div>
    </section>
  )
}
