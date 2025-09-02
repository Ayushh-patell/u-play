import WaveDivider from '../shared/WaveDivider.jsx'

function Footer() {
  return (
    <footer style={{ marginTop: 60, position: 'relative' }}>
      <div className="wave-divider" aria-hidden>
        <WaveDivider flip />
      </div>
      <div className="container" style={{ display: 'grid', gap: 16, padding: '28px 0 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span className="baloo" style={{ fontSize: 22, fontWeight: 700 }}>U-Play</span>
            <span style={{ opacity: 0.7 }}>Aqua Ocean Adventure</span>
          </div>
          <div style={{ display: 'flex', gap: 14, opacity: 0.85 }}>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="TikTok">TikTok</a>
          </div>
        </div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>© {new Date().getFullYear()} U-Play. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer

