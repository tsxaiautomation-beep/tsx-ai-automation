import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export function AnnouncementBar({ onOpenModal }) {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #09080E 0%, #150F18 50%, #09080E 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '6px 16px',
      textAlign: 'center',
      fontSize: '12px',
      color: '#E5E7EB',
      lineHeight: 1.4,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle Bottom Glow Line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '20%',
        right: '20%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.7), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        gap: '8px 10px',
        overflow: 'hidden',
      }}>
        {/* Sleek Pill Badge */}
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          background: 'rgba(239, 68, 68, 0.12)',
          border: '1px solid rgba(239, 68, 68, 0.35)',
          padding: '2px 8px',
          borderRadius: '999px',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.6px',
          color: '#FCA5A5',
          textTransform: 'uppercase',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          flexShrink: 0,
        }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 6px #EF4444' }} />
          AUTONYX AI
        </span>

        {/* Slogan — hidden on very small screens */}
        <span className="hidden sm:inline" style={{ fontWeight: 500, color: '#F3F4F6', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '12px', whiteSpace: 'nowrap' }}>
          Smarter Solutions. A Smarter Tomorrow.
        </span>

        {/* Elegant Action Button Pill */}
        <button
          onClick={onOpenModal}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(255, 255, 255, 0.07)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '999px',
            padding: '3px 10px',
            color: '#FFFFFF',
            fontWeight: 600,
            fontSize: '11px',
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            transition: 'all 0.2s ease',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.22)';
            e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.55)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
          }}
        >
          <span>Book Free Consultation</span>
          <span style={{ color: '#EF4444', fontWeight: 800 }}>→</span>
        </button>


      </div>
    </div>
  );
}

export function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'relative',
      zIndex: 40,
      background: isScrolled ? 'rgba(7, 5, 11, 0.96)' : 'rgba(8, 7, 12, 0.92)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: isScrolled ? '1px solid rgba(239, 68, 68, 0.32)' : '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: isScrolled ? '0 12px 40px rgba(0, 0, 0, 0.95), 0 0 25px rgba(239, 68, 68, 0.15)' : '0 4px 30px rgba(0, 0, 0, 0.85)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '14px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
      }}>
        {/* Logo with Real AUTONYX Emblem */}
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#FFFFFF' }}>
          <div style={{
            position: 'relative',
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            overflow: 'hidden',
            boxShadow: '0 0 16px rgba(239, 68, 68, 0.35)',
            border: '1.5px solid rgba(255, 255, 255, 0.15)',
            background: '#050408',
          }}>
            <img
              src="/autonyx-logo.png"
              alt="AUTONYX AI Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
              <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '20px', letterSpacing: '-0.5px', color: '#FFFFFF' }}>
                AUTONY
              </span>
              <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '20px', color: '#EF4444' }}>
                X
              </span>
            </div>
            <span style={{ fontSize: '10px', color: '#9CA3AF', letterSpacing: '2px', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
              AI AUTOMATION
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '28px', fontSize: '14px', color: '#9CA3AF', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
          <a
            href="#services"
            style={{ transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
          >
            Services
          </a>
          <a
            href="#compare"
            style={{ transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
          >
            Why Automate
          </a>
          <a
            href="#process"
            style={{ transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
          >
            How It Works
          </a>
          <a
            href="#faq"
            style={{ transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
          >
            FAQ
          </a>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#FFFFFF',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(34, 197, 94, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={onOpenModal}
            style={{
              background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
              boxShadow: '0 8px 24px rgba(220, 38, 38, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              padding: '11px 22px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(220, 38, 38, 0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(220, 38, 38, 0.45)';
            }}
          >
            Book Free Audit
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '10px',
            padding: '8px 12px',
            color: '#FFFFFF',
            fontSize: '18px',
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
          background: '#0B0A10',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '20px 24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }} className="md:hidden">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', color: '#E5E7EB', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Services</a>
          <a href="#compare" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', color: '#E5E7EB', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Why Automate</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', color: '#E5E7EB', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>How It Works</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', color: '#E5E7EB', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>FAQ</a>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '8px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(220, 38, 38, 0.4)',
              }}
            >
              Book Free Consultation
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(21, 128, 61, 0.32))',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '15px',
                textAlign: 'center',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#22C55E">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.63 11.71 14.29 10.48 13.19C9.52 12.33 8.87 11.27 8.74 11.02C8.62 10.77 8.73 10.64 8.85 10.52C8.96 10.41 9.1 10.23 9.22 10.08C9.34 9.94 9.38 9.84 9.47 9.67C9.55 9.51 9.51 9.37 9.45 9.24C9.38 9.12 8.92 7.99 8.73 7.52C8.54 7.07 8.35 7.13 8.21 7.12C8.08 7.11 7.92 7.11 7.76 7.11C7.6 7.11 7.34 7.17 7.11 7.42C6.89 7.66 6.27 8.24 6.27 9.42C6.27 10.6 7.13 11.74 7.25 11.9C7.38 12.07 8.95 14.48 11.36 15.52C11.93 15.77 12.37 15.91 12.72 16.02C13.3 16.2 13.82 16.18 14.23 16.12C14.7 16.05 15.66 15.54 15.86 14.97C16.06 14.4 16.06 13.91 16 13.81C15.94 13.71 15.82 13.65 16.57 14.41Z" />
              </svg>
              WhatsApp 1: +92 336 3925950
            </a>
            <a
              href="https://wa.me/923141151571"
              target="_blank"
              rel="noreferrer"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(21, 128, 61, 0.32))',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '15px',
                textAlign: 'center',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#22C55E">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.63 11.71 14.29 10.48 13.19C9.52 12.33 8.87 11.27 8.74 11.02C8.62 10.77 8.73 10.64 8.85 10.52C8.96 10.41 9.1 10.23 9.22 10.08C9.34 9.94 9.38 9.84 9.47 9.67C9.55 9.51 9.51 9.37 9.45 9.24C9.38 9.12 8.92 7.99 8.73 7.52C8.54 7.07 8.35 7.13 8.21 7.12C8.08 7.11 7.92 7.11 7.76 7.11C7.6 7.11 7.34 7.17 7.11 7.42C6.89 7.66 6.27 8.24 6.27 9.42C6.27 10.6 7.13 11.74 7.25 11.9C7.38 12.07 8.95 14.48 11.36 15.52C11.93 15.77 12.37 15.91 12.72 16.02C13.3 16.2 13.82 16.18 14.23 16.12C14.7 16.05 15.66 15.54 15.86 14.97C16.06 14.4 16.06 13.91 16 13.81C15.94 13.71 15.82 13.65 16.57 14.41Z" />
              </svg>
              WhatsApp 2: +92 314 1151571
            </a>
            <a
              href="mailto:autonyxaiautomation@gmail.com"
              style={{
                width: '100%',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                color: '#FFFFFF',
                padding: '13px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '13.5px',
                textAlign: 'center',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}
            >
              ✉️ autonyxaiautomation@gmail.com
              <span style={{ fontSize: '11px', background: '#EF4444', color: '#fff', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>Fast Reply</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
