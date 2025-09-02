import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Bubbles from './components/shared/Bubbles.jsx'
import SeaCreatures from './components/shared/SeaCreatures.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Party from './pages/Party.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="page-container">
      <div className="ocean-background" aria-hidden>
        <div className="ocean-layer ocean-waves"></div>
        <div className="ocean-layer ocean-waves-2"></div>
      </div>
      <SeaCreatures />
      <Bubbles count={22} />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/party-rooms" element={<Party />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
