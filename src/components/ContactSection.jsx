import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export function ContactSection({ onOpenModal }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send direct email notification to contact@htmaiautomation.com
      await fetch('https://formsubmit.co/ajax/contact@htmaiautomation.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `HTM AI Automation Lead: ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'WhatsApp / Phone': formData.phone,
          'Client Email': formData.email || 'Not provided',
          'Message / Details': formData.message || 'Quick consultation request',
          'Submitted At': new Date().toLocaleString(),
          'Source': 'HTM AI Automation Website - Quick Contact Form',
        }),
      });

      // Also save to local backend if running
      try {
        await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch {
        // Fallback
      }

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" style={{ position: 'relative', padding: '96px 20px', boxSizing: 'border-box' }}>
      {/* Background Radial Glow */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '1000px',
        height: '600px',
        marginLeft: '-500px',
        marginTop: '-300px',
        background: 'radial-gradient(closest-side, rgba(239,68,68,0.25), rgba(0,0,0,0))',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        maxWidth: '1100px',
        margin: '0 auto',
        background: 'linear-gradient(160deg, rgba(239,68,68,0.18), rgba(10,8,14,0.95) 70%)',
        border: '1px solid rgba(239,68,68,0.4)',
        borderRadius: '32px',
        padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)',
        boxSizing: 'border-box',
        textAlign: 'center',
        boxShadow: '0 40px 140px rgba(220,38,38,0.25)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>
        {/* Banner Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(239,68,68,0.12)',
          border: '1px solid rgba(239,68,68,0.4)',
          borderRadius: '999px',
          padding: '6px 16px',
          fontSize: '12px',
          fontWeight: 700,
          color: '#FCA5A5',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
          Your Partner in Digital Transformation
        </div>

        <h2 style={{
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(28px, 5vw, 54px)',
          lineHeight: 1.15,
          letterSpacing: '-1.5px',
          maxWidth: '840px',
          color: '#FFFFFF',
        }}>
          Ready to put your business on <span style={{ color: '#EF4444' }}>autopilot?</span>
        </h2>

        <p style={{
          margin: 0,
          fontSize: 'clamp(15px, 2vw, 18px)',
          lineHeight: 1.65,
          color: '#D1D5DB',
          maxWidth: '680px',
        }}>
          Book a free 30-minute discovery session with our Karachi engineering team. We'll map your workflows and provide an exact blueprint for ROI-driven automation.
        </p>

        {/* Buttons */}
        <div style={{
          marginTop: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '14px',
          width: '100%',
        }}>
          <button
            onClick={onOpenModal}
            style={{
              background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
              boxShadow: '0 14px 44px rgba(239,68,68,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
              color: '#FFFFFF',
              padding: '16px 36px',
              borderRadius: '14px',
              fontWeight: 700,
              fontSize: '15.5px',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              width: 'min(100%, 300px)',
              transition: 'transform 0.2s ease',
            }}
          >
            Let's Automate Together →
          </button>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              border: '1px solid rgba(34, 197, 94, 0.45)',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.14), rgba(21, 128, 61, 0.25))',
              color: '#FFFFFF',
              padding: '16px 36px',
              borderRadius: '14px',
              fontWeight: 700,
              fontSize: '15.5px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'min(100%, 300px)',
              gap: '8px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'all 0.2s ease',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#22C55E">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.63 11.71 14.29 10.48 13.19C9.52 12.33 8.87 11.27 8.74 11.02C8.62 10.77 8.73 10.64 8.85 10.52C8.96 10.41 9.1 10.23 9.22 10.08C9.34 9.94 9.38 9.84 9.47 9.67C9.55 9.51 9.51 9.37 9.45 9.24C9.38 9.12 8.92 7.99 8.73 7.52C8.54 7.07 8.35 7.13 8.21 7.12C8.08 7.11 7.92 7.11 7.76 7.11C7.6 7.11 7.34 7.17 7.11 7.42C6.89 7.66 6.27 8.24 6.27 9.42C6.27 10.6 7.13 11.74 7.25 11.9C7.38 12.07 8.95 14.48 11.36 15.52C11.93 15.77 12.37 15.91 12.72 16.02C13.3 16.2 13.82 16.18 14.23 16.12C14.7 16.05 15.66 15.54 15.86 14.97C16.06 14.4 16.06 13.91 16 13.81C15.94 13.71 15.82 13.65 16.57 14.41Z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Real Contact Badges */}
        <div style={{
          marginTop: '16px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px 32px',
          fontSize: '14px',
          color: '#D1D5DB',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>{COMPANY_INFO.email}</span>
            <span style={{ fontSize: '10.5px', background: '#EF4444', color: '#fff', padding: '1px 7px', borderRadius: '4px', fontWeight: 700 }}>⚡ Fastest Reply</span>
          </a>
          <a href="https://wa.me/923363925950" target="_blank" rel="noreferrer" style={{ color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#22C55E">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.63 11.71 14.29 10.48 13.19C9.52 12.33 8.87 11.27 8.74 11.02C8.62 10.77 8.73 10.64 8.85 10.52C8.96 10.41 9.1 10.23 9.22 10.08C9.34 9.94 9.38 9.84 9.47 9.67C9.55 9.51 9.51 9.37 9.45 9.24C9.38 9.12 8.92 7.99 8.73 7.52C8.54 7.07 8.35 7.13 8.21 7.12C8.08 7.11 7.92 7.11 7.76 7.11C7.6 7.11 7.34 7.17 7.11 7.42C6.89 7.66 6.27 8.24 6.27 9.42C6.27 10.6 7.13 11.74 7.25 11.9C7.38 12.07 8.95 14.48 11.36 15.52C11.93 15.77 12.37 15.91 12.72 16.02C13.3 16.2 13.82 16.18 14.23 16.12C14.7 16.05 15.66 15.54 15.86 14.97C16.06 14.4 16.06 13.91 16 13.81C15.94 13.71 15.82 13.65 16.57 14.41Z" />
            </svg>
            <span>WhatsApp: +92 336 3925950</span>
          </a>

          {/* Secondary Phone */}
          <a href="https://wa.me/923141151571" target="_blank" rel="noreferrer" style={{ color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#22C55E">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.63 11.71 14.29 10.48 13.19C9.52 12.33 8.87 11.27 8.74 11.02C8.62 10.77 8.73 10.64 8.85 10.52C8.96 10.41 9.1 10.23 9.22 10.08C9.34 9.94 9.38 9.84 9.47 9.67C9.55 9.51 9.51 9.37 9.45 9.24C9.38 9.12 8.92 7.99 8.73 7.52C8.54 7.07 8.35 7.13 8.21 7.12C8.08 7.11 7.92 7.11 7.76 7.11C7.6 7.11 7.34 7.17 7.11 7.42C6.89 7.66 6.27 8.24 6.27 9.42C6.27 10.6 7.13 11.74 7.25 11.9C7.38 12.07 8.95 14.48 11.36 15.52C11.93 15.77 12.37 15.91 12.72 16.02C13.3 16.2 13.82 16.18 14.23 16.12C14.7 16.05 15.66 15.54 15.86 14.97C16.06 14.4 16.06 13.91 16 13.81C15.94 13.71 15.82 13.65 16.57 14.41Z" />
            </svg>
            <span>WhatsApp: +92 314 1151571</span>
          </a>

          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Karachi, Pakistan</span>
          </span>
        </div>

        {/* Both numbers WhatsApp note & Fast Email info */}
        <div style={{
          marginTop: '10px',
          fontSize: '12.5px',
          color: '#9CA3AF',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}>
          <span style={{ color: '#22C55E', fontWeight: 600 }}>● Dono numbers 24/7 WhatsApp par active hain</span>
          <span>•</span>
          <span style={{ color: '#FCA5A5', fontWeight: 600 }}>Fastest reply ke liye email karein: {COMPANY_INFO.email}</span>
        </div>

        {/* Quick Consultation Form */}
        <div style={{
          marginTop: '24px',
          width: '100%',
          maxWidth: '560px',
          background: 'rgba(8,6,12,0.85)',
          border: '1px solid rgba(239,68,68,0.3)',
          borderRadius: '20px',
          padding: '24px',
          boxSizing: 'border-box',
          textAlign: 'left',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '16px 8px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>✅</div>
              <h4 style={{ margin: '0 0 6px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '18px', color: '#fff' }}>
                Inquiry Received!
              </h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF' }}>
                Our team will review your requirements and reach out via WhatsApp within 10 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#EF4444',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }} />
                Instant Consultation Request
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(239,68,68,0.25)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(239,68,68,0.25)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <textarea
                rows={2}
                placeholder="e.g. AI Voice callers, WhatsApp bot, cold email outreach, full business ERP..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(239,68,68,0.25)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'vertical',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                  color: '#fff',
                  border: 'none',
                  padding: '13px 24px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: loading ? 'wait' : 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: '0 8px 24px rgba(239,68,68,0.35)',
                }}
              >
                {loading ? 'Transmitting Request...' : 'Send Inquiry to HTM AI Automation →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <div style={{ borderTop: '1px solid rgba(239,68,68,0.15)', background: '#050508' }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '48px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img
            src="/htm-logo.png"
            alt="HTM AI Automation Logo"
            style={{
              width: '42px',
              height: '42px',
              objectFit: 'contain',
              borderRadius: '10px',
              border: '1px solid rgba(239,68,68,0.3)',
              background: '#000',
              boxShadow: '0 0 15px rgba(239,68,68,0.3)',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '17px', letterSpacing: '-0.3px', color: '#FFFFFF' }}>
              HTM{' '}
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#EF4444', letterSpacing: '1px' }}>AI AUTOMATION</span>
            </span>
            <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
              Automate • Innovate • Grow
            </span>
          </div>
        </div>

        {/* Column 2: Services */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.3px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Services
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
            <a href="#services" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              AI Chatbots &amp; Voice Agents
            </a>
            <a href="#services" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              Workflow Automation
            </a>
            <a href="#services" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              AI Integrations &amp; APIs
            </a>
            <a href="#services" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              Custom AI Solutions
            </a>
            <a href="#services" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              AI Email Marketing &amp; Outreach
            </a>
            <a href="#services" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              All Business ERP &amp; Operations
            </a>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.3px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Quick Links
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
            <a href="#why" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              Why HTM AI Automation
            </a>
            <a href="#compare" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              Before &amp; After Comparison
            </a>
            <a href="#process" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              How It Works (4 Steps)
            </a>
            <a href="#faq" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
              FAQ &amp; Pricing
            </a>
            <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" style={{ color: '#4ADE80', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>● Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Column 4: Contact Us (Both Numbers + Email) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.3px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Contact Us
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
            {/* Primary WhatsApp */}
            <a
              href="https://wa.me/923363925950"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#D1D5DB', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#22C55E'}
              onMouseLeave={e => e.currentTarget.style.color = '#D1D5DB'}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#22C55E">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.63 11.71 14.29 10.48 13.19C9.52 12.33 8.87 11.27 8.74 11.02C8.62 10.77 8.73 10.64 8.85 10.52C8.96 10.41 9.1 10.23 9.22 10.08C9.34 9.94 9.38 9.84 9.47 9.67C9.55 9.51 9.51 9.37 9.45 9.24C9.38 9.12 8.92 7.99 8.73 7.52C8.54 7.07 8.35 7.13 8.21 7.12C8.08 7.11 7.92 7.11 7.76 7.11C7.6 7.11 7.34 7.17 7.11 7.42C6.89 7.66 6.27 8.24 6.27 9.42C6.27 10.6 7.13 11.74 7.25 11.9C7.38 12.07 8.95 14.48 11.36 15.52C11.93 15.77 12.37 15.91 12.72 16.02C13.3 16.2 13.82 16.18 14.23 16.12C14.7 16.05 15.66 15.54 15.86 14.97C16.06 14.4 16.06 13.91 16 13.81C15.94 13.71 15.82 13.65 16.57 14.41Z" />
                </svg>
              </div>
              <span>WhatsApp 1: +92 336 3925950</span>
            </a>

            {/* Secondary WhatsApp */}
            <a
              href="https://wa.me/923141151571"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#D1D5DB', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#22C55E'}
              onMouseLeave={e => e.currentTarget.style.color = '#D1D5DB'}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#22C55E">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.63 11.71 14.29 10.48 13.19C9.52 12.33 8.87 11.27 8.74 11.02C8.62 10.77 8.73 10.64 8.85 10.52C8.96 10.41 9.1 10.23 9.22 10.08C9.34 9.94 9.38 9.84 9.47 9.67C9.55 9.51 9.51 9.37 9.45 9.24C9.38 9.12 8.92 7.99 8.73 7.52C8.54 7.07 8.35 7.13 8.21 7.12C8.08 7.11 7.92 7.11 7.76 7.11C7.6 7.11 7.34 7.17 7.11 7.42C6.89 7.66 6.27 8.24 6.27 9.42C6.27 10.6 7.13 11.74 7.25 11.9C7.38 12.07 8.95 14.48 11.36 15.52C11.93 15.77 12.37 15.91 12.72 16.02C13.3 16.2 13.82 16.18 14.23 16.12C14.7 16.05 15.66 15.54 15.86 14.97C16.06 14.4 16.06 13.91 16 13.81C15.94 13.71 15.82 13.65 16.57 14.41Z" />
                </svg>
              </div>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span>WhatsApp 2: +92 314 1151571</span>
                <span style={{ fontSize: '11px', color: '#6B7280', fontStyle: 'italic' }}>
                  📌 If no reply on No.1 within 24 hrs
                </span>
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              style={{ color: '#D1D5DB', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#EF4444'}
              onMouseLeave={e => e.currentTarget.style.color = '#D1D5DB'}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ wordBreak: 'break-all' }}>{COMPANY_INFO.email}</span>
                <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: 700 }}>⚡ Fastest Reply</span>
              </div>
            </a>

            {/* Location */}
            <div style={{ color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div style={{ fontSize: '13px', color: '#6B7280', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 20px', alignItems: 'center' }}>
        <span>© {new Date().getFullYear()} HTM AI Automation. All rights reserved.</span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span>Karachi, Pakistan 🇵🇰</span>
        <span style={{ opacity: 0.4 }}>|</span>
        <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#6B7280', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = '#EF4444'} onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}>
          {COMPANY_INFO.email}
        </a>
      </div>
    </div>
  );
}
