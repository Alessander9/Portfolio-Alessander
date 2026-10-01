import { useEffect } from 'react'
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

function CheckIcon() {
  return (
    <svg className="service-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function SmartphoneIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function ServerIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

function CloudIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
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

const SERVICES_DATA = [
  {
    id: 'web-fullstack',
    title: 'Desarrollo Web Full-Stack',
    tag: 'Más solicitado',
    isPopular: true,
    icon: <CodeIcon />,
    desc: 'Construcción de aplicaciones web completas, reactivas y optimizadas de punta a punta, con interfaces modernas y arquitecturas escalables.',
    features: [
      'Frontend moderno con React, TypeScript y Vite',
      'Arquitecturas SPA / SSR para carga ultra rápida',
      'Integración con APIs REST y microservicios',
      'Diseño 100% responsivo y adaptado a móviles',
      'Código limpio, modular y mantenible',
    ],
    techs: ['React', 'TypeScript', 'Node.js', 'Vite', 'Tailwind', 'HTML5/CSS3'],
    whatsappMsg: 'Hola Luis, me interesa cotizar un desarrollo web full-stack para mi proyecto.',
  },
  {
    id: 'mobile-apps',
    title: 'Desarrollo de Apps Móviles',
    tag: 'Nativo & Híbrido',
    isPopular: false,
    icon: <SmartphoneIcon />,
    desc: 'Creación de aplicaciones móviles para Android con experiencia de usuario fluida, almacenamiento local, modo offline y sincronización cloud.',
    features: [
      'Desarrollo nativo en Kotlin y Android Studio',
      'Integración con Firebase y servicios en la nube (AWS)',
      'Persistencia de datos (Room, SQLite, DataStore)',
      'Notificaciones push y geolocalización',
      'Publicación y configuración en tiendas de apps',
    ],
    techs: ['Kotlin', 'Android SDK', 'Firebase', 'REST APIs', 'Room DB', 'Material 3'],
    whatsappMsg: 'Hola Luis, me gustaría consultar por el desarrollo de una aplicación móvil.',
  },
  {
    id: 'landing-pages',
    title: 'Sitios Web Corporativos & Landing Pages',
    tag: 'Alta Conversión',
    isPopular: false,
    icon: <GlobeIcon />,
    desc: 'Páginas web profesionales enfocadas en captar clientes, transmitir credibilidad y maximizar la tasa de conversión con micro-animaciones interactivas.',
    features: [
      'Diseño visual impactante con animaciones GSAP & Framer Motion',
      'Optimización extrema de velocidad y Core Web Vitals',
      'Botones de contacto directo y reservas por WhatsApp',
      'Estructura orientada a ventas (copywriting y CTA estratégicos)',
      'Optimización SEO on-page para posicionamiento en Google',
    ],
    techs: ['UI/UX', 'Framer Motion', 'GSAP', 'SEO Técnico', 'Responsive Design'],
    whatsappMsg: 'Hola Luis, deseo cotizar una página web corporativa o landing page para mi negocio.',
  },
  {
    id: 'backend-apis',
    title: 'Arquitectura Backend & APIs REST',
    tag: 'Escalabilidad',
    isPopular: false,
    icon: <ServerIcon />,
    desc: 'Desarrollo de la lógica del servidor, modelos de datos relacionales, autenticación robusta y endpoints REST seguros y documentados.',
    features: [
      'Desarrollo de APIs RESTful con Spring Boot, .NET C# o Node',
      'Modelado de bases de datos relacionales (PostgreSQL, MySQL)',
      'Sistemas de autenticación y autorización (JWT, OAuth)',
      'Seguridad, validaciones de datos y sanitización',
      'Documentación de endpoints (Swagger / OpenAPI)',
    ],
    techs: ['Spring Boot (Java)', '.NET C#', 'Node.js', 'PostgreSQL', 'MySQL', 'JWT'],
    whatsappMsg: 'Hola Luis, necesito ayuda con el backend, arquitectura o desarrollo de APIs para un sistema.',
  },
  {
    id: 'cloud-deploy',
    title: 'Integración Cloud & Despliegues',
    tag: 'Producción',
    isPopular: false,
    icon: <CloudIcon />,
    desc: 'Configuración de infraestructura en la nube, dominios corporativos, pipelines CI/CD y despliegue continuo listo para producción.',
    features: [
      'Configuración y despliegue en Vercel, AWS o Firebase',
      'Conexión de dominios propios y certificados SSL seguros',
      'Configuración de bases de datos en la nube',
      'Automatización de builds con GitHub Actions',
      'Monitoreo básico y métricas de rendimiento',
    ],
    techs: ['AWS', 'Vercel', 'Firebase Hosting', 'GitHub Actions', 'DNS / SSL'],
    whatsappMsg: 'Hola Luis, requiero soporte para desplegar mi aplicación o configurar dominio y cloud.',
  },
  {
    id: 'maintenance-optimization',
    title: 'Auditoría, Optimización & Soporte',
    tag: 'Rendimiento',
    isPopular: false,
    icon: <ShieldCheckIcon />,
    desc: 'Evaluación técnica de proyectos existentes para resolver lentitud, modernizar interfaces anticuadas y solucionar bugs críticos.',
    features: [
      'Auditoría completa de performance y SEO técnico',
      'Refactorización y modernización de código legado',
      'Resolución de problemas de responsividad móvil',
      'Soporte técnico, actualizaciones y mantenimiento preventivo',
      'Capacitación en uso y administración de la plataforma',
    ],
    techs: ['Lighthouse', 'Code Review', 'Bug Fixing', 'Performance Tuning'],
    whatsappMsg: 'Hola Luis, tengo un proyecto existente y necesito optimizarlo o corregir errores.',
  },
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Descubrimiento & Análisis',
    desc: 'Analizamos tus objetivos, requerimientos técnicos, público objetivo y alcance para definir la mejor estrategia y tecnología.',
  },
  {
    number: '02',
    title: 'Diseño & Planificación',
    desc: 'Estructuración de la arquitectura del proyecto, flujos de usuario y prototipos visuales para asegurar una experiencia atractiva.',
  },
  {
    number: '03',
    title: 'Desarrollo Ágil',
    desc: 'Construcción con código limpio, testeado y componentes reutilizables, compartiendo avances periódicos para tu retroalimentación.',
  },
  {
    number: '04',
    title: 'Lanzamiento & Soporte',
    desc: 'Pruebas finales, optimización de velocidad, despliegue en el servidor o tiendas de aplicaciones y soporte post-lanzamiento.',
  },
]

const VALUE_PROPS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Calidad & Buenas Prácticas',
    desc: 'Escribo código ordenado, mantenible y escalable, pensado para perdurar y crecer con tu negocio.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Entregas Puntuales',
    desc: 'Respeto riguroso de los plazos pactados y comunicación constante sobre el progreso del proyecto.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Trato Directo 1 a 1',
    desc: 'Sin intermediarios ni agencias lentas: comunicación ágil y directa con el desarrollador encargado.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Adaptabilidad Tecnológica',
    desc: 'Selecciono las herramientas más convenientes para tu caso de uso específico, no una solución genérica.',
  },
]

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Servicios Profesionales | Luis Alexander Fernandez Paz'
    window.scrollTo(0, 0)
    return () => {
      document.title = SITE_TITLE
    }
  }, [])

  return (
    <div className="services-page container">
      {/* Botón Volver */}
      <a href="#inicio" className="services-back">
        <ArrowLeftIcon />
        Volver al inicio
      </a>

      {/* Hero Header */}
      <header className="services-hero">
        <div className="services-badge">
          <span className="services-badge-dot" />
          Servicios Profesionales
        </div>
        <h1 className="services-title">
          Soluciones digitales para <span className="text-gradient">hacer crecer</span> tu negocio
        </h1>
        <p className="services-subtitle">
          Diseño y desarrollo productos digitales a medida: desde landing pages de alta conversión y sistemas web completos hasta aplicaciones móviles nativas y APIs escalables.
        </p>
        <div className="services-hero-pills">
          <span className="services-hero-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Desarrollo a medida
          </span>
          <span className="services-hero-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Enfoque en rendimiento & UX
          </span>
          <span className="services-hero-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Soporte & Acompañamiento
          </span>
        </div>
      </header>

      {/* Grid de Servicios */}
      <section className="services-grid" aria-label="Catálogo de servicios">
        {SERVICES_DATA.map((service) => {
          const encodedMsg = encodeURIComponent(service.whatsappMsg)
          const whatsappUrl = `https://wa.me/51999999999/?text=${encodedMsg}`

          return (
            <article key={service.id} className="service-card" id={service.id}>
              <div className="service-card-header">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <span className={`service-tag ${service.isPopular ? 'popular' : ''}`}>
                  {service.tag}
                </span>
              </div>

              <h2 className="service-card-title">{service.title}</h2>
              <p className="service-card-desc">{service.desc}</p>

              <ul className="service-features" aria-label="Qué incluye">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature-item">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="service-tech-tags" aria-label="Tecnologías principales">
                {service.techs.map((tech) => (
                  <span key={tech} className="service-tech-tag">{tech}</span>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card-btn"
              >
                <WhatsAppIcon />
                Cotizar este servicio
              </a>
            </article>
          )
        })}
      </section>

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
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="process-step-card">
              <div className="process-step-number">{step.number}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Por qué elegirme */}
      <section className="services-value-section" aria-label="Valores diferenciales">
        <div className="services-value-header">
          <h2 className="section-title">
            ¿Por qué <span className="text-gradient">trabajar conmigo</span>?
          </h2>
          <p className="section-subtitle">
            Compromiso profesional y técnico enfocado en resultados tangibles para tu negocio.
          </p>
        </div>

        <div className="services-value-grid">
          {VALUE_PROPS.map((prop, idx) => (
            <div key={idx} className="value-item">
              <div className="value-item-icon">{prop.icon}</div>
              <h3 className="value-item-title">{prop.title}</h3>
              <p className="value-item-desc">{prop.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner CTA Final */}
      <section className="services-cta-banner" aria-label="Llamada a la acción">
        <div className="services-cta-content">
          <h2 className="services-cta-title">
            ¿Tienes una idea o proyecto en mente?
          </h2>
          <p className="services-cta-desc">
            Cuéntame qué necesitas y hablemos de cómo podemos materializarlo. Te responderé en el menor tiempo posible con una propuesta personalizada.
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
