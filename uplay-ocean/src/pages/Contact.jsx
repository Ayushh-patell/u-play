import { useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const shellIcon = new L.DivIcon({
  className: 'shell-marker',
  html: '<div style="font-size:24px">🐚</div>',
  iconSize: [24, 24],
  iconAnchor: [12, 24]
})

function Contact() {
  const center = useMemo(() => [51.505, -0.09], [])

  return (
    <section className="section-padding" style={{ background: 'radial-gradient(800px 600px at -20% 50%, rgba(0,194,209,0.12), transparent 60%)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 16, alignItems: 'start' }}>
        <div className="ocean-card" style={{ padding: 18 }}>
          <h3 className="baloo" style={{ marginTop: 0 }}>Contact Us</h3>
          <form style={{ display: 'grid', gap: 10 }} onSubmit={(e) => e.preventDefault()}>
            <label>
              <div style={{ marginBottom: 4 }}>Name</div>
              <input required placeholder="Your name" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', color: 'white' }} />
            </label>
            <label>
              <div style={{ marginBottom: 4 }}>Email</div>
              <input type="email" required placeholder="you@example.com" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', color: 'white' }} />
            </label>
            <label>
              <div style={{ marginBottom: 4 }}>Message</div>
              <textarea rows="4" placeholder="Tell us about your visit or party" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', color: 'white', resize: 'vertical' }} />
            </label>
            <button className="btn coral" type="submit">Send Message</button>
          </form>
        </div>
        <div className="ocean-card" style={{ height: 420, overflow: 'hidden' }}>
          <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center} icon={shellIcon}>
              <Popup>U-Play</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  )
}

export default Contact

