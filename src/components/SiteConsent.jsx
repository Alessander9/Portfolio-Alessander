import { useState, useEffect } from 'react'
import './SiteConsent.css'

export default function SiteConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('alessanderdev_consent_status')
      if (!consent) {
        const timer = setTimeout(() => setShow(true), 1000)
        return () => clearTimeout(timer)
      }
    } catch {
      // Ignore localStorage restrictions
    }
  }, [])

  const handleAccept = () => {
    try {
      localStorage.setItem('alessanderdev_consent_status', 'accepted')
    } catch {}
    setShow(false)
  }

  const handleDecline = () => {
    try {
      localStorage.setItem('alessanderdev_consent_status', 'declined')
    } catch {}
    setShow(false)
  }

  if (!show) return null

  return (
    <aside className="site-consent-banner" aria-label="Consentimiento de Navegación">
      <div className="site-consent-content">
        <div className="site-consent-text">
          <span className="site-consent-icon" role="img" aria-label="Cookies">🍪</span>
          <p>
            Utilizo cookies técnicas y analíticas anónimas para optimizar la velocidad del sitio y entender cómo interactúas con él según la <a href="#/privacidad" className="site-consent-link">Política de Privacidad</a>.
          </p>
        </div>
        <div className="site-consent-actions">
          <button
            type="button"
            onClick={handleDecline}
            className="btn-site-consent-decline"
          >
            Solo necesarias
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="btn-site-consent-accept"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </aside>
  )
}
