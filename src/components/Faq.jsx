import React, { useState } from 'react';
import { FAQS } from '../data/companyData';

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <div id="faq" style={{ borderTop: '1px solid rgba(167,139,250,0.12)', background: '#0A0716' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '100px 24px', boxSizing: 'border-box' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>FAQ</div>
          <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,52px)', lineHeight: 1.12, letterSpacing: -1 }}>
            Questions we hear often
          </h2>
        </div>

        {/* FAQ grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
          {FAQS.map((f, i) => (
            <div key={i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                flex: '1 1 440px', minWidth: 0,
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(167,139,250,0.2)',
                borderRadius: 20, padding: 28, boxSizing: 'border-box', cursor: 'pointer',
                borderColor: open === i ? 'rgba(167,139,250,0.5)' : 'rgba(167,139,250,0.2)',
                transition: 'border-color .2s',
              }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 18, lineHeight: 1.3 }}>{f.question}</h3>
                <span style={{ color: '#A78BFA', fontSize: 20, flex: 'none' }}>{open === i ? '−' : '+'}</span>
              </div>
              {open === i && (
                <p style={{ margin: '16px 0 0', fontSize: 15, lineHeight: 1.65, color: '#B7B2D1' }}>{f.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
