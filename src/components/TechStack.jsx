import { useScrollReveal } from '../hooks/useScrollReveal'
import { SiReact, SiAngular, SiTailwindcss, SiTypescript, SiJavascript, SiDotnet, SiSpringboot } from 'react-icons/si'
import LogoLoop from './LogoLoop'
import './TechStack.css'

const techLogos = [
  {
    node: <SiReact />,
    title: 'React',
    href: 'https://react.dev',
    color: '#61DAFB',
  },
  {
    node: <SiAngular />,
    title: 'Angular',
    href: 'https://angular.dev',
    color: '#DD0031',
  },
  {
    node: <SiTypescript />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    color: '#3178C6',
  },
  {
    node: <SiJavascript />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    color: '#F7DF1E',
  },
  {
    node: <SiTailwindcss />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    color: '#06B6D4',
  },
  {
    node: <SiSpringboot />,
    title: 'Spring Boot',
    href: 'https://spring.io/projects/spring-boot',
    color: '#6DB33F',
  },
  {
    node: <SiDotnet />,
    title: '.NET',
    href: 'https://dotnet.microsoft.com',
    color: '#512BD4',
  },
]

export default function TechStack() {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section className="techstack">
      <div className="container">
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`}>
          <h2 className="section-title">Tecnologías que uso</h2>
          <p className="section-subtitle">
            Herramientas modernas para construir soluciones escalables.
          </p>
        </div>

      </div>

      <div className="techstack-loop-wrapper">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={56}
          hoverSpeed={15}
          scaleOnHover
          fadeOut
          fadeOutColor="#0b0b10"
          ariaLabel="Tecnologías del portafolio"
          renderItem={(item) =>
            item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer noopener" className="logoloop__link">
                <span className="logoloop__node" style={{ color: item.color }}>
                  {item.node}
                </span>
              </a>
            ) : (
              <span className="logoloop__node" style={{ color: item.color }}>
                {item.node}
              </span>
            )
          }
        />
      </div>

    </section>
  )
}
