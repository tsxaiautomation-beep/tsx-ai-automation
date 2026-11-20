import React, { useState } from 'react';
import { Play, Activity, MessageSquare, Zap, UserCheck, Database } from 'lucide-react';

export default function InteractivePipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [leadScenario, setLeadScenario] = useState('ecommerce');

  const scenarios = {
    ecommerce: {
      title: "1. E-Commerce Order Inquiry",
      source: "WhatsApp Cloud API (+92 336...)",
      incomingText: "Customer asks on WhatsApp: 'Order #9482 kab tak pohnchay ga?'",
      agentDecision: "Auto-checked courier API, verified package is out for delivery in Karachi, and dispatched live tracking link to customer within 1.2s."
    },
    realestate: {
      title: "2. Real Estate Lead Qualification",
      source: "Facebook / Instagram Ad Lead Form",
      incomingText: "New lead submitted: Adeel Hashmi, Budget PKR 50M (DHA Phase 8 Karachi)",
      agentDecision: "AI messaged Adeel on WhatsApp in 8 seconds, shared PDF floorplan brochure, and booked 4:00 PM Google Meet consultation."
    },
    b2b: {
      title: "3. B2B Invoicing & Accounts",
      source: "Supplier PDF Invoice via Email",
      incomingText: "Incoming vendor bill: PKR 380,000 for raw material inventory",
      agentDecision: "AI extracted line items via OCR, cross-verified purchase order in MongoDB database, and generated 1-click payment voucher."
    }
  };

  const steps = [
    { id: 0, title: "1. Inbound Capture", sub: "WhatsApp / Ads / Web", icon: MessageSquare },
    { id: 1, title: "2. Neural Reasoning", sub: "Roman Urdu & Intent", icon: Zap },
    { id: 2, title: "3. Autonomous Action", sub: "Replies / Schedules", icon: UserCheck },
    { id: 3, title: "4. Cloud Database", sub: "MongoDB & Firebase", icon: Database },
  ];

  const runSimulation = () => {
    setIsRunning(true);
    setActiveStep(0);

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          setIsRunning(false);
          return 3;
        }
        return prev + 1;
      });
    }, 750);
  };

  const current = scenarios[leadScenario];

  return (
    <section id="demo" style={{ position: 'relative', borderTop: '1px solid rgba(167,139,250,0.12)', background: '#07050F', padding: '96px 24px' }}>
      
      {/* HUB DIAGRAM FROM CLAUDE THEME */}
      <div style={{ maxWidth: 1240, margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>ONE AI BRAIN</div>
          <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.12, letterSpacing: -1.2 }}>
            Connect every tool you already use
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: '#B7B2D1' }}>
            Messages, forms and data flow into one smart system that decides what to do next and does it for you.
          </p>
        </div>

        {/* SVG Diagram */}
        <div style={{ marginTop: 48, marginBottom: 72 }}>
          <svg viewBox="0 0 960 540" width="100%" style={{ maxWidth: 980, display: 'block', margin: '0 auto' }} role="img" aria-label="HTM AI Hub Diagram">
            <defs>
              <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.55"/>
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
            <circle cx="480" cy="270" r="250" fill="url(#halo)"/>
            <circle cx="480" cy="270" r="128" fill="none" stroke="#A78BFA" strokeOpacity="0.25" strokeDasharray="3 7"/>
            <circle cx="480" cy="270" r="176" fill="none" stroke="#A78BFA" strokeOpacity="0.14" strokeDasharray="3 9"/>
            <g fill="none" stroke="url(#ln)" strokeWidth="2.2" strokeDasharray="6 8" strokeLinecap="round">
              <path d="M230 90 C330 90 330 270 400 270" style={{ animation: 'dash 1.4s linear infinite' }}/>
              <path d="M230 270 L400 270" style={{ animation: 'dash 1.4s linear infinite' }}/>
              <path d="M230 450 C330 450 330 270 400 270" style={{ animation: 'dash 1.4s linear infinite' }}/>
              <path d="M560 270 C630 270 630 90 730 90" style={{ animation: 'dash 1.4s linear infinite' }}/>
              <path d="M560 270 L730 270" style={{ animation: 'dash 1.4s linear infinite' }}/>
              <path d="M560 270 C630 270 630 450 730 450" style={{ animation: 'dash 1.4s linear infinite' }}/>
            </g>
            <circle cx="480" cy="270" r="98" fill="none" stroke="#A78BFA" strokeWidth="2" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'pulse 3s ease-in-out infinite' }}/>
            <circle cx="480" cy="270" r="80" fill="url(#hubg)" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1.5"/>
            <text x="480" y="272" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="36" fill="#FFFFFF">HTM</text>
            <text x="480" y="298" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="15" letterSpacing="4" fill="#EDE9FE">AI</text>
            <g fontFamily="Inter, sans-serif">
              <rect x="20" y="58" width="210" height="64" rx="16" fill="#140F26" stroke="#A78BFA" strokeOpacity="0.4"/>
              <text x="125" y="86" textAnchor="middle" fontSize="21" fontWeight="600" fill="#F5F3FF">WhatsApp</text>
              <text x="125" y="108" textAnchor="middle" fontSize="15" fill="#A8A3C2">Customer chats</text>
              <rect x="20" y="238" width="210" height="64" rx="16" fill="#140F26" stroke="#A78BFA" strokeOpacity="0.4"/>
              <text x="125" y="266" textAnchor="middle" fontSize="21" fontWeight="600" fill="#F5F3FF">Gmail</text>
              <text x="125" y="288" textAnchor="middle" fontSize="15" fill="#A8A3C2">Inbox and replies</text>
              <rect x="20" y="418" width="210" height="64" rx="16" fill="#140F26" stroke="#A78BFA" strokeOpacity="0.4"/>
              <text x="125" y="446" textAnchor="middle" fontSize="21" fontWeight="600" fill="#F5F3FF">Website forms</text>
              <text x="125" y="468" textAnchor="middle" fontSize="15" fill="#A8A3C2">New enquiries</text>
              <rect x="730" y="58" width="210" height="64" rx="16" fill="#140F26" stroke="#A78BFA" strokeOpacity="0.4"/>
              <text x="835" y="86" textAnchor="middle" fontSize="21" fontWeight="600" fill="#F5F3FF">Your CRM</text>
              <text x="835" y="108" textAnchor="middle" fontSize="15" fill="#A8A3C2">Leads and deals</text>
              <rect x="730" y="238" width="210" height="64" rx="16" fill="#140F26" stroke="#A78BFA" strokeOpacity="0.4"/>
              <text x="835" y="266" textAnchor="middle" fontSize="21" fontWeight="600" fill="#F5F3FF">Google Sheets</text>
              <text x="835" y="288" textAnchor="middle" fontSize="15" fill="#A8A3C2">Data and reports</text>
              <rect x="730" y="418" width="210" height="64" rx="16" fill="#140F26" stroke="#A78BFA" strokeOpacity="0.4"/>
              <text x="835" y="446" textAnchor="middle" fontSize="21" fontWeight="600" fill="#F5F3FF">Slack</text>
              <text x="835" y="468" textAnchor="middle" fontSize="15" fill="#A8A3C2">Team alerts</text>
            </g>
          </svg>
        </div>

        {/* Live Simulation Section */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 36px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>LIVE EXECUTION DEMO</div>
          <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(24px,3.5vw,40px)' }}>
            See how the HTM pipeline runs in real-time
          </h3>
          <p style={{ margin: 0, fontSize: 16, color: '#B7B2D1' }}>
            Choose a business use-case below and click "Run Live Simulation" to watch the flow execute step by step.
          </p>

          {/* Scenario Selector Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 12 }}>
            {Object.keys(scenarios).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setLeadScenario(key);
                  setActiveStep(0);
                }}
                style={{
                  padding: '9px 18px',
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: leadScenario === key ? '1px solid #8B5CF6' : '1px solid rgba(167,139,250,0.25)',
                  background: leadScenario === key ? 'linear-gradient(135deg, #8B5CF6, #6D28D9)' : 'rgba(255,255,255,0.03)',
                  color: '#fff',
                  boxShadow: leadScenario === key ? '0 8px 24px rgba(139,92,246,0.4)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                {scenarios[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Steps */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <div
                key={step.id}
                style={{
                  flex: '1 1 220px',
                  minWidth: 0,
                  padding: 24,
                  borderRadius: 20,
                  boxSizing: 'border-box',
                  background: isCurrent 
                    ? 'linear-gradient(160deg, rgba(139,92,246,0.35), rgba(109,40,217,0.15))' 
                    : isCompleted 
                    ? 'rgba(16,185,129,0.08)' 
                    : 'rgba(255,255,255,0.03)',
                  border: isCurrent 
                    ? '1.5px solid #8B5CF6' 
                    : isCompleted 
                    ? '1px solid rgba(16,185,129,0.35)' 
                    : '1px solid rgba(167,139,250,0.18)',
                  boxShadow: isCurrent ? '0 10px 30px rgba(139,92,246,0.3)' : 'none',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: isCurrent ? 'linear-gradient(135deg,#8B5CF6,#6D28D9)' : 'rgba(139,92,246,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isCurrent ? '#fff' : '#C4B5FD',
                  }}>
                    <Icon size={20} />
                  </div>
                  <span style={{
                    fontSize: 11,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    padding: '3px 9px',
                    borderRadius: 999,
                    background: isCurrent ? '#7C3AED' : isCompleted ? '#064E3B' : 'rgba(255,255,255,0.06)',
                    color: isCurrent ? '#fff' : isCompleted ? '#34D399' : '#A8A3C2',
                  }}>
                    {isCurrent ? 'ACTIVE' : isCompleted ? 'DONE ✓' : 'WAIT'}
                  </span>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 16 }}>{step.title}</h4>
                  <p style={{ margin: '4px 0 0', fontSize: 13, color: '#A8A3C2' }}>{step.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Output Box */}
        <div style={{
          background: 'rgba(18,12,38,0.7)',
          border: '1px solid rgba(167,139,250,0.25)',
          borderRadius: 22,
          padding: 28,
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, borderBottom: '1px solid rgba(167,139,250,0.15)', paddingBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
              <span style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 600, color: '#C9C4E0' }}>
                Channel: {current.source}
              </span>
            </div>
            <button
              onClick={runSimulation}
              disabled={isRunning}
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '10px 22px',
                fontWeight: 600,
                fontSize: 14,
                cursor: isRunning ? 'wait' : 'pointer',
                boxShadow: '0 6px 20px rgba(139,92,246,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Play size={16} fill="currentColor" />
              <span>{isRunning ? 'Processing Stream...' : 'Run Live Simulation'}</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 18 }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 16, borderRadius: 14, border: '1px solid rgba(167,139,250,0.15)' }}>
              <div style={{ fontSize: 11, color: '#A78BFA', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
                📥 Incoming Event
              </div>
              <div style={{ fontSize: 14, color: '#F5F3FF', lineHeight: 1.5 }}>
                "{current.incomingText}"
              </div>
            </div>

            <div style={{ background: 'rgba(16,185,129,0.05)', padding: 16, borderRadius: 14, border: '1px solid rgba(16,185,129,0.25)' }}>
              <div style={{ fontSize: 11, color: '#34D399', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
                ⚡ HTM AI Action Taken
              </div>
              <div style={{ fontSize: 14, color: '#ECFDF5', lineHeight: 1.5 }}>
                {current.agentDecision}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
