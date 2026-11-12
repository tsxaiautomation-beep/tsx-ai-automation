import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/companyData';

export default function CaseStudies({ onOpenAuditModal }) {
  return (
    <section id="case-studies" style={{ borderTop: '1px solid rgba(167,139,250,0.12)', background: '#0A0716', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>CLIENT RESULTS</div>
          <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.12, letterSpacing: -1.2 }}>
            Proven impact for growing teams
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: '#B7B2D1' }}>
            Real metrics achieved by TSX AI autonomous automation engines.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {CASE_STUDIES.map((study) => (
            <div
              key={study.client}
              style={{
                borderRadius: 24,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(167,139,250,0.2)',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 24,
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 12, fontFamily: 'monospace', fontWeight: 600, color: '#C4B5FD', background: 'rgba(139,92,246,0.15)', padding: '4px 10px', borderRadius: 8, border: '1px solid rgba(167,139,250,0.25)' }}>
                    {study.industry}
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#34D399', background: 'rgba(16,185,129,0.12)', padding: '4px 10px', borderRadius: 8, border: '1px solid rgba(16,185,129,0.3)' }}>
                    {study.badge}
                  </span>
                </div>

                <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 22, color: '#F5F3FF' }}>
                  {study.client}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
                  <div style={{ color: '#A8A3C2' }}>
                    <strong style={{ color: '#F87171' }}>Challenge: </strong>{study.challenge}
                  </div>
                  <div style={{ color: '#EDE9FE' }}>
                    <strong style={{ color: '#A78BFA' }}>TSX Solution: </strong>{study.solution}
                  </div>
                </div>

                {/* Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, paddingTop: 16, borderTop: '1px solid rgba(167,139,250,0.15)' }}>
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} style={{ background: 'rgba(18,12,38,0.7)', padding: '12px 8px', borderRadius: 14, textAlign: 'center', border: '1px solid rgba(167,139,250,0.15)' }}>
                      <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 800, color: '#C4B5FD' }}>{res.value}</div>
                      <div style={{ fontSize: 11, color: '#A8A3C2', marginTop: 4, lineHeight: 1.2 }}>{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenAuditModal}
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: 12,
                  background: 'rgba(139,92,246,0.12)',
                  border: '1px solid rgba(167,139,250,0.3)',
                  color: '#DDD6FE',
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  transition: 'all 0.2s',
                }}
              >
                <span>Request Similar System</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
