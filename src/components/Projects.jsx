import { useScrollReveal } from '../hooks/useScrollReveal'
import { CoverflowCarousel } from './ui/coverflow-carousel'
import {
  mainProjects,
  techIcons,
  slugify,
  PROJECT_ROUTE_PREFIX,
  categoryLabels,
} from '../data/projects'
import './Projects.css'

// ── Re-exported helpers used by ProjectPage.jsx ──────────────────────────────
export function TechIcons({ techs }) {
  return techs.map((tech) => {
    const icon = techIcons[tech]
    return icon ? (
      <img key={tech} src={icon} alt={tech} className="tech-icon-sm" title={tech} />
    ) : (
      <span key={tech} className="skill-text-icon" title={tech}>{tech}</span>
    )
  })
}

export function ProjectCard({ project }) {
  const openProject = () => {
    window.location.hash = `${PROJECT_ROUTE_PREFIX}${slugify(project.name)}`
  }
  return (
    <div
      className="project-card"
      data-category={project.category}
      role="link"
      tabIndex={0}
      aria-label={`Ver detalles de ${project.name}`}
      onClick={openProject}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject() } }}
    >
      <div className="project-img-wrapper">
        <img src={project.image} alt={project.name} className="project-img" loading="lazy" />
        <div className="project-img-overlay" />
        <span className="project-card-open">
          Ver más
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.name}<span className="project-title-repo">repo</span></h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tech"><TechIcons techs={project.tech} /></div>
        <div className="project-actions">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm" onClick={(e) => e.stopPropagation()}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
              Ver página web
            </a>
          )}
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className={`${project.demo ? 'btn-outline' : 'btn-primary'} btn-sm`} onClick={(e) => e.stopPropagation()}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            Ver repositorio
          </a>
        </div>
      </div>
    </div>
  )
}

function getProjectImage(project) {
  if (project.image) {
    return project.image
  }
  if (project.demo) {
    return `https://image.thum.io/get/width/900/${project.demo}`
  }
  return `https://picsum.photos/seed/${slugify(project.name)}/800/800`
}

export default function Projects() {
  const [ref, visible] = useScrollReveal(0.1)

  // Map the 14 selected projects into Coverflow slides
  const slides = mainProjects.map((p) => ({
    src: getProjectImage(p),
    alt: p.name,
    title: p.name,
    subtitle: p.desc,
    link: `${PROJECT_ROUTE_PREFIX}${slugify(p.name)}`,
    demo: p.demo,
    meta: [
      { label: 'Categoría', value: categoryLabels[p.category] || p.category },
      { label: 'Tecnologías', value: (p.tech || []).slice(0, 3).join(', ') },
    ],
  }))

  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`}>
          <h2 className="section-title">Proyectos en producción</h2>
          <p className="section-subtitle">
            Desliza o arrastra para explorar los proyectos y aplicaciones desarrolladas.
          </p>
        </div>
      </div>

      <div className="projects-coverflow-wrapper">
        <CoverflowCarousel
          slides={slides}
          rotate={44}
          depth={0.6}
          perspective={3}
          falloff={0.56}
          fade={0.1}
          cardWidth="clamp(220px, 26vw, 340px)"
          gap={0.08}
          loop={true}
          showCaption={true}
          showPagination={true}
          showNavigation={true}
        />
      </div>
    </section>
  )
}
