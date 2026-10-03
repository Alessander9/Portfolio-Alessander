import React, { useState, useEffect, useRef, Suspense, lazy } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import WhatsAppButton from './components/WhatsAppButton'
import LoadingScreen from './components/LoadingScreen'
import Projects from './components/Projects'
import WebSites from './components/WebSites'
import BentoGrid from './components/BentoGrid'
import SiteConsent from './components/SiteConsent'
import Footer from './components/Footer'
import { PROJECT_ROUTE_PREFIX, SITE_TITLE } from './data/projects'
import { SERVICES_ROUTE_PREFIX } from './data/servicesData'

// ── Lazy Loaded Subpages for Optimal Initial Bundle Size ──
const ProjectPage = lazy(() => import('./components/ProjectPage'))
const ServicesPage = lazy(() => import('./components/ServicesPage'))
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage'))
const SitePolicy = lazy(() => import('./components/SitePolicy'))
const SiteTerms = lazy(() => import('./components/SiteTerms'))
const NotFoundPage = lazy(() => import('./components/NotFoundPage'))

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

function SubpageLoader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#00E676',
      fontFamily: 'sans-serif',
      fontSize: '0.9rem',
      letterSpacing: '0.05em'
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        border: '2px solid rgba(0, 230, 118, 0.2)',
        borderTopColor: '#00E676',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
    </div>
  )
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const [showLoading, setShowLoading] = useState(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('portfolio_preloader_seen')) return false
    const v = getRoute().view
    return v === 'home'
  })
  const prevViewRef = useRef(route.view)

  // ── Initialize Lenis Smooth Inertia Scroll ──
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
      infinite: false,
    })

    window.__lenis = lenis

    let reqId
    function raf(time) {
      lenis.raf(time)
      reqId = requestAnimationFrame(raf)
    }

    reqId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(reqId)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])

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
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
      return
    }

    document.title = SITE_TITLE
    if (prev !== 'home') {
      const hash = window.location.hash
      if (hash && !hash.startsWith('#/')) {
        requestAnimationFrame(() => {
          if (window.__lenis) {
            window.__lenis.scrollTo(hash, { duration: 1.2 })
          } else {
            const el = document.querySelector(hash)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }
        })
      } else {
        if (window.__lenis) {
          window.__lenis.scrollTo(0, { immediate: false, duration: 1 })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }
  }, [route])

  const renderContent = () => {
    if (route.view === 'privacy') {
      return (
        <Suspense fallback={<SubpageLoader />}>
          <SitePolicy />
        </Suspense>
      )
    }

    if (route.view === 'terms') {
      return (
        <Suspense fallback={<SubpageLoader />}>
          <SiteTerms />
        </Suspense>
      )
    }

    if (route.view === 'not-found') {
      return (
        <Suspense fallback={<SubpageLoader />}>
          <NotFoundPage />
        </Suspense>
      )
    }

    if (route.view === 'service-detail') {
      return (
        <Suspense fallback={<SubpageLoader />}>
          <ServiceDetailPage key={route.id} serviceId={route.id} />
        </Suspense>
      )
    }

    if (route.view === 'services') {
      return (
        <Suspense fallback={<SubpageLoader />}>
          <ServicesPage />
        </Suspense>
      )
    }

    if (route.view === 'project') {
      return (
        <Suspense fallback={<SubpageLoader />}>
          <ProjectPage key={route.slug} slug={route.slug} />
        </Suspense>
      )
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
