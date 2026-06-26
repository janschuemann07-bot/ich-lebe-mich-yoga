'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Calendar, Info, Clock, Check, Send, Menu, X } from 'lucide-react'
import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

// Custom Feather SVG Logo Component
function FeatherLogo() {
  return (
    <svg 
      viewBox="0 0 100 100" 
      width="36" 
      height="36" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="logo-svg"
      style={{ color: 'var(--color-sage)' }}
    >
      <path d="M 50,85 C 47,65 47,35 54,15" />
      <path d="M 48.5,75 C 33,68 28,57 48.5,47" />
      <path d="M 49.5,60 C 30,53 26,40 50.5,33" />
      <path d="M 51.5,45 C 30,35 28,23 52.5,19" />
      <path d="M 49.5,75 C 65,68 70,57 49.5,47" />
      <path d="M 50.5,60 C 70,53 74,40 49.5,33" />
      <path d="M 51.5,45 C 70,35 72,23 50.5,19" />
    </svg>
  )
}

export default function HomeEn() {
  // Navigation & Form states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [inquiryType, setInquiryType] = useState('General inquiry')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, inquiryType, message })
      })
      const data = await res.json()
      if (res.ok) {
        setIsSubmitted(true)
      } else {
        setSubmitError(data.error || 'There was a problem sending your message. Please try again.')
      }
    } catch (err) {
      setSubmitError('Failed to connect to the server.')
    } finally {
      setIsLoading(false)
    }
  }

  // English schedule data
  const scheduleData = [
    {
      day: 'Monday',
      classes: [
        { time: '17:30 - 19:00', name: 'Yoga for Beginners', level: 'Beginner' },
        { time: '19:30 - 21:00', name: 'Yoga for Everyone', level: 'All Levels' }
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '20:00 - 21:30', name: 'Yoga for Everyone', level: 'All Levels' }
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '19:00 - 20:30', name: 'Yoga for Everyone', level: 'All Levels' }
      ]
    },
    {
      day: 'Thursday',
      classes: [
        { time: '19:30 - 21:00', name: 'Yoga for Everyone / Beginners', level: 'Beg. & Inter.' }
      ]
    },
    {
      day: 'Friday',
      classes: [
        { time: '09:00 - 10:30', name: 'Yoga for Beginners', level: 'Beginner' }
      ]
    }
  ]

  return (
    <>
      {/* Navigation Header */}
      <header className="header">
        <div className="nav-container">
          <Link href="/en" className="logo-link">
            <FeatherLogo />
            <span>ich lebe mich</span>
          </Link>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav-menu-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-menu">
              <li><a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About me</a></li>
              <li><a href="#offerings" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Yoga Styles</a></li>
              <li><a href="#schedule" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Schedule</a></li>
              <li><a href="#pricing" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a></li>
              <li><a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
              <li><Link href="/" className="nav-link" style={{ fontWeight: 'bold' }} onClick={() => setIsMobileMenuOpen(false)}>DE</Link></li>
              <li>
                <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }} onClick={() => setIsMobileMenuOpen(false)}>
                  Inquire Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" style={{ paddingTop: '7.5rem' }}>
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="hero-subtitle">Yoga Studio Leipzig Leutzsch</p>
            <h1>Yoga means:<br/>"Taking the reins in your hands".</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Yoga speaks to us as a whole. It shows us opportunities to gather strength, 
              recharge our energy, reflect on our lives, and make decisions. 
              It shows us how to treat ourselves with more responsibility and mindfulness.
            </p>
            <div>
              <a href="#schedule" className="btn btn-primary">View Schedule</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=800" 
              alt="Serene Yoga Studio Space" 
              className="hero-img" 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ backgroundColor: 'rgba(143, 168, 155, 0.04)' }}>
        <div className="container about-grid">
          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" 
              alt="Bianka Schümann - Yoga Teacher" 
              className="about-img" 
            />
          </div>
          <div className="about-content">
            <p className="hero-subtitle" style={{ marginBottom: '0.5rem' }}>About the Practice</p>
            <h2 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Bianka Schümann</h2>
            <p style={{ fontWeight: '500', color: 'var(--color-sage)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Yoga Teacher & Yoga Therapist • Active in her own yoga practice since 2010
            </p>
            <p>
              Coming from a commercial background, like so many others I suffered from typical "desk-bound complaints," 
              which is why I turned to yoga about 20 years ago. Over the years, the desire grew in me to develop my own 
              yoga practice. In 2008, I began a yoga teacher training course where I learned classical Hatha Yoga.
            </p>
            <p>
              It is particularly important to me to teach a modern yoga that is adapted to our needs today. In my yoga practice, 
              I combine all classic yoga elements according to individual needs into strengthening, stretching, or calming 
              sequences or into a flowing yoga flow.
            </p>
            
            <div className="quote-box">
              <p className="quote-text">
                "No special abilities are required to practice yoga. Anyone can choose the yoga path. 
                Everyone does what they can, and does it as well as they currently can."
              </p>
              <p className="quote-author">Bianka Schümann</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings">
        <div className="container">
          <h2>What we offer</h2>
          <p className="section-subtitle">
            Classic yoga elements adapted to modern needs. Each class is taught in small, 
            personal groups of a maximum of 10 participants.
          </p>
          
          <div className="offerings-grid">
            <div className="offering-card">
              <div className="offering-img-container">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500" 
                  alt="Yoga for Beginners" 
                  className="offering-img"
                />
              </div>
              <div className="offering-content">
                <span className="offering-badge">Beginner</span>
                <h3>Yoga for Beginners</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                  A gentle introduction to classical Hatha Yoga. We learn basic postures (asanas), 
                  conscious breathing techniques (pranayama), and relaxation methods to prevent tension.
                </p>
              </div>
            </div>

            <div className="offering-card">
              <div className="offering-img-container">
                <img 
                  src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=500" 
                  alt="Yoga for everyone" 
                  className="offering-img"
                />
              </div>
              <div className="offering-content">
                <span className="offering-badge">All Levels</span>
                <h3>Yoga for Everyone</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                  A varied flow that combines strengthening, stretching, and relaxation. 
                  The exercises are flexibly adapted to the participants, allowing everyone to practice at their own pace.
                </p>
              </div>
            </div>

            <div className="offering-card">
              <div className="offering-img-container">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=500" 
                  alt="Yoga Therapy" 
                  className="offering-img"
                />
              </div>
              <div className="offering-content">
                <span className="offering-badge">Therapeutic</span>
                <h3>Yoga Therapy</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                  Targeted sequences to relieve everyday complaints (e.g. back pain, stress). 
                  Individual guidance helps build a healthy body awareness in everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" style={{ backgroundColor: 'rgba(143, 168, 155, 0.04)' }}>
        <div className="container">
          <h2>Weekly Schedule</h2>
          <p className="section-subtitle">
            Feel free to register for a trial class. Our classes take place in a personal 
            atmosphere with a maximum of 10 people.
          </p>

          <div className="schedule-container">
            <div className="schedule-header-row">
              {scheduleData.map((dayObj) => (
                <div key={dayObj.day} className="schedule-header-day">
                  {dayObj.day}
                </div>
              ))}
            </div>
            
            <div className="schedule-content-grid">
              {scheduleData.map((dayObj) => (
                <div key={dayObj.day} className="schedule-day-column" data-day={dayObj.day}>
                  {dayObj.classes.map((cls, idx) => (
                    <div key={idx} className="class-card">
                      <div className="class-time">{cls.time}</div>
                      <div className="class-name">{cls.name}</div>
                      <div className="class-details">{cls.level} • Bianka</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Studio Location & Gallery */}
      <section id="location">
        <div className="container location-grid">
          <div className="location-info">
            <p className="hero-subtitle" style={{ marginBottom: '0.5rem' }}>Our Studio</p>
            <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>Visit the Studio</h2>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div className="info-text">
                <h4>Address</h4>
                <p style={{ margin: '0' }}>Am Tanzplan 3, 04179 Leipzig (Leutzsch)</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Clock size={20} />
              </div>
              <div className="info-text">
                <h4>Parking & Directions</h4>
                <p style={{ margin: '0' }}>Free parking spaces are located directly in front of the door.</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Info size={20} />
              </div>
              <div className="info-text">
                <h4>Important for your visit</h4>
                <p style={{ margin: '0', fontSize: '0.9rem' }}>
                  Mats and props are provided. Please arrive about 10 minutes before class starts to arrive relaxed.
                </p>
              </div>
            </div>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400" alt="Studio details" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=400" alt="Yoga mat and blocks" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=400" alt="Plants in the studio" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=400" alt="Meditation area" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ backgroundColor: 'rgba(143, 168, 155, 0.04)' }}>
        <div className="container">
          <h2>Pricing & Cards</h2>
          <p className="section-subtitle">
            Transparent pricing for your regular yoga practice.
          </p>

          <div className="pricing-grid">
            <div className="price-card">
              <h3>Trial Class</h3>
              <div className="price-amount">10 €</div>
              <div className="price-unit">one-time to get to know us</div>
              <ul className="price-features">
                <li>Full 90 minutes</li>
                <li>Mat & props included</li>
                <li>Fully credited on purchase of a 10-class card</li>
              </ul>
              <a href="#contact" className="btn btn-secondary" style={{ marginLeft: '0' }}>Inquire Now</a>
            </div>

            <div className="price-card featured">
              <div className="featured-label">Popular</div>
              <h3>10-Class Card</h3>
              <div className="price-amount">110 €</div>
              <div className="price-unit">valid for 12 weeks</div>
              <ul className="price-features">
                <li>10 classes of 90 minutes each</li>
                <li>Full flexibility</li>
                <li>Small groups (max. 10 people)</li>
                <li>Mat & props provided for free</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Get it Now</a>
            </div>

            <div className="price-card">
              <h3>Single Class</h3>
              <div className="price-amount">15 €</div>
              <div className="price-unit">per class (Drop-In)</div>
              <ul className="price-features">
                <li>One-time participation</li>
                <li>Ideal for irregular practice</li>
                <li>Subject to availability</li>
              </ul>
              <a href="#contact" className="btn btn-secondary" style={{ marginLeft: '0' }}>Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container contact-grid">
          <div>
            <p className="hero-subtitle" style={{ marginBottom: '0.5rem' }}>Get in Touch</p>
            <h2 style={{ textAlign: 'left', marginBottom: '2.5rem' }}>Contact & Registration</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '3rem' }}>
              Do you have questions about the classes, want to arrange a trial class, or register for 
              a 10-class card? Just send me a message or call directly!
            </p>

            <div className="info-item">
              <div className="info-icon">
                <Phone size={18} />
              </div>
              <div className="info-text">
                <h4>Phone & Mobile</h4>
                <p style={{ margin: '0' }}>Landline: 0341 / 49 570 111</p>
                <p style={{ margin: '0' }}>Mobile: 0173 / 85 90 277</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Mail size={18} />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p style={{ margin: '0' }}>
                  <a href="mailto:info@ich-lebe-mich.de" style={{ color: 'inherit', textDecoration: 'none' }}>
                    info@ich-lebe-mich.de
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ 
                  width: '4rem', 
                  height: '4rem', 
                  backgroundColor: 'var(--color-sand-light)', 
                  color: 'var(--color-sage)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1.5rem auto' 
                }}>
                  <Check size={28} />
                </div>
                <h3 style={{ marginBottom: '1rem' }}>Thank you!</h3>
                <p>
                  Your message has been sent successfully. I will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input" 
                    placeholder="Your Name" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input" 
                    placeholder="Your Email Address" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inquiry">Request for</label>
                  <select 
                    id="inquiry" 
                    className="form-select"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                  >
                    <option value="Probestunde">Book trial class (10 €)</option>
                    <option value="10-er-Karte">Order 10-class card (110 €)</option>
                    <option value="Allgemeine Anfrage">General inquiry / Question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    className="form-textarea" 
                    placeholder="How can I help you?" 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                {submitError && (
                  <p style={{ color: '#D53B41', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: '500' }}>
                    {submitError}
                  </p>
                )}
                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h2>ich lebe mich</h2>
            <p>
              Yoga Studio Leipzig Leutzsch. Small groups, personal atmosphere, and modern Hatha Yoga 
              adapted to your everyday life.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Practice</h4>
              <ul>
                <li><a href="#about">About me</a></li>
                <li><a href="#offerings">Yoga Styles</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link href="/impressum">Imprint</Link></li>
                <li><Link href="/datenschutz">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <div>© {new Date().getFullYear()} ich lebe mich. All rights reserved.</div>
          <div>Made with love for Bianka Schümann</div>
        </div>
      </footer>
      <CookieBanner />
    </>
  )
}
