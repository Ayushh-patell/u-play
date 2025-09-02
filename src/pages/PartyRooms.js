import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PartyRooms.css';

const PartyRooms = () => {
  const packagesRef = useRef([]);
  const heroRef = useRef(null);

  const partyPackages = [
    {
      id: 1,
      name: 'Starfish Party',
      character: '⭐',
      price: '$299',
      duration: '2 hours',
      guests: 'Up to 15 kids',
      description: 'Perfect for younger adventurers who want to explore the shallow waters of fun!',
      includes: [
        'Private party room for 2 hours',
        'Dedicated party host',
        'Pizza and drinks for all guests',
        'Starfish-themed decorations',
        'Birthday crown for birthday child',
        'Access to toddler play area',
        'Party favor bags'
      ],
      color: 'var(--sand-yellow)',
      popular: false
    },
    {
      id: 2,
      name: 'Dolphin Jump Party',
      character: '🐬',
      price: '$399',
      duration: '2.5 hours',
      guests: 'Up to 20 kids',
      description: 'Dive into the ultimate birthday celebration with high-energy trampoline fun!',
      includes: [
        'Private party room for 2.5 hours',
        'Dedicated party host',
        'Pizza, drinks, and birthday cake',
        'Dolphin-themed decorations',
        'Access to all trampoline zones',
        'Group games and activities',
        'Professional photos',
        'Party favor bags',
        'Birthday t-shirt'
      ],
      color: 'var(--aqua-blue)',
      popular: true
    },
    {
      id: 3,
      name: 'Coral Reef Celebration',
      character: '🪸',
      price: '$499',
      duration: '3 hours',
      guests: 'Up to 25 kids',
      description: 'The premium ocean adventure experience with exclusive access to all areas!',
      includes: [
        'Private party room for 3 hours',
        'Two dedicated party hosts',
        'Full buffet meal and birthday cake',
        'Coral reef-themed decorations',
        'Access to entire facility',
        'Private climbing wall session',
        'Treasure hunt activity',
        'Professional photo package',
        'Premium party favor bags',
        'Birthday child gets special gift'
      ],
      color: 'var(--coral-orange)',
      popular: false
    }
  ];

  useEffect(() => {
    // Hero animation
    gsap.fromTo('.party-hero h1',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    );

    gsap.fromTo('.party-hero p',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
    );

    // Cave lighting effect
    gsap.to('.cave-light', {
      opacity: 0.8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    });

    // Coral animations
    gsap.to('.coral-element', {
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    });

    // Package cards animation
    gsap.fromTo('.package-card',
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.packages-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating pearls animation
    gsap.to('.pearl', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    });

  }, []);

  const addPackageRef = (el) => {
    if (el && !packagesRef.current.includes(el)) {
      packagesRef.current.push(el);
    }
  };

  return (
    <div className="party-rooms">
      {/* Hero Section */}
      <section className="party-hero" ref={heroRef}>
        <div className="cave-background">
          <div className="cave-light cave-light-1"></div>
          <div className="cave-light cave-light-2"></div>
          <div className="cave-light cave-light-3"></div>
          <div className="coral-element coral-1">🪸</div>
          <div className="coral-element coral-2">🪸</div>
          <div className="coral-element coral-3">🪸</div>
          <div className="pearl pearl-1">🦪</div>
          <div className="pearl pearl-2">🦪</div>
        </div>
        
        <div className="container">
          <h1>Celebrate Under the Sea!</h1>
          <p>Make your child's birthday unforgettable with our magical ocean-themed party packages. Every celebration is a deep-sea adventure!</p>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* Party Packages Section */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Adventure Package</h2>
            <p>Each package includes everything you need for an amazing underwater birthday celebration</p>
          </div>

          <div className="packages-grid">
            {partyPackages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className={`package-card ${pkg.popular ? 'popular' : ''}`}
                ref={addPackageRef}
                style={{ '--package-color': pkg.color }}
              >
                {pkg.popular && (
                  <div className="popular-badge">
                    <span>Most Popular</span>
                    <div className="badge-wave"></div>
                  </div>
                )}
                
                <div className="package-header">
                  <div className="package-character">{pkg.character}</div>
                  <h3>{pkg.name}</h3>
                  <div className="package-price">
                    <span className="price">{pkg.price}</span>
                    <span className="duration">{pkg.duration}</span>
                  </div>
                </div>

                <div className="package-info">
                  <div className="guests-info">
                    <span className="icon">👥</span>
                    {pkg.guests}
                  </div>
                  <p className="package-description">{pkg.description}</p>
                </div>

                <div className="package-includes">
                  <h4>What's Included:</h4>
                  <ul>
                    {pkg.includes.map((item, idx) => (
                      <li key={idx}>
                        <span className="check-icon">🌊</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="package-footer">
                  <button className="btn btn-primary book-party-btn">
                    Book Your Party
                    <span className="btn-ripple"></span>
                  </button>
                </div>

                <div className="package-decoration">
                  <div className="bubble-trail">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="info-section">
        <div className="wave-divider flip"></div>
        <div className="container">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">📅</div>
              <h3>Easy Booking</h3>
              <p>Reserve your date online or call us. We recommend booking at least 2 weeks in advance for weekend parties.</p>
            </div>
            
            <div className="info-item">
              <div className="info-icon">🎂</div>
              <h3>Custom Themes</h3>
              <p>Want a different ocean theme? We can customize decorations and activities to match your child's favorite sea creature!</p>
            </div>
            
            <div className="info-item">
              <div className="info-icon">👨‍👩‍👧‍👦</div>
              <h3>Adult Supervision</h3>
              <p>Parents and guardians are welcome to stay and enjoy the party. We provide comfortable seating areas with great views.</p>
            </div>
            
            <div className="info-item">
              <div className="info-icon">🍕</div>
              <h3>Food & Drinks</h3>
              <p>All packages include age-appropriate food and drinks. Special dietary requirements can be accommodated with advance notice.</p>
            </div>
          </div>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* CTA Section */}
      <section className="party-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Plan Your Ocean Adventure Party?</h2>
              <p>Contact our party planning team today to reserve your date and start planning an unforgettable celebration!</p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">Book Now</a>
                <a href="tel:555-UPLAY-FUN" className="btn btn-secondary">Call Us</a>
              </div>
            </div>
            <div className="cta-visual">
              <div className="party-scene">
                <div className="birthday-octopus">🐙🎂</div>
                <div className="party-fish">🐠🎉</div>
                <div className="celebration-bubbles">
                  <div className="celebration-bubble"></div>
                  <div className="celebration-bubble"></div>
                  <div className="celebration-bubble"></div>
                  <div className="celebration-bubble"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyRooms;