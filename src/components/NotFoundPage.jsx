import { useEffect } from 'react'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Página no encontrada (404) | alessanderdev.com'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'monospace',
            fontSize: '1rem',
            fontWeight: 800,
            color: '#00E676',
            background: 'rgba(0, 230, 118, 0.1)',
            border: '1px solid rgba(0, 230, 118, 0.3)',
            padding: '0.35rem 1rem',
            borderRadius: '50px',
            marginBottom: '1.5rem',
          }}
        >
          ERROR 404
        </span>

        <h1
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}
        >
          Página no <span style={{ color: '#00E676' }}>encontrada</span>
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            color: '#94A3B8',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}
        >
          La página que intentas visitar no existe, ha cambiado de nombre o fue movida.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.85rem 1.75rem',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: '#0B0E14',
              backgroundColor: '#00E676',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(0, 230, 118, 0.3)',
            }}
          >
            ← Volver al inicio
          </a>

          <a
            href="#/servicios"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.85rem 1.6rem',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: '#FFFFFF',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              textDecoration: 'none',
            }}
          >
            Explorar servicios
          </a>
        </div>
      </div>
    </div>
  )
}
