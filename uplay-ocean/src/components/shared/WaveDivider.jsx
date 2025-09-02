function WaveDivider({ flip = false }) {
  return (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ transform: flip ? 'rotate(180deg)' : 'none' }}>
      <path fill="rgba(255,255,255,0.08)" d="M0,224L48,186.7C96,149,192,75,288,53.3C384,32,480,64,576,101.3C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  )
}

export default WaveDivider

