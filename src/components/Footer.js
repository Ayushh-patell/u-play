import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const fishRef = useRef([]);
  const seaweedRef = useRef([]);

  useEffect(() => {
    // Swimming fish animation
    fishRef.current.forEach((fish, index) => {
      if (fish) {
        gsap.to(fish, {
          x: window.innerWidth + 100,
          duration: 20 + index * 3,
          repeat: -1,
          ease: 'none',
          delay: index * 2
        });

        gsap.to(fish, {
          y: `+=${Math.random() * 30 - 15}`,
          duration: 4 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    });

    // Seaweed swaying animation
    seaweedRef.current.forEach((seaweed, index) => {
      if (seaweed) {
        gsap.to(seaweed, {
          rotation: 8,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: 'bottom center'
        });
      }
    });

    // Wave animation
    gsap.to('.footer-waves', {
      backgroundPositionX: '200px',
      duration: 8,
      repeat: -1,
      ease: 'none'
    });

  }, []);

  const addFishRef = (el) => {
    if (el && !fishRef.current.includes(el)) {
      fishRef.current.push(el);
    }
  };

  const addSeaweedRef = (el) => {
    if (el && !seaweedRef.current.includes(el)) {
      seaweedRef.current.push(el);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-waves"></div>
      
      <div className="footer-sea-life">
        <div className="swimming-fish" ref={addFishRef}>🐠</div>
        <div className="swimming-fish" ref={addFishRef}>🐟</div>
        <div className="swimming-fish" ref={addFishRef}>🐡</div>
        <div className="footer-seaweed" ref={addSeaweedRef}>🌿</div>
        <div className="footer-seaweed" ref={addSeaweedRef}>🌿</div>
        <div className="footer-seaweed" ref={addSeaweedRef}>🌿</div>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-container">
                <div className="octopus-logo">🐙</div>
                <span>U-Play</span>
              </div>
              <p>Dive into fun at our aqua ocean adventure playground! Where every visit is a splash of excitement.</p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📺</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">🏠 Home</Link></li>
              <li><Link to="/about">ℹ️ About Us</Link></li>
              <li><Link to="/services">🎯 Services</Link></li>
              <li><Link to="/party-rooms">🎂 Party Rooms</Link></li>
              <li><Link to="/contact">📞 Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#trampoline">🦘 Trampoline Zone</a></li>
              <li><a href="#climbing">🧗 Climbing Walls</a></li>
              <li><a href="#toddler">⭐ Toddler Area</a></li>
              <li><a href="#arcade">🎮 Arcade Games</a></li>
              <li><a href="#ballpit">🏐 Ocean Ball Pit</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address:</strong><br />
                  123 Ocean Drive<br />
                  Aqua City, AC 12345
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone:</strong><br />
                  (555) UPLAY-FUN<br />
                  (555) 875-2936
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <strong>Hours:</strong><br />
                  Mon-Thu: 10am-8pm<br />
                  Fri-Sun: 9am-10pm
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 U-Play Ocean Adventure. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#safety">Safety Guidelines</a>
            </div>
          </div>
          <div className="footer-decoration">
            <div className="treasure-chest">💎</div>
            <div className="starfish">⭐</div>
            <div className="shell">🐚</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;