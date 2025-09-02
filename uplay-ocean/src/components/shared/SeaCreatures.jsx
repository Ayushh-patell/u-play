import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function SeaCreatures() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const fishes = ref.current.querySelectorAll('.fish')
    fishes.forEach((fish, i) => {
      const duration = 20 + Math.random() * 20
      gsap.fromTo(
        fish,
        { x: -200, y: Math.random() * window.innerHeight * 0.6 + 40, opacity: 0.7 + Math.random() * 0.3 },
        { x: window.innerWidth + 200, duration, ease: 'none', repeat: -1, delay: i * 2 }
      )
    })
  }, [])

  return (
    <div ref={ref} style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }} aria-hidden>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="fish" style={{ position: 'absolute', left: -200, top: 0, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))' }}>
          <svg width="80" height="40" viewBox="0 0 100 50">
            <ellipse cx="40" cy="25" rx="28" ry="16" fill="rgba(255,255,255,0.15)" />
            <polygon points="60,25 90,10 90,40" fill="rgba(255,255,255,0.18)"/>
            <circle cx="30" cy="22" r="3" fill="#e6ffff" />
          </svg>
        </div>
      ))}
    </div>
  )
}

export default SeaCreatures

