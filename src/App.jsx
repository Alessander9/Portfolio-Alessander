import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import WhatsAppButton from './components/WhatsAppButton'
import WelcomeScreen from './components/WelcomeScreen'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WebSites from './components/WebSites'
import BentoGrid from './components/BentoGrid'
import ProjectPage from './components/ProjectPage'
import ServicesPage from './components/ServicesPage'
import Footer from './components/Footer'
import { PROJECT_ROUTE_PREFIX, SITE_TITLE } from './data/projects'

export const SERVICES_ROUTE = '#/servicios'
export const PRODUCTS_ROUTE = '#/productos'

function getRoute() {
  const hash = window.location.hash
  if (
    hash === SERVICES_ROUTE ||
    hash.startsWith('#/servicios') ||
    hash === PRODUCTS_ROUTE ||
    hash.startsWith('#/productos')
  ) {
    return { view: 'services' }
  }
  if (hash.startsWith(PROJECT_ROUTE_PREFIX)) {
    try {
      return {
        view: 'project',
        slug: decodeURIComponent(hash.slice(PROJECT_ROUTE_PREFIX.length)),
      }
    } catch {
      return { view: 'home' }
    }
  }
  return { view: 'home' }
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const [showWelcome, setShowWelcome] = useState(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('welcome_dismissed')) return false
    const v = getRoute().view
    return v !== 'project' && v !== 'services'
  })
  const prevViewRef = useRef(route.view)

  useEffect(() => {
    const onHashChange = () => {
      const next = getRoute()
      setRoute(next)
      if (next.view === 'project' || next.view === 'services') setShowWelcome(false)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Scroll + title handling on route changes
  useEffect(() => {
    const prev = prevViewRef.current
    prevViewRef.current = route.view

    if (route.view === 'project' || route.view === 'services') {
      window.scrollTo(0, 0)
      return
    }

    document.title = SITE_TITLE
    // When coming back from a subpage, the sections were unmounted,
    // so the browser cannot do the native anchor scroll: do it manually.
    if (prev === 'project' || prev === 'services') {
      const hash = window.location.hash
      if (hash && !hash.startsWith('#/')) {
        requestAnimationFrame(() => {
          const el = document.querySelector(hash)
          if (el) el.scrollIntoView()
        })
      } else {
        window.scrollTo(0, 0)
      }
    }
  }, [route])

  const dismissWelcome = () => {
    setShowWelcome(false)
    const hash = window.location.hash
    if (hash && !hash.startsWith('#/')) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView()
      })
    }
  }

  if (route.view === 'services') {
    return (
      <>
        <Navbar />
        <main>
          <ServicesPage />
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    )
  }

  if (route.view === 'project') {
    return (
      <>
        <Navbar />
        <main>
          <ProjectPage key={route.slug} slug={route.slug} />
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    )
  }

  if (showWelcome) {
    return <WelcomeScreen onDismiss={dismissWelcome} />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <WebSites />
        <div className="section-divider" />
        {/* <Skills />
        <div className="section-divider" /> */}
        <BentoGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
