import { useScrollReveal } from '../hooks/useScrollReveal'
import { skillsData } from '../data/projects'
import './Skills.css'

const categoryIcons = {
  Frontend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-category-icon">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path d="M8 21h8" /><path d="M12 17v4" />
    </svg>
  ),
  'Backend y BD': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-category-icon">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  Mobile: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-category-icon">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  'Cloud y Herramientas': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-category-icon">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
}

export default function Skills() {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="reveal" ref={ref}>
          <h2 className={`section-title ${visible ? 'visible' : ''}`}>
            Mis herramientas
          </h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <SkillCategory
              key={category.title}
              category={category}
              icon={categoryIcons[category.title]}
              delay={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ category, icon }) {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <div ref={ref} className={`skill-category${visible ? ' visible' : ''}`}>
      <div className="skill-category-header">
        {icon}
        <h3 className="skill-title">{category.title}</h3>
      </div>
      <div className="skill-chips">
        {category.skills.map((skill) => (
          <span key={skill.name} className="skill-chip">
            {skill.text ? (
              <span className="skill-text-icon">{skill.name.split(' ')[0]}</span>
            ) : (
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
                loading="lazy"
              />
            )}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}
