import { useEffect } from 'react'
import './LegalPages.css'

export default function SiteTerms() {
  useEffect(() => {
    document.title = 'Términos y Condiciones | alessanderdev.com'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page container">
      <div className="legal-top-nav">
        <a href="#/" className="legal-back-link">
          ← Volver al inicio
        </a>
      </div>

      <header className="legal-header">
        <span className="legal-badge">Legal</span>
        <h1 className="legal-title">Términos y Condiciones de Servicio</h1>
        <p className="legal-updated">Última actualización: 3 de Octubre de 2026</p>
      </header>

      <div className="legal-body">
        <section className="legal-section">
          <h2>1. Objeto y Alcance</h2>
          <p>
            Los presentes Términos y Condiciones regulan el uso del sitio web <strong>alessanderdev.com</strong> y la contratación de los servicios de desarrollo de software, diseño web, aplicaciones móviles y soluciones de automatización prestados por <strong>Luis Alexander Fernandez Paz</strong>.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Cotizaciones y Contratación</h2>
          <p>
            Todas las propuestas comerciales y cotizaciones emitidas a través de este sitio web o canales directos (WhatsApp/Correo) tienen una validez de 15 días hábiles a menos que se estipule lo contrario. El inicio formal de un proyecto se realiza tras la confirmación de la propuesta y el abono del porcentaje acordado de anticipo.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Propiedad Intelectual y Entregables</h2>
          <ul>
            <li>
              <strong>Código y Recursos del Cliente:</strong> Una vez liquidado el 100% del pago acordado, el cliente adquiere la propiedad y derechos de uso sobre el código fuente, diseño y materiales personalizados desarrollados específicamente para su proyecto.
            </li>
            <li>
              <strong>Librerías de Código Abierto:</strong> Los proyectos pueden integrar componentes, librerías y frameworks bajo licencias permisivas (MIT, Apache 2.0, etc.).
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Garantía y Soporte Post-Entrega</h2>
          <p>
            Todos los desarrollos cuentan con un periodo de garantía de 30 días posteriores a la entrega final para la corrección gratuita de cualquier fallo técnico o desajuste derivado del desarrollo original.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Responsabilidad del Contenido</h2>
          <p>
            El cliente es el único responsable de contar con los derechos y licencias sobre las marcas, textos, imágenes, videos y productos suministrados para la construcción de su sitio web o aplicación.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Modificaciones y Ley Aplicable</h2>
          <p>
            Nos reservamos el derecho de actualizar estos términos en cualquier momento. Para la resolución de cualquier controversia, las partes se someten a la legislación vigente y jurisdicción de los tribunales de Lima, Perú.
          </p>
        </section>
      </div>
    </div>
  )
}
