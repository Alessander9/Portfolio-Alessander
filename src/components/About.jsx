import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const features = [
  {
    text: 'Páginas web que se ven modernas y cargan rápido',
    variant: 'green',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    text: 'Sistemas para controlar ventas / alumnos / clientes',
    variant: 'violet',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
  },
  {
    text: 'Catálogos y tiendas con pedidos por WhatsApp',
    variant: 'green',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    text: 'Automatizaciones para ahorrar tiempo en tareas repetitivas',
    variant: 'violet',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
  },
]

export default function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div ref={ref} className={`about-grid${visible ? ' reveal visible' : ' reveal'}`}>
          <div className="about-text-box">
            <h2 className="section-title">Sobre mí</h2>
            <p className="about-text">
              Me gusta construir soluciones digitales claras y fáciles de usar.
              Trabajo en proyectos web, sistemas empresariales y apps móviles.
              Mi enfoque es que la tecnología le haga la vida más simple a las
              personas.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Proyectos realizados</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Sitios en producción</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Tecnologías dominadas</div>
              </div>
            </div>

            <a href="#contacto" className="btn-primary btn-outline">
              Cuéntame tu proyecto
            </a>
          </div>

          <div className="about-features">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Lo que puedo hacer por ti:
            </h3>
            <ul className="feature-list">
              {features.map((feat, i) => (
                <li key={i}>
                  <div className={`feature-icon-wrapper feature-icon-${feat.variant}`}>
                    {feat.icon}
                  </div>
                  <span>{feat.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
