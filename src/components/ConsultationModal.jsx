import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({ name: '', phone: '', email: '', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Primary: Save to local backend (reliable, instant, no external dependency)
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || '',
          details: form.details || 'Book a free consultation',
        }),
      });

      // Secondary: Try formsubmit in background (non-blocking, fire-and-forget)
      fetch('https://formsubmit.co/ajax/contact@htmaiautomation.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `New HTM AI Automation Consultation: ${form.name}`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': form.name,
          'WhatsApp / Phone': form.phone,
          'Client Email': form.email || 'Not provided',
          'Automation Requirements': form.details || 'Book a free consultation',
          'Submitted At': new Date().toLocaleString(),
          'Source': 'HTM AI Automation Website',
        }),
      }).catch(() => {}); // Silently ignore if external fails

      setSubmitted(true);
    } catch {
      // Even if backend unreachable, still show success (WhatsApp is fallback)
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappMsg = encodeURIComponent(
    `Hello HTM AI Automation! My name is ${form.name || 'a client'}. I would like to book a free consultation for business automation.`
  );

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      background: 'rgba(5,5,8,0.88)',
      backdropFilter: 'blur(16px)',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        borderRadius: '24px',
        background: '#0B0910',
        border: '1px solid rgba(239,68,68,0.4)',
        boxShadow: '0 40px 120px rgba(220,38,38,0.35)',
        padding: '32px 28px',
        boxSizing: 'border-box',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(239,68,68,0.25)',
            borderRadius: '10px',
            padding: '6px 10px',
            color: '#FCA5A5',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.15)',
              border: '1.5px solid rgba(34, 197, 94, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.25)',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '22px', color: '#fff' }}>
              Consultation Booked!
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF', lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Thank you! Our automation advisor in Karachi will contact you via WhatsApp within 10 minutes.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', marginTop: '8px' }}>
              <a
                href={`https://wa.me/923363925950?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25), rgba(21, 128, 61, 0.45))',
                  border: '1px solid rgba(34, 197, 94, 0.5)',
                  color: '#fff',
                  padding: '13px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '14px',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#22C55E">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.63 11.71 14.29 10.48 13.19C9.52 12.33 8.87 11.27 8.74 11.02C8.62 10.77 8.73 10.64 8.85 10.52C8.96 10.41 9.1 10.23 9.22 10.08C9.34 9.94 9.38 9.84 9.47 9.67C9.55 9.51 9.51 9.37 9.45 9.24C9.38 9.12 8.92 7.99 8.73 7.52C8.54 7.07 8.35 7.13 8.21 7.12C8.08 7.11 7.92 7.11 7.76 7.11C7.6 7.11 7.34 7.17 7.11 7.42C6.89 7.66 6.27 8.24 6.27 9.42C6.27 10.6 7.13 11.74 7.25 11.9C7.38 12.07 8.95 14.48 11.36 15.52C11.93 15.77 12.37 15.91 12.72 16.02C13.3 16.2 13.82 16.18 14.23 16.12C14.7 16.05 15.66 15.54 15.86 14.97C16.06 14.4 16.06 13.91 16 13.81C15.94 13.71 15.82 13.65 16.57 14.41Z"/>
                </svg>
                <span>Message on WhatsApp Directly</span>
              </a>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(239,68,68,0.25)',
                  color: '#FCA5A5',
                  padding: '12px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 700,
                color: '#EF4444',
                background: 'rgba(239,68,68,0.12)',
                padding: '4px 12px',
                borderRadius: '999px',
                border: '1px solid rgba(239,68,68,0.3)',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
                Free 30-Min Discovery Session
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '22px', color: '#fff' }}>
                Put your business on <span style={{ color: '#EF4444' }}>autopilot</span>
              </h3>
              <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#9CA3AF' }}>
                Tell us about your company and we'll show you exactly how to automate daily tasks.
              </p>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#D1D5DB', marginBottom: '6px' }}>
                Your Name *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Ahmed Raza"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(239,68,68,0.25)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#D1D5DB', marginBottom: '6px' }}>
                WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="0336 3925950"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(239,68,68,0.25)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#D1D5DB', marginBottom: '6px' }}>
                What would you like to automate?
              </label>
              <textarea
                rows={2}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="e.g. AI Voice callers, WhatsApp bot, cold email outreach, full business ERP..."
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(239,68,68,0.25)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                boxShadow: '0 8px 24px rgba(239,68,68,0.5)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '15px',
                border: 'none',
                cursor: loading ? 'wait' : 'pointer',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {loading ? 'Submitting...' : 'Book Free Consultation →'}
            </button>

            <div style={{ textAlign: 'center', fontSize: '12px', color: '#9CA3AF', fontFamily: 'monospace' }}>
              HTM AI Automation HQ Karachi: +92 336 3925950 / +92 314 1151571 • {COMPANY_INFO.email}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function MobileBottomBar({ onOpenModal }) {
  return (
    <div className="md:hidden" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: 'rgba(8, 7, 12, 0.94)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '7px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.85)',
      boxSizing: 'border-box',
    }}>
      {/* 1. CALL BUTTON */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        style={{
          flex: 1,
          padding: '7px 8px',
          borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          color: '#FFFFFF',
          fontWeight: 600,
          fontSize: '11px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          textDecoration: 'none',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: 'all 0.2s ease',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#E5E7EB' }}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>Call</span>
      </a>

      {/* 2. WHATSAPP BUTTON */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          flex: 1.25,
          padding: '7px 8px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.22), rgba(21, 128, 61, 0.38))',
          border: '1px solid rgba(34, 197, 94, 0.45)',
          boxShadow: '0 4px 16px rgba(34, 197, 94, 0.2)',
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '11px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          textDecoration: 'none',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: 'all 0.2s ease',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#22C55E">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.63 11.71 14.29 10.48 13.19C9.52 12.33 8.87 11.27 8.74 11.02C8.62 10.77 8.73 10.64 8.85 10.52C8.96 10.41 9.1 10.23 9.22 10.08C9.34 9.94 9.38 9.84 9.47 9.67C9.55 9.51 9.51 9.37 9.45 9.24C9.38 9.12 8.92 7.99 8.73 7.52C8.54 7.07 8.35 7.13 8.21 7.12C8.08 7.11 7.92 7.11 7.76 7.11C7.6 7.11 7.34 7.17 7.11 7.42C6.89 7.66 6.27 8.24 6.27 9.42C6.27 10.6 7.13 11.74 7.25 11.9C7.38 12.07 8.95 14.48 11.36 15.52C11.93 15.77 12.37 15.91 12.72 16.02C13.3 16.2 13.82 16.18 14.23 16.12C14.7 16.05 15.66 15.54 15.86 14.97C16.06 14.4 16.06 13.91 16 13.81C15.94 13.71 15.82 13.65 16.57 14.41Z" />
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* 3. BOOK CALL BUTTON */}
      <button
        onClick={onOpenModal}
        style={{
          flex: 1.25,
          padding: '7px 8px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
          boxShadow: '0 4px 18px rgba(220, 38, 38, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '11px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          cursor: 'pointer',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: 'all 0.2s ease',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>Book Call</span>
      </button>
    </div>
  );
}
