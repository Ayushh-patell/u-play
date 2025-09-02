import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import WaveDivider from '../components/shared/WaveDivider.jsx'

function About() {
  const textRef = useRef(null)

  useEffect(() => {
    if (!textRef.current) return
    const bubbles = Array.from(textRef.current.querySelectorAll('.bubble-small'))
    bubbles.forEach((b, i) => {
      gsap.to(b, { y: -10 - Math.random() * 8, yoyo: true, repeat: -1, duration: 1.6 + Math.random(), ease: 'sine.inOut', delay: i * 0.1 })
    })
  }, [])

  return (
    <div>
      <section className="section-padding" style={{ background: 'radial-gradient(800px 600px at 10% 10%, rgba(0,194,209,0.15), transparent 60%), linear-gradient(180deg, #003847 0%, #004c5f 100%)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div className="ocean-card" style={{ height: 160, borderRadius: 16, background: 'url(https://images.unsplash.com/photo-1541971129-2b590ea1a399?q=80&w=1200&auto=format&fit=crop) center/cover' }} />
            <div className="ocean-card" style={{ height: 220, borderRadius: 16, background: 'url(https://images.unsplash.com/photo-1520975867597-0af37a22e31f?q=80&w=1200&auto=format&fit=crop) center/cover' }} />
            <div className="ocean-card" style={{ height: 220, borderRadius: 16, background: 'url(https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1200&auto=format&fit=crop) center/cover' }} />
            <div className="ocean-card" style={{ height: 160, borderRadius: 16, background: 'url(https://images.unsplash.com/photo-1502462041640-b3d7e50d0669?q=80&w=1200&auto=format&fit=crop) center/cover' }} />
          </div>
          <div ref={textRef} style={{ position: 'relative' }}>
            <h2 className="baloo" style={{ fontSize: 42, marginTop: 0 }}>About Us</h2>
            <p style={{ opacity: 0.9 }}>
              U-Play brings the ocean of fun indoors – safe, creative and exciting play zones for all ages.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
              {['Safety', 'Fitness', 'Fun', 'Creativity'].map((v, i) => (
                <div key={i} className="ocean-card" style={{ padding: '10px 16px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span className="bubble-small" style={{ width: 12, height: 12, borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.05) 70%, transparent 72%)' }} />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wave-divider" aria-hidden>
        <WaveDivider />
      </div>
    </div>
  )
}

export default About

