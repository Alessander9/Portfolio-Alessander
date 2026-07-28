import { useRef, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import DecryptedText from './DecryptedText'
import './Hero.css'

export default function Hero() {
  const [ref, visible] = useScrollReveal(0.1)
  const videoRef = useRef(null)

  // Parallax effect on video
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let rafId = null
    let currentY = 0

    const handleScroll = () => {
      if (rafId) return

      rafId = requestAnimationFrame(() => {
        const heroTop = video.closest('section').offsetTop
        const scrollY = window.scrollY
        const offset = (scrollY - heroTop) * 0.35
        const clamped = Math.max(-80, Math.min(80, offset))

        currentY += (clamped - currentY) * 0.08
        video.style.transform = `translate(-50%, calc(-50% + ${currentY}px))`

        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id="inicio" className="hero">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%230B0B10' width='1' height='1'/%3E%3C/svg%3E"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="container hero-content">
        <div ref={ref} className={`hero-text${visible ? ' visible' : ''}`}>
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Disponible para trabajar
          </span>

          <h1 className="hero-title">
            <DecryptedText
              text="Hola, soy"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={60}
              maxIterations={5}
              className="hero-title-text"
              encryptedClassName="hero-title-encrypted"
            />{' '}
            <span className="text-gradient">
              <DecryptedText
                text="Luis Alexander"
                animateOn="view"
                sequential
                revealDirection="start"
                speed={40}
                maxIterations={5}
                className="hero-title-text"
                encryptedClassName="hero-title-encrypted"
              />
            </span>{' '}
            <DecryptedText
              text="Fernandez Paz"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={50}
              maxIterations={5}
              className="hero-title-text"
              encryptedClassName="hero-title-encrypted"
            />
          </h1>

          <p className="hero-subtitle">
            Creo páginas web, sistemas y apps que ayudan a negocios a vender más
            y trabajar mejor.
          </p>

          <div className="hero-buttons">
            <a href="#proyectos" className="btn-primary btn-glow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              Ver proyectos
            </a>
            <a href="#contacto" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contactarme
            </a>
          </div>

          <p className="hero-microcopy">
            Tú me cuentas tu idea en palabras simples. Yo me encargo de lo
            técnico.
          </p>
        </div>
      </div>
    </section>
  )
}
