import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WaveDivider from '../components/shared/WaveDivider.jsx'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const octoRef = useRef(null)
  const heroRef = useRef(null)
  const iconsRef = useRef(null)

  useEffect(() => {
    if (!octoRef.current) return
    const tentacles = octoRef.current.querySelectorAll('.tentacle')
    gsap.to(tentacles, { rotate: 6, transformOrigin: 'top left', yoyo: true, repeat: -1, duration: 2.2, stagger: 0.2, ease: 'sine.inOut' })
    gsap.to(octoRef.current, { y: -8, yoyo: true, repeat: -1, duration: 2.4, ease: 'sine.inOut' })
  }, [])

  useEffect(() => {
    if (!iconsRef.current) return
    gsap.fromTo(iconsRef.current.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)', scrollTrigger: { trigger: iconsRef.current, start: 'top 85%' } })
    // Parallax: slight move on scroll
    gsap.to(heroRef.current, { yPercent: -6, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', scrub: true } })
  }, [])

  const handleRipple = (e) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const ripple = document.createElement('span')
    const size = Math.max(rect.width, rect.height) * 1.2
    ripple.className = 'ripple'
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${e.clientX - rect.left}px`
    ripple.style.top = `${e.clientY - rect.top}px`
    button.appendChild(ripple)
    gsap.fromTo(ripple, { scale: 0, opacity: 0.7 }, { scale: 1, opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: () => ripple.remove() })
  }

  return (
    <div>
      {/* Hero */}
      <section className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24, alignItems: 'center' }}>
          <div ref={heroRef} style={{ display: 'grid', gap: 16 }}>
            <h1 className="baloo" style={{ fontSize: 54, lineHeight: 1, margin: 0 }}>
              Dive into <span style={{ color: 'var(--aqua)' }}>Fun</span> at U-Play
            </h1>
            <p style={{ opacity: 0.9, maxWidth: 580 }}>
              Splash into an Aqua Ocean Adventure with trampolines, slides, arcades and endless smiles. Safe, creative and exciting for all ages!
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn coral" onMouseMove={handleRipple}>Book Now</Link>
              <Link to="/about" className="btn deep" onMouseMove={handleRipple}>Plan Your Visit</Link>
            </div>
          </div>

          {/* Octopus illustration */}
          <div ref={octoRef} style={{ position: 'relative', justifySelf: 'center' }} aria-hidden>
            <svg width="360" height="360" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="octoBody" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#8df5ff" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#00C2D1" stopOpacity="1"/>
                </radialGradient>
              </defs>
              <circle cx="200" cy="170" r="90" fill="url(#octoBody)" />
              {[...Array(6)].map((_, i) => (
                <path key={i} className="tentacle" d={`M ${80 + i*40} 220 C ${100 + i*40} 300, ${60 + i*40} 350, ${100 + i*40} 380`} stroke="#00C2D1" strokeWidth="18" strokeLinecap="round" fill="none" opacity="0.8" />
              ))}
              <circle cx="175" cy="160" r="12" fill="#03222a" />
              <circle cx="225" cy="160" r="12" fill="#03222a" />
              <circle cx="170" cy="155" r="5" fill="#8df5ff" />
              <circle cx="220" cy="155" r="5" fill="#8df5ff" />
              <path d="M175 195 Q200 210 225 195" stroke="#03222a" strokeWidth="6" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      <div className="wave-divider" aria-hidden>
        <WaveDivider />
      </div>

      {/* Icon cards */}
      <section className="section-padding">
        <div ref={iconsRef} className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { title: 'Indoor Playground', color: 'var(--sand)' },
            { title: 'Trampoline Park', color: 'var(--aqua)' },
            { title: 'Birthday Parties', color: 'var(--coral)' },
            { title: 'Café', color: 'white' },
          ].map((item, idx) => (
            <div key={idx} className="ocean-card" style={{ padding: 18, textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>🌊</div>
              <div className="baloo" style={{ color: item.color, fontWeight: 700 }}>{item.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

