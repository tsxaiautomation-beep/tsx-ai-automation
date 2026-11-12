import React from 'react';

export function ToolsStrip() {
  const tools = ['WhatsApp', 'Gmail', 'Google Sheets', 'Slack', 'HubSpot', 'Shopify', 'Notion', 'OpenAI'];

  return (
    <div style={{
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '72px 20px 24px',
      boxSizing: 'border-box',
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: '13px',
        color: '#A8A3C2',
        letterSpacing: '2px',
        fontWeight: 600,
        textTransform: 'uppercase',
      }}>
        CONNECTS WITH THE TOOLS YOU ALREADY USE
      </div>
      <div style={{
        marginTop: '28px',
        overflow: 'hidden',
        WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
        maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
      }}>
        <div className="anim-marquee" style={{
          fontFamily: "'Sora',sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(18px, 3vw, 24px)',
          color: '#8F8AAE',
        }}>
          <div style={{ display: 'flex', gap: '56px', paddingRight: '56px' }}>
            {tools.map((t, idx) => <span key={idx}>{t}</span>)}
          </div>
          <div style={{ display: 'flex', gap: '56px', paddingRight: '56px' }} aria-hidden="true">
            {tools.map((t, idx) => <span key={idx}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function NumbersBand() {
  return (
    <div style={{
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '48px 20px 24px',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        background: 'linear-gradient(180deg,rgba(139,92,246,0.14),rgba(255,255,255,0.03))',
        border: '1px solid rgba(167,139,250,0.3)',
        borderRadius: '28px',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1),0 30px 90px rgba(109,40,217,0.25)',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '36px 24px',
          boxSizing: 'border-box',
          textAlign: 'center',
          borderRight: '1px solid rgba(167,139,250,0.15)',
          borderBottom: '1px solid rgba(167,139,250,0.15)',
        }}>
          <div style={{
            fontFamily: "'Sora',sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 52px)',
            lineHeight: 1,
            background: 'linear-gradient(180deg,#EDE9FE,#8B5CF6)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            24/7
          </div>
          <div style={{ marginTop: '12px', fontSize: '14px', color: '#B7B2D1' }}>
            Automations that never sleep
          </div>
        </div>

        <div style={{
          padding: '36px 24px',
          boxSizing: 'border-box',
          textAlign: 'center',
          borderRight: '1px solid rgba(167,139,250,0.15)',
          borderBottom: '1px solid rgba(167,139,250,0.15)',
        }}>
          <div style={{
            fontFamily: "'Sora',sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 52px)',
            lineHeight: 1,
            background: 'linear-gradient(180deg,#EDE9FE,#8B5CF6)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            100%
          </div>
          <div style={{ marginTop: '12px', fontSize: '14px', color: '#B7B2D1' }}>
            Custom-built for your business
          </div>
        </div>

        <div style={{
          padding: '36px 24px',
          boxSizing: 'border-box',
          textAlign: 'center',
          borderRight: '1px solid rgba(167,139,250,0.15)',
          borderBottom: '1px solid rgba(167,139,250,0.15)',
        }}>
          <div style={{
            fontFamily: "'Sora',sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 52px)',
            lineHeight: 1,
            background: 'linear-gradient(180deg,#EDE9FE,#8B5CF6)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            4 steps
          </div>
          <div style={{ marginTop: '12px', fontSize: '14px', color: '#B7B2D1' }}>
            From first call to launch
          </div>
        </div>

        <div style={{
          padding: '36px 24px',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Sora',sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 52px)',
            lineHeight: 1,
            background: 'linear-gradient(180deg,#EDE9FE,#8B5CF6)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            Zero
          </div>
          <div style={{ marginTop: '12px', fontSize: '14px', color: '#B7B2D1' }}>
            Technical skills needed from you
          </div>
        </div>
      </div>
    </div>
  );
}

export function HubDiagram() {
  return (
    <div style={{
      position: 'relative',
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '80px 20px 40px',
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
          ONE AI BRAIN
        </div>
        <h2 style={{
          margin: 0,
          fontFamily: "'Sora',sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(28px, 4.5vw, 50px)',
          lineHeight: 1.15,
          letterSpacing: '-1.2px',
        }}>
          Connect every tool you already use
        </h2>
        <p style={{ margin: 0, fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.65, color: '#B7B2D1' }}>
          Messages, forms and data flow into one smart system that decides what to do next and does it for you.
        </p>
      </div>

      {/* ONE AI BRAIN SVG ARCHITECTURE (Fits 100% on mobile & desktop, zero horizontal scrollbar/sliding) */}
      <div style={{
        marginTop: '40px',
        width: '100%',
        maxWidth: '980px',
        margin: '40px auto 0',
        padding: '0 4px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>
        <svg
          viewBox="0 0 960 540"
          width="100%"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto',
            maxHeight: '540px',
          }}
          role="img"
          aria-label="TSX AI connects WhatsApp, Gmail and website forms on the left with your CRM, Google Sheets and Slack on the right"
        >
          <defs>
            <radialGradient id="halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="hubg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C4B5FD"/>
              <stop offset="55%" stopColor="#7C3AED"/>
              <stop offset="100%" stopColor="#4C1D95"/>
            </linearGradient>
            <linearGradient id="ln" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#A78BFA"/>
              <stop offset="100%" stopColor="#7C3AED"/>
            </linearGradient>
          </defs>

          {/* Central Halo & Orbit Rings */}
          <circle cx="480" cy="270" r="260" fill="url(#halo)"/>
          <circle cx="480" cy="270" r="136" fill="none" stroke="#A78BFA" strokeOpacity="0.3" strokeDasharray="4 8" strokeWidth="1.5"/>
          <circle cx="480" cy="270" r="184" fill="none" stroke="#A78BFA" strokeOpacity="0.18" strokeDasharray="4 10" strokeWidth="1.5"/>

          {/* Animated Connecting Flow Lines */}
          <g fill="none" stroke="url(#ln)" strokeWidth="3" strokeDasharray="7 9" strokeLinecap="round">
            <path d="M230 90 C330 90 330 270 400 270" style={{ animation: 'dash 1.4s linear infinite' }}/>
            <path d="M230 270 L400 270" style={{ animation: 'dash 1.4s linear infinite' }}/>
            <path d="M230 450 C330 450 330 270 400 270" style={{ animation: 'dash 1.4s linear infinite' }}/>
            <path d="M560 270 C630 270 630 90 730 90" style={{ animation: 'dash 1.4s linear infinite' }}/>
            <path d="M560 270 L730 270" style={{ animation: 'dash 1.4s linear infinite' }}/>
            <path d="M560 270 C630 270 630 450 730 450" style={{ animation: 'dash 1.4s linear infinite' }}/>
          </g>

          {/* Pulsing Central Ring & Globe */}
          <circle cx="480" cy="270" r="102" fill="none" stroke="#A78BFA" strokeWidth="2.5" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'pulse-ring 3s ease-in-out infinite' }}/>
          <circle cx="480" cy="270" r="82" fill="url(#hubg)" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="2"/>
          
          {/* TSX AI Center Text */}
          <text x="480" y="272" textAnchor="middle" fontFamily="'Sora', sans-serif" fontWeight="800" fontSize="38" fill="#FFFFFF">TSX</text>
          <text x="480" y="299" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="16" letterSpacing="5" fill="#EDE9FE">AI</text>

          {/* Left & Right Nodes */}
          <g fontFamily="'Inter', system-ui, sans-serif">
            {/* Left nodes: Inputs */}
            <g>
              <rect x="18" y="54" width="214" height="72" rx="18" fill="#140F26" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.5"/>
              <text x="125" y="86" textAnchor="middle" fontSize="23" fontWeight="700" fill="#FFFFFF">WhatsApp</text>
              <text x="125" y="110" textAnchor="middle" fontSize="16" fill="#C4B5FD">Customer chats</text>
            </g>

            <g>
              <rect x="18" y="234" width="214" height="72" rx="18" fill="#140F26" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.5"/>
              <text x="125" y="266" textAnchor="middle" fontSize="23" fontWeight="700" fill="#FFFFFF">Gmail</text>
              <text x="125" y="290" textAnchor="middle" fontSize="16" fill="#C4B5FD">Inbox and replies</text>
            </g>

            <g>
              <rect x="18" y="414" width="214" height="72" rx="18" fill="#140F26" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.5"/>
              <text x="125" y="446" textAnchor="middle" fontSize="23" fontWeight="700" fill="#FFFFFF">Website forms</text>
              <text x="125" y="470" textAnchor="middle" fontSize="16" fill="#C4B5FD">New enquiries</text>
            </g>

            {/* Right nodes: Destinations */}
            <g>
              <rect x="728" y="54" width="214" height="72" rx="18" fill="#140F26" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.5"/>
              <text x="835" y="86" textAnchor="middle" fontSize="23" fontWeight="700" fill="#FFFFFF">Your CRM</text>
              <text x="835" y="110" textAnchor="middle" fontSize="16" fill="#C4B5FD">Leads and deals</text>
            </g>

            <g>
              <rect x="728" y="234" width="214" height="72" rx="18" fill="#140F26" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.5"/>
              <text x="835" y="266" textAnchor="middle" fontSize="23" fontWeight="700" fill="#FFFFFF">Google Sheets</text>
              <text x="835" y="290" textAnchor="middle" fontSize="16" fill="#C4B5FD">Data and reports</text>
            </g>

            <g>
              <rect x="728" y="414" width="214" height="72" rx="18" fill="#140F26" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.5"/>
              <text x="835" y="446" textAnchor="middle" fontSize="23" fontWeight="700" fill="#FFFFFF">Slack</text>
              <text x="835" y="470" textAnchor="middle" fontSize="16" fill="#C4B5FD">Team alerts</text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

