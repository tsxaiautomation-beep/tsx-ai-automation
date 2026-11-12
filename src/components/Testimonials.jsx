import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export default function Testimonials() {
  return (
    <section style={{ borderTop: '1px solid rgba(167,139,250,0.12)', background: '#07050F', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>TESTIMONIALS</div>
          <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.12, letterSpacing: -1.2 }}>
            Trusted by founders & leaders
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: '#B7B2D1' }}>
            Hear from teams that eliminated manual chaos with custom TSX AI automations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                borderRadius: 24,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(167,139,250,0.2)',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 20,
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', gap: 4, color: '#FBBF24' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#FBBF24" />
                  ))}
                </div>

                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: '#DDD6FE', fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 16, borderTop: '1px solid rgba(167,139,250,0.15)' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(139,92,246,0.5)' }}
                />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#F5F3FF' }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: '#A8A3C2' }}>{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
