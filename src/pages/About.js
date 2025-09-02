import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

const About = () => {
  const fishRef = useRef([]);
  const valuesRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Page load animation
    const tl = gsap.timeline();
    
    tl.fromTo('.about-hero h1',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    )
    .fromTo('.about-content',
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
      '-=0.5'
    )
    .fromTo('.about-image',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 },
      '-=0.6'
    );

    // Swimming fish animation
    fishRef.current.forEach((fish, index) => {
      if (fish) {
        gsap.to(fish, {
          x: window.innerWidth + 100,
          duration: 15 + index * 2,
          repeat: -1,
          ease: 'none',
          delay: index * 3
        });

        gsap.to(fish, {
          y: `+=${Math.random() * 50 - 25}`,
          duration: 4 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    });

    // Values animation on scroll
    gsap.fromTo('.value-bubble',
      { scale: 0, opacity: 0, rotation: -180 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating bubbles around text
    const createFloatingBubbles = () => {
      for (let i = 0; i < 5; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'floating-bubble';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 3}s`;
        document.querySelector('.about-content').appendChild(bubble);

        gsap.to(bubble, {
          y: -20,
          x: 10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    };

    createFloatingBubbles();

  }, []);

  const addFishRef = (el) => {
    if (el && !fishRef.current.includes(el)) {
      fishRef.current.push(el);
    }
  };

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="underwater-background">
          <div className="swimming-fish" ref={addFishRef}>🐠</div>
          <div className="swimming-fish" ref={addFishRef}>🐟</div>
          <div className="swimming-fish" ref={addFishRef}>🐡</div>
          <div className="swimming-fish" ref={addFishRef}>🦈</div>
          <div className="coral-decoration">🪸</div>
          <div className="coral-decoration">🪸</div>
        </div>
        
        <div className="container">
          <h1>About U-Play Ocean Adventure</h1>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* Main Content Section */}
      <section className="about-main">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Dive Into Our Story</h2>
              <p>
                U-Play brings the ocean of fun indoors – safe, creative and exciting play zones for all ages. 
                Our underwater adventure theme creates an immersive experience where children can explore, 
                learn, and play in a magical aquatic environment.
              </p>
              <p>
                From our wall-to-wall trampolines that make you feel like you're bouncing through ocean waves, 
                to our multi-level playground structures designed like coral reefs, every corner of U-Play 
                is crafted to spark imagination and encourage active play.
              </p>
              <p>
                We believe that play is essential for healthy development, and our ocean-themed facility 
                provides the perfect environment for children to build confidence, develop motor skills, 
                and create lasting memories with friends and family.
              </p>
              
              <div className="stats-container">
                <div className="stat">
                  <div className="stat-number">10,000+</div>
                  <div className="stat-label">Happy Visitors</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Play Zones</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Safety Certified</div>
                </div>
              </div>
            </div>
            
            <div className="about-image" ref={imageRef}>
              <div className="image-collage">
                <div className="collage-item">
                  <div className="placeholder-image">
                    <span>Kids Playing</span>
                    <div className="image-decoration">🤸‍♂️</div>
                  </div>
                </div>
                <div className="collage-item">
                  <div className="placeholder-image">
                    <span>Trampoline Fun</span>
                    <div className="image-decoration">🦘</div>
                  </div>
                </div>
                <div className="collage-item">
                  <div className="placeholder-image">
                    <span>Ocean Slides</span>
                    <div className="image-decoration">🌊</div>
                  </div>
                </div>
                <div className="collage-item">
                  <div className="placeholder-image">
                    <span>Birthday Parties</span>
                    <div className="image-decoration">🎂</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" ref={valuesRef}>
        <div className="wave-divider flip"></div>
        <div className="container">
          <h2>Our Ocean Values</h2>
          <div className="values-grid">
            <div className="value-bubble">
              <div className="bubble-icon">🛡️</div>
              <h3>Safety</h3>
              <p>Every piece of equipment meets the highest safety standards with regular inspections and maintenance.</p>
            </div>
            
            <div className="value-bubble">
              <div className="bubble-icon">💪</div>
              <h3>Fitness</h3>
              <p>Promoting active lifestyles through fun physical activities that kids actually want to do.</p>
            </div>
            
            <div className="value-bubble">
              <div className="bubble-icon">🎉</div>
              <h3>Fun</h3>
              <p>Creating joyful experiences and lasting memories for children and families in our ocean paradise.</p>
            </div>
            
            <div className="value-bubble">
              <div className="bubble-icon">🎨</div>
              <h3>Creativity</h3>
              <p>Inspiring imagination through themed play areas that encourage creative thinking and exploration.</p>
            </div>
          </div>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To create the ultimate indoor ocean adventure experience where families can connect, 
                children can thrive, and everyone can dive into endless fun. We're committed to 
                providing a safe, clean, and exciting environment that promotes physical activity, 
                social interaction, and pure joy.
              </p>
              <a href="/contact" className="btn btn-primary">Visit Us Today</a>
            </div>
            <div className="mission-visual">
              <div className="ocean-scene">
                <div className="treasure-chest">💎</div>
                <div className="octopus-friend">🐙</div>
                <div className="seahorse">🐴</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;