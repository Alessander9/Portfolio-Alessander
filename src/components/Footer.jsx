import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          Hecho con <span className="footer-heart">♥</span> por{' '}
          <strong>Luis Alexander Fernandez Paz</strong>
        </p>
        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="https://github.com/Alessander9" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
