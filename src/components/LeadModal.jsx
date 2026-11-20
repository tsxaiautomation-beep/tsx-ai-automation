import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, CORE_SOLUTIONS } from '../data/companyData';

export default function LeadModal({ isOpen, onClose, selectedService }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: selectedService || 'Official WhatsApp AI Bots',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('https://formsubmit.co/ajax/htm69404@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New AI Audit Request: ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'Company': formData.company || 'Not provided',
          'WhatsApp / Phone': formData.phone,
          'Client Email': formData.email || 'Not provided',
          'Selected Service': formData.service,
          'Details': formData.details || 'Audit Request',
          'Submitted At': new Date().toLocaleString(),
          'Source': 'HTM AI Automation Website - Lead Modal',
        }),
      });

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
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello HTM AI Automation! My name is ${formData.name || 'a prospect'} (${formData.company || 'Business'}). I want to book an AI audit for: ${formData.service}.`
  );

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      background: 'rgba(7,5,15,0.85)',
      backdropFilter: 'blur(16px)',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 520,
        borderRadius: 28,
        background: '#0E0B1C',
        border: '1px solid rgba(167,139,250,0.4)',
        boxShadow: '0 40px 120px rgba(109,40,217,0.4)',
        padding: 36,
        boxSizing: 'border-box',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(167,139,250,0.2)',
            borderRadius: 10,
            padding: 8,
            color: '#C4B5FD',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'rgba(16,185,129,0.15)',
              border: '1px solid rgba(16,185,129,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34D399',
            }}>
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 24, color: '#fff' }}>
                Consultation Slot Reserved!
              </h3>
              <p style={{ margin: '8px 0 0', fontSize: 14, color: '#B7B2D1' }}>
                Our global engineering team will reach out to you within 2 hours.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', marginTop: 8 }}>
              <a
                href={`https://wa.me/923363925950?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#15803D',
                  color: '#fff',
                  padding: '14px',
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
              >
                <MessageSquare size={16} />
                <span>Message on WhatsApp Now</span>
              </a>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  color: '#C4B5FD',
                  padding: '12px',
                  borderRadius: 12,
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#DDD6FE', background: 'rgba(139,92,246,0.15)', padding: '4px 12px', borderRadius: 999, border: '1px solid rgba(167,139,250,0.3)', marginBottom: 10 }}>
                <Sparkles size={14} />
                <span>Free 30-Minute AI Audit</span>
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 24, color: '#fff' }}>
                Book your strategy consultation
              </h3>
              <p style={{ margin: '6px 0 0', fontSize: 13, color: '#B7B2D1' }}>
                We'll analyze your workflow and calculate your exact ROI.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#C9C4E0', marginBottom: 6 }}>Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Adeel Khan"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(167,139,250,0.25)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#C9C4E0', marginBottom: 6 }}>WhatsApp / Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0336 3925950"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(167,139,250,0.25)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#C9C4E0', marginBottom: 6 }}>Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@company.com"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(167,139,250,0.25)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#C9C4E0', marginBottom: 6 }}>Company / Brand</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. ABC Textiles"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(167,139,250,0.25)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#C9C4E0', marginBottom: 6 }}>Service Focus</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, background: '#0E0B1C', border: '1px solid rgba(167,139,250,0.25)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                >
                  {CORE_SOLUTIONS.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Complete Custom Architecture">Complete Custom Architecture</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#C9C4E0', marginBottom: 6 }}>Brief Workflow Description</label>
              <textarea
                rows={2}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="What manual task wastes the most time in your business?"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(167,139,250,0.25)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: 12,
                background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
                boxShadow: '0 8px 24px rgba(139,92,246,0.5)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 15,
                border: 'none',
                cursor: loading ? 'wait' : 'pointer',
                fontFamily: "'Sora',sans-serif",
              }}
            >
              {loading ? 'Submitting Details...' : 'Confirm Free Audit Reservation'}
            </button>

            <div style={{ textAlign: 'center', fontSize: 12, color: '#A8A3C2', fontFamily: 'monospace' }}>
              Global Operations Desk: {COMPANY_INFO.phone} • {COMPANY_INFO.email}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
