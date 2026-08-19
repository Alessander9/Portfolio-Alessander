import React from 'react'
import { CaseStudyFlipStack } from './ui/case-study-flip-stack'
import { slugify } from '../data/projects'
import './WebSites.css'

const FLIP_ITEMS = [
  {
    eyebrow: "Streaming & Cultura Geek",
    title: "Ninja House — Contenido Geek Sin Filtros",
    description: "Portal oficial de streaming, series, videojuegos y transmisiones en vivo con arquitectura moderna en React y diseño de alto impacto visual.",
    image: "/production/ninjahouse.jpg",
    imageAlt: "Ninja House Portal Geek",
    url: "https://ninja-house-app.vercel.app/",
    slug: slugify("Ninja House"),
    background: "#151524",
    foreground: "#ffffff",
  },
  {
    eyebrow: "Análisis Deportivo & Medios",
    title: "Charla Táctica Perú — Análisis y Debate Crema",
    description: "Plataforma de periodismo deportivo y análisis táctico con pizarra interactiva, coberturas de partidos y conexión a YouTube.",
    image: "/production/charlaTactica.jpg",
    imageAlt: "Charla Táctica Perú",
    url: "https://charlatactica.vercel.app/",
    slug: slugify("Charla Táctica Perú"),
    background: "#0a2617",
    foreground: "#ffffff",
  },
  {
    eyebrow: "Comunidad & Membresías",
    title: "De las Gradas a la Cancha — Pasión Crema",
    description: "Portal comunitario con cuenta regresiva de partidos en vivo, membresías exclusivas con Supabase Auth y registro de socios.",
    image: "/production/DelasGradas.jpg",
    imageAlt: "De las Gradas a la Cancha",
    url: "https://delasgradas.vercel.app/index.html",
    slug: slugify("De las Gradas a la Cancha"),
    background: "#280b1c",
    foreground: "#ffffff",
  },
  {
    eyebrow: "Gastronomía & Restobar",
    title: "Charol Brasas y Parrillas — Fuego que se Comparte",
    description: "Landing visual para restobar con carta digital interactiva, carruseles de especialidades y módulo de reservas directas por WhatsApp.",
    image: "/production/Charol.jpg",
    imageAlt: "Charol Brasas y Parrillas",
    url: "https://charolv1-main.vercel.app/",
    slug: slugify("Charol Brasas y Parrillas"),
    background: "#2b1205",
    foreground: "#ffffff",
  },
  {
    eyebrow: "EdTech & Salud Integral",
    title: "INSTEIP — Terapias con Respaldo Internacional",
    description: "Plataforma educativa para más de 500 terapeutas certificados con campus virtual, catálogo de cursos y administración académica.",
    image: "/production/Insteip.jpg",
    imageAlt: "INSTEIP Instituto de Terapias Integrales",
    url: "https://insteip.com",
    slug: slugify("Insteip - Terapias Integrales"),
    background: "#071b36",
    foreground: "#ffffff",
  },
  {
    eyebrow: "Salud & Odontología Moderna",
    title: "VitalDent — Odontología Digital y Sin Dolor",
    description: "Sitio web para clínica dental con visualizador 3D, catálogo detallado de tratamientos y sistema de reserva de citas en línea.",
    image: "/production/VitalDent.jpg",
    imageAlt: "VitalDent Odontología Moderna",
    url: "https://dentistaweb-zeta.vercel.app/",
    slug: slugify("VitalDent Odontología"),
    background: "#08242a",
    foreground: "#ffffff",
  },
]

export default function WebSites() {
  return (
    <section id="proyectos-web" className="websites">
      <CaseStudyFlipStack
        items={FLIP_ITEMS}
        hint="Desliza para explorar"
        heading="Sitios Web en Producción."
        endLabel="¿Tienes un proyecto en mente?"
      />
    </section>
  )
}
