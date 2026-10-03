import { useState, useEffect } from 'react'
import './LoadingScreen.css'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isFinishing, setIsFinishing] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const startTime = performance.now()
    const duration = 1400 // Smooth, fast, non-intrusive 1.4s

    const updateProgress = (now) => {
      const elapsed = now - startTime
      const rawProgress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - rawProgress, 3)
      const currentPercent = Math.round(eased * 100)

      setProgress(currentPercent)

      if (rawProgress < 1) {
        requestAnimationFrame(updateProgress)
      } else {
        setProgress(100)
        setTimeout(() => {
          setIsFinishing(true)
          setTimeout(() => {
            document.body.style.overflow = ''
            try {
              sessionStorage.setItem('portfolio_preloader_seen', 'true')
              sessionStorage.setItem('welcome_dismissed', 'true')
            } catch {}
            onComplete?.()
          }, 600)
        }, 200)
      }
    }

    const frameId = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(frameId)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div className={`loading-minimal-overlay ${isFinishing ? 'is-exit' : ''}`}>
      {/* Soft Ambient Radial Light */}
      <div className="loading-ambient-light" />

      <div className="loading-center-box">
        {/* Logo with Soft Glowing Aura */}
        <div className="loading-logo-frame">
          <img
            src="/logoAlex.png"
            alt="Luis Alexander"
            className="loading-brand-logo"
          />
        </div>

        {/* Minimalist Progress Line */}
        <div className="loading-line-wrapper">
          <div
            className="loading-line-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Tagline & Percentage in Clean Sans-Serif */}
        <div className="loading-caption-row">
          <span className="loading-tagline">Desarrollo Web & Software</span>
          <span className="loading-counter">
            {progress < 10 ? `0${progress}` : progress}
          </span>
        </div>
      </div>
    </div>
  )
}
