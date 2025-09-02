import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { title: 'Trampoline Zone', subtitle: 'Bounce with dolphins!', emoji: '🐬', color: 'var(--aqua)' },
  { title: 'Climbing Walls', subtitle: 'Crabby climbs!', emoji: '🦀', color: 'var(--sand)' },
  { title: 'Toddler Play Area', subtitle: 'Starfish & shells', emoji: '⭐', color: 'var(--coral)' },
  { title: 'Arcade & Games', subtitle: 'Glow with jellyfish', emoji: '🪼', color: 'white' },
  { title: 'Ocean Ball Pit', subtitle: 'Swim with turtles', emoji: '🐢', color: 'var(--aqua)' },
]

function Services() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    gsap.fromTo(gridRef.current.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)', scrollTrigger: { trigger: gridRef.current, start: 'top 85%' } })
  }, [])

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="baloo" style={{ fontSize: 42, marginTop: 0 }}>Our Ocean Zones</h2>
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {services.map((s, i) => (
            <div key={i} className="ocean-card" style={{ padding: 18, position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: 38, marginBottom: 10 }}>{s.emoji}</div>
              <div className="baloo" style={{ fontWeight: 700, color: s.color }}>{s.title}</div>
              <div style={{ opacity: 0.85, marginBottom: 12 }}>{s.subtitle}</div>
              <button className="btn deep">Explore More</button>
              <div style={{ position: 'absolute', inset: -20, background: 'radial-gradient(200px 140px at 10% 110%, rgba(255,255,255,0.08), transparent)', transform: 'rotate(12deg)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

