import { useState, useEffect, useRef } from 'react'
import './WelcomeScreen.css'

const LINES = [
  { text: 'Inicializando sistema...', delay: 400, type: 'info' },
  { text: 'Cargando portafolio de Luis Alexander Fernandez Paz', delay: 600, type: 'info' },
  { text: '', delay: 200, type: 'empty' },
  { text: 'stack: React + Vite + GSAP', delay: 500, type: 'success' },
  { text: 'role: Full-Stack Developer', delay: 400, type: 'success' },
  { text: 'location: Perú', delay: 400, type: 'success' },
  { text: '', delay: 200, type: 'empty' },
  { text: 'Sistema listo. Bienvenido.', delay: 600, type: 'done' },
]

function TypewriterText({ text, onComplete, startDelay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    const startTimer = setTimeout(() => {
      if (mountedRef.current) setStarted(true)
    }, startDelay)
    return () => {
      mountedRef.current = false
      clearTimeout(startTimer)
    }
  }, [startDelay])

  useEffect(() => {
    if (!started) return
    if (!text) {
      onComplete?.()
      return
    }

    let i = 0
    setDisplayed('')
    const interval = setInterval(() => {
      i++
      if (mountedRef.current) {
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          onComplete?.()
        }
      }
    }, 30 + Math.random() * 20)

    return () => {
      clearInterval(interval)
    }
  }, [started, text, onComplete])

  return <>{displayed}</>
}

export default function WelcomeScreen({ onDismiss }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [dismissing, setDismissing] = useState(false)
  const [canDismiss, setCanDismiss] = useState(false)
  const dismissedRef = useRef(false)

  const advanceLine = (lineIdx) => {
    setVisibleLines((prev) => {
      const next = prev + 1
      return next
    })

    // Check if this was the last line
    if (lineIdx >= LINES.length - 1) {
      setTimeout(() => {
        setCanDismiss(true)
      }, 1500)
    }
  }

  const handleDismiss = () => {
    if (!canDismiss || dismissedRef.current) return
    dismissedRef.current = true
    setDismissing(true)
    document.body.style.overflow = ''
    setTimeout(() => onDismiss(), 500)
  }

  // Lock scroll when mounted
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      className={`welcome-overlay${dismissing ? ' dismissing' : ''}`}
      onClick={handleDismiss}
    >
      <div
        className={`welcome-terminal${dismissing ? ' dismissing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
          </div>
          <span className="terminal-title">bash — portfolio</span>
          <div className="terminal-spacer" />
        </div>

        {/* Terminal Content */}
        <div className="terminal-body">
          {LINES.slice(0, visibleLines + 1).map((line, idx) => {
            const isCurrentLine = idx === visibleLines
            const hasTypedContent = line.text

            return (
              <div key={idx} className={`terminal-line terminal-line-${line.type}`}>
                {line.type === 'success' && <span className="terminal-prompt">$ </span>}
                {line.type === 'info' && <span className="terminal-prompt-arrow">&gt; </span>}
                {line.type === 'done' && <span className="terminal-check">✔ </span>}

                {isCurrentLine ? (
                  hasTypedContent ? (
                    <TypewriterText
                      text={line.text}
                      startDelay={0}
                      onComplete={() => advanceLine(idx)}
                    />
                  ) : (
                    <TypewriterText
                      text=" "
                      startDelay={0}
                      onComplete={() => advanceLine(idx)}
                    />
                  )
                ) : (
                  <span>{line.text || '\u00A0'}</span>
                )}

                {isCurrentLine && idx < LINES.length - 1 && (
                  <span className="terminal-cursor" />
                )}
              </div>
            )
          })}

          {canDismiss && (
            <div className="terminal-continue">
              <span className="terminal-cursor-blink" />
              <span className="terminal-continue-text">
                Haz clic en cualquier parte para continuar
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
