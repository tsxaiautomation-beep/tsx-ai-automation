import React from 'react';

export function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Free Discovery Call',
      desc: 'We analyze your workflows, find manual bottlenecks, and identify high-ROI opportunities to automate.',
      highlight: false,
    },
    {
      num: '02',
      title: 'Custom Architecture Plan',
      desc: 'You receive a transparent blueprint: exact deliverables, technology stack, timeline, and measurable targets.',
      highlight: false,
    },
    {
      num: '03',
      title: 'Engineering & Rigorous Testing',
      desc: 'We engineer your AI automations, connect your APIs & CRMs, and test every edge-case before deployment.',
      highlight: false,
    },
    {
      num: '04',
      title: 'Launch & Continuous Growth',
      desc: 'We deploy into production, train your team, and provide proactive 24/7 technical monitoring & expansion.',
      highlight: true,
    },
  ];

  return (
    <div id="process" style={{ borderTop: '1px solid rgba(239,68,68,0.15)', background: '#07060A' }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: 'clamp(64px, 8vw, 100px) 20px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '780px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}>
          <div style={{
            fontSize: '11.5px',
            fontWeight: 700,
            color: '#EF4444',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
            HOW IT WORKS
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(26px, 4.5vw, 48px)',
            lineHeight: 1.15,
            letterSpacing: '-1.2px',
            color: '#FFFFFF',
          }}>
            From Concept to Autopilot in <span style={{ background: 'linear-gradient(180deg,#FFFFFF,#EF4444)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Four Precision Steps</span>
          </h2>
          <p style={{ margin: 0, fontSize: 'clamp(14.5px, 1.8vw, 17px)', color: '#9CA3AF', lineHeight: 1.65, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Structured, zero-guesswork deployment engineered to deliver measurable hours and revenue back to your team.
          </p>
        </div>

        <div style={{
          marginTop: '56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          position: 'relative',
        }}>
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                background: s.highlight
                  ? 'linear-gradient(155deg, rgba(239,68,68,0.2) 0%, rgba(16,10,18,0.95) 75%)'
                  : 'linear-gradient(145deg, rgba(16,14,24,0.85) 0%, rgba(9,8,14,0.95) 100%)',
                border: s.highlight ? '1px solid rgba(239,68,68,0.55)' : '1px solid rgba(239,68,68,0.22)',
                borderRadius: '24px',
                padding: '34px 28px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: s.highlight ? '0 24px 70px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.1)' : '0 16px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.6)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(220, 38, 38, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = s.highlight ? 'rgba(239,68,68,0.55)' : 'rgba(239,68,68,0.22)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = s.highlight ? '0 24px 70px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.1)' : '0 16px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)';
              }}
            >
              {s.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: 'rgba(239,68,68,0.25)',
                  border: '1px solid rgba(239,68,68,0.5)',
                  color: '#FFFFFF',
                }}>
                  Scale Ready
                </div>
              )}
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: '48px',
                lineHeight: 1,
                letterSpacing: '-1.5px',
                background: s.highlight ? 'linear-gradient(180deg,#FFFFFF,#EF4444)' : 'linear-gradient(180deg,#FCA5A5,#7F1D1D)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}>
                {s.num}
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '20px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                {s.title}
              </h3>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.65, color: s.highlight ? '#F3F4F6' : '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhySection() {
  const industries = [
    'Restaurants',
    'Clinics & Hospitals',
    'E-Commerce',
    'Real Estate',
    'Education',
    'Auto Dealerships',
    'Fashion & Retail',
    'Consulting',
    'Manufacturing',
  ];

  const reasons = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z" />
        </svg>
      ),
      title: 'Direct, Jargon-Free Communication',
      desc: 'No buzzwords. We speak clear business language and focus on measurable outcomes for your bottom line.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" />
        </svg>
      ),
      title: 'Bespoke Engineering for Your Stack',
      desc: 'Every pipeline is custom engineered around your existing tools, databases, WhatsApp numbers, and workflows.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      ),
      title: 'Guaranteed Scope & Fast Delivery',
      desc: 'You sign off on clear milestones, exact architecture, and fixed deadlines before any build starts.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
        </svg>
      ),
      title: 'Dedicated Post-Launch Support',
      desc: 'We stand by our code. Ongoing maintenance, latency tuning, and expansion are handled by dedicated engineers.',
    },
  ];

  return (
    <div id="why" style={{ position: 'relative', borderTop: '1px solid rgba(239,68,68,0.15)', background: '#050508' }}>
      <div style={{
        position: 'absolute',
        left: '-250px',
        top: '100px',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(closest-side, rgba(220,38,38,0.18), rgba(0,0,0,0))',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: 'clamp(64px, 8vw, 100px) 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '56px',
      }}>
        {/* Left Column */}
        <div style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div style={{
            fontSize: '11.5px',
            fontWeight: 700,
            color: '#EF4444',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
            WHY AUTONYX
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(26px, 4.5vw, 48px)',
            lineHeight: 1.15,
            letterSpacing: '-1.2px',
            color: '#FFFFFF',
          }}>
            Cutting-Edge AI. <span style={{ background: 'linear-gradient(180deg,#FFFFFF,#EF4444)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Engineered for Real Revenue.</span>
          </h2>
          <p style={{ margin: 0, fontSize: 'clamp(14.5px, 1.8vw, 17px)', lineHeight: 1.7, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            You do not need to decipher AI models or technical infrastructure. At AUTONYX, we translate complex neural workflows and automations into reliable digital engines for your company.
          </p>

          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ fontSize: '11.5px', color: '#6B7280', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              INDUSTRIES WE EMPOWER
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {industries.map((ind) => (
                <span
                  key={ind}
                  style={{
                    border: '1px solid rgba(239,68,68,0.25)',
                    background: 'rgba(239,68,68,0.06)',
                    color: '#E5E7EB',
                    borderRadius: '999px',
                    padding: '8px 18px',
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#EF4444';
                    e.currentTarget.style.background = 'rgba(239,68,68,0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(239,68,68,0.25)';
                    e.currentTarget.style.background = 'rgba(239,68,68,0.06)';
                  }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Cards Column */}
        <div style={{ flex: '1 1 480px', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {reasons.map((r) => (
            <div
              key={r.title}
              style={{
                background: 'linear-gradient(145deg, rgba(16, 14, 24, 0.85) 0%, rgba(9, 8, 14, 0.95) 100%)',
                border: '1px solid rgba(239,68,68,0.22)',
                borderRadius: '22px',
                padding: '28px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.55)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(220, 38, 38, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.22)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)';
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(239,68,68,0.18), rgba(185,28,28,0.3))',
                border: '1px solid rgba(239,68,68,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 14px rgba(239,68,68,0.25)',
              }}>
                {r.icon}
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '17.5px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                {r.title}
              </h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const faqs = [
    {
      q: 'Do I or my team need any technical coding skills?',
      a: 'Absolutely not. AUTONYX builds and configures everything turnkey. We provide an intuitive dashboard and train your team on how to manage everyday tasks with zero code.',
    },
    {
      q: 'Which platforms and tools can AUTONYX connect with?',
      a: 'We integrate with WhatsApp Business API, Gmail/Outlook, HubSpot, Salesforce, Google Sheets, Shopify, Stripe, Slack, custom SQL databases, and internal REST APIs.',
    },
    {
      q: 'How fast can our company go live with an automation?',
      a: 'Quick automated pipelines (e.g. WhatsApp Auto-responder + CRM Lead capture) launch in 3–5 business days. Full enterprise multi-agent workflows usually take 1–2 weeks.',
    },
    {
      q: 'What happens if our business needs to expand or modify workflows later?',
      a: 'AUTONYX provides continuous post-launch support and SLA guarantees. As your traffic, team, or processes evolve, we adapt and expand your automations immediately.',
    },
  ];

  return (
    <div id="faq" style={{ borderTop: '1px solid rgba(239,68,68,0.15)', background: '#07060A' }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: 'clamp(64px, 8vw, 100px) 20px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '780px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}>
          <div style={{
            fontSize: '11.5px',
            fontWeight: 700,
            color: '#EF4444',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
            FAQ
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(26px, 4.5vw, 48px)',
            lineHeight: 1.15,
            letterSpacing: '-1.2px',
            color: '#FFFFFF',
          }}>
            Frequently Asked <span style={{ background: 'linear-gradient(180deg,#FFFFFF,#EF4444)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Questions</span>
          </h2>
        </div>

        <div style={{
          marginTop: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {faqs.map((f, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(145deg, rgba(16, 14, 24, 0.85) 0%, rgba(9, 8, 14, 0.95) 100%)',
                border: '1px solid rgba(239,68,68,0.22)',
                borderRadius: '22px',
                padding: '28px',
                boxSizing: 'border-box',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.55)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.22)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 8px #EF4444', marginTop: '8px', flexShrink: 0 }} />
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '18px', color: '#FFFFFF', letterSpacing: '-0.3px', lineHeight: 1.35 }}>
                  {f.q}
                </h3>
              </div>
              <p style={{ margin: '14px 0 0 18px', fontSize: '14.5px', lineHeight: 1.65, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
