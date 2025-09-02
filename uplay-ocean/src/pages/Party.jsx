const packages = [
  { title: 'Starfish Party', price: '$199', features: ['1.5h Play', 'Party Host', 'Decor'], color: 'var(--sand)', emoji: '⭐' },
  { title: 'Dolphin Jump Party', price: '$279', features: ['2h Play', 'Food + Drinks', 'Jump Session'], color: 'var(--aqua)', emoji: '🐬' },
  { title: 'Coral Reef Celebration', price: '$349', features: ['2.5h Play', 'Premium Room', 'Gift Bags'], color: 'var(--coral)', emoji: '🪸' },
]

function Party() {
  return (
    <section className="section-padding" style={{ background: 'radial-gradient(900px 700px at 110% 10%, rgba(255,127,80,0.08), transparent 60%), linear-gradient(180deg, #01232b 0%, #062f3a 100%)' }}>
      <div className="container">
        <h2 className="baloo" style={{ fontSize: 42, marginTop: 0 }}>Celebrate Under the Sea!</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {packages.map((p, i) => (
            <div key={i} className="ocean-card" style={{ padding: 18 }}>
              <div style={{ fontSize: 38 }}>{p.emoji}</div>
              <div className="baloo" style={{ fontWeight: 700, color: p.color, marginBottom: 6 }}>{p.title}</div>
              <div style={{ fontSize: 22, marginBottom: 10 }}>{p.price}</div>
              <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.9 }}>
                {p.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
              <div style={{ marginTop: 14 }}>
                <a className="btn coral" href="/contact">Book Your Party</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Party

