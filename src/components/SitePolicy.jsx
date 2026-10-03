import { useEffect } from 'react'
import './LegalPages.css'

export default function SitePolicy() {
  useEffect(() => {
    document.title = 'Política de Privacidad | alessanderdev.com'
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
        <h1 className="legal-title">Política de Privacidad</h1>
        <p className="legal-updated">Última actualización: 3 de Octubre de 2026</p>
      </header>

      <div className="legal-body">
        <section className="legal-section">
          <h2>1. Responsable del Tratamiento de Datos</h2>
          <p>
            En cumplimiento de la legislación de protección de datos aplicable (incluyendo la Ley N° 29733 de Protección de Datos Personales de Perú y estándares internacionales GDPR), el titular de este sitio web es <strong>Luis Alexander Fernandez Paz</strong>, con domicilio en Lima, Perú, y correo electrónico de contacto: <strong>alessander991@gmail.com</strong> (en adelante, "alessanderdev.com").
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Datos Personales que se Recopilan</h2>
          <p>
            A través de los formularios de contacto, cotización o enlaces directos a WhatsApp, se podrán recopilar los siguientes datos de forma voluntaria:
          </p>
          <ul>
            <li>Nombre y apellidos o razón social de tu empresa.</li>
            <li>Correo electrónico y número de teléfono / WhatsApp.</li>
            <li>Detalles y requerimientos técnicos del proyecto que deseas cotizar.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Finalidad del Tratamiento</h2>
          <p>Los datos facilitados son utilizados exclusivamente para:</p>
          <ul>
            <li>Responder a tus consultas, solicitudes de presupuesto o propuestas de desarrollo.</li>
            <li>Coordinar reuniones, entregas y soporte de los servicios contratados.</li>
            <li>Enviar información relevante sobre el estado de tus proyectos o actualizaciones del servicio.</li>
          </ul>
          <p>
            <strong>Garantía de Privacidad:</strong> En ningún caso tus datos serán vendidos, cedidos ni compartidos con terceros con fines publicitarios o comerciales sin tu consentimiento previo y expreso.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Uso de Cookies y Métricas Anónimas</h2>
          <p>
            Este sitio web puede utilizar cookies técnicas necesarias para el correcto funcionamiento del portal y herramientas de analítica anónima para medir el rendimiento, visitas y mejorar la experiencia de usuario. Puedes configurar o desactivar las cookies en tu navegador en cualquier momento.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h2>
          <p>
            Tienes derecho a acceder a tus datos personales, rectificarlos si son inexactos, solicitar su supresión o limitar su tratamiento. Para ejercer tus derechos, puedes enviar un correo electrónico a <strong>alessander991@gmail.com</strong> con el asunto "Protección de Datos".
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Seguridad y Confidencialidad</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas (conexión segura HTTPS con cifrado SSL/TLS, protección de cabeceras HTTP y almacenamiento seguro) para evitar la alteración, pérdida o acceso no autorizado a la información.
          </p>
        </section>
      </div>
    </div>
  )
}
