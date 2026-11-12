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
      // 1. Send direct email to tsxaiautomation@gmail.com
      await fetch('https://formsubmit.co/ajax/tsxaiautomation@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Consultation Booking: ${form.name}`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': form.name,
          'WhatsApp / Phone': form.phone,
          'Client Email': form.email || 'Not provided',
          'Automation Requirements': form.details || 'Book a free consultation',
          'Submitted At': new Date().toLocaleString(),
          'Source': 'TSX AI Website - Consultation Modal',
        }),
      });

      // 2. Also save to local backend if running
      try {
        await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
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

  const whatsappMsg = encodeURIComponent(
    `Hello TSX AI Automation! My name is ${form.name || 'a client'}. I would like to book a free consultation for business automation.`
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
      background: 'rgba(7,5,15,0.85)',
      backdropFilter: 'blur(16px)',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        borderRadius: '24px',
        background: '#0E0B1C',
        border: '1px solid rgba(167,139,250,0.4)',
        boxShadow: '0 40px 120px rgba(109,40,217,0.4)',
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
            border: '1px solid rgba(167,139,250,0.2)',
            borderRadius: '10px',
            padding: '6px 10px',
            color: '#C4B5FD',
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
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(16,185,129,0.15)',
              border: '1px solid rgba(16,185,129,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}>
              ✅
            </div>
            <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: '22px', color: '#fff' }}>
              Consultation Booked!
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#B7B2D1', lineHeight: 1.5 }}>
              Thank you! Our automation advisor in Karachi will contact you via WhatsApp within 10 minutes.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', marginTop: '8px' }}>
              <a
                href={`https://wa.me/923363925950?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#15803D',
                  color: '#fff',
                  padding: '12px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textAlign: 'center',
                }}
              >
                💬 Message on WhatsApp Directly
              </a>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  color: '#C4B5FD',
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
                fontSize: '12px',
                fontWeight: 600,
                color: '#DDD6FE',
                background: 'rgba(139,92,246,0.15)',
                padding: '4px 12px',
                borderRadius: '999px',
                border: '1px solid rgba(167,139,250,0.3)',
                marginBottom: '10px',
              }}>
                Free 30-Min Consultation
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: '22px', color: '#fff' }}>
                Put your business on autopilot
              </h3>
              <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#B7B2D1' }}>
                Tell us about your business and we'll show you what can be automated.
              </p>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#C9C4E0', marginBottom: '6px' }}>
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
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(167,139,250,0.25)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#C9C4E0', marginBottom: '6px' }}>
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
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(167,139,250,0.25)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#C9C4E0', marginBottom: '6px' }}>
                What would you like to automate?
              </label>
              <textarea
                rows={2}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="e.g. WhatsApp replies, invoicing, leads from ads..."
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(167,139,250,0.25)',
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
                background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
                boxShadow: '0 8px 24px rgba(139,92,246,0.5)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '15px',
                border: 'none',
                cursor: loading ? 'wait' : 'pointer',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {loading ? 'Booking...' : 'Book Free Consultation →'}
            </button>

            <div style={{ textAlign: 'center', fontSize: '12px', color: '#A8A3C2', fontFamily: 'monospace' }}>
              Karachi HQ: {COMPANY_INFO.phone} • {COMPANY_INFO.email}
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
      background: 'rgba(7,5,15,0.96)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(167,139,250,0.25)',
      padding: '8px 12px',
      display: 'flex',
      gap: '8px',
      boxShadow: '0 -10px 30px rgba(0,0,0,0.8)',
    }}>
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        style={{
          flex: 1,
          padding: '11px 8px',
          borderRadius: '10px',
          background: 'rgba(139,92,246,0.15)',
          border: '1px solid rgba(167,139,250,0.3)',
          color: '#DDD6FE',
          fontWeight: 700,
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          textDecoration: 'none',
        }}
      >
        📞 Call
      </a>

      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          flex: 1.2,
          padding: '11px 8px',
          borderRadius: '10px',
          background: '#15803D',
          color: '#fff',
          fontWeight: 700,
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          textDecoration: 'none',
        }}
      >
        💬 WhatsApp
      </a>

      <button
        onClick={onOpenModal}
        style={{
          flex: 1.2,
          padding: '11px 8px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg,#8B5CF6,#6D28D9)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Book Call
      </button>
    </div>
  );
}
