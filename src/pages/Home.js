import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const octopusRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-content h1',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    )
    .fromTo('.hero-content p',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo('.hero-buttons .btn',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    // Octopus waving animation
    gsap.to(octopusRef.current, {
      rotation: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      transformOrigin: 'center bottom'
    });

    // Floating animation for octopus
    gsap.to(octopusRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Cards animation on scroll
    gsap.fromTo('.service-card',
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax effect for background elements
    gsap.to('.hero-fish', {
      x: -100,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

    gsap.to('.hero-seaweed', {
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-waves"></div>
          <div className="hero-fish">🐠</div>
          <div className="hero-fish">🐟</div>
          <div className="hero-fish">🐡</div>
          <div className="hero-seaweed">🌿</div>
          <div className="hero-seaweed">🌿</div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Dive into Fun at U-Play</h1>
              <p>Where ocean adventures meet endless excitement! Safe, creative, and thrilling play zones for kids and families.</p>
              
              <div className="hero-buttons">
                <a href="#book" className="btn btn-primary">Book Now</a>
                <a href="#visit" className="btn btn-secondary">Plan Your Visit</a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="octopus-container" ref={octopusRef}>
                <div className="octopus">🐙</div>
                <div className="trampoline-kids">
                  <div className="kid">🤸‍♂️</div>
                  <div className="kid">🤸‍♀️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wave-divider"></div>
      </section>

      {/* Service Cards Section */}
      <section className="services-preview" ref={cardsRef}>
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="card-icon">🏰</div>
              <h3>Indoor Playground</h3>
              <p>Multi-level play structures with slides, tunnels, and climbing walls</p>
              <div className="card-decoration">
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
              </div>
            </div>
            
            <div className="service-card">
              <div className="card-icon">🦘</div>
              <h3>Trampoline Park</h3>
              <p>Wall-to-wall trampolines for bouncing fun and fitness</p>
              <div className="card-decoration">
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
              </div>
            </div>
            
            <div className="service-card">
              <div className="card-icon">🎂</div>
              <h3>Birthday Parties</h3>
              <p>Unforgettable ocean-themed celebrations for your special day</p>
              <div className="card-decoration">
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
              </div>
            </div>
            
            <div className="service-card">
              <div className="card-icon">☕</div>
              <h3>Ocean Café</h3>
              <p>Delicious snacks and refreshments for the whole family</p>
              <div className="card-decoration">
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="wave-divider flip"></div>
        <div className="container">
          <div className="features-content">
            <h2>Why Choose U-Play?</h2>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon">🛡️</div>
                <h4>Safety First</h4>
                <p>All equipment meets the highest safety standards</p>
              </div>
              <div className="feature">
                <div className="feature-icon">💪</div>
                <h4>Active Fun</h4>
                <p>Promote healthy activity and physical development</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🎨</div>
                <h4>Creative Play</h4>
                <p>Imaginative environments that inspire creativity</p>
              </div>
              <div className="feature">
                <div className="feature-icon">👨‍👩‍👧‍👦</div>
                <h4>Family Friendly</h4>
                <p>Fun for all ages in a welcoming environment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-divider"></div>
      </section>
    </div>
  );
};

export default Home;