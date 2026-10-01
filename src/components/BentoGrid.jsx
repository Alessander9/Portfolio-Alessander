import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { GithubCalendar } from '@/components/ui/github-calendar'
import './BentoGrid.css'

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
              GITHUB ACTIVITY & OPEN SOURCE
            </span>
          </div>

          <h2 className="section-title">
            Sobre <span className="text-gradient">mí</span>
          </h2>
          <p className="section-subtitle">
            Historial de desarrollo, constancia y contribuciones de código abierto en GitHub.
          </p>

          <div className="github-user-switcher">
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
