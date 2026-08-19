import { useEffect, useMemo } from 'react'
import {
  findProjectBySlug,
  allProjects,
  categoryLabels,
  SITE_TITLE,
} from '../data/projects'
import { ProjectCard, TechIcons } from './Projects'
import './ProjectPage.css'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

export default function ProjectPage({ slug }) {
  const project = useMemo(() => findProjectBySlug(slug), [slug])

  useEffect(() => {
    document.title = project ? `${project.name} | Portafolio` : 'Proyecto no encontrado | Portafolio'
    return () => {
      document.title = SITE_TITLE
    }
  }, [project])

  if (!project) {
    return (
      <div className="project-page container">
        <a href="#proyectos" className="project-back">
          <ArrowLeftIcon />
          Volver a proyectos
        </a>
        <div className="project-notfound">
          <h2>Proyecto no encontrado</h2>
          <p>La subpágina que buscas no existe o el enlace es incorrecto.</p>
        </div>
      </div>
    )
  }

  const catLabel = categoryLabels[project.category] || project.category

  const related = allProjects
    .filter((p) => p.name !== project.name)
    .sort(
      (a, b) =>
        (b.category === project.category ? 1 : 0) -
        (a.category === project.category ? 1 : 0)
    )
    .slice(0, 3)

  return (
    <div className="project-page container">
      <a href="#proyectos" className="project-back">
        <ArrowLeftIcon />
        Volver a proyectos
      </a>

      <header className="project-hero">
        <div className="project-hero-img-wrapper">
          <img src={project.image} alt={project.name} className="project-hero-img" loading="lazy" />
          <div className="project-hero-overlay" />
        </div>

        <div className="project-hero-content">
          <div className="project-hero-badges">
            <span className="project-hero-cat">{catLabel}</span>
            <span className="project-title-repo">repo</span>
          </div>
          <h1 className="project-hero-title">{project.name}</h1>
          {project.slogan && (
            <p className="project-hero-slogan">"{project.slogan}"</p>
          )}
          <p className="project-hero-desc">{project.desc}</p>
          <div className="project-hero-actions">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Ver página web
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={project.demo ? 'btn-outline' : 'btn-primary'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              Ver repositorio
            </a>
          </div>
        </div>
      </header>

      <div className="project-body">
        <div className="project-main">
          <section className="project-section">
            <h2>De qué trata</h2>
            <p>{project.longDesc || project.desc}</p>
          </section>

          {project.features && project.features.length > 0 && (
            <section className="project-section">
              <h2>Características</h2>
              <ul className="project-highlights">
                {project.features.map((item) => (
                  <li key={item}>
                    <span className="project-check">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="project-section">
            <h2>Qué hace y para qué sirve</h2>
            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>
                  <span className="project-check">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {project.stackTable && project.stackTable.length > 0 && (
            <section className="project-section">
              <h2>Stack tecnológico</h2>
              <div className="project-stack-table-wrapper">
                <table className="project-stack-table">
                  <thead>
                    <tr>
                      <th>Tecnología</th>
                      <th>Versión</th>
                      <th>Uso</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.stackTable.map((row) => (
                      <tr key={row.name}>
                        <td className="project-stack-name">{row.name}</td>
                        <td className="project-stack-version">{row.version}</td>
                        <td>{row.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {project.routes && project.routes.length > 0 && (
            <section className="project-section">
              <h2>Enrutamiento</h2>
              <div className="project-stack-table-wrapper">
                <table className="project-stack-table">
                  <thead>
                    <tr>
                      <th>Ruta</th>
                      <th>Página</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.routes.map((r) => (
                      <tr key={r.path}>
                        <td><code className="project-route-code">{r.path}</code></td>
                        <td>{r.page}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {project.deploy && (
            <section className="project-section">
              <h2>Despliegue</h2>
              <p className="project-deploy-note">{project.deploy}</p>
            </section>
          )}

          {project.chatbot && (
            <section className="project-section project-chatbot-section">
              <h2>Chatbot asistente con IA</h2>
              <p className="project-chatbot-desc">{project.chatbot.desc}</p>
              {project.chatbot.providers && (
                <>
                  <h3 className="project-chatbot-subtitle">Proveedores de IA (fallback automático)</h3>
                  <div className="project-stack-table-wrapper">
                    <table className="project-stack-table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Proveedor</th>
                          <th>API Key</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.chatbot.providers.map((p) => (
                          <tr key={p.name}>
                            <td className="project-stack-version">{p.priority}</td>
                            <td className="project-stack-name">{p.name}</td>
                            <td>
                              <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-chatbot-link">
                                {p.url} ↗
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
              {project.chatbot.deployNote && (
                <p className="project-deploy-note" style={{ marginTop: '1rem' }}>{project.chatbot.deployNote}</p>
              )}
            </section>
          )}
        </div>

        <aside className="project-aside">
          <div className="project-info-card">
            <h3>Información</h3>
            <div className="project-info-row">
              <span className="project-info-label">Categoría</span>
              <span className="project-info-value">{catLabel}</span>
            </div>
            <div className="project-info-row">
              <span className="project-info-label">Stack</span>
              <div className="project-info-stack">
                <TechIcons techs={project.tech} />
              </div>
            </div>
            <div className="project-info-row">
              <span className="project-info-label">Enlaces</span>
              <div className="project-info-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Página web ↗
                  </a>
                )}
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  Repositorio ↗
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <section className="project-related">
        <div className="subsection-header">
          <h3>Otros proyectos</h3>
          <div className="subsection-header-line" />
        </div>
        <div className="projects-grid">
          {related.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
