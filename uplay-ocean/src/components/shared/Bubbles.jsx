import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Bubbles({ count = 16 }) {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!rootRef.current) return
    const container = rootRef.current
    const bubbles = Array.from(container.querySelectorAll('.bubble'))
    const timelines = bubbles.map((bubble, i) => {
      const size = 8 + Math.random() * 18
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`
      bubble.style.left = `${Math.random() * 100}%`
      bubble.style.opacity = 0.15 + Math.random() * 0.35
      return gsap.timeline({ repeat: -1, repeatDelay: Math.random() * 2 })
        .fromTo(bubble, { y: 20 + Math.random() * 80 }, { y: -window.innerHeight - 80, duration: 8 + Math.random() * 6, ease: 'none' })
        .fromTo(bubble, { x: 0 }, { x: (Math.random() - 0.5) * 80, duration: 3 + Math.random() * 3, yoyo: true, repeat: -1, ease: 'sine.inOut' }, 0)
    })
    return () => { timelines.forEach(tl => tl.kill()) }
  }, [])

  return (
    <div ref={rootRef} style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="bubble" style={{ position: 'absolute', bottom: -40, display: 'block', background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.05) 70%, transparent 72%)', borderRadius: '50%', filter: 'blur(0.2px)' }} />
      ))}
    </div>
  )
}

export default Bubbles

