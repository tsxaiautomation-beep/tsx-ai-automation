import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export function AnnouncementBar({ onOpenModal }) {
  return (
    <div style={{
      background: 'linear-gradient(90deg,#3B1D8F,#6D28D9,#3B1D8F)',
      padding: '10px 16px',
      textAlign: 'center',
      fontSize: '13px',
      fontWeight: 500,
      color: '#F5F3FF',
      lineHeight: 1.4,
    }}>
      <span>Now taking on new automation projects.</span>{' '}
      <button
        onClick={onOpenModal}
        style={{
          background: 'none',
          border: 'none',
          color: '#F5F3FF',
          fontWeight: 700,
          textDecoration: 'underline',
          cursor: 'pointer',
          padding: 0,
          font: 'inherit',
          fontSize: 'inherit',
          marginLeft: '4px',
        }}
      >
        Book your free consultation
      </button>
      <span className="hidden sm:inline" style={{ margin: '0 12px', opacity: 0.5 }}>|</span>
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="hidden sm:inline font-mono font-semibold"
        style={{ color: '#F5F3FF' }}
      >
        📞 {COMPANY_INFO.phone}
      </a>
    </div>
  );
}

export function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(7,5,15,0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(167,139,250,0.12)',
    }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '18px 24px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
      }}>
        {/* Logo */}
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#F5F3FF' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg,#A78BFA,#6D28D9)',
            boxShadow: '0 8px 28px rgba(139,92,246,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Sora',sans-serif",
            fontWeight: 800,
            fontSize: '15px',
            color: '#FFFFFF',
            flexShrink: 0,
          }}>
            TSX
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: '18px' }}>TSX</span>
            <span style={{ fontSize: '11px', color: '#A8A3C2', letterSpacing: '2px' }}>AI AUTOMATION</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '28px', fontSize: '15px', color: '#C9C4E0', fontWeight: 500 }}>
          <a href="#services">Services</a>
          <a href="#compare">Why automate</a>
          <a href="#process">How it works</a>
          <a href="#faq">FAQ</a>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#34D399',
              fontWeight: 600,
            }}
          >
            WhatsApp Us
          </a>
          <button
            onClick={onOpenModal}
            style={{
              background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
              boxShadow: '0 8px 30px rgba(139,92,246,0.45)',
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Book a free call
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          style={{
            background: 'rgba(139,92,246,0.15)',
            border: '1px solid rgba(167,139,250,0.3)',
            borderRadius: '10px',
            padding: '8px 12px',
            color: '#DDD6FE',
            fontSize: '20px',
            cursor: 'pointer',
          }}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#0E0B1C',
          borderTop: '1px solid rgba(167,139,250,0.15)',
          padding: '20px 24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }} className="md:hidden">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Services</a>
          <a href="#compare" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Why automate</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>How it works</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>FAQ</a>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '8px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Book a free call
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '100%',
                background: '#15803D',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '15px',
                textAlign: 'center',
                boxSizing: 'border-box',
              }}
            >
              💬 WhatsApp: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
