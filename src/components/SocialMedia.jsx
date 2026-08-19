import { useState, useEffect, useRef } from 'react'
import { SocialPreviewDock } from './ui/social-preview-dock'
import './SocialMedia.css'

export default function SocialMedia() {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY <= 80) {
        // En la parte superior del Hero: siempre visible
        setVisible(true)
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Al hacer scroll hacia abajo: desaparece
        setVisible(false)
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Al hacer scroll hacia arriba: aparece
        setVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
