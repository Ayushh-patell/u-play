import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

const Services = () => {
  const cardsRef = useRef([]);
  const heroRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Trampoline Zone',
      character: '🐬',
      description: 'Wall-to-wall trampolines where you can bounce like dolphins jumping through ocean waves. Perfect for all skill levels!',
      features: ['Wall-to-wall trampolines', 'Foam pit diving', 'Basketball hoops', 'Dodge ball courts'],
      color: 'var(--aqua-blue)'
    },
    {
      id: 2,
      title: 'Climbing Walls',
      character: '🦀',
      description: 'Scale our colorful climbing walls like a crab exploring coral reefs. Multiple difficulty levels available.',
      features: ['Auto-belay systems', 'Beginner to advanced routes', 'Themed coral designs', 'Safety harnesses included'],
      color: 'var(--coral-orange)'
    },
    {
      id: 3,
      title: 'Toddler Play Area',
      character: '⭐',
      description: 'A gentle underwater world designed specifically for our smallest adventurers aged 2-5 years.',
      features: ['Soft play structures', 'Mini slides', 'Sensory play elements', 'Parent seating area'],
      color: 'var(--sand-yellow)'
    },
    {
      id: 4,
      title: 'Arcade & Games',
      character: '🪼',
      description: 'Glowing arcade games and interactive experiences that light up like magical jellyfish.',
      features: ['Latest arcade games', 'Prize redemption', 'Interactive displays', 'Racing simulators'],
      color: 'var(--deep-ocean)'
    },
    {
      id: 5,
      title: 'Ocean Ball Pit',
      character: '🐢',
      description: 'Dive into our massive ball pit ocean where you can swim like turtles through thousands of colorful balls.',
      features: ['10,000+ soft balls', 'Slides into the pit', 'Hidden treasure chests', 'Ball cannons'],
      color: 'var(--aqua-blue)'
    },
    {
      id: 6,
      title: 'Adventure Course',
      character: '🐙',
      description: 'Navigate through our multi-level obstacle course with the agility of an octopus.',
      features: ['Rope bridges', 'Tunnel crawls', 'Balance beams', 'Zip line finish'],
      color: 'var(--coral-orange)'
    }
  ];

  useEffect(() => {
    // Hero animation
    gsap.fromTo('.services-hero h1',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    );

    gsap.fromTo('.services-hero p',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
    );

    // Floating sea elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
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
          trigger: '.services-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Character animations
    gsap.to('.service-character', {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: 'none'
    });

  }, []);

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero" ref={heroRef}>
        <div className="ocean-background">
          <div className="floating-element seaweed">🌿</div>
          <div className="floating-element coral">🪸</div>
          <div className="floating-element shell">🐚</div>
          <div className="floating-element starfish">⭐</div>
        </div>
        
        <div className="container">
          <h1>Ocean Adventure Services</h1>
          <p>Dive into our amazing world of aquatic fun with services designed for every age and adventure level!</p>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card" 
                ref={addCardRef}
                style={{ '--service-color': service.color }}
              >
                <div className="card-header">
                  <div className="service-character">{service.character}</div>
                  <h3>{service.title}</h3>
                </div>
                
                <div className="card-content">
                  <p>{service.description}</p>
                  
                  <ul className="features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-icon">🌊</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="card-footer">
                  <button className="btn btn-primary explore-btn">
                    Explore More
                    <span className="btn-wave"></span>
                  </button>
                </div>
                
                <div className="card-decoration">
                  <div className="bubble bubble-1"></div>
                  <div className="bubble bubble-2"></div>
                  <div className="bubble bubble-3"></div>
                </div>
                
                <div className="wave-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="wave-divider flip"></div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready for Your Ocean Adventure?</h2>
              <p>Book your visit today and dive into endless fun at U-Play! Our friendly staff is ready to help you explore all our amazing services.</p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">Book Now</a>
                <a href="/party-rooms" className="btn btn-secondary">Plan a Party</a>
              </div>
            </div>
            <div className="cta-visual">
              <div className="ocean-creatures">
                <div className="creature whale">🐋</div>
                <div className="creature dolphin">🐬</div>
                <div className="creature fish">🐠</div>
                <div className="creature octopus">🐙</div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-divider"></div>
      </section>
    </div>
  );
};

export default Services;