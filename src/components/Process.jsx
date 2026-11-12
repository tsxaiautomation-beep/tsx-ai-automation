import React from 'react';
import { HOW_IT_WORKS_SIMPLE } from '../data/companyData';

const steps = [
  { n: '01', title: 'Free Discovery Call', desc: 'We learn how your business runs and find the tasks wasting the most time. 100% free, no commitment.' },
  { n: '02', title: 'Clear Plan & Proposal', desc: 'You get a plain-language plan: what we build, how it works, when it will be ready, and the exact cost — no hidden fees.' },
  { n: '03', title: 'Build & Test', desc: 'Our Karachi engineering team builds your custom AI automation and tests it with real scenarios. Nothing goes live without your approval.' },
  { n: '04', title: 'Launch & Support', desc: 'We go live in 7-14 days, train your team, and stay with you to improve and expand as your business grows.', highlight: true },
];

export default function Process({ onOpenAuditModal }) {
  return (
    <div id="process" style={{ borderTop: '1px solid rgba(167,139,250,0.12)', background: '#0A0716' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '100px 24px', boxSizing: 'border-box' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 64px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>HOW IT WORKS</div>
          <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,52px)', lineHeight: 1.12, letterSpacing: -1 }}>
            From first call to launch in four simple steps
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          {steps.map(s => (
            <div key={s.n} style={{
              flex: '1 1 240px', minWidth: 0,
              background: s.highlight
                ? 'linear-gradient(160deg,rgba(139,92,246,0.25),rgba(109,40,217,0.08))'
                : 'rgba(255,255,255,0.03)',
              border: s.highlight ? '1px solid rgba(167,139,250,0.55)' : '1px solid rgba(167,139,250,0.2)',
              borderRadius: 24, padding: 32, boxSizing: 'border-box',
              display: 'flex', flexDirection: 'column', gap: 14,
              boxShadow: s.highlight ? '0 20px 70px rgba(109,40,217,0.3)' : 'none',
            }}>
              <div style={{
                fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 56, lineHeight: 1,
                background: s.highlight ? 'linear-gradient(180deg,#EDE9FE,#8B5CF6)' : 'linear-gradient(180deg,#C4B5FD,#6D28D9)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              }}>{s.n}</div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 22 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: s.highlight ? '#D8D3EE' : '#B7B2D1' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onOpenAuditModal}
            style={{
              padding: '16px 36px', borderRadius: 14, border: 'none',
              background: 'linear-gradient(135deg,#8B5CF6,#6D28D9)',
              boxShadow: '0 14px 44px rgba(139,92,246,0.55)',
              color: '#fff', fontWeight: 700, fontSize: 17, cursor: 'pointer',
              fontFamily: "'Sora',sans-serif",
            }}>
            Start with a free discovery call →
          </button>
        </div>
      </div>
    </div>
  );
}
