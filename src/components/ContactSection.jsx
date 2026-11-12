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
      // 1. Send direct email to tsxaiautomation@gmail.com
      await fetch('https://formsubmit.co/ajax/tsxaiautomation@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Lead from Website: ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'WhatsApp / Phone': formData.phone,
          'Client Email': formData.email || 'Not provided',
          'Message / Details': formData.message || 'No additional message',
          'Submitted At': new Date().toLocaleString(),
          'Source': 'TSX AI Website - Quick Contact Form',
        }),
      });

      // 2. Also save to local backend if running
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
        background: 'radial-gradient(closest-side,rgba(124,58,237,0.5),rgba(124,58,237,0))',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        maxWidth: '1100px',
        margin: '0 auto',
        background: 'linear-gradient(160deg,rgba(139,92,246,0.3),rgba(20,14,40,0.9) 70%)',
        border: '1px solid rgba(167,139,250,0.5)',
        borderRadius: '32px',
        padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)',
        boxSizing: 'border-box',
        textAlign: 'center',
        boxShadow: '0 40px 140px rgba(109,40,217,0.4)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>
        <h2 style={{
          margin: 0,
          fontFamily: "'Sora',sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(28px, 5vw, 56px)',
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          maxWidth: '820px',
        }}>
          Ready to put your business on autopilot?
        </h2>

        <p style={{
          margin: 0,
          fontSize: 'clamp(15px, 2vw, 19px)',
          lineHeight: 1.65,
          color: '#C9C4E0',
          maxWidth: '640px',
        }}>
          Book a free consultation. We will look at your business, show you what can be automated and give you an honest recommendation.
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
              background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
              boxShadow: '0 14px 44px rgba(139,92,246,0.6)',
              color: '#FFFFFF',
              padding: '16px 36px',
              borderRadius: '14px',
              fontWeight: 600,
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              width: 'min(100%, 300px)',
            }}
          >
            Book a free consultation
          </button>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              border: '1px solid rgba(196,181,253,0.5)',
              background: 'rgba(255,255,255,0.05)',
              color: '#F5F3FF',
              padding: '16px 36px',
              borderRadius: '14px',
              fontWeight: 600,
              fontSize: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'min(100%, 300px)',
            }}
          >
            Chat on WhatsApp
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
          color: '#C9C4E0',
        }}>
          <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#C9C4E0' }}>
            ✉️ {COMPANY_INFO.email}
          </a>
          <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" style={{ color: '#C9C4E0' }}>
            💬 {COMPANY_INFO.phone}
          </a>
          <span>📍 Karachi, Pakistan</span>
        </div>

        {/* Quick Consultation Form */}
        <div style={{
          marginTop: '24px',
          width: '100%',
          maxWidth: '560px',
          background: 'rgba(7,5,15,0.7)',
          border: '1px solid rgba(167,139,250,0.3)',
          borderRadius: '20px',
          padding: '24px',
          boxSizing: 'border-box',
          textAlign: 'left',
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '16px 8px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>✅</div>
              <h4 style={{ margin: '0 0 6px', fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: '18px', color: '#fff' }}>
                Thank you! We received your inquiry.
              </h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#B7B2D1' }}>
                We will reply via WhatsApp within 10 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#A78BFA', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Quick message / request a call
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    padding: '11px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(167,139,250,0.25)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    width: '100%',
                  }}
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    padding: '11px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(167,139,250,0.25)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    width: '100%',
                  }}
                />
              </div>

              <textarea
                rows={2}
                placeholder="What task or workflow do you want to automate?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  padding: '11px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(167,139,250,0.25)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'vertical',
                  width: '100%',
                }}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: loading ? 'wait' : 'pointer',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {loading ? 'Sending...' : 'Send Inquiry →'}
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
    <div style={{ borderTop: '1px solid rgba(167,139,250,0.12)' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg,#A78BFA,#6D28D9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Sora',sans-serif",
            fontWeight: 800,
            fontSize: '13px',
            color: '#FFFFFF',
          }}>
            TSX
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
            <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '16px' }}>
              TSX AI Automation
            </span>
            <span style={{ fontSize: '13px', color: '#A8A3C2' }}>
              Smart automation for growing businesses
            </span>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', fontSize: '14px', color: '#A8A3C2' }}>
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Copyright */}
        <div style={{ fontSize: '13px', color: '#A8A3C2' }}>
          2026 TSX AI Automation. All rights reserved.
        </div>
      </div>
    </div>
  );
}
