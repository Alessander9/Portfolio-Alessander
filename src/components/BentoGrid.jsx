import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Timeline from '@/components/ui/timeline'
import { GithubCalendar } from '@/components/ui/github-calendar'
import './BentoGrid.css'

const luisTopJourney = [
  {
    id: "2020-march",
    year: "2020",
    month: "March",
    content: "Inicios en ingeniería de software, arquitectura frontend y lógica de programación.",
  },
  {
    id: "2021-july",
    year: "2021",
    month: "July",
    content: "Despliegue de las primeras aplicaciones web comerciales y soluciones para clientes.",
  },
  {
    id: "2023-april",
    year: "2023",
    month: "April",
    content: "Especialización en desarrollo móvil con Android nativo (Kotlin) y APIs REST.",
  },
  {
    id: "2026-may",
    year: "2026",
    month: "May",
    content: "Soluciones de Inteligencia Artificial aplicada, automatización y plataformas LMS.",
  },
]

const luisBottomJourney = [
  {
    id: "2020-november",
    year: "2020",
    month: "November",
    content: "Diseño y validación de prototipos UI/UX de alta conversión y experiencia de usuario.",
  },
  {
    id: "2022-october",
    year: "2022",
    month: "October",
    content: "Integración de pasarelas de pago (Stripe, Mercado Pago) y catálogos en tiempo real.",
  },
  {
    id: "2025-september",
    year: "2025",
    month: "September",
    content: "Arquitectura escalable en la nube, microservicios y flujos móviles travel-ready.",
  },
]

export default function BentoGrid() {
  const [ref, visible] = useScrollReveal(0.08)
  const [username, setUsername] = useState('harshjdhv')

  return (
    <section id="sobre-mi" className="bento-section">
      <div className="container">
        <div ref={ref} className={`bento-header${visible ? ' reveal visible' : ' reveal'}`}>
          <div className="sobre-mi-badge-row">
            <span className="sobre-mi-badge">
              <span className="badge-pulse-dot" />
              TRAYECTORIA & HISTORIAL
            </span>
          </div>

          <h2 className="section-title">
            Sobre <span className="text-gradient">mí</span>
          </h2>
          <p className="section-subtitle">
            Evolución profesional, hitos clave y constancia en desarrollo de software moderno.
          </p>
        </div>
      </div>

      {/* Horizontal GSAP Timeline */}
      <Timeline
        title="Mi Trayectoria"
        periodLabel="2020 — 2026"
        backgroundColor="transparent"
        textColor="var(--text-main, #F3F4F6)"
        mutedTextColor="var(--text-muted, #9CA3AF)"
        activeColor="#00E676"
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        imageAlt="Luis Alexander - Workspace"
        itemsTop={luisTopJourney}
        itemsBottom={luisBottomJourney}
        duration={1.2}
      />

      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="bento-header reveal visible" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="sobre-mi-badge-row" style={{ justifyContent: 'center' }}>
            <span className="sobre-mi-badge">
              <span className="badge-pulse-dot" />
              GITHUB ACTIVITY & OPEN SOURCE
            </span>
          </div>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.5rem' }}>
            Constancia de <span className="text-gradient">código</span>
          </h3>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 1.5rem', maxWidth: '600px' }}>
            Historial de contribuciones activas y repositorios públicos.
          </p>
          <div className="github-user-switcher" style={{ marginTop: '0.5rem' }}>
            <button
              type="button"
              className={`github-user-btn ${username === 'harshjdhv' ? 'active' : ''}`}
              onClick={() => setUsername('harshjdhv')}
            >
              @harshjdhv
            </button>
            <button
              type="button"
              className={`github-user-btn ${username === 'Alessander9' ? 'active' : ''}`}
              onClick={() => setUsername('Alessander9')}
            >
              @Alessander9
            </button>
          </div>
        </div>

        <div className="github-calendar-showcase-wrapper">
          <GithubCalendar
            key={username}
            username={username}
            variant="city-lights"
            colorSchema="green"
            shape="rounded"
            glowIntensity={5}
          />
        </div>
      </div>
    </section>
  )
}
