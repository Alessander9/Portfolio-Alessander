import { useState, useEffect } from 'react'
import './LoadingScreen.css'

const STATUS_MESSAGES = [
  'Iniciando plataforma digital...',
  'Cargando portafolio y soluciones...',
  'Optimizando experiencia interactiva...',
  'Listo. Bienvenido a alessanderdev.com'
]

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const [isFinishing, setIsFinishing] = useState(false)

  useEffect(() => {
    // Lock background scroll during preloader
    document.body.style.overflow = 'hidden'

    let currentProgress = 0
    const interval = setInterval(() => {
      // Increments with smooth easing
      const step = Math.floor(Math.random() * 8) + 3
      currentProgress += step

      if (currentProgress >= 100) {
        currentProgress = 100
        setProgress(100)
        setStatusIndex(3)
        clearInterval(interval)

        // Trigger finish animation
        setTimeout(() => {
          setIsFinishing(true)
          setTimeout(() => {
            document.body.style.overflow = ''
            try {
              sessionStorage.setItem('portfolio_preloader_seen', 'true')
              sessionStorage.setItem('welcome_dismissed', 'true')
            } catch {}
            onComplete?.()
          }, 700)
        }, 350)
      } else {
        setProgress(currentProgress)
        if (currentProgress > 70) {
          setStatusIndex(2)
        } else if (currentProgress > 30) {
          setStatusIndex(1)
        }
      }
    }, 45)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div className={`loading-screen-overlay ${isFinishing ? 'fade-out' : ''}`}>
      {/* Background Animated Glow Spheres */}
      <div className="loading-glow-orb loading-glow-green" />
      <div className="loading-glow-orb loading-glow-purple" />
      <div className="loading-grid-bg" />

      <div className="loading-content-card">
        {/* Animated Logo Container with Neon Halo */}
        <div className="loading-logo-wrapper">
          <div className="loading-logo-aura" />
          <img
            src="/logoAlex.png"
            alt="Luis Alexander"
            className="loading-logo-img"
          />
          <div className="loading-shimmer-sweep" />
        </div>

        {/* Progress Bar Container */}
        <div className="loading-progress-container">
          <div className="loading-progress-track">
            <div
              className="loading-progress-fill"
              style={{ width: `${progress}%` }}
            >
              <span className="loading-progress-glow-head" />
            </div>
          </div>
          
          <div className="loading-info-row">
            <span className="loading-status-text">
              <span className="loading-pulse-dot" />
              {STATUS_MESSAGES[statusIndex]}
            </span>
            <span className="loading-percent-text">
              {progress}<span className="loading-percent-symbol">%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
