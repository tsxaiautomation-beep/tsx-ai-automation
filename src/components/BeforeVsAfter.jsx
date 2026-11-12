import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

const leftItems = [
  'Replying to every enquiry by hand',
  'Copying data between apps and sheets',
  'Leads forgotten in a crowded inbox',
  'Reports built manually at month end',
  'Customers waiting for a reply after hours',
  'Losing leads to competitors who reply faster',
];
const rightItems = [
  'Instant replies in under 10 seconds, day and night',
  'Data flows between all your apps automatically',
  'Every lead followed up and qualified by AI',
  'Reports delivered on schedule — no effort needed',
  'Customers get answers in Roman Urdu or English 24/7',
  'You close more deals while AI handles the groundwork',
];

export default function BeforeVsAfter({ onOpenAuditModal }) {
  return (
    <div id="comparison" style={{ maxWidth: 1240, margin: '0 auto', padding: '100px 24px', boxSizing: 'border-box' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>WHY AUTOMATE</div>
        <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,52px)', lineHeight: 1.12, letterSpacing: -1 }}>
          Stop doing by hand what <span style={{ color: '#A78BFA' }}>AI can do for you</span>
        </h2>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {/* Without */}
        <div style={{
          flex: '1 1 400px', minWidth: 0,
          background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: 26, padding: 40, boxSizing: 'border-box',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 22, color: '#A8A3C2' }}>
            ❌ Without automation
          </div>
          {leftItems.map(t => (
            <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', color: '#B7B2D1', fontSize: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7F7A9C" strokeWidth="2.2" strokeLinecap="round" style={{ flex: 'none', marginTop: 2 }}>
                <path d="M6 6l12 12M18 6L6 18"/>
              </svg>
              {t}
            </div>
          ))}
        </div>

        {/* With TSX */}
        <div style={{
          flex: '1 1 400px', minWidth: 0, position: 'relative',
          background: 'linear-gradient(160deg,rgba(139,92,246,0.26),rgba(109,40,217,0.08))',
          border: '1px solid rgba(167,139,250,0.55)', borderRadius: 26,
          padding: 40, boxSizing: 'border-box',
          display: 'flex', flexDirection: 'column', gap: 20,
          boxShadow: '0 30px 100px rgba(109,40,217,0.35)',
        }}>
          <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 22 }}>
            ✅ With TSX AI Automation
          </div>
          {rightItems.map(t => (
            <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', color: '#F5F3FF', fontSize: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
                <path d="M5 12.5l4.5 4.5L19 7.5"/>
              </svg>
              {t}
            </div>
          ))}
          <button onClick={onOpenAuditModal}
            style={{
              marginTop: 8, padding: '14px 28px', borderRadius: 12, border: 'none',
              background: 'linear-gradient(135deg,#8B5CF6,#6D28D9)',
              boxShadow: '0 10px 30px rgba(139,92,246,0.5)',
              color: '#fff', fontWeight: 700, fontSize: 16, cursor: 'pointer',
              fontFamily: "'Sora',sans-serif", alignSelf: 'flex-start',
            }}>
            Start automating today →
          </button>
        </div>
      </div>
    </div>
  );
}
