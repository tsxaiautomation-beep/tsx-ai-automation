import React from 'react';
import { STATS } from '../data/companyData';

const statData = [
  { value: '24/7', label: 'Automations that never sleep' },
  { value: '< 10s', label: 'Instant lead reply on WhatsApp' },
  { value: '85%+', label: 'Manual work eliminated' },
  { value: '3.5x', label: 'Average ROI in 90 days' },
];

export default function Stats() {
  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '48px 24px', boxSizing: 'border-box' }}>
      <div style={{
        display: 'flex', flexWrap: 'wrap',
        background: 'linear-gradient(180deg,rgba(139,92,246,0.14),rgba(255,255,255,0.03))',
        border: '1px solid rgba(167,139,250,0.3)',
        borderRadius: 28,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 30px 90px rgba(109,40,217,0.25)',
      }}>
        {statData.map((s, i) => (
          <div key={i} style={{
            flex: '1 1 200px', minWidth: 0,
            padding: '36px 28px', boxSizing: 'border-box', textAlign: 'center',
            borderRight: i < statData.length - 1 ? '1px solid rgba(167,139,250,0.15)' : 'none',
          }}>
            <div style={{
              fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 48, lineHeight: 1,
              background: 'linear-gradient(180deg,#EDE9FE,#8B5CF6)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>{s.value}</div>
            <div style={{ marginTop: 10, fontSize: 14, color: '#B7B2D1' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
