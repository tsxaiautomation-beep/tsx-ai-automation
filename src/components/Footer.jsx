import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

const tools = ['WhatsApp', 'Gmail', 'Google Sheets', 'HubSpot', 'Shopify', 'Notion', 'OpenAI', 'n8n', 'Zapier', 'Make'];

export default function Footer({ onOpenAuditModal }) {
  return (
    <>
      {/* Tools marquee strip */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '48px 24px 12px', boxSizing: 'border-box', textAlign: 'center' }}>
        <div style={{ fontSize: 13, color: '#A8A3C2', letterSpacing: 2, fontWeight: 600, marginBottom: 24 }}>
          CONNECTS WITH THE TOOLS YOU ALREADY USE
        </div>
        <div style={{ overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}>
          <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 28s linear infinite', fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 22, color: '#8F8AAE' }}>
            <div style={{ display: 'flex', gap: 56, paddingRight: 56 }}>
              {tools.map(t => <span key={t}>{t}</span>)}
            </div>
            <div style={{ display: 'flex', gap: 56, paddingRight: 56 }} aria-hidden="true">
              {tools.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(167,139,250,0.12)', marginTop: 48 }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '48px 24px', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg,#A78BFA,#6D28D9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 13, color: '#fff' }}>TSX</div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
              <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 16 }}>TSX AI Automation</span>
              <span style={{ fontSize: 13, color: '#A8A3C2' }}>Pakistan's #1 AI Automation Agency</span>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, fontSize: 14, color: '#A8A3C2' }}>
            <a href="#services">Services</a>
            <a href="#comparison">Why Automate</a>
            <a href="#process">How It Works</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#A8A3C2' }}>
            <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#A8A3C2' }}>📞 {COMPANY_INFO.phone}</a>
            <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" style={{ color: '#A8A3C2' }}>💬 WhatsApp Us</a>
            <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#A8A3C2' }}>✉️ {COMPANY_INFO.email}</a>
            <span>📍 Karachi, Pakistan</span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(167,139,250,0.08)', textAlign: 'center', padding: '20px 24px', fontSize: 13, color: '#6B6690' }}>
          © 2026 TSX AI Automation. All rights reserved. · Karachi, Pakistan 🇵🇰
        </div>
      </footer>
    </>
  );
}
