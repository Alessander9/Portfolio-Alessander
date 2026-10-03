import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import WhatsAppButton from './components/WhatsAppButton'
import LoadingScreen from './components/LoadingScreen'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WebSites from './components/WebSites'
import BentoGrid from './components/BentoGrid'
import ProjectPage from './components/ProjectPage'
import ServicesPage from './components/ServicesPage'
import ServiceDetailPage from './components/ServiceDetailPage'
import SitePolicy from './components/SitePolicy'
import SiteTerms from './components/SiteTerms'
import NotFoundPage from './components/NotFoundPage'
import SiteConsent from './components/SiteConsent'
import Footer from './components/Footer'
import { PROJECT_ROUTE_PREFIX, SITE_TITLE } from './data/projects'
import { SERVICES_ROUTE_PREFIX } from './data/servicesData'

export const SERVICES_ROUTE = '#/servicios'
export const PRODUCTS_ROUTE = '#/productos'
export const PRIVACY_ROUTE = '#/privacidad'
export const TERMS_ROUTE = '#/terminos'

function getRoute() {
  const hash = window.location.hash
  
  if (!hash || hash === '#' || hash === '#inicio' || !hash.startsWith('#/')) {
    return { view: 'home' }
  }

  if (hash === PRIVACY_ROUTE) {
    return { view: 'privacy' }
  }

  if (hash === TERMS_ROUTE) {
    return { view: 'terms' }
  }

  if (hash.startsWith(SERVICES_ROUTE_PREFIX)) {
    try {
      const id = decodeURIComponent(hash.slice(SERVICES_ROUTE_PREFIX.length))
      if (id) return { view: 'service-detail', id }
    } catch {
      return { view: 'services' }
    }
  }

  if (hash.startsWith('#/servicios/')) {
    try {
      const id = decodeURIComponent(hash.slice('#/servicios/'.length))
      if (id) return { view: 'service-detail', id }
    } catch {
      return { view: 'services' }
    }
  }

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

  return { view: 'not-found' }
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const [showLoading, setShowLoading] = useState(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('portfolio_preloader_seen')) return false
    const v = getRoute().view
    return v === 'home'
  })
  const prevViewRef = useRef(route.view)

  useEffect(() => {
    const onHashChange = () => {
      const next = getRoute()
      setRoute(next)
      if (next.view !== 'home') {
        setShowLoading(false)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Scroll + title handling on route changes
  useEffect(() => {
    const prev = prevViewRef.current
    prevViewRef.current = route.view

    if (route.view !== 'home') {
      window.scrollTo(0, 0)
      return
    }

    document.title = SITE_TITLE
    if (prev !== 'home') {
      const hash = window.location.hash
      if (hash && !hash.startsWith('#/')) {
        requestAnimationFrame(() => {
          const el = document.querySelector(hash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }, [route])

  const renderContent = () => {
    if (route.view === 'privacy') {
      return <SitePolicy />
    }

    if (route.view === 'terms') {
      return <SiteTerms />
    }

    if (route.view === 'not-found') {
      return <NotFoundPage />
    }

    if (route.view === 'service-detail') {
      return <ServiceDetailPage key={route.id} serviceId={route.id} />
    }

    if (route.view === 'services') {
      return <ServicesPage />
    }

    if (route.view === 'project') {
      return <ProjectPage key={route.slug} slug={route.slug} />
    }

    return (
      <>
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
      </>
    )
  }

  return (
    <>
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      <Navbar />
      <main id="main-content" tabIndex="-1">
        {renderContent()}
      </main>
      <Footer />
      <WhatsAppButton />
      <SiteConsent />
    </>
  )
}

export default App
