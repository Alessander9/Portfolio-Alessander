import { useForm } from '@formspree/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

const socialLinks = [
  {
    href: 'mailto:tuemail@ejemplo.com',
    label: 'Email',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/51999999999/?text=Hola%20Luis%2C%20tengo%20un%20proyecto%20en%20mente',
    label: 'WhatsApp',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/',
    label: 'LinkedIn',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/Alessander9',
    label: 'GitHub',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [ref, visible] = useScrollReveal()
  const [state, handleSubmit] = useForm('YOUR_FORM_ID')

  if (state.succeeded) {
    return (
      <section id="contacto" className="contact">
        <div className="container">
          <div ref={ref} className={`contact-box${visible ? ' reveal visible' : ' reveal'}`}>
            <div className="contact-info">
              <h2>Hablemos</h2>
              <p>Respóndeme con tu idea y te propongo una solución clara.</p>
              <div className="contact-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-form">
              <div className="form-success">
                <div className="form-success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarme. Te responderé pronto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div ref={ref} className={`contact-box${visible ? ' reveal visible' : ' reveal'}`}>
          <div className="contact-info">
            <h2>Hablemos</h2>
            <p>Respóndeme con tu idea y te propongo una solución clara.</p>
            <div className="contact-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary form-submit-btn"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <>
                    <span className="btn-spinner" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                    Enviar mensaje
                  </>
                )}
              </button>
              {state.errors && (
                <p className="form-error">
                  Hubo un error al enviar el mensaje. ¿Puedes intentar de nuevo?
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
