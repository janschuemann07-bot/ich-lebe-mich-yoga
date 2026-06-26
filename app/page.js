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

export default function Home() {
  // Navigation & Form states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [inquiryType, setInquiryType] = useState('Allgemeine Anfrage')
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
        setSubmitError(data.error || 'Es gab ein Problem beim Senden. Bitte versuche es erneut.')
      }
    } catch (err) {
      setSubmitError('Verbindung zum Server fehlgeschlagen.')
    } finally {
      setIsLoading(false)
    }
  }

  // Current German schedule data
  const scheduleData = [
    {
      day: 'Montag',
      classes: [
        { time: '17:30 - 19:00', name: 'Yoga für Anfänger', level: 'Einsteiger' },
        { time: '19:30 - 21:00', name: 'Yoga für alle', level: 'Alle Level' }
      ]
    },
    {
      day: 'Dienstag',
      classes: [
        { time: '20:00 - 21:30', name: 'Yoga für alle', level: 'Alle Level' }
      ]
    },
    {
      day: 'Mittwoch',
      classes: [
        { time: '19:00 - 20:30', name: 'Yoga für alle', level: 'Alle Level' }
      ]
    },
    {
      day: 'Donnerstag',
      classes: [
        { time: '19:30 - 21:00', name: 'Yoga für alle / Anfänger', level: 'Einsteiger & Inter.' }
      ]
    },
    {
      day: 'Freitag',
      classes: [
        { time: '09:00 - 10:30', name: 'Yoga für Anfänger', level: 'Einsteiger' }
      ]
    }
  ]

  return (
    <>
      {/* Navigation Header */}
      <header className="header">
        <div className="nav-container">
          <a href="#" className="logo-link">
            <FeatherLogo />
            <span>ich lebe mich</span>
          </a>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü umschalten"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav-menu-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-menu">
              <li><a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Über mich</a></li>
              <li><a href="#offerings" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Yoga-Stile</a></li>
              <li><a href="#schedule" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Kursplan</a></li>
              <li><a href="#pricing" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Preise</a></li>
              <li><a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</a></li>
              <li>
                <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }} onClick={() => setIsMobileMenuOpen(false)}>
                  Jetzt anfragen
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
            <p className="hero-subtitle">Yogastudio Leipzig Leutzsch</p>
            <h1>Yoga heißt:<br/>„Die Zügel in die Hand nehmen“.</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Yoga spricht uns in der Gesamtheit an. Es zeigt Möglichkeiten auf, zu Kraft zu kommen, 
              Energie aufzutanken, über unser Leben zu reflektieren und Entscheidungen zu treffen. 
              Es zeigt uns, wie wir verantwortungsvoller und bewusster mit uns umgehen können.
            </p>
            <div>
              <a href="#schedule" className="btn btn-primary">Zum Kursplan</a>
              <a href="#contact" className="btn btn-secondary">Kontakt aufnehmen</a>
            </div>
          </div>
          <div className="hero-image-container">
            {/* Visual background image of studio */}
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
              alt="Bianka Schümann - Yogalehrerin" 
              className="about-img" 
            />
          </div>
          <div className="about-content">
            <p className="hero-subtitle" style={{ marginBottom: '0.5rem' }}>Über die Praxis</p>
            <h2 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Bianka Schümann</h2>
            <p style={{ fontWeight: '500', color: 'var(--color-sage)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Yogalehrerin & Yogatherapeutin • Seit 2010 in eigener Yogapraxis tätig
            </p>
            <p>
              Aus einem kaufmännischen Beruf kommend, hatte ich wie so viele die typischen „Schreibtischbeschwerden“, 
              weshalb ich mich vor rund 20 Jahren dem Yoga zuwendete. Im Laufe der Jahre reifte in mir der Wunsch, 
              meine eigene Yogapraxis zu entwickeln. Ich begann 2008 eine Yogalehrer-Ausbildung, in der ich klassisches 
              Hatha-Yoga erlernte. 
            </p>
            <p>
              Besonders wichtig ist es mir, ein modernes Yoga zu vermitteln, das unseren heutigen Bedürfnissen angepasst ist. 
              Ich verbinde in meiner Yogapraxis alle klassischen Yogaelemente je nach individuellem Bedarf zu kräftigenden, 
              dehnenden oder beruhigenden Einzelsequenzen oder zu einem fließenden Yogaflow.
            </p>
            
            <div className="quote-box">
              <p className="quote-text">
                „Es bedarf keiner besonderen Fähigkeiten, um Yoga zu praktizieren. Jeder kann den Yoga-Weg wählen. 
                Jeder macht, was er kann, und zwar so gut, wie es jetzt eben geht.“
              </p>
              <p className="quote-author">Bianka Schümann</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings">
        <div className="container">
          <h2>Was wir anbieten</h2>
          <p className="section-subtitle">
            Klassische Yogaelemente angepasst an moderne Bedürfnisse. Jede Klasse wird in kleinen, 
            persönlichen Gruppen von maximal 10 Teilnehmenden unterrichtet.
          </p>
          
          <div className="offerings-grid">
            <div className="offering-card">
              <div className="offering-img-container">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500" 
                  alt="Yoga für Anfänger" 
                  className="offering-img"
                />
              </div>
              <div className="offering-content">
                <span className="offering-badge">Einsteiger</span>
                <h3>Yoga für Anfänger</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                  Sanfter Einstieg in das klassische Hatha-Yoga. Wir erlernen grundlegende Körperhaltungen (Asanas), 
                  bewusste Atemtechniken (Pranayama) und Entspannungsmethoden, um Verspannungen vorzubeugen.
                </p>
              </div>
            </div>

            <div className="offering-card">
              <div className="offering-img-container">
                <img 
                  src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=500" 
                  alt="Yoga für alle" 
                  className="offering-img"
                />
              </div>
              <div className="offering-content">
                <span className="offering-badge">Alle Level</span>
                <h3>Yoga für alle</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                  Ein abwechslungsreicher Flow, der Kräftigung, Dehnung und Entspannung vereint. 
                  Die Übungen werden flexibel an die Teilnehmenden angepasst, sodass jeder im eigenen Tempo üben kann.
                </p>
              </div>
            </div>

            <div className="offering-card">
              <div className="offering-img-container">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=500" 
                  alt="Yogatherapie" 
                  className="offering-img"
                />
              </div>
              <div className="offering-content">
                <span className="offering-badge">Therapeutisch</span>
                <h3>Yogatherapie</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                  Gezielte Übungsreihen zur Linderung von Alltagsbeschwerden (z.B. Rückenschmerzen, Stress). 
                  Individuelle Anleitung hilft, ein gesundes Körperbewusstsein im Alltag aufzubauen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" style={{ backgroundColor: 'rgba(143, 168, 155, 0.04)' }}>
        <div className="container">
          <h2>Wochenplan</h2>
          <p className="section-subtitle">
            Melde dich gern für eine Probestunde an. Unsere Kurse finden in einer persönlichen 
            Atmosphäre mit maximal 10 Personen statt.
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
            <p className="hero-subtitle" style={{ marginBottom: '0.5rem' }}>Unsere Praxis</p>
            <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>Besuche das Studio</h2>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div className="info-text">
                <h4>Standort</h4>
                <p style={{ margin: '0' }}>Am Tanzplan 3, 04179 Leipzig (Leutzsch)</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Clock size={20} />
              </div>
              <div className="info-text">
                <h4>Parken & Anfahrt</h4>
                <p style={{ margin: '0' }}>Kostenlose Parkmöglichkeiten befinden sich direkt vor der Tür.</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Info size={20} />
              </div>
              <div className="info-text">
                <h4>Wichtig für deinen Besuch</h4>
                <p style={{ margin: '0', fontSize: '0.9rem' }}>
                  Matten und Zubehör werden gestellt. Bitte sei ca. 10 Minuten vor Kursbeginn da, um entspannt anzukommen.
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
          <h2>Preise & Karten</h2>
          <p className="section-subtitle">
            Transparente Preisgestaltung für deine regelmäßige Yogapraxis.
          </p>

          <div className="pricing-grid">
            <div className="price-card">
              <h3>Probestunde</h3>
              <div className="price-amount">10 €</div>
              <div className="price-unit">einmalig zum Kennenlernen</div>
              <ul className="price-features">
                <li>Volle 90 Minuten</li>
                <li>Matte & Hilfsmittel inklusive</li>
                <li>Wird bei Kauf einer 10er-Karte voll angerechnet</li>
              </ul>
              <a href="#contact" className="btn btn-secondary" style={{ marginLeft: '0' }}>Jetzt anfragen</a>
            </div>

            <div className="price-card featured">
              <div className="featured-label">Beliebt</div>
              <h3>10-er-Karte</h3>
              <div className="price-amount">110 €</div>
              <div className="price-unit">gültig für 12 Wochen</div>
              <ul className="price-features">
                <li>10 Klassen à 90 Minuten</li>
                <li>Volle Flexibilität</li>
                <li>Kleine Gruppen (max. 10 Personen)</li>
                <li>Matte & Zubehör gratis gestellt</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Jetzt sichern</a>
            </div>

            <div className="price-card">
              <h3>Einzelstunde</h3>
              <div className="price-amount">15 €</div>
              <div className="price-unit">pro Klasse (Drop-In)</div>
              <ul className="price-features">
                <li>Einmalige Teilnahme</li>
                <li>Ideal für unregelmäßige Praxis</li>
                <li>Nach Absprache & Verfügbarkeit</li>
              </ul>
              <a href="#contact" className="btn btn-secondary" style={{ marginLeft: '0' }}>Jetzt buchen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container contact-grid">
          <div>
            <p className="hero-subtitle" style={{ marginBottom: '0.5rem' }}>Verbindung aufnehmen</p>
            <h2 style={{ textAlign: 'left', marginBottom: '2.5rem' }}>Kontakt & Anmeldung</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '3rem' }}>
              Hast du Fragen zu den Kursen, möchtest eine Probestunde vereinbaren oder dich für 
              eine 10er-Karte anmelden? Schreib mir einfach eine Nachricht oder rufe direkt an!
            </p>

            <div className="info-item">
              <div className="info-icon">
                <Phone size={18} />
              </div>
              <div className="info-text">
                <h4>Telefon & Mobil</h4>
                <p style={{ margin: '0' }}>Festnetz: 0341 / 49 570 111</p>
                <p style={{ margin: '0' }}>Mobil: 0173 / 85 90 277</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Mail size={18} />
              </div>
              <div className="info-text">
                <h4>E-Mail</h4>
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
                <h3 style={{ marginBottom: '1rem' }}>Vielen Dank!</h3>
                <p>
                  Deine Nachricht wurde erfolgreich gesendet. Ich werde mich so schnell wie möglich 
                  bei dir melden.
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
                    placeholder="Dein Name" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">E-Mail Adresse</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input" 
                    placeholder="Deine E-Mail Adresse" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inquiry">Anfrage für</label>
                  <select 
                    id="inquiry" 
                    className="form-select"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                  >
                    <option value="Probestunde">Probestunde vereinbaren (10 €)</option>
                    <option value="10-er-Karte">10-er-Karte bestellen (110 €)</option>
                    <option value="Allgemeine Anfrage">Allgemeine Anfrage / Frage</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Nachricht</label>
                  <textarea 
                    id="message" 
                    className="form-textarea" 
                    placeholder="Wie kann ich dir helfen?" 
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
                  {isLoading ? 'Wird gesendet...' : 'Nachricht senden'}
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
              Yoga Studio Leipzig Leutzsch. Kleine Gruppen, persönliche Atmosphäre und modernes Hatha-Yoga 
              angepasst an deinen Alltag.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Praxis</h4>
              <ul>
                <li><a href="#about">Über mich</a></li>
                <li><a href="#offerings">Yoga-Stile</a></li>
                <li><a href="#schedule">Kursplan</a></li>
                <li><a href="#pricing">Preise</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Rechtliches</h4>
              <ul>
                <li><Link href="/impressum">Impressum</Link></li>
                <li><Link href="/datenschutz">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <div>© {new Date().getFullYear()} ich lebe mich. Alle Rechte vorbehalten.</div>
          <div>Mit Liebe gestaltet für Bianka Schümann</div>
        </div>
      </footer>
      <CookieBanner />
    </>
  )
}
