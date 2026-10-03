import { useScrollReveal } from '../hooks/useScrollReveal'
import DecryptedText from './DecryptedText'
import SocialMedia from './SocialMedia'
import './Hero.css'

export default function Hero() {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section id="inicio" className="hero">
      {/* Video Background */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%230B0B10' width='1' height='1'/%3E%3C/svg%3E"
      >
        <source
          src="https://res.cloudinary.com/dhsdexgwq/video/upload/v1787090505/video_hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            {/* <span className="hero-badge">
            <span className="hero-badge-dot" />
            Disponible para trabajar
          </span> */}

            <h1 className="hero-title">
              <span className="hero-title-line">
                <DecryptedText
                  text="Hola, soy"
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={60}
                  maxIterations={5}
                  className="hero-title-text"
                  encryptedClassName="hero-title-encrypted"
                />
              </span>
              <span className="hero-title-line text-gradient">
                <DecryptedText
                  text="Luis Fernandez"
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={40}
                  maxIterations={5}
                  className="hero-title-text"
                  encryptedClassName="hero-title-encrypted"
                />
              </span>
              <span className="hero-title-line">
                <DecryptedText
                  text="Desarrollador"
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={50}
                  maxIterations={5}
                  className="hero-title-text"
                  encryptedClassName="hero-title-encrypted"
                />
              </span>
              <span className="hero-title-line">
                <DecryptedText
                  text="de software"
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={50}
                  maxIterations={5}
                  className="hero-title-text"
                  encryptedClassName="hero-title-encrypted"
                />
              </span>
            </h1>

            <p className="hero-subtitle">
              Creo páginas web, sistemas y apps que ayudan <br></br>a negocios a vender más
              y trabajar mejor. <br></br>
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
              Tú me cuentas tu idea en palabras simples, <br></br>Yo me encargo de lo
              técnico.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Center Bottom Social Dock */}
      <SocialMedia />
    </section>
  )
}
