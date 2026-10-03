import { useState, useEffect, useRef } from 'react'
import './LoadingScreen.css'

const TARGET_TEXT = 'CARGANDO...'
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>[]/{}=+~?'
const DURATION_MS = 4000

export default function LoadingScreen({ onComplete }) {
  const [displayText, setDisplayText] = useState('')
  const [percent, setPercent] = useState(0)
  const [isDropping, setIsDropping] = useState(false)
  const isFinishedRef = useRef(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const startTime = performance.now()

    // Scramble / Decrypt text & Percentage loop
    const interval = setInterval(() => {
      const now = performance.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / DURATION_MS, 1)
      const currentPercent = Math.round(progress * 100)

      setPercent(currentPercent)

      // Calculate how many characters of TARGET_TEXT have settled
      const settledCount = Math.floor(progress * TARGET_TEXT.length)

      let scrambled = ''
      for (let i = 0; i < TARGET_TEXT.length; i++) {
        if (i < settledCount) {
          scrambled += TARGET_TEXT[i]
        } else {
          scrambled += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }
      setDisplayText(scrambled)

      if (progress >= 1 && !isFinishedRef.current) {
        isFinishedRef.current = true
        clearInterval(interval)
        setDisplayText(TARGET_TEXT)
        setPercent(100)

        // Drop curtain like a smooth falling drapery after exactly 4s
        setTimeout(() => {
          setIsDropping(true)
          setTimeout(() => {
            document.body.style.overflow = ''
            try {
              sessionStorage.setItem('portfolio_preloader_seen', 'true')
              sessionStorage.setItem('welcome_dismissed', 'true')
            } catch {}
            onComplete?.()
          }, 950) // Smooth drop duration
        }, 150)
      }
    }, 40)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <aside
      className={`tech-curtain-overlay ${isDropping ? 'curtain-drop' : ''}`}
      aria-label="Pantalla de inicio cargando"
    >
      {/* Background Matrix Ambient Gradients */}
      <div className="tech-curtain-ambient" />
      <div className="tech-curtain-grid" />

      <div className="tech-curtain-content">
        {/* Tech Circular HUD Ring enclosing the logo */}
        <div className="tech-hud-ring-wrapper">
          {/* Animated SVG Outer & Inner Tech Circles */}
          <svg className="tech-hud-svg" viewBox="0 0 240 240">
            <defs>
              <linearGradient id="hudGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E676" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="hudGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#00E676" />
              </linearGradient>
            </defs>

            {/* Static Base Guide Circle */}
            <circle
              cx="120"
              cy="120"
              r="108"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
            />

            {/* Outer Rotating Segmented Dash Ring */}
            <circle
              className="hud-circle-outer"
              cx="120"
              cy="120"
              r="104"
              fill="none"
              stroke="url(#hudGrad1)"
              strokeWidth="2"
              strokeDasharray="18 12 40 8 6 14"
            />

            {/* Middle Rotating Tech Ring */}
            <circle
              className="hud-circle-mid"
              cx="120"
              cy="120"
              r="92"
              fill="none"
              stroke="url(#hudGrad2)"
              strokeWidth="1.5"
              strokeDasharray="60 30 15 30"
              strokeOpacity="0.8"
            />

            {/* Inner Concentric Fine Orbit */}
            <circle
              className="hud-circle-inner"
              cx="120"
              cy="120"
              r="82"
              fill="none"
              stroke="#00E676"
              strokeWidth="1"
              strokeDasharray="4 8"
              strokeOpacity="0.5"
            />

            {/* Corner Bracket Reticles */}
            <path
              d="M 120 8 A 112 112 0 0 1 128 8 M 120 232 A 112 112 0 0 1 112 232 M 8 120 A 112 112 0 0 1 8 128 M 232 120 A 112 112 0 0 1 232 112"
              stroke="#00E676"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Glowing Aura backdrop */}
          <div className="tech-hud-glow" />

          {/* Centered Official Logo */}
          <div className="tech-hud-logo-box">
            <img
              src="/logoAlex.png"
              alt="Luis Alexander"
              className="tech-hud-logo-img"
            />
          </div>
        </div>

        {/* Scramble Cypher Text forming CARGANDO */}
        <div className="tech-scramble-wrapper">
          <div className="tech-scramble-code">
            <span className="tech-scramble-prefix">&gt; </span>
            <span className="tech-scramble-text">{displayText}</span>
            <span className="tech-scramble-cursor">_</span>
          </div>

          {/* Mini progress tracker */}
          <div className="tech-hud-progress-bar">
            <div
              className="tech-hud-progress-fill"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="tech-hud-status-row">
            <span className="tech-hud-id">SYS.LOAD // INITIALIZING</span>
            <span className="tech-hud-percent">{percent}%</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
