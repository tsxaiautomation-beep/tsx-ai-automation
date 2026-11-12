import React from 'react';

export function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Free discovery call',
      desc: 'We learn how your business runs and find the tasks that waste the most time.',
      highlight: false,
    },
    {
      num: '02',
      title: 'Clear plan and proposal',
      desc: 'You get a plain-language plan: what we build, how it works and when it will be ready.',
      highlight: false,
    },
    {
      num: '03',
      title: 'Build and test',
      desc: 'We build your automation and test it with real examples. Nothing goes live without your approval.',
      highlight: false,
    },
    {
      num: '04',
      title: 'Launch and support',
      desc: 'We go live, train your team and stay with you to improve things as you grow.',
      highlight: true,
    },
  ];

  return (
    <div id="process" style={{ borderTop: '1px solid rgba(167,139,250,0.12)', background: '#0A0716' }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '96px 20px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '760px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#A78BFA', letterSpacing: '2px', textTransform: 'uppercase' }}>
            HOW IT WORKS
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Sora',sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 4.5vw, 50px)',
            lineHeight: 1.15,
            letterSpacing: '-1.2px',
          }}>
            From first call to launch in four simple steps
          </h2>
        </div>

        <div style={{
          marginTop: '56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}>
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                background: s.highlight
                  ? 'linear-gradient(160deg,rgba(139,92,246,0.25),rgba(109,40,217,0.08))'
                  : 'rgba(255,255,255,0.03)',
                border: s.highlight ? '1px solid rgba(167,139,250,0.55)' : '1px solid rgba(167,139,250,0.2)',
                borderRadius: '24px',
                padding: '32px 26px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: s.highlight ? '0 20px 70px rgba(109,40,217,0.3)' : 'none',
              }}
            >
              <div style={{
                fontFamily: "'Sora',sans-serif",
                fontWeight: 800,
                fontSize: '52px',
                lineHeight: 1,
                background: s.highlight ? 'linear-gradient(180deg,#EDE9FE,#8B5CF6)' : 'linear-gradient(180deg,#C4B5FD,#6D28D9)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}>
                {s.num}
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '20px' }}>
                {s.title}
              </h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, color: s.highlight ? '#D8D3EE' : '#B7B2D1' }}>
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
  const industries = ['Agencies', 'E-commerce', 'Real estate', 'Clinics', 'Education', 'Local services', 'Startups'];

  const reasons = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z"/>
        </svg>
      ),
      title: 'Plain-language communication',
      desc: 'No jargon. You always know what is being built and why.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>
        </svg>
      ),
      title: 'Built around your business',
      desc: 'Every automation is designed for your tools, team and goals.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5"/>
        </svg>
      ),
      title: 'Clear scope and timelines',
      desc: 'You agree on exactly what is included before any work starts.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z"/>
        </svg>
      ),
      title: 'Support after launch',
      desc: 'We stay with you to fix, tune and expand your automations.',
    },
  ];

  return (
    <div id="why" style={{ position: 'relative', borderTop: '1px solid rgba(167,139,250,0.12)' }}>
      <div style={{
        position: 'absolute',
        left: '-250px',
        top: '100px',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(closest-side,rgba(124,58,237,0.25),rgba(124,58,237,0))',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '96px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '56px',
      }}>
        {/* Left Column */}
        <div style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#A78BFA', letterSpacing: '2px', textTransform: 'uppercase' }}>
            WHY TSX
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Sora',sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 4.5vw, 50px)',
            lineHeight: 1.15,
            letterSpacing: '-1.2px',
          }}>
            AI explained simply, built to fit your business
          </h2>
          <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: '#B7B2D1' }}>
            You do not need to understand the technology. We handle the technical side and explain everything in clear, everyday language.
          </p>

          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ fontSize: '13px', color: '#A8A3C2', letterSpacing: '2px', fontWeight: 600, textTransform: 'uppercase' }}>
              WE HELP
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {industries.map((ind) => (
                <span
                  key={ind}
                  style={{
                    border: '1px solid rgba(167,139,250,0.3)',
                    background: 'rgba(139,92,246,0.1)',
                    borderRadius: '999px',
                    padding: '8px 18px',
                    fontSize: '14px',
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
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(167,139,250,0.2)',
                borderRadius: '22px',
                padding: '28px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(139,92,246,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {r.icon}
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '18px' }}>
                {r.title}
              </h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: '#B7B2D1' }}>
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
      q: 'Do I need any technical knowledge?',
      a: 'No. We handle the technical work and explain everything in simple language.',
    },
    {
      q: 'Which tools can you connect?',
      a: 'Most popular business tools, including WhatsApp, email, spreadsheets and CRMs. If a tool can connect, we can usually work with it.',
    },
    {
      q: 'How long does a project take?',
      a: 'It depends on the scope. After our free call you receive a clear timeline before any work begins.',
    },
    {
      q: 'What if I need changes later?',
      a: 'We support you after launch and can adjust or expand your automations as your business grows.',
    },
  ];

  return (
    <div id="faq" style={{ borderTop: '1px solid rgba(167,139,250,0.12)', background: '#0A0716' }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '96px 20px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '760px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#A78BFA', letterSpacing: '2px', textTransform: 'uppercase' }}>
            FAQ
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Sora',sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 4.5vw, 50px)',
            lineHeight: 1.15,
            letterSpacing: '-1.2px',
          }}>
            Questions we hear often
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
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(167,139,250,0.2)',
                borderRadius: '20px',
                padding: '28px',
                boxSizing: 'border-box',
              }}
            >
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '18px' }}>
                {f.q}
              </h3>
              <p style={{ margin: '12px 0 0', fontSize: '15px', lineHeight: 1.65, color: '#B7B2D1' }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

