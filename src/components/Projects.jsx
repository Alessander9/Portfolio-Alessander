import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { mainProjects, secondaryProjects, techIcons } from '../data/projects'
import './Projects.css'

const FILTERS = [
  { value: 'all', label: 'Todos' },
  { value: 'web', label: 'Web' },
  { value: 'backend', label: 'Backend' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'academico', label: 'Académico' },
]

function TechIcons({ techs }) {
  return techs.map((tech) => {
    const icon = techIcons[tech]
    return icon ? (
      <img
        key={tech}
        src={icon}
        alt={tech}
        className="tech-icon-sm"
        title={tech}
      />
    ) : (
      <span key={tech} className="skill-text-icon" title={tech}>
        {tech}
      </span>
    )
  })
}

function ProjectCard({ project }) {
  return (
    <div className="project-card" data-category={project.category}>
      <div className="project-img-wrapper">
        <img
          src={project.image}
          alt={project.name}
          className="project-img"
          loading="lazy"
        />
        <div className="project-img-overlay" />
      </div>
      <div className="project-content">
        <h3 className="project-title">
          {project.name}
          <span className="project-title-repo">repo</span>
        </h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tech">
          <TechIcons techs={project.tech} />
        </div>
        <div className="project-actions">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            Ver repositorio
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [ref, visible] = useScrollReveal(0.1)
  const [ref2, visible2] = useScrollReveal(0.1)

  const filteredMain = mainProjects.filter(
    (p) => filter === 'all' || p.category === filter
  )
  const filteredSecondary = secondaryProjects.filter(
    (p) => filter === 'all' || p.category === filter
  )

  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`}>
          <h2 className="section-title">Proyectos</h2>
          <p className="section-subtitle">
            Estos son proyectos reales y demos que muestran cómo trabajo.
          </p>
        </div>

        <div className={`filters reveal${visible ? ' visible' : ''}`}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${filter === f.value ? ' active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredMain.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="subsection-header">
          <h3>Más proyectos</h3>
          <div className="subsection-header-line" />
        </div>

        <div
          ref={ref2}
          className={`projects-grid secondary-projects reveal${visible2 ? ' visible' : ''}`}
        >
          {filteredSecondary.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
