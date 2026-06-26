'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent-choice')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent-choice', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent-choice', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      left: '1.5rem',
      right: '1.5rem',
      backgroundColor: 'var(--color-white)',
      border: '1px solid rgba(143, 168, 155, 0.2)',
      borderRadius: '16px',
      padding: '1.5rem 2rem',
      boxShadow: '0 12px 30px rgba(44, 53, 49, 0.15)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
      maxWidth: '850px',
      margin: '0 auto',
      animation: 'slideUp 0.5s ease'
    }}>
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 767px) {
          .cookie-banner-wrapper {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
            padding: 1.25rem 1.5rem !important;
          }
        }
      `}</style>
      
      <div className="cookie-banner-wrapper" style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '0.25rem' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-charcoal)', fontWeight: '500' }}>
          Cookie-Einwilligung
        </p>
        <p style={{ margin: 0, fontSize: '0.82rem', color: '#6C7A74', lineHeight: '1.5' }}>
          Wir verwenden nur technisch notwendige Cookies, um Ihr Nutzungserlebnis auf unserer Website zu verbessern. 
          Weitere Informationen finden Sie in unserer{' '}
          <Link href="/datenschutz" style={{ color: 'var(--color-sage)', textDecoration: 'underline' }}>
            Datenschutzerklärung
          </Link>.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
        <button 
          onClick={handleDecline} 
          style={{
            padding: '0.5rem 1.2rem',
            fontSize: '0.85rem',
            borderRadius: '20px',
            border: '1px solid var(--color-charcoal)',
            backgroundColor: 'transparent',
            color: 'var(--color-charcoal)',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'var(--transition)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-charcoal)'; e.currentTarget.style.color = 'var(--bg-cream)'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-charcoal)'; }}
        >
          Ablehnen
        </button>
        <button 
          onClick={handleAccept} 
          style={{
            padding: '0.5rem 1.2rem',
            fontSize: '0.85rem',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: 'var(--color-sage)',
            color: 'var(--color-white)',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'var(--transition)'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-sage-hover)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-sage)'}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  )
}
