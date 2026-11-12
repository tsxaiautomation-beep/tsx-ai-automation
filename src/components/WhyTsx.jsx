import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

const reasons = [
  { icon: '💬', title: 'Plain-language communication', desc: 'No jargon. You always know what is being built and why.' },
  { icon: '🔧', title: 'Built around your business', desc: 'Every automation is designed for your tools, team and goals — not a generic template.' },
  { icon: '✅', title: 'Clear scope and timelines', desc: 'You agree on exactly what is included before any work starts. No surprises.' },
  { icon: '🛡️', title: 'Support after launch', desc: 'We stay with you to fix, tune and expand your automations as your business grows.' },
  { icon: '🌍', title: 'Roman Urdu + English AI', desc: 'Our bots are trained specifically for Pakistan — they understand Roman Urdu, local context, and industry terms.' },
  { icon: '⚡', title: 'Fast delivery — 7-14 days', desc: 'From signed agreement to live automation in 7-14 days. Quick, professional, and reliable.' },
];

const industries = ['Agencies', 'E-commerce', 'Real Estate', 'Clinics', 'Education', 'Local Services', 'Startups', 'Logistics', 'Manufacturing', 'Law Firms'];

export default function WhyTsx() {
  return (
    <div id="why-tsx" style={{ position: 'relative', borderTop: '1px solid rgba(167,139,250,0.12)' }}>
      <div style={{ position: 'absolute', left: -250, top: 100, width: 700, height: 700, background: 'radial-gradient(closest-side,rgba(124,58,237,0.2),rgba(124,58,237,0))', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '100px 24px', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', gap: 64 }}>
        
        {/* Left */}
        <div style={{ flex: '1 1 400px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>WHY TSX</div>
          <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,52px)', lineHeight: 1.12, letterSpacing: -1 }}>
            AI explained simply, built to fit your business
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#B7B2D1' }}>
            You do not need to understand the technology. We handle the technical side and explain everything in clear, everyday language — in Urdu or English.
          </p>
          <div>
            <div style={{ fontSize: 13, color: '#A8A3C2', letterSpacing: 2, fontWeight: 600, marginBottom: 12 }}>WE HELP</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {industries.map(ind => (
                <span key={ind} style={{ border: '1px solid rgba(167,139,250,0.3)', background: 'rgba(139,92,246,0.1)', borderRadius: 999, padding: '8px 16px', fontSize: 14 }}>{ind}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right grid */}
        <div style={{ flex: '1 1 480px', minWidth: 0, display: 'flex', flexWrap: 'wrap', gap: 18 }}>
          {reasons.map(r => (
            <div key={r.title} style={{
              flex: '1 1 220px', minWidth: 0,
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(167,139,250,0.2)',
              borderRadius: 22, padding: 26, boxSizing: 'border-box',
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: 'rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{r.icon}</div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 17 }}>{r.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: '#B7B2D1' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
