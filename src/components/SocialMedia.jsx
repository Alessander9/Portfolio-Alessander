import { useState, useEffect, useRef } from 'react'
import { SocialPreviewDock } from './ui/social-preview-dock'
import './SocialMedia.css'

export default function SocialMedia() {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const checkVisibility = () => {
      const heroEl = document.getElementById('inicio')
      if (!heroEl) {
        setVisible(false)
        return
      }
      const rect = heroEl.getBoundingClientRect()
      // Solo visible mientras el usuario se encuentre en la sección Hero
      setVisible(rect.bottom > 140)
    }

    checkVisibility()
    window.addEventListener('scroll', checkVisibility, { passive: true })
    window.addEventListener('resize', checkVisibility, { passive: true })
    window.addEventListener('hashchange', checkVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', checkVisibility)
      window.removeEventListener('resize', checkVisibility)
      window.removeEventListener('hashchange', checkVisibility)
    }
  }, [])

  return (
    <div
      className={`hero-social-dock-container ${visible ? 'is-visible' : 'is-hidden'}`}
      aria-label="Redes sociales"
    >
      <SocialPreviewDock
        orientation="horizontal"
        email="alessander991@gmail.com"
        profile={{
          username: "Alessander9",
          xHandle: "AlessanderDev",
          name: "Luis Alexander Fernandez Paz",
          headline: "Desarrollador Full-Stack & Mobile",
          location: "Lima, Perú",
          bio: "Desarrollo soluciones web, sistemas y apps para negocios.",
          avatar: "https://github.com/Alessander9.png",
          links: {
            github: "https://github.com/Alessander9",
            linkedin: "https://www.linkedin.com/in/alexanderfp91/",
            x: "https://x.com/",
          },
        }}
        bannerColors={{
          linkedin: ["#0f172a", "#1e1b4b", "#00e676", "#3b82f6"],
          x: ["#18181b", "#7c3aed", "#ec4899", "#00e676"],
        }}
      />
    </div>
  )
}
