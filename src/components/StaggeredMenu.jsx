import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './StaggeredMenu.css'

const NAV_ITEMS = [
  { label: 'Inicio', link: '#inicio' },
  { label: 'Proyectos', link: '#proyectos' },
  { label: 'Sitios web', link: '#proyectos-web' },
  { label: 'Servicios', link: '#/servicios' },
  // { label: 'Skills', link: '#skills' },
  { label: 'Proceso', link: '#proceso' },
]

const SOCIAL_ITEMS = [
  { label: 'GitHub', link: 'https://github.com/Alessander9' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/' },
  { label: 'Email', link: 'mailto:tuemail@ejemplo.com' },
]

export default function StaggeredMenu() {
  const [open, setOpen] = useState(false)
  const openRef = useRef(false)
  const panelRef = useRef(null)
  const preLayersRef = useRef(null)
  const preLayerElsRef = useRef([])
  const plusHRef = useRef(null)
  const plusVRef = useRef(null)
  const iconRef = useRef(null)
  const textInnerRef = useRef(null)
  const textWrapRef = useRef(null)
  const [textLines, setTextLines] = useState(['Menu', 'Close'])
  const openTlRef = useRef(null)
  const closeTweenRef = useRef(null)
  const spinTweenRef = useRef(null)
  const textCycleAnimRef = useRef(null)
  const colorTweenRef = useRef(null)
  const toggleBtnRef = useRef(null)
  const busyRef = useRef(false)
  const [inHero, setInHero] = useState(true)

  useEffect(() => {
    const checkHero = () => {
      const heroEl = document.getElementById('inicio')
      if (!heroEl) {
        setInHero(false)
        return
      }
      const rect = heroEl.getBoundingClientRect()
      // Visible when the bottom of hero is still visible near top of screen
      setInHero(rect.bottom > 90)
    }

    checkHero()
    window.addEventListener('scroll', checkHero, { passive: true })
    window.addEventListener('hashchange', checkHero, { passive: true })
    window.addEventListener('resize', checkHero, { passive: true })

    return () => {
      window.removeEventListener('scroll', checkHero)
      window.removeEventListener('hashchange', checkHero)
      window.removeEventListener('resize', checkHero)
    }
  }, [])

  const position = 'right'
  const colors = [
    'linear-gradient(135deg, #14141e 0%, #1d1d2a 100%)',
    'linear-gradient(135deg, rgba(124, 58, 237, 0.95) 0%, rgba(59, 130, 246, 0.9) 100%)',
    'linear-gradient(135deg, rgba(0, 230, 118, 0.95) 0%, rgba(34, 197, 94, 0.9) 100%)',
  ]
  const menuButtonColor = '#f3f4f6'
  const openMenuButtonColor = '#00e676'
  const accentColor = '#00e676'

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current
      const preContainer = preLayersRef.current
      const plusH = plusHRef.current
      const plusV = plusVRef.current
      const icon = iconRef.current
      const textInner = textInnerRef.current
      if (!panel || !plusH || !plusV || !icon || !textInner) return

      let preLayers = []
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'))
      }
      preLayerElsRef.current = preLayers

      const offscreen = position === 'left' ? -100 : 100
      gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 })
      if (preContainer) {
        gsap.set(preContainer, { xPercent: 0, opacity: 1 })
      }
      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 })
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 })
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' })
      gsap.set(textInner, { yPercent: 0 })
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor })
    })
    return () => ctx.revert()
  }, [menuButtonColor, position])

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return null

    openTlRef.current?.kill()
    if (closeTweenRef.current) {
      closeTweenRef.current.kill()
      closeTweenRef.current = null
    }

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'))
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'))
    const socialTitle = panel.querySelector('.sm-socials-title')
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'))
    const offscreen = position === 'left' ? -100 : 100
    const layerStates = layers.map(el => ({ el, start: offscreen }))
    const panelStart = offscreen

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 })
    if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 })
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 })
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 })

    const tl = gsap.timeline({ paused: true })

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07)
    })

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0)
    const panelDuration = 0.65

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    )

    if (itemEls.length) {
      const itemsStartRatio = 0.15
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio
      tl.to(itemEls, { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } }, itemsStart)
      if (numberEls.length) {
        tl.to(numberEls, { duration: 0.6, ease: 'power2.out', '--sm-num-opacity': 1, stagger: { each: 0.08, from: 'start' } }, itemsStart + 0.1)
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4
      if (socialTitle) {
        tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart)
      }
      if (socialLinks.length) {
        tl.to(socialLinks, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', stagger: { each: 0.08, from: 'start' }, onComplete: () => { gsap.set(socialLinks, { clearProps: 'opacity' }) } }, socialsStart + 0.04)
      }
    }

    openTlRef.current = tl
    return tl
  }, [])

  const playOpen = useCallback(() => {
    if (busyRef.current) return
    busyRef.current = true
    const tl = buildOpenTimeline()
    if (tl) {
      tl.eventCallback('onComplete', () => { busyRef.current = false })
      tl.play(0)
    } else {
      busyRef.current = false
    }
  }, [buildOpenTimeline])

  const playClose = useCallback(() => {
    openTlRef.current?.kill()
    openTlRef.current = null
    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return
    const all = [...layers, panel]
    closeTweenRef.current?.kill()
    const offscreen = position === 'left' ? -100 : 100
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'))
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 })
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'))
        if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 })
        const socialTitle = panel.querySelector('.sm-socials-title')
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'))
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 })
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 })
        busyRef.current = false
      }
    })
  }, [position])

  const animateIcon = useCallback(opening => {
    const icon = iconRef.current
    if (!icon) return
    spinTweenRef.current?.kill()
    if (opening) {
      spinTweenRef.current = gsap.to(icon, { rotate: 225, duration: 0.8, ease: 'power4.out', overwrite: 'auto' })
    } else {
      spinTweenRef.current = gsap.to(icon, { rotate: 0, duration: 0.35, ease: 'power3.inOut', overwrite: 'auto' })
    }
  }, [])

  const animateColor = useCallback(opening => {
    const btn = toggleBtnRef.current
    if (!btn) return
    colorTweenRef.current?.kill()
    const targetColor = opening ? openMenuButtonColor : menuButtonColor
    colorTweenRef.current = gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' })
  }, [openMenuButtonColor, menuButtonColor])

  const animateText = useCallback(opening => {
    const inner = textInnerRef.current
    if (!inner) return
    textCycleAnimRef.current?.kill()
    const currentLabel = opening ? 'Menu' : 'Close'
    const targetLabel = opening ? 'Close' : 'Menu'
    const cycles = 3
    const seq = [currentLabel]
    let last = currentLabel
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu'
      seq.push(last)
    }
    if (last !== targetLabel) seq.push(targetLabel)
    seq.push(targetLabel)
    setTextLines(seq)
    gsap.set(inner, { yPercent: 0 })
    const lineCount = seq.length
    const finalShift = ((lineCount - 1) / lineCount) * 100
    textCycleAnimRef.current = gsap.to(inner, { yPercent: -finalShift, duration: 0.5 + lineCount * 0.07, ease: 'power4.out' })
  }, [])

  const toggleMenu = useCallback(() => {
    const target = !openRef.current
    openRef.current = target
    setOpen(target)
    if (target) {
      playOpen()
    } else {
      playClose()
    }
    animateIcon(target)
    animateColor(target)
    animateText(target)
  }, [playOpen, playClose, animateIcon, animateColor, animateText])

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false
      setOpen(false)
      playClose()
      animateIcon(false)
      animateColor(false)
      animateText(false)
    }
  }, [playClose, animateIcon, animateColor, animateText])

  // Close on click outside
  useLayoutEffect(() => {
    if (!open) return
    const handleClickOutside = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        closeMenu()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, closeMenu])

  const handleNavClick = (e, link) => {
    closeMenu()
    if (link.startsWith('#') && !link.startsWith('#/')) {
      const targetId = link.slice(1)
      const targetEl = document.getElementById(targetId)
      if (targetEl) {
        e.preventDefault()
        targetEl.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', link)
      }
    }
  }

  return (
    <div
      className="staggered-menu-wrapper fixed-wrapper"
      style={{ '--sm-accent': accentColor }}
      data-position={position}
      data-open={open || undefined}
    >
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {colors.map((c, i) => (
          <div key={i} className="sm-prelayer" style={{ background: c }} />
        ))}
      </div>

      <header className="staggered-menu-header" aria-label="Main navigation header">
        <a
          href="#inicio"
          className={`sm-logo ${!inHero ? 'hidden-outside-hero' : ''}`}
          aria-label="Luis - Inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
        >
          <img
            src="/logoAlex.png"
            alt="Luis."
            className="sm-logo-img"
          />
        </a>

        <button
          ref={toggleBtnRef}
          className="sm-toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span ref={iconRef} className="sm-icon" aria-hidden="true">
            <span ref={plusHRef} className="sm-icon-line" />
            <span ref={plusVRef} className="sm-icon-line sm-icon-line-v" />
          </span>
          <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
            <span ref={textInnerRef} className="sm-toggle-textInner">
              {textLines.map((l, i) => (
                <span className="sm-toggle-line" key={i}>{l}</span>
              ))}
            </span>
          </span>
        </button>
      </header>

      <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" role="list" data-numbering>
            {NAV_ITEMS.map((it, idx) => (
              <li className="sm-panel-itemWrap" key={it.label + idx}>
                <a
                  className="sm-panel-item"
                  href={it.link}
                  data-index={idx + 1}
                  onClick={(e) => handleNavClick(e, it.link)}
                >
                  <span className="sm-panel-itemLabel">{it.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="sm-socials" aria-label="Social links">
            <h3 className="sm-socials-title">Redes</h3>
            <ul className="sm-socials-list" role="list">
              {SOCIAL_ITEMS.map((s, i) => (
                <li key={s.label + i} className="sm-socials-item">
                  <a href={s.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  )
}
