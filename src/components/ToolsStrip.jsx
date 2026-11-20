import React from 'react';

/* ══════════════════════════════════════════════
   TOOLS STRIP (Marquee Pill Strip)
══════════════════════════════════════════════ */
export function ToolsStrip() {
  const tools = [
    { name: 'AI Voice Agents', tag: 'Telephony' }, { name: 'WhatsApp', tag: 'Meta API' },
    { name: 'Email Outreach', tag: 'Cold AI' }, { name: 'Custom ERP', tag: 'All Ops' },
    { name: 'Gmail / Outlook', tag: 'Email' }, { name: 'Google Sheets', tag: 'Data' },
    { name: 'Slack & Teams', tag: 'Alerts' }, { name: 'HubSpot & CRM', tag: 'Leads' },
    { name: 'Shopify', tag: 'E-com' }, { name: 'OpenAI & Claude', tag: 'Models' },
    { name: 'MongoDB / SQL', tag: 'Cloud' }, { name: 'Stripe', tag: 'Payments' },
    { name: 'Notion', tag: 'Docs' },
  ];
  const Pill = ({ t }) => (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 18px',
      borderRadius: '999px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      border: '1px solid rgba(239, 68, 68, 0.22)',
      fontSize: '13px',
      fontWeight: 600,
      color: '#E5E7EB',
      whiteSpace: 'nowrap',
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
      transition: 'all 0.2s ease',
    }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 8px #EF4444' }} />
      <span>{t.name}</span>
      <span style={{ fontSize: '10.5px', color: '#FCA5A5', background: 'rgba(239,68,68,0.14)', border: '1px solid rgba(239,68,68,0.3)', padding: '2px 8px', borderRadius: '6px', fontWeight: 600 }}>{t.tag}</span>
    </div>
  );
  return (
    <div style={{
      position: 'relative',
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '12px 20px 24px',
      boxSizing: 'border-box',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Top Connecting Ray linking Hero to Marquee */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '25%',
        right: '25%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.45), transparent)',
        pointerEvents: 'none',
      }} />

      {/* High-Tech Integrated Pedestal Header */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontSize: '11px',
        color: '#EF4444',
        letterSpacing: '2.5px',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        background: 'rgba(239,68,68,0.08)',
        border: '1px solid rgba(239,68,68,0.25)',
        padding: '5px 16px',
        borderRadius: '999px',
        marginBottom: '20px',
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 8px #EF4444' }} />
        SEAMLESSLY INTEGRATED WITH YOUR ENTIRE TECH STACK
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 8px #EF4444' }} />
      </div>

      <div style={{
        overflow: 'hidden',
        WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
        maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
        padding: '4px 0',
      }}>
        <div className="anim-marquee" style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '14px', paddingRight: '14px' }}>{tools.map((t, i) => <Pill key={i} t={t} />)}</div>
          <div style={{ display: 'flex', gap: '14px', paddingRight: '14px' }} aria-hidden="true">{tools.map((t, i) => <Pill key={i} t={t} />)}</div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   NUMBERS BAND
══════════════════════════════════════════════ */
export function NumbersBand() {
  const stats = [
    { value: '24/7', label: 'Automations that never sleep', border: true },
    { value: '100%', label: 'Custom-built for your business', border: true },
    { value: '4 steps', label: 'From first audit to live launch', border: true },
    { value: 'Zero', label: 'Technical skills needed from you', border: false },
  ];
  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '24px 20px 20px', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', background: 'linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.6),0 0 20px rgba(239,68,68,0.08)', overflow: 'hidden' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ padding: '28px 20px', boxSizing: 'border-box', textAlign: 'center', borderRight: s.border ? '1px solid rgba(255,255,255,0.06)' : undefined, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,4.5vw,48px)', lineHeight: 1, letterSpacing: '-1.5px', background: 'linear-gradient(180deg,#FFFFFF,#EF4444)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{s.value}</div>
            <div style={{ marginTop: '10px', fontSize: '13.5px', color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   WE SERVE GLOBAL & INTERNATIONAL INDUSTRIES BAND
══════════════════════════════════════════════ */
export function IndustriesBand() {
  const industries = [
    {
      name: 'Restaurants',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2M15 11v11M4 2v7a3 3 0 0 0 3 3v10M7 2v7" />
        </svg>
      ),
    },
    {
      name: 'Clinics & Hospitals',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3M9 9h2M10 8v2M9 13h2M9 17h2" />
        </svg>
      ),
    },
    {
      name: 'E-Commerce',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      name: 'Real Estate',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
        </svg>
      ),
    },
    {
      name: 'Education',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      name: 'Auto Dealerships',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      name: 'Fashion & Retail',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      ),
    },
    {
      name: 'Consulting',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      name: 'Manufacturing',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M17 18h1M12 18h1M7 18h1" />
        </svg>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '12px 20px 28px', boxSizing: 'border-box' }}>
      <div style={{
        background: 'linear-gradient(155deg, rgba(16, 12, 22, 0.9) 0%, rgba(8, 7, 12, 0.95) 100%)',
        border: '1px solid rgba(239, 68, 68, 0.35)',
        borderRadius: '24px',
        padding: 'clamp(22px, 3.2vw, 32px) clamp(18px, 3.5vw, 32px)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(220, 38, 38, 0.18)',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle Top Specular Line */}
        <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, #EF4444, transparent)', pointerEvents: 'none' }} />

        {/* Section Header */}
        <div style={{
          fontSize: '11px',
          fontWeight: 800,
          color: '#9CA3AF',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          marginBottom: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 8px #EF4444' }} />
          WE SERVE TOP GLOBAL & INTERNATIONAL INDUSTRIES:
        </div>

        {/* Pills Flex */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 12px',
          alignItems: 'center',
        }}>
          {industries.map((ind, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '999px',
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                color: '#FFFFFF',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'default',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = '#EF4444';
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.18)';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(239, 68, 68, 0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.08)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.4)';
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {ind.icon}
              </span>
              <span>{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   AUTHENTIC HIGH-CONTRAST BRAND ICONS (24×24)
══════════════════════════════════════════════ */
const WhatsappIcon = () => (
  <g>
    {/* WhatsApp Green Speech Bubble */}
    <path fill="#25D366" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z" />
    {/* WhatsApp Crisp White Handset */}
    <path fill="#FFFFFF" d="M17.47 14.38c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08s-1.27-.47-2.43-1.5c-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53s-.68-1.64-.93-2.25c-.24-.59-.49-.51-.68-.52-.18-.01-.38-.01-.58-.01s-.53.08-.8.38c-.28.3-1.06 1.03-1.06 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.25 5.15 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z" />
  </g>
);

const GmailIcon = () => (
  <g>
    {/* White Base Envelope */}
    <rect x="2.5" y="4" width="19" height="15.5" rx="2.5" fill="#FFFFFF" />
    {/* Top Flap (Red) */}
    <path fill="#EA4335" d="M2.5 5.5l9.5 7.2 9.5-7.2V4c0-1.1-.9-2-2-2h-15c-1.1 0-2 .9-2 2v1.5z" />
    {/* Left Pillar (Blue) */}
    <path fill="#4285F4" d="M2.5 5.5v12c0 1.1.9 2 2 2h3v-9.5L2.5 5.5z" />
    {/* Right Pillar (Green) */}
    <path fill="#34A853" d="M21.5 5.5v12c0 1.1-.9 2-2 2h-3v-9.5l5-4.5z" />
    {/* Bottom Center (Yellow) */}
    <path fill="#FBBC04" d="M7.5 10l4.5 3.5 4.5-3.5v9.5h-9V10z" />
  </g>
);

const WebFormIcon = () => (
  <g>
    {/* Browser Window Portal */}
    <rect x="2" y="3" width="20" height="18" rx="3.5" fill="#1E1B4B" stroke="#818CF8" strokeWidth="1.6" />
    {/* Window Header Dots */}
    <circle cx="5.5" cy="6.5" r="1.1" fill="#EF4444" />
    <circle cx="8.5" cy="6.5" r="1.1" fill="#F59E0B" />
    <circle cx="11.5" cy="6.5" r="1.1" fill="#10B981" />
    <line x1="2" y1="9.5" x2="22" y2="9.5" stroke="#818CF8" strokeWidth="1" />
    {/* Form Inputs & Submit Bar */}
    <rect x="5.5" y="12" width="13" height="2.2" rx="1.1" fill="#FFFFFF" />
    <rect x="5.5" y="15.5" width="8" height="2.2" rx="1.1" fill="#A5B4FC" />
  </g>
);

const CrmIcon = () => (
  <g>
    {/* HubSpot Official Sprocket in Pure White for High Visibility */}
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="2.2" />
    <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
    {/* Top Satellite Node */}
    <circle cx="12" cy="4" r="2.5" fill="#FFFFFF" />
    <line x1="12" y1="6.5" x2="12" y2="7.8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    {/* Bottom Right Satellite Node */}
    <circle cx="18" cy="17" r="2.2" fill="#FFFFFF" />
    <line x1="15.2" y1="14.5" x2="16.5" y2="15.6" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    {/* Bottom Left Satellite Node */}
    <circle cx="6" cy="17" r="2.2" fill="#FFFFFF" />
    <line x1="8.8" y1="14.5" x2="7.5" y2="15.6" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
  </g>
);

const SheetsIcon = () => (
  <g>
    {/* Official Google Sheets Green Folded Document */}
    <path fill="#0F9D58" d="M5 2h9.5l4.5 4.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <path fill="#87CEAB" d="M14.5 2L19 6.5h-4.5V2z" />
    {/* Crisp White Spreadsheet Grid */}
    <rect x="6" y="9.5" width="12" height="8.5" rx="0.8" fill="#FFFFFF" />
    <line x1="6" y1="12.3" x2="18" y2="12.3" stroke="#0F9D58" strokeWidth="0.8" />
    <line x1="6" y1="15.1" x2="18" y2="15.1" stroke="#0F9D58" strokeWidth="0.8" />
    <line x1="10" y1="9.5" x2="10" y2="18" stroke="#0F9D58" strokeWidth="0.8" />
    <line x1="14" y1="9.5" x2="14" y2="18" stroke="#0F9D58" strokeWidth="0.8" />
  </g>
);

const SlackIcon = () => (
  <g transform="translate(12,12) scale(0.38) translate(-27,-27)">
    <path fill="#36C5F0" d="M19.7 0.1a5.4 5.4 0 0 0-5.4 5.4 5.4 5.4 0 0 0 5.4 5.4h5.4V5.5A5.4 5.4 0 0 0 19.7 0.1m0 14.4H5.4A5.4 5.4 0 0 0 0 19.9a5.4 5.4 0 0 0 5.4 5.4h14.3a5.4 5.4 0 0 0 5.4-5.4 5.4 5.4 0 0 0-5.4-5.4" />
    <path fill="#2EB67D" d="M54 19.9a5.4 5.4 0 0 0-5.4-5.4 5.4 5.4 0 0 0-5.4 5.4v5.4h5.4A5.4 5.4 0 0 0 54 19.9M39.6 19.9V5.5A5.4 5.4 0 0 0 34.1 0.1a5.4 5.4 0 0 0-5.4 5.4v14.4a5.4 5.4 0 0 0 5.4 5.4 5.4 5.4 0 0 0 5.5-5.4" />
    <path fill="#ECB22E" d="M34.1 54a5.4 5.4 0 0 0 5.4-5.4 5.4 5.4 0 0 0-5.4-5.4h-5.4v5.4A5.4 5.4 0 0 0 34.1 54m0-14.4h14.4a5.4 5.4 0 0 0 5.4-5.4 5.4 5.4 0 0 0-5.4-5.4H34.1a5.4 5.4 0 0 0-5.4 5.4 5.4 5.4 0 0 0 5.4 5.4" />
    <path fill="#E01E5A" d="M0 34.2a5.4 5.4 0 0 0 5.4 5.4 5.4 5.4 0 0 0 5.4-5.4v-5.4H5.4A5.4 5.4 0 0 0 0 34.2m14.4 0v14.4a5.4 5.4 0 0 0 5.4 5.4 5.4 5.4 0 0 0 5.4-5.4V34.2a5.4 5.4 0 0 0-5.4-5.4 5.4 5.4 0 0 0-5.4 5.4" />
  </g>
);

/* ══════════════════════════════════════════════
   HUB DIAGRAM — Adaptive Responsive Architecture
   - Desktop view: Widescreen 1000×540 SVG
   - Mobile view:  Compact 390×560 SVG (Fits 100% on phone, no horizontal scroll)
══════════════════════════════════════════════ */
export function HubDiagram() {
  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(44px,6vw,84px) 16px clamp(28px,4vw,52px)', boxSizing: 'border-box', overflow: 'hidden', width: '100%' }}>

      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 0', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: 'clamp(24px,3.5vw,44px)' }}>
        <div style={{ fontSize: 'clamp(10px,1.4vw,12px)', fontWeight: 700, color: '#EF4444', letterSpacing: '2.5px', textTransform: 'uppercase', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
          ONE CENTRAL AI BRAIN
        </div>
        <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,4.2vw,48px)', lineHeight: 1.15, letterSpacing: '-1px', color: '#FFFFFF' }}>
          Connect every tool you already use
        </h2>
        <p style={{ margin: 0, fontSize: 'clamp(13.5px,1.8vw,17px)', lineHeight: 1.7, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
          Messages, leads and business data flow into <strong style={{ color: '#FFFFFF' }}>HTM AI Automation</strong>, which decides and executes actions in real-time.
        </p>
      </div>

      {/* ═════════════════════════════════════════════════
          DESKTOP VIEW (Screen >= 769px) — 1000 × 540
      ═════════════════════════════════════════════════ */}
      <div className="hub-diagram-desktop" style={{ width: '100%', maxWidth: '1020px', margin: '0 auto', overflow: 'hidden' }}>
        <svg
          viewBox="0 0 1000 540"
          width="100%"
          style={{ display: 'block', margin: '0 auto', overflow: 'hidden' }}
          aria-label="HTM AI Automation Hub Diagram (Desktop)"
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="desk-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="desk-flow-l" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="desk-flow-r" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="desk-card-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#15121E" />
              <stop offset="100%" stopColor="#0B0912" />
            </linearGradient>
            <linearGradient id="desk-rim-glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.9" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <clipPath id="desk-logo-clip"><circle cx="500" cy="270" r="78" /></clipPath>

            {/* Icon Pod Background Gradients */}
            <linearGradient id="ig-wa-d" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0B4E38" /><stop offset="100%" stopColor="#128C7E" /></linearGradient>
            <linearGradient id="ig-gm-d" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1E1A29" /><stop offset="100%" stopColor="#2A1B22" /></linearGradient>
            <linearGradient id="ig-wb-d" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1E1B4B" /><stop offset="100%" stopColor="#3730A3" /></linearGradient>
            <linearGradient id="ig-cr-d" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4A1806" /><stop offset="100%" stopColor="#C2410C" /></linearGradient>
            <linearGradient id="ig-gs-d" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#052E16" /><stop offset="100%" stopColor="#166534" /></linearGradient>
            <linearGradient id="ig-sl-d" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2E1065" /><stop offset="100%" stopColor="#581C87" /></linearGradient>

            {/* Filters */}
            <filter id="desk-glow-w" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="desk-glow-b" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="desk-card-drop" x="-5%" y="-5%" width="110%" height="115%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.7" />
            </filter>
          </defs>

          {/* Ambient Glow */}
          <circle cx="500" cy="270" r="260" fill="url(#desk-halo)" />

          {/* Radar / Tech Orbit Rings */}
          <circle cx="500" cy="270" r="160" fill="none" stroke="#EF4444" strokeOpacity="0.18" strokeDasharray="4 8" strokeWidth="1.5" />
          <circle cx="500" cy="270" r="210" fill="none" stroke="#EF4444" strokeOpacity="0.10" strokeDasharray="5 11" strokeWidth="1.5" />

          {/* ── FLOW LINES (Individual graceful curves from card edges) ── */}
          {/* 1. WhatsApp -> Hub (top-left) */}
          <path d="M262,92 C340,92 350,215 396,215" fill="none" stroke="url(#desk-flow-l)" strokeWidth="2.5" strokeDasharray="8 7" strokeLinecap="round" style={{ animation: 'dash 1.5s linear infinite' }} />
          {/* 2. Gmail -> Hub (mid-left) */}
          <path d="M262,270 L388,270" fill="none" stroke="url(#desk-flow-l)" strokeWidth="2.5" strokeDasharray="8 7" strokeLinecap="round" style={{ animation: 'dash 1.3s linear infinite' }} />
          {/* 3. Forms -> Hub (bottom-left) */}
          <path d="M262,448 C340,448 350,325 396,325" fill="none" stroke="url(#desk-flow-l)" strokeWidth="2.5" strokeDasharray="8 7" strokeLinecap="round" style={{ animation: 'dash 1.7s linear infinite' }} />

          {/* 4. Hub -> CRM (top-right) */}
          <path d="M604,215 C650,215 660,92 738,92" fill="none" stroke="url(#desk-flow-r)" strokeWidth="2.5" strokeDasharray="8 7" strokeLinecap="round" style={{ animation: 'dash 1.5s linear infinite' }} />
          {/* 5. Hub -> Sheets (mid-right) */}
          <path d="M612,270 L738,270" fill="none" stroke="url(#desk-flow-r)" strokeWidth="2.5" strokeDasharray="8 7" strokeLinecap="round" style={{ animation: 'dash 1.3s linear infinite' }} />
          {/* 6. Hub -> Slack (bottom-right) */}
          <path d="M604,325 C650,325 660,448 738,448" fill="none" stroke="url(#desk-flow-r)" strokeWidth="2.5" strokeDasharray="8 7" strokeLinecap="round" style={{ animation: 'dash 1.7s linear infinite' }} />

          {/* ── CENTRAL HTM AI Automation CORE ── */}
          {/* Pulsing ring */}
          <circle cx="500" cy="270" r="126" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="5 7">
            <animate attributeName="r" values="124;130;124" dur="3s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.2;0.45;0.2" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Crisp White Orbit Track */}
          <circle cx="500" cy="270" r="110" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeOpacity="0.95" filter="url(#desk-glow-w)" />

          {/* Orbiting Satellite Ball — Rides 100% along the White Line (r=110, Center 500,270) */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 500 270"
              to="360 500 270"
              dur="3.8s"
              repeatCount="indefinite"
            />
            {/* Trailing comet particles along the white circle arc (r=110) */}
            <circle cx="445" cy="175" r="2.4" fill="rgba(239,68,68,0.45)" />
            <circle cx="462" cy="167" r="3.6" fill="rgba(239,68,68,0.75)" />
            <circle cx="481" cy="162" r="5.2" fill="rgba(255,255,255,0.75)" filter="url(#desk-glow-b)" />
            {/* Main Glowing Orbit Ball - Centered exactly on the White Circle (500, 160) */}
            <circle cx="500" cy="160" r="14" fill="rgba(255,255,255,0.25)" filter="url(#desk-glow-b)" />
            <circle cx="500" cy="160" r="8.5" fill="#FFFFFF" filter="url(#desk-glow-b)" />
            <circle cx="500" cy="160" r="5" fill="#EF4444" />
            <circle cx="498" cy="158" r="2" fill="#FFFFFF" />
          </g>

          {/* Central Logo Disk */}
          <circle cx="500" cy="270" r="82" fill="#000000" stroke="#DC2626" strokeWidth="2.5" />
          <image href="/htm-logo.png" x="420" y="190" width="160" height="160" clipPath="url(#desk-logo-clip)" preserveAspectRatio="xMidYMid meet" />
          <circle cx="500" cy="270" r="82" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
          <circle cx="500" cy="270" r="82" fill="none" stroke="#EF4444" strokeWidth="2" strokeOpacity="0.8" />

          {/* ═════════════════════════════════════════════════════
              LEFT CARDS (Desktop: width=248, height=96, rx=20)
              Clean 3-row layout: Title -> Subtitle -> Status Pill
              Zero Text Overlap Guaranteed!
          ═════════════════════════════════════════════════════ */}

          {/* 1. WHATSAPP */}
          <g filter="url(#desk-card-drop)">
            <rect x="14" y="44" width="248" height="96" rx="20" fill="url(#desk-card-bg)" stroke="#EF4444" strokeWidth="1.4" strokeOpacity="0.55" />
            <rect x="14" y="44" width="248" height="96" rx="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="60" y1="44" x2="210" y2="44" stroke="url(#desk-rim-glow)" strokeWidth="1.5" />
            {/* Icon Pod */}
            <rect x="28" y="66" width="52" height="52" rx="14" fill="url(#ig-wa-d)" stroke="rgba(37,211,102,0.4)" strokeWidth="1" />
            <g transform="translate(54,92) scale(1.35) translate(-12,-12)"><WhatsappIcon /></g>
            {/* Title */}
            <text x="92" y="74" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="17.5" fontWeight="800" fill="#FFFFFF" letterSpacing="-0.3">WhatsApp</text>
            {/* Subtitle */}
            <text x="92" y="93" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="13" fontWeight="500" fill="#9CA3AF">Customer chats</text>
            {/* Status Pill (Row 3, dedicated breathing room) */}
            <rect x="92" y="104" width="84" height="18" rx="9" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.45)" strokeWidth="1" />
            <circle cx="102" cy="113" r="2.5" fill="#4ADE80" />
            <text x="110" y="116.5" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8" fontWeight="800" fill="#4ADE80" letterSpacing="0.6">LIVE CHATS</text>
          </g>

          {/* 2. GMAIL */}
          <g filter="url(#desk-card-drop)">
            <rect x="14" y="222" width="248" height="96" rx="20" fill="url(#desk-card-bg)" stroke="#EF4444" strokeWidth="1.4" strokeOpacity="0.55" />
            <rect x="14" y="222" width="248" height="96" rx="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="60" y1="222" x2="210" y2="222" stroke="url(#desk-rim-glow)" strokeWidth="1.5" />
            {/* Icon Pod */}
            <rect x="28" y="244" width="52" height="52" rx="14" fill="url(#ig-gm-d)" stroke="rgba(234,67,53,0.4)" strokeWidth="1" />
            <g transform="translate(54,270) scale(1.35) translate(-12,-12)"><GmailIcon /></g>
            {/* Title */}
            <text x="92" y="252" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="17.5" fontWeight="800" fill="#FFFFFF" letterSpacing="-0.3">Gmail</text>
            {/* Subtitle */}
            <text x="92" y="271" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="13" fontWeight="500" fill="#9CA3AF">Inbox and replies</text>
            {/* Status Pill */}
            <rect x="92" y="282" width="94" height="18" rx="9" fill="rgba(234,67,53,0.12)" stroke="rgba(234,67,53,0.45)" strokeWidth="1" />
            <circle cx="102" cy="291" r="2.5" fill="#FCA5A5" />
            <text x="110" y="294.5" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8" fontWeight="800" fill="#FCA5A5" letterSpacing="0.5">AUTO-REPLIES</text>
          </g>

          {/* 3. WEBSITE FORMS */}
          <g filter="url(#desk-card-drop)">
            <rect x="14" y="400" width="248" height="96" rx="20" fill="url(#desk-card-bg)" stroke="#EF4444" strokeWidth="1.4" strokeOpacity="0.55" />
            <rect x="14" y="400" width="248" height="96" rx="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="60" y1="400" x2="210" y2="400" stroke="url(#desk-rim-glow)" strokeWidth="1.5" />
            {/* Icon Pod */}
            <rect x="28" y="422" width="52" height="52" rx="14" fill="url(#ig-wb-d)" stroke="rgba(129,140,248,0.4)" strokeWidth="1" />
            <g transform="translate(54,448) scale(1.35) translate(-12,-12)"><WebFormIcon /></g>
            {/* Title (Full breathing space, no overlapping badge!) */}
            <text x="92" y="430" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="17.5" fontWeight="800" fill="#FFFFFF" letterSpacing="-0.3">Website Forms</text>
            {/* Subtitle */}
            <text x="92" y="449" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="13" fontWeight="500" fill="#9CA3AF">New enquiries</text>
            {/* Status Pill */}
            <rect x="92" y="460" width="94" height="18" rx="9" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.45)" strokeWidth="1" />
            <circle cx="102" cy="469" r="2.5" fill="#A5B4FC" />
            <text x="110" y="472.5" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8" fontWeight="800" fill="#A5B4FC" letterSpacing="0.5">LEAD CAPTURE</text>
          </g>

          {/* ═════════════════════════════════════════════════════
              RIGHT CARDS (Desktop: width=248, height=96, rx=20)
              Clean 3-row layout: Title -> Subtitle -> Status Pill
              Zero Text Overlap Guaranteed!
          ═════════════════════════════════════════════════════ */}

          {/* 4. YOUR CRM */}
          <g filter="url(#desk-card-drop)">
            <rect x="738" y="44" width="248" height="96" rx="20" fill="url(#desk-card-bg)" stroke="#EF4444" strokeWidth="1.4" strokeOpacity="0.55" />
            <rect x="738" y="44" width="248" height="96" rx="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="784" y1="44" x2="934" y2="44" stroke="url(#desk-rim-glow)" strokeWidth="1.5" />
            {/* Icon Pod */}
            <rect x="752" y="66" width="52" height="52" rx="14" fill="url(#ig-cr-d)" stroke="rgba(255,122,89,0.4)" strokeWidth="1" />
            <g transform="translate(778,92) scale(1.35) translate(-12,-12)"><CrmIcon /></g>
            {/* Title */}
            <text x="816" y="74" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="17.5" fontWeight="800" fill="#FFFFFF" letterSpacing="-0.3">Your CRM</text>
            {/* Subtitle */}
            <text x="816" y="93" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="13" fontWeight="500" fill="#9CA3AF">Leads and deals</text>
            {/* Status Pill */}
            <rect x="816" y="104" width="84" height="18" rx="9" fill="rgba(255,122,89,0.12)" stroke="rgba(255,122,89,0.45)" strokeWidth="1" />
            <circle cx="826" cy="113" r="2.5" fill="#FDBA74" />
            <text x="834" y="116.5" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8" fontWeight="800" fill="#FDBA74" letterSpacing="0.4">2-WAY SYNC</text>
          </g>

          {/* 5. GOOGLE SHEETS */}
          <g filter="url(#desk-card-drop)">
            <rect x="738" y="222" width="248" height="96" rx="20" fill="url(#desk-card-bg)" stroke="#EF4444" strokeWidth="1.4" strokeOpacity="0.55" />
            <rect x="738" y="222" width="248" height="96" rx="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="784" y1="222" x2="934" y2="222" stroke="url(#desk-rim-glow)" strokeWidth="1.5" />
            {/* Icon Pod */}
            <rect x="752" y="244" width="52" height="52" rx="14" fill="url(#ig-gs-d)" stroke="rgba(15,157,88,0.4)" strokeWidth="1" />
            <g transform="translate(778,270) scale(1.35) translate(-12,-12)"><SheetsIcon /></g>
            {/* Title (Full space, no overlapping DATA badge!) */}
            <text x="816" y="252" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="17.5" fontWeight="800" fill="#FFFFFF" letterSpacing="-0.3">Google Sheets</text>
            {/* Subtitle */}
            <text x="816" y="271" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="13" fontWeight="500" fill="#9CA3AF">Data and reports</text>
            {/* Status Pill */}
            <rect x="816" y="282" width="88" height="18" rx="9" fill="rgba(15,157,88,0.12)" stroke="rgba(15,157,88,0.45)" strokeWidth="1" />
            <circle cx="826" cy="291" r="2.5" fill="#6EE7B7" />
            <text x="834" y="294.5" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8" fontWeight="800" fill="#6EE7B7" letterSpacing="0.4">LIVE REPORTS</text>
          </g>

          {/* 6. SLACK & TEAMS */}
          <g filter="url(#desk-card-drop)">
            <rect x="738" y="400" width="248" height="96" rx="20" fill="url(#desk-card-bg)" stroke="#EF4444" strokeWidth="1.4" strokeOpacity="0.55" />
            <rect x="738" y="400" width="248" height="96" rx="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="784" y1="400" x2="934" y2="400" stroke="url(#desk-rim-glow)" strokeWidth="1.5" />
            {/* Icon Pod */}
            <rect x="752" y="422" width="52" height="52" rx="14" fill="url(#ig-sl-d)" stroke="rgba(236,178,46,0.4)" strokeWidth="1" />
            <g transform="translate(778,448) scale(1.35) translate(-12,-12)"><SlackIcon /></g>
            {/* Title (Full space, no overlapping ALERT badge!) */}
            <text x="816" y="430" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="17.5" fontWeight="800" fill="#FFFFFF" letterSpacing="-0.3">Slack &amp; Teams</text>
            {/* Subtitle */}
            <text x="816" y="449" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="13" fontWeight="500" fill="#9CA3AF">Instant alerts</text>
            {/* Status Pill */}
            <rect x="816" y="460" width="92" height="18" rx="9" fill="rgba(236,178,46,0.12)" stroke="rgba(236,178,46,0.45)" strokeWidth="1" />
            <circle cx="826" cy="469" r="2.5" fill="#FDE68A" />
            <text x="834" y="472.5" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8" fontWeight="800" fill="#FDE68A" letterSpacing="0.4">INSTANT ALERTS</text>
          </g>

        </svg>
      </div>

      {/* ═════════════════════════════════════════════════
          MOBILE VIEW (Screen <= 768px) — 390 × 560
          - Proportioned for mobile screens 1:1
          - Zero horizontal overflow, locked dead-center
          - Large, visible logos & crisp readable text
      ═════════════════════════════════════════════════ */}
      <div className="hub-diagram-mobile" style={{ width: '100%', maxWidth: '420px', margin: '0 auto', overflow: 'hidden', touchAction: 'pan-y' }}>
        <svg
          viewBox="0 0 390 560"
          width="100%"
          style={{ display: 'block', margin: '0 auto', overflow: 'hidden' }}
          aria-label="HTM AI Automation Hub Diagram (Mobile)"
        >
          <defs>
            <radialGradient id="mob-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="mob-flow-l" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="mob-flow-r" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="mob-card-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#171321" />
              <stop offset="100%" stopColor="#0D0A14" />
            </linearGradient>
            <clipPath id="mob-logo-clip"><circle cx="195" cy="280" r="42" /></clipPath>

            <filter id="mob-glow-w" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="mob-glow-b" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Ambient Glow */}
          <circle cx="195" cy="280" r="160" fill="url(#mob-halo)" />
          <circle cx="195" cy="280" r="88" fill="none" stroke="#EF4444" strokeOpacity="0.2" strokeDasharray="3 6" strokeWidth="1.2" />

          {/* ── FLOW LINES (Mobile) ── */}
          {/* Left top -> Hub */}
          <path d="M124,85 C148,85 146,246 154,246" fill="none" stroke="url(#mob-flow-l)" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" style={{ animation: 'dash 1.4s linear infinite' }} />
          {/* Left mid -> Hub */}
          <path d="M124,280 L140,280" fill="none" stroke="url(#mob-flow-l)" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" style={{ animation: 'dash 1.2s linear infinite' }} />
          {/* Left bot -> Hub */}
          <path d="M124,475 C148,475 146,314 154,314" fill="none" stroke="url(#mob-flow-l)" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" style={{ animation: 'dash 1.4s linear infinite' }} />

          {/* Hub -> Right top */}
          <path d="M236,246 C244,246 242,85 266,85" fill="none" stroke="url(#mob-flow-r)" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" style={{ animation: 'dash 1.4s linear infinite' }} />
          {/* Hub -> Right mid */}
          <path d="M250,280 L266,280" fill="none" stroke="url(#mob-flow-r)" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" style={{ animation: 'dash 1.2s linear infinite' }} />
          {/* Hub -> Right bot */}
          <path d="M236,314 C244,314 242,475 266,475" fill="none" stroke="url(#mob-flow-r)" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" style={{ animation: 'dash 1.4s linear infinite' }} />

          {/* ── CENTRAL HTM AI Automation CORE (Mobile) ── */}
          <circle cx="195" cy="280" r="68" fill="none" stroke="#EF4444" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="4 6">
            <animate attributeName="r" values="66;72;66" dur="3s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.2;0.45;0.2" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Crisp White Orbit Track (Mobile) */}
          <circle cx="195" cy="280" r="56" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeOpacity="0.95" filter="url(#mob-glow-w)" />

          {/* Orbiting Satellite Ball — Rides 100% along the White Line (r=56, Center 195,280) */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 195 280"
              to="360 195 280"
              dur="3.2s"
              repeatCount="indefinite"
            />
            {/* Trailing comet particles along the white circle arc (r=56) */}
            <circle cx="171" cy="231" r="1.8" fill="rgba(239,68,68,0.5)" />
            <circle cx="180" cy="226" r="3" fill="rgba(255,255,255,0.7)" filter="url(#mob-glow-b)" />
            {/* Main Glowing Orbit Ball - Centered exactly on the White Circle (195, 224) */}
            <circle cx="195" cy="224" r="9" fill="rgba(255,255,255,0.25)" filter="url(#mob-glow-b)" />
            <circle cx="195" cy="224" r="5.5" fill="#FFFFFF" filter="url(#mob-glow-b)" />
            <circle cx="195" cy="224" r="3" fill="#EF4444" />
            <circle cx="194" cy="223" r="1.2" fill="#FFFFFF" />
          </g>

          {/* Central Logo Disk */}
          <circle cx="195" cy="280" r="44" fill="#000000" stroke="#DC2626" strokeWidth="2" />
          <image href="/htm-logo.png" x="151" y="236" width="88" height="88" clipPath="url(#mob-logo-clip)" preserveAspectRatio="xMidYMid meet" />
          <circle cx="195" cy="280" r="44" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeOpacity="0.75" />

          {/* ══════════════════════════════════════
              LEFT CARDS (Mobile: width 118, height 74)
          ══════════════════════════════════════ */}

          {/* 1. WhatsApp */}
          <g>
            <rect x="6" y="48" width="118" height="74" rx="14" fill="url(#mob-card-bg)" stroke="#EF4444" strokeWidth="1.2" strokeOpacity="0.55" />
            <rect x="14" y="58" width="34" height="34" rx="9" fill="url(#ig-wa-d)" />
            <g transform="translate(31,75) scale(0.95) translate(-12,-12)"><WhatsappIcon /></g>
            <text x="54" y="73" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="12" fontWeight="800" fill="#FFFFFF">WhatsApp</text>
            <text x="54" y="86" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8.5" fontWeight="500" fill="#9CA3AF">Customer chats</text>
            <rect x="14" y="98" width="46" height="14" rx="7" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.5)" strokeWidth="0.8" />
            <text x="37" y="108" textAnchor="middle" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fontWeight="800" fill="#4ADE80">● LIVE</text>
          </g>

          {/* 2. Gmail */}
          <g>
            <rect x="6" y="243" width="118" height="74" rx="14" fill="url(#mob-card-bg)" stroke="#EF4444" strokeWidth="1.2" strokeOpacity="0.55" />
            <rect x="14" y="253" width="34" height="34" rx="9" fill="url(#ig-gm-d)" />
            <g transform="translate(31,270) scale(0.95) translate(-12,-12)"><GmailIcon /></g>
            <text x="54" y="268" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="12" fontWeight="800" fill="#FFFFFF">Gmail</text>
            <text x="54" y="281" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8.5" fontWeight="500" fill="#9CA3AF">Inbox &amp; replies</text>
            <rect x="14" y="293" width="48" height="14" rx="7" fill="rgba(234,67,53,0.15)" stroke="rgba(234,67,53,0.5)" strokeWidth="0.8" />
            <text x="38" y="303" textAnchor="middle" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fontWeight="800" fill="#FCA5A5">● EMAIL</text>
          </g>

          {/* 3. Website Forms */}
          <g>
            <rect x="6" y="438" width="118" height="74" rx="14" fill="url(#mob-card-bg)" stroke="#EF4444" strokeWidth="1.2" strokeOpacity="0.55" />
            <rect x="14" y="448" width="34" height="34" rx="9" fill="url(#ig-wb-d)" />
            <g transform="translate(31,465) scale(0.95) translate(-12,-12)"><WebFormIcon /></g>
            <text x="54" y="463" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fontWeight="800" fill="#FFFFFF">Web Forms</text>
            <text x="54" y="476" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8.5" fontWeight="500" fill="#9CA3AF">New enquiries</text>
            <rect x="14" y="488" width="50" height="14" rx="7" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.5)" strokeWidth="0.8" />
            <text x="39" y="498" textAnchor="middle" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fontWeight="800" fill="#A5B4FC">● LEADS</text>
          </g>

          {/* ══════════════════════════════════════
              RIGHT CARDS (Mobile: width 118, height 74)
          ══════════════════════════════════════ */}

          {/* 4. Your CRM */}
          <g>
            <rect x="266" y="48" width="118" height="74" rx="14" fill="url(#mob-card-bg)" stroke="#EF4444" strokeWidth="1.2" strokeOpacity="0.55" />
            <rect x="274" y="58" width="34" height="34" rx="9" fill="url(#ig-cr-d)" />
            <g transform="translate(291,75) scale(0.95) translate(-12,-12)"><CrmIcon /></g>
            <text x="314" y="73" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="12" fontWeight="800" fill="#FFFFFF">Your CRM</text>
            <text x="314" y="86" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8.5" fontWeight="500" fill="#9CA3AF">Leads &amp; deals</text>
            <rect x="274" y="98" width="46" height="14" rx="7" fill="rgba(255,122,89,0.15)" stroke="rgba(255,122,89,0.5)" strokeWidth="0.8" />
            <text x="297" y="108" textAnchor="middle" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fontWeight="800" fill="#FDBA74">● CRM</text>
          </g>

          {/* 5. Google Sheets */}
          <g>
            <rect x="266" y="243" width="118" height="74" rx="14" fill="url(#mob-card-bg)" stroke="#EF4444" strokeWidth="1.2" strokeOpacity="0.55" />
            <rect x="274" y="253" width="34" height="34" rx="9" fill="url(#ig-gs-d)" />
            <g transform="translate(291,270) scale(0.95) translate(-12,-12)"><SheetsIcon /></g>
            <text x="314" y="268" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fontWeight="800" fill="#FFFFFF">Sheets</text>
            <text x="314" y="281" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8.5" fontWeight="500" fill="#9CA3AF">Data &amp; reports</text>
            <rect x="274" y="293" width="48" height="14" rx="7" fill="rgba(15,157,88,0.15)" stroke="rgba(15,157,88,0.5)" strokeWidth="0.8" />
            <text x="298" y="303" textAnchor="middle" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fontWeight="800" fill="#6EE7B7">● DATA</text>
          </g>

          {/* 6. Slack & Teams */}
          <g>
            <rect x="266" y="438" width="118" height="74" rx="14" fill="url(#mob-card-bg)" stroke="#EF4444" strokeWidth="1.2" strokeOpacity="0.55" />
            <rect x="274" y="448" width="34" height="34" rx="9" fill="url(#ig-sl-d)" />
            <g transform="translate(291,465) scale(0.95) translate(-12,-12)"><SlackIcon /></g>
            <text x="314" y="463" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="11" fontWeight="800" fill="#FFFFFF">Slack &amp; Teams</text>
            <text x="314" y="476" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8.5" fontWeight="500" fill="#9CA3AF">Instant alerts</text>
            <rect x="274" y="488" width="50" height="14" rx="7" fill="rgba(236,178,46,0.15)" stroke="rgba(236,178,46,0.5)" strokeWidth="0.8" />
            <text x="299" y="498" textAnchor="middle" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" fontWeight="800" fill="#FDE68A">● ALERT</text>
          </g>

        </svg>
      </div>

      {/* Bottom Key Value Props */}
      <div style={{ textAlign: 'center', marginTop: 'clamp(20px,3vw,36px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(14px,3vw,28px)', flexWrap: 'wrap' }}>
        {['Real-time processing', 'Zero manual work', 'Instant responses'].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: 'clamp(11.5px,1.4vw,13.5px)', color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 6px #EF4444', flexShrink: 0 }} />
            {t}
          </div>
        ))}
      </div>

    </div>
  );
}
