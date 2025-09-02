import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

const Contact = () => {
  const jellyfishRef = useRef([]);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Hero animation
    gsap.fromTo('.contact-hero h1',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    );

    // Jellyfish floating animation
    jellyfishRef.current.forEach((jellyfish, index) => {
      if (jellyfish) {
        gsap.to(jellyfish, {
          y: -30,
          duration: 4 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.5
        });

        gsap.to(jellyfish, {
          x: 20,
          duration: 6 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3
        });

        // Pulsing glow effect
        gsap.to(jellyfish, {
          filter: 'brightness(1.3) drop-shadow(0 0 20px rgba(0, 194, 209, 0.8))',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    });

    // Form and map animation
    gsap.fromTo('.contact-form, .contact-map',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Treasure chest animation
    gsap.to('.treasure-chest-form', {
      rotationY: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, []);

  const addJellyfishRef = (el) => {
    if (el && !jellyfishRef.current.includes(el)) {
      jellyfishRef.current.push(el);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Animate form submission
    gsap.to(formRef.current, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="jellyfish-background">
          <div className="jellyfish jellyfish-1" ref={addJellyfishRef}>🪼</div>
          <div className="jellyfish jellyfish-2" ref={addJellyfishRef}>🪼</div>
          <div className="jellyfish jellyfish-3" ref={addJellyfishRef}>🪼</div>
          <div className="jellyfish jellyfish-4" ref={addJellyfishRef}>🪼</div>
          <div className="jellyfish jellyfish-5" ref={addJellyfishRef}>🪼</div>
        </div>
        
        <div className="container">
          <h1>Get in Touch with U-Play</h1>
          <p>Ready to dive into fun? Contact us to book your visit, plan a party, or ask any questions!</p>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form" ref={formRef}>
              <div className="treasure-chest-form">
                <div className="form-header">
                  <div className="treasure-icon">💎</div>
                  <h2>Send Us a Message</h2>
                  <p>Drop us a line and we'll treasure your message!</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form-fields">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Book a Visit</option>
                        <option value="party">Birthday Party</option>
                        <option value="group">Group Events</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message
                    <span className="btn-waves"></span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="contact-info">
              <div className="contact-map" ref={mapRef}>
                <div className="map-header">
                  <h3>Find Our Ocean Paradise</h3>
                  <p>Located in the heart of the city, easy to find and plenty of parking!</p>
                </div>
                
                <div className="map-container">
                  <div className="ocean-map">
                    <div className="map-marker shell-marker">🐚</div>
                    <div className="map-waves"></div>
                    <div className="map-fish">🐠</div>
                    <div className="map-fish">🐟</div>
                    <div className="location-pin">📍 U-Play Ocean Adventure</div>
                  </div>
                </div>

                <div className="contact-details">
                  <div className="detail-item">
                    <div className="detail-icon">📍</div>
                    <div className="detail-content">
                      <h4>Address</h4>
                      <p>123 Ocean Drive<br />Aqua City, AC 12345</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">📞</div>
                    <div className="detail-content">
                      <h4>Phone</h4>
                      <p>(555) UPLAY-FUN<br />(555) 875-2936</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">✉️</div>
                    <div className="detail-content">
                      <h4>Email</h4>
                      <p>info@uplay-ocean.com<br />parties@uplay-ocean.com</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">🕒</div>
                    <div className="detail-content">
                      <h4>Hours</h4>
                      <p>Mon-Thu: 10am-8pm<br />Fri-Sun: 9am-10pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="quick-contact">
        <div className="wave-divider flip"></div>
        <div className="container">
          <h2>Quick Ways to Reach Us</h2>
          <div className="quick-contact-grid">
            <div className="quick-contact-item">
              <div className="quick-icon">📞</div>
              <h3>Call Us</h3>
              <p>Speak directly with our friendly team</p>
              <a href="tel:555-875-2936" className="btn btn-secondary">Call Now</a>
            </div>

            <div className="quick-contact-item">
              <div className="quick-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Get instant answers to your questions</p>
              <button className="btn btn-secondary">Start Chat</button>
            </div>

            <div className="quick-contact-item">
              <div className="quick-icon">📱</div>
              <h3>Follow Us</h3>
              <p>Stay updated with our latest news and events</p>
              <div className="social-buttons">
                <a href="#" className="social-btn">📘</a>
                <a href="#" className="social-btn">📷</a>
                <a href="#" className="social-btn">🐦</a>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-divider"></div>
      </section>
    </div>
  );
};

export default Contact;