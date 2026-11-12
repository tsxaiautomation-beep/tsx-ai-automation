import React from 'react';
import { Layers, ShieldCheck, Code2 } from 'lucide-react';
import { TECH_STACK } from '../data/companyData';

export default function TechStack() {
  return (
    <section style={{ borderTop: '1px solid rgba(167,139,250,0.12)', background: '#07050F', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', boxSizing: 'border-box' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>ENTERPRISE STACK</div>
          <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.12, letterSpacing: -1.2 }}>
            Battle-tested integrations & tech
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: '#B7B2D1' }}>
            We build exclusively on hardened, secure, high-availability tools and state-of-the-art foundation models.
          </p>
        </div>

        {/* Tech Badges Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              style={{
                padding: '20px 22px',
                borderRadius: 18,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(167,139,250,0.18)',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                transition: 'all 0.2s',
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: 'rgba(139,92,246,0.15)',
                border: '1px solid rgba(167,139,250,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C4B5FD',
                flexShrink: 0,
              }}>
                <Code2 size={20} />
              </div>
              <div style={{ minWidth: 0, overflow: 'hidden' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#F5F3FF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {tech.name}
                </div>
                <div style={{ fontSize: 12, color: '#A8A3C2', fontFamily: 'monospace', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: 2 }}>
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Compliance Banner */}
        <div style={{
          marginTop: 48,
          padding: 32,
          borderRadius: 24,
          background: 'linear-gradient(180deg, rgba(139,92,246,0.1), rgba(255,255,255,0.02))',
          border: '1px solid rgba(167,139,250,0.25)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 50,
              height: 50,
              borderRadius: 14,
              background: 'rgba(16,185,129,0.12)',
              border: '1px solid rgba(16,185,129,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34D399',
              flexShrink: 0,
            }}>
              <ShieldCheck size={28} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#F5F3FF', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
                <span>Bank-grade privacy & strict data protection</span>
                <span style={{ fontSize: 11, fontFamily: 'monospace', padding: '3px 9px', borderRadius: 999, background: '#064E3B', color: '#34D399', border: '1px solid rgba(16,185,129,0.3)' }}>
                  NDA SIGNED
                </span>
              </div>
              <div style={{ fontSize: 14, color: '#B7B2D1', marginTop: 4, maxWidth: 640, lineHeight: 1.5 }}>
                Your customer numbers, internal documents, and business records are never shared with third parties or used to train public AI models.
              </div>
            </div>
          </div>

          <div style={{
            fontFamily: 'monospace',
            fontSize: 13,
            color: '#DDD6FE',
            background: 'rgba(0,0,0,0.35)',
            padding: '10px 18px',
            borderRadius: 12,
            border: '1px solid rgba(167,139,250,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
            <span>GDPR & SOC-2 Compliant Architecture</span>
          </div>
        </div>

      </div>
    </section>
  );
}
