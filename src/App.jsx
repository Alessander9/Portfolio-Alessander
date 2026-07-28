import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import About from './components/About'
import WhatsAppButton from './components/WhatsAppButton'
import WelcomeScreen from './components/WelcomeScreen'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Production from './components/Production'
import Contact from './components/Contact'
import BentoGrid from './components/BentoGrid'
import Footer from './components/Footer'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  if (showWelcome) {
    return <WelcomeScreen onDismiss={() => setShowWelcome(false)} />
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
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Production />
        <div className="section-divider" />
        <Contact />
        <div className="section-divider" />
        <BentoGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
