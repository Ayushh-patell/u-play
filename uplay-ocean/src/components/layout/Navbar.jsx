import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const barRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!barRef.current) return
    gsap.fromTo(
      barRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.8)' }
    )
  }, [])

  return (
    <header ref={barRef} style={{ position: 'sticky', top: 0, zIndex: 30, backdropFilter: 'blur(8px)' }}>
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span className="baloo" style={{ fontSize: 26, fontWeight: 700 }}>U-Play</span>
          <span style={{ fontSize: 12, letterSpacing: 2, padding: '2px 8px', borderRadius: 999, background: 'rgba(0,194,209,0.18)', color: '#8df5ff' }}>Aqua</span>
        </Link>

        <button aria-label="menu" onClick={() => setMenuOpen(v => !v)} className="btn deep" style={{ display: 'none' }}>
          Menu
        </button>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'link-active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'link-active' : ''}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'link-active' : ''}>Services</NavLink>
          <NavLink to="/party-rooms" className={({ isActive }) => isActive ? 'link-active' : ''}>Party Rooms</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'link-active' : ''}>Contact</NavLink>
          <Link to="/contact" className="btn" style={{ marginLeft: 6 }}>Book Now</Link>
        </div>
      </nav>

      {/* Mobile nav, simple hidden for now; could expand later */}
      {menuOpen && (
        <div className="container" style={{ paddingBottom: 16 }}>
          <div className="ocean-card" style={{ padding: 16, display: 'grid', gap: 10 }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/party-rooms">Party Rooms</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/contact" className="btn">Book Now</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

