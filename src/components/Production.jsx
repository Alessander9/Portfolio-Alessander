import { useScrollReveal } from '../hooks/useScrollReveal'
import { productionSites } from '../data/projects'
import './Production.css'

export default function Production() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="produccion" className="production">
      <div className="container">
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`}>
          <h2 className="section-title">En producción</h2>
          <p className="section-subtitle">
            Sitios web operativos y accesibles actualmente.
          </p>
        </div>

        <div className="prod-grid">
          {productionSites.map((site) => (
            <div key={site.name} className={`prod-card reveal${visible ? ' visible' : ''}`}>
              <div className="prod-content">
                <div className="prod-status">
                  <span className="prod-status-dot" />
                  En línea
                </div>
                <h3>{site.name}</h3>
                <p>{site.desc}</p>
                <div className="prod-actions">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary btn-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Ver sitio
                  </a>
                  {site.secondary && (
                    <a
                      href={site.secondary.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline btn-sm"
                    >
                      {site.secondary.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
