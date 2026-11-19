import React, { useState } from 'react';
import { COMPANY_INFO, CORE_PILLARS } from '../data/companyData';

const AUTOMATIONS = [
  {
    id: 'lead-followup',
    title: 'Lead follow-up',
    badge: 'Active',
    workflowTitle: 'WORKFLOW: LEAD FOLLOW-UP',
    steps: [
      { label: 'TRIGGER', title: 'New enquiry', subtitle: 'WhatsApp / Web / IG', icon: 'zap' },
      { label: 'AI STEP', title: 'Qualify lead', subtitle: 'Intent & budget check', icon: 'cpu', isAi: true },
      { label: 'ACTION', title: 'Update CRM', subtitle: 'Sync Sheets & Pipeline', icon: 'database' },
      { label: 'NOTIFY', title: 'Alert team', subtitle: 'WhatsApp ping in 2s', icon: 'bell' },
    ],
    baseMetrics: {
      metric1: { label: 'Replies sent', value: 1284, suffix: '' },
      metric2: { label: 'Leads captured', value: 342, suffix: '' },
      metric3: { label: 'Hours saved', value: 62, suffix: ' h' },
    },
    liveEvent: 'Just now: Inquiry from Clifton Phase 5 qualified with PKR 400k budget.',
    sampleQuery: 'Incoming Web Enquiry: "Need AI bot & web system for my Shopify store in Karachi"',
    sampleResponse: 'AUTONYX Engine: Qualified High-Intent Lead. Synced to CRM & WhatsApp alert dispatched.',
  },
  {
    id: 'whatsapp-bot',
    title: 'WhatsApp assistant',
    badge: 'Active',
    workflowTitle: 'WORKFLOW: 24/7 WHATSAPP BOT',
    steps: [
      { label: 'TRIGGER', title: 'Customer chat', subtitle: 'Incoming message 24/7', icon: 'zap' },
      { label: 'AI STEP', title: 'Roman Urdu NLP', subtitle: 'Answers in Urdu & Eng', icon: 'cpu', isAi: true },
      { label: 'ACTION', title: 'Catalog check', subtitle: 'Stock & pricing lookup', icon: 'database' },
      { label: 'NOTIFY', title: 'Instant reply', subtitle: 'Sent in < 3 seconds', icon: 'bell' },
    ],
    baseMetrics: {
      metric1: { label: 'Queries resolved', value: 4890, suffix: '' },
      metric2: { label: 'Deals closed', value: 876, suffix: '' },
      metric3: { label: 'Hours saved', value: 140, suffix: ' h' },
    },
    liveEvent: 'Just now: Roman Urdu pricing inquiry answered & invoice link shared in 1.8s.',
    sampleQuery: 'Customer: "Assalam o alaikum, rate kiya hai aur delivery kab tak milegi?"',
    sampleResponse: 'AUTONYX Bot: "Walaikum Assalam! Price PKR 4,500 hai with free 2-day delivery across Pakistan."',
  },
  {
    id: 'invoice-reminders',
    title: 'Invoice reminders',
    badge: 'Active',
    workflowTitle: 'WORKFLOW: AUTO PAYMENT CHASER',
    steps: [
      { label: 'TRIGGER', title: 'Due date in 24h', subtitle: 'Scans pending ledger', icon: 'zap' },
      { label: 'AI STEP', title: 'Polite reminder', subtitle: 'Custom tone & amount', icon: 'cpu', isAi: true },
      { label: 'ACTION', title: 'Send pay link', subtitle: '1-click bank transfer', icon: 'database' },
      { label: 'NOTIFY', title: 'Auto reconcile', subtitle: 'Receipt to accounting', icon: 'bell' },
    ],
    baseMetrics: {
      metric1: { label: 'Reminders sent', value: 640, suffix: '' },
      metric2: { label: 'Cash collected', value: 1850, suffix: 'k', prefix: 'PKR ' },
      metric3: { label: 'Hours saved', value: 45, suffix: ' h' },
    },
    liveEvent: 'Just now: Payment of PKR 85,000 received for Invoice #1042.',
    sampleQuery: 'Ledger Trigger: Invoice #1042 due in 24 hrs for Client "Apex Retail"',
    sampleResponse: 'AUTONYX Chaser: Sent WhatsApp reminder with secure payment link. Receipt auto-logged.',
  },
  {
    id: 'weekly-report',
    title: 'Weekly report',
    badge: 'Active',
    workflowTitle: 'WORKFLOW: EXECUTIVE AI DIGEST',
    steps: [
      { label: 'TRIGGER', title: 'Sunday 8:00 PM', subtitle: 'Scheduled automatic run', icon: 'zap' },
      { label: 'AI STEP', title: 'Compile data', subtitle: 'Sales, Meta Ads & CRM', icon: 'cpu', isAi: true },
      { label: 'ACTION', title: 'Generate PDF', subtitle: 'Key ROI highlights', icon: 'database' },
      { label: 'NOTIFY', title: 'WhatsApp CEO', subtitle: 'Direct executive summary', icon: 'bell' },
    ],
    baseMetrics: {
      metric1: { label: 'Reports dispatched', value: 52, suffix: '' },
      metric2: { label: 'Data sources', value: 8, suffix: ' syncs' },
      metric3: { label: 'Hours saved', value: 38, suffix: ' h' },
    },
    liveEvent: 'Just now: Weekly performance digest generated & sent to Founder WhatsApp.',
    sampleQuery: 'System Trigger: Sunday 8 PM - Pulling Stripe, Meta Ads, and WhatsApp lead count',
    sampleResponse: 'AUTONYX Reporter: PDF digest synthesized: +38% conversion rate, sent to CEO inbox.',
  },
  {
    id: 'voice-caller',
    title: 'AI Voice Caller',
    badge: 'Urdu & Eng',
    workflowTitle: 'WORKFLOW: 24/7 AI VOICE CALLER',
    steps: [
      { label: 'TRIGGER', title: 'Inbound / Outbound', subtitle: 'Phone call received', icon: 'zap' },
      { label: 'AI STEP', title: 'Urdu & Eng NLP', subtitle: '< 600ms low-latency AI', icon: 'cpu', isAi: true },
      { label: 'ACTION', title: 'Qualify & Book', subtitle: 'Slot locked on Calendar', icon: 'database' },
      { label: 'NOTIFY', title: 'Call summary', subtitle: 'Sent to WhatsApp in 2s', icon: 'bell' },
    ],
    baseMetrics: {
      metric1: { label: 'Calls completed', value: 940, suffix: '' },
      metric2: { label: 'Meetings booked', value: 248, suffix: '' },
      metric3: { label: 'Avg latency', value: 520, suffix: ' ms' },
    },
    liveEvent: 'Just now: AI Voice Agent closed 4 PM appointment confirmation over phone in Roman Urdu.',
    sampleQuery: 'Customer: "Assalam o alaikum, mujhe booking confirmation ke baare mein poochhna hai"',
    sampleResponse: 'AUTONYX Voice AI: "Walaikum Assalam! Aapki kal 4 PM slot lock ho chuki hai. WhatsApp par location bhej di hai."',
  },
];

export function Hero({ onOpenModal }) {
  const [selectedAutoIndex, setSelectedAutoIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [simCounterDeltas, setSimCounterDeltas] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 });
  const [liveToast, setLiveToast] = useState(null);

  const currentAuto = AUTOMATIONS[selectedAutoIndex];

  // Simulation Runner
  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStepIndex(0);
    setLiveToast({ text: `⚡ Step 1/4: ${currentAuto.steps[0].title} received!`, status: 'running' });

    setTimeout(() => {
      setActiveStepIndex(1);
      setLiveToast({ text: `🧠 Step 2/4: AUTONYX AI analyzing with ${currentAuto.steps[1].title}...`, status: 'running' });
    }, 1200);

    setTimeout(() => {
      setActiveStepIndex(2);
      setLiveToast({ text: `💾 Step 3/4: Database action executing (${currentAuto.steps[2].title})...`, status: 'running' });
    }, 2400);

    setTimeout(() => {
      setActiveStepIndex(3);
      setLiveToast({ text: `🔔 Step 4/4: Notification sent via WhatsApp (${currentAuto.steps[3].title})!`, status: 'running' });
    }, 3600);

    setTimeout(() => {
      setActiveStepIndex(-1);
      setIsSimulating(false);
      setSimCounterDeltas(prev => ({
        ...prev,
        [selectedAutoIndex]: (prev[selectedAutoIndex] || 0) + 1,
      }));
      setLiveToast({
        text: `✅ Demo Simulation Successful: Handled in 1.4s! +1 ${currentAuto.baseMetrics.metric1.label.toLowerCase()} added.`,
        status: 'success',
      });
      setTimeout(() => {
        setLiveToast(null);
      }, 5000);
    }, 4800);
  };

  const delta = simCounterDeltas[selectedAutoIndex] || 0;
  const metric1Val = currentAuto.baseMetrics.metric1.value + delta;
  const metric2Val = currentAuto.baseMetrics.metric2.value + Math.floor(delta * 0.7);
  const metric3Val = currentAuto.baseMetrics.metric3.value + (delta > 0 ? 1 : 0);

  return (
    <div id="top" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Grids & Glows in Cyber Red & Dark Black */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '920px',
        backgroundImage: 'linear-gradient(rgba(239,68,68,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(239,68,68,0.06) 1px,transparent 1px)',
        backgroundSize: '64px 64px',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%,#000 25%,transparent 72%)',
        maskImage: 'radial-gradient(ellipse at 50% 0%,#000 25%,transparent 72%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div style={{
        position: 'absolute',
        left: '50%',
        top: '-120px',
        width: '1100px',
        height: '640px',
        marginLeft: '-550px',
        background: 'radial-gradient(closest-side,rgba(220,38,38,0.45),rgba(220,38,38,0))',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div className="anim-drift" style={{
        position: 'absolute',
        left: '6%',
        top: '140px',
        width: '440px',
        height: '440px',
        background: 'radial-gradient(closest-side,rgba(239,68,68,0.25),rgba(239,68,68,0))',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div className="anim-drift-rev" style={{
        position: 'absolute',
        right: '4%',
        top: '280px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(closest-side,rgba(185,28,28,0.22),rgba(185,28,28,0))',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Main Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '48px 16px 0',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}>
        {/* Pill Tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          border: '1px solid rgba(239,68,68,0.4)',
          background: 'rgba(239,68,68,0.1)',
          borderRadius: '999px',
          padding: '8px 20px',
          fontSize: '13px',
          color: '#FEE2E2',
          fontWeight: 600,
          backdropFilter: 'blur(8px)',
          boxShadow: '0 0 20px rgba(239,68,68,0.25)',
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#EF4444',
            boxShadow: '0 0 12px #EF4444',
            display: 'inline-block',
          }} />
          <span>AUTONYX AI</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>Automate • Innovate • Grow</span>
        </div>

        {/* Headline */}
        <h1 style={{
          margin: '22px auto 0',
          maxWidth: '960px',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(32px, 5.5vw, 68px)',
          lineHeight: 1.1,
          letterSpacing: '-0.035em',
          padding: '0 4px',
          color: '#FFFFFF',
        }}>
          Put your business on <span className="anim-shimmer">AI autopilot</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          margin: '18px auto 0',
          maxWidth: '700px',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          lineHeight: 1.65,
          color: '#9CA3AF',
          padding: '0 8px',
        }}>
          <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>Smarter Solutions. A Smarter Tomorrow.</strong> We engineer custom AI agents, automated sales pipelines, and intelligent cloud systems that reply to customers, capture leads, and scale your operations 24/7.
        </p>

        {/* Action Buttons */}
        <div style={{
          marginTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '14px',
          padding: '0 8px',
        }}>
          <button
            onClick={onOpenModal}
            style={{
              background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
              boxShadow: '0 14px 44px rgba(239,68,68,0.55)',
              color: '#FFFFFF',
              padding: '16px 34px',
              borderRadius: '14px',
              fontWeight: 700,
              fontSize: '16px',
              border: '1px solid rgba(254,202,202,0.3)',
              cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              width: 'min(100%, 300px)',
              transition: 'transform 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Let's Automate Together →
          </button>

          <a
            href="#live-demo"
            style={{
              border: '1px solid rgba(239,68,68,0.4)',
              background: 'rgba(255,255,255,0.04)',
              color: '#FFFFFF',
              padding: '16px 32px',
              borderRadius: '14px',
              fontWeight: 600,
              fontSize: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'min(100%, 300px)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#EF4444';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(239,68,68,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(239,68,68,0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Try Interactive Demo ↓
          </a>
        </div>

        {/* 4 CORE PILLARS FROM BANNER (AI Automation • Web Dev • Business Growth • Cloud Solutions) */}
        <div style={{
          marginTop: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          maxWidth: '1080px',
          margin: '36px auto 0',
          padding: '0 4px',
        }}>
          {CORE_PILLARS.map((pillar, idx) => {
            const renderPillarIcon = () => {
              if (pillar.iconType === 'bot') {
                return (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="3"/>
                    <circle cx="12" cy="5" r="2"/>
                    <path d="M12 7v4"/>
                    <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="3"/>
                    <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="3"/>
                  </svg>
                );
              }
              if (pillar.iconType === 'globe') {
                return (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
                  </svg>
                );
              }
              if (pillar.iconType === 'trending') {
                return (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                );
              }
              return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
              );
            };

            return (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(145deg, rgba(18, 15, 26, 0.85) 0%, rgba(10, 8, 15, 0.95) 100%)',
                  border: '1px solid rgba(239, 68, 68, 0.24)',
                  borderRadius: '16px',
                  padding: '16px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textAlign: 'left',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(220, 38, 38, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.24)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)';
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(239,68,68,0.18), rgba(185,28,28,0.3))',
                  border: '1px solid rgba(239,68,68,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 0 14px rgba(239,68,68,0.25)',
                }}>
                  {renderPillarIcon()}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '14.5px', color: '#FFFFFF', letterSpacing: '-0.2px' }}>
                    {pillar.title}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#9CA3AF', marginTop: '2px', lineHeight: 1.4 }}>
                    {pillar.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Value Points */}
        <div style={{
          marginTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px 28px',
          fontSize: '13.5px',
          color: '#A1A1AA',
          padding: '0 8px',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5"/>
            </svg>
            No technical knowledge needed
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5"/>
            </svg>
            Custom-built for your business
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5"/>
            </svg>
            Support after launch
          </span>
        </div>

        {/* MOBILE FLOATING BADGES DOCK */}
        <div className="flex lg:hidden flex-wrap items-center justify-center gap-3 mt-8 max-w-lg mx-auto">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(15,14,20,0.95)',
            border: '1px solid rgba(239,68,68,0.4)',
            borderRadius: '14px',
            padding: '10px 14px',
            boxShadow: '0 8px 24px rgba(220,38,38,0.3)',
            textAlign: 'left',
            flex: '1 1 200px',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg,#EF4444,#B91C1C)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 8v6M22 11h-6"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>New lead captured</div>
              <div style={{ fontSize: '11px', color: '#FCA5A5' }}>Qualified by AUTONYX AI, just now</div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(15,14,20,0.95)',
            border: '1px solid rgba(239,68,68,0.4)',
            borderRadius: '14px',
            padding: '10px 14px',
            boxShadow: '0 8px 24px rgba(220,38,38,0.3)',
            textAlign: 'left',
            flex: '1 1 200px',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg,#EF4444,#B91C1C)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Meeting booked</div>
              <div style={{ fontSize: '11px', color: '#FCA5A5' }}>Tuesday, 3:00 PM</div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE WORKING DASHBOARD MOCKUP (AUTONYX LIVE DEMO)       */}
        {/* ============================================================== */}
        <div id="live-demo" style={{
          position: 'relative',
          margin: '52px auto 0',
          maxWidth: '1120px',
          paddingBottom: '16px',
        }}>
          {/* Floating Badge 1 (Top-Right on desktop - gracefully floats beside window) */}
          <div className="hidden lg:flex anim-float" style={{
            position: 'absolute',
            right: '-24px',
            top: '8%',
            zIndex: 10,
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(15,12,22,0.96)',
            border: '1px solid rgba(239,68,68,0.45)',
            borderRadius: '16px',
            padding: '12px 18px',
            boxShadow: '0 20px 60px rgba(220,38,38,0.4)',
            textAlign: 'left',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg,#EF4444,#B91C1C)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
              boxShadow: '0 0 16px rgba(239,68,68,0.5)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 8v6M22 11h-6"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>New lead captured</div>
              <div style={{ fontSize: '12px', color: '#FCA5A5', marginTop: '2px' }}>Qualified by AUTONYX AI, just now</div>
            </div>
          </div>

          {/* Floating Badge 2 (Upper-Left on desktop - gracefully floats beside window, never overlaps bottom) */}
          <div className="hidden lg:flex anim-float-delayed" style={{
            position: 'absolute',
            left: '-24px',
            top: '22%',
            zIndex: 10,
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(15,12,22,0.96)',
            border: '1px solid rgba(239,68,68,0.45)',
            borderRadius: '16px',
            padding: '12px 18px',
            boxShadow: '0 20px 60px rgba(220,38,38,0.4)',
            textAlign: 'left',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg,#EF4444,#B91C1C)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
              boxShadow: '0 0 16px rgba(239,68,68,0.5)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>Meeting booked</div>
              <div style={{ fontSize: '12px', color: '#FCA5A5', marginTop: '2px' }}>Tuesday, 3:00 PM</div>
            </div>
          </div>

          {/* Glow backdrop behind window */}
          <div style={{
            position: 'absolute',
            left: '-10px',
            right: '-10px',
            top: '-10px',
            bottom: '-10px',
            background: 'radial-gradient(closest-side,rgba(220,38,38,0.35),rgba(220,38,38,0))',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          {/* Main Dashboard Window */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            background: '#09080E',
            border: '1px solid rgba(239,68,68,0.32)',
            borderRadius: '24px',
            boxShadow: '0 40px 120px rgba(220,38,38,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
            overflow: 'hidden',
            textAlign: 'left',
          }}>
            {/* Window title bar & Live Simulation Trigger Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              padding: '12px 16px',
              borderBottom: '1px solid rgba(239,68,68,0.2)',
              background: 'rgba(15,12,22,0.9)',
              flexWrap: 'wrap',
              width: '100%',
              boxSizing: 'border-box',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', minWidth: 0 }}>
                <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', opacity: 0.9, display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', opacity: 0.8, display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', opacity: 0.8, display: 'inline-block' }} />
                </div>
                <div style={{ fontSize: '13px', color: '#FEE2E2', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', minWidth: 0 }}>
                  <span>AUTONYX Automation Dashboard</span>
                  <span style={{
                    fontSize: '10px',
                    color: '#EF4444',
                    background: 'rgba(239,68,68,0.14)',
                    border: '1px solid rgba(239,68,68,0.4)',
                    borderRadius: '999px',
                    padding: '2px 8px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}>
                    ● Live Demo
                  </span>
                </div>
              </div>

              {/* ACTION: RUN DEMO SIMULATION BUTTON */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: 'auto' }}>
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: isSimulating
                      ? 'rgba(239,68,68,0.25)'
                      : 'linear-gradient(135deg, #EF4444, #B91C1C)',
                    border: '1px solid rgba(254,202,202,0.45)',
                    borderRadius: '10px',
                    padding: '8px 16px',
                    color: '#FFFFFF',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    cursor: isSimulating ? 'not-allowed' : 'pointer',
                    boxShadow: isSimulating ? 'none' : '0 4px 18px rgba(239,68,68,0.4)',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  title="Click to test live automation execution"
                >
                  {isSimulating ? (
                    <>
                      <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      <span>Simulating...</span>
                    </>
                  ) : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 3l14 9-14 9V3z"/>
                      </svg>
                      <span>▶ Test Workflow Live</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LIVE SIMULATION STATUS NOTIFIER */}
            {liveToast && (
              <div style={{
                background: liveToast.status === 'success'
                  ? 'rgba(16,185,129,0.18)'
                  : 'rgba(239,68,68,0.18)',
                borderBottom: `1px solid ${liveToast.status === 'success' ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)'}`,
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12.5px',
                color: liveToast.status === 'success' ? '#A7F3D0' : '#FEE2E2',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                flexWrap: 'wrap',
                gap: '6px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, wordBreak: 'break-word' }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: liveToast.status === 'success' ? '#10B981' : '#EF4444',
                    boxShadow: liveToast.status === 'success' ? '0 0 10px #10B981' : '0 0 10px #EF4444',
                    flexShrink: 0,
                  }} />
                  <span style={{ overflowWrap: 'anywhere' }}>{liveToast.text}</span>
                </div>
                <span style={{ fontSize: '11px', color: '#9CA3AF', whiteSpace: 'nowrap' }}>Real-Time Test</span>
              </div>
            )}

            {/* Dashboard Body Grid */}
            <div style={{
              padding: 'clamp(14px, 3vw, 20px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '18px',
              width: '100%',
              boxSizing: 'border-box',
            }}>
              
              {/* LEFT COLUMN: ACTIVE AUTOMATIONS */}
              <div style={{
                flex: '1 1 240px',
                minWidth: 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 4px',
                }}>
                  <div style={{ fontSize: '11px', color: '#A1A1AA', letterSpacing: '1.5px', fontWeight: 700 }}>
                    ACTIVE AUTOMATIONS
                  </div>
                  <span style={{ fontSize: '11px', color: '#EF4444' }}>Click to switch</span>
                </div>

                {AUTOMATIONS.map((item, idx) => {
                  const isSelected = selectedAutoIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedAutoIndex(idx);
                        setActiveStepIndex(-1);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '10px',
                        background: isSelected
                          ? 'linear-gradient(135deg, rgba(239,68,68,0.22), rgba(185,28,28,0.12))'
                          : 'rgba(255,255,255,0.03)',
                        border: isSelected
                          ? '1px solid #EF4444'
                          : '1px solid rgba(239,68,68,0.16)',
                        borderRadius: '14px',
                        padding: '12px 14px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        boxShadow: isSelected ? '0 0 20px rgba(239,68,68,0.3)' : 'none',
                        transition: 'all 0.2s ease',
                        width: '100%',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: isSelected ? '#EF4444' : '#6B7280',
                          boxShadow: isSelected ? '0 0 8px #EF4444' : 'none',
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontSize: '13.5px',
                          fontWeight: isSelected ? 600 : 500,
                          color: isSelected ? '#FFFFFF' : '#D1D5DB',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}>
                          {item.title}
                        </span>
                      </div>
                      
                      <span style={{
                        fontSize: '11px',
                        color: isSelected ? '#FEE2E2' : '#9CA3AF',
                        background: isSelected ? 'rgba(239,68,68,0.25)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${isSelected ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.08)'}`,
                        borderRadius: '999px',
                        padding: '2px 8px',
                        fontWeight: 500,
                        flexShrink: 0,
                      }}>
                        {item.badge}
                      </span>
                    </button>
                  );
                })}

                {/* Micro Help Note */}
                <div style={{
                  marginTop: '6px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px dashed rgba(239,68,68,0.25)',
                  borderRadius: '12px',
                  padding: '10px 12px',
                  fontSize: '11.5px',
                  color: '#9CA3AF',
                  lineHeight: 1.5,
                }}>
                  💡 <strong style={{ color: '#FEE2E2' }}>AUTONYX Live Demo:</strong> Tap any automation above or click <strong style={{ color: '#EF4444' }}>"Test Workflow Live"</strong> to simulate execution.
                </div>
              </div>

              {/* RIGHT COLUMN: WORKFLOW STEPS + METRICS */}
              <div style={{
                flex: '2 1 340px',
                minWidth: 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxSizing: 'border-box',
              }}>
                {/* Workflow container */}
                <div style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(239,68,68,0.2)',
                  borderRadius: '18px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  boxSizing: 'border-box',
                  width: '100%',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}>
                    <div style={{ fontSize: '11.5px', color: '#FCA5A5', letterSpacing: '1.2px', fontWeight: 700 }}>
                      {currentAuto.workflowTitle}
                    </div>
                    <span style={{ fontSize: '11px', color: '#9CA3AF' }}>
                      Latency: <strong style={{ color: '#10B981' }}>~1.4s</strong>
                    </span>
                  </div>

                  {/* 4 Steps Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
                    gap: '10px',
                    alignItems: 'stretch',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}>
                    {currentAuto.steps.map((step, sIdx) => {
                      const isSimActive = activeStepIndex === sIdx;
                      return (
                        <div
                          key={sIdx}
                          style={{
                            background: isSimActive
                              ? 'linear-gradient(135deg, rgba(239,68,68,0.5), rgba(185,28,28,0.35))'
                              : step.isAi
                              ? 'linear-gradient(135deg, rgba(239,68,68,0.25), rgba(185,28,28,0.12))'
                              : '#121018',
                            border: isSimActive
                              ? '2px solid #EF4444'
                              : step.isAi
                              ? '1px solid #DC2626'
                              : '1px solid rgba(239,68,68,0.22)',
                            borderRadius: '14px',
                            padding: '12px 10px',
                            boxShadow: isSimActive
                              ? '0 0 25px rgba(239,68,68,0.6)'
                              : step.isAi
                              ? '0 0 18px rgba(239,68,68,0.2)'
                              : 'none',
                            transform: isSimActive ? 'scale(1.02)' : 'none',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '92px',
                            position: 'relative',
                            overflow: 'hidden',
                            boxSizing: 'border-box',
                            minWidth: 0,
                          }}
                        >
                          {/* Active Step Glowing Beam */}
                          {isSimActive && (
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              height: '3px',
                              background: '#EF4444',
                              boxShadow: '0 0 10px #EF4444',
                            }} />
                          )}

                          <div>
                            <div style={{
                              fontSize: '9px',
                              color: isSimActive ? '#FFFFFF' : step.isAi ? '#FCA5A5' : '#A1A1AA',
                              letterSpacing: '1px',
                              fontWeight: 700,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}>
                              <span>{step.label}</span>
                              <span style={{ opacity: 0.6 }}>0{sIdx + 1}</span>
                            </div>

                            <div style={{
                              fontSize: '12.5px',
                              fontWeight: 700,
                              color: '#FFFFFF',
                              marginTop: '5px',
                              lineHeight: 1.25,
                              wordBreak: 'break-word',
                            }}>
                              {step.title}
                            </div>
                          </div>

                          <div style={{
                            fontSize: '10.5px',
                            color: isSimActive ? '#FEE2E2' : '#9CA3AF',
                            marginTop: '6px',
                            lineHeight: 1.25,
                            wordBreak: 'break-word',
                          }}>
                            {step.subtitle}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Simulated Chat / Live Transaction Inspector */}
                  <div style={{
                    background: '#0B0A0F',
                    border: '1px solid rgba(239,68,68,0.18)',
                    borderRadius: '12px',
                    padding: '10px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    fontSize: '11.5px',
                    width: '100%',
                    boxSizing: 'border-box',
                    minWidth: 0,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#EF4444', fontWeight: 600 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', flexShrink: 0 }} />
                      <span>Live Request Preview:</span>
                    </div>
                    <div style={{
                      color: '#E2E8F0',
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      background: 'rgba(255,255,255,0.03)',
                      padding: '6px 8px',
                      borderRadius: '6px',
                      wordBreak: 'break-word',
                      overflowWrap: 'anywhere',
                      whiteSpace: 'pre-wrap',
                    }}>
                      {currentAuto.sampleQuery}
                    </div>
                    <div style={{
                      color: '#FCA5A5',
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      background: 'rgba(239,68,68,0.1)',
                      padding: '6px 8px',
                      borderRadius: '6px',
                      wordBreak: 'break-word',
                      overflowWrap: 'anywhere',
                      whiteSpace: 'pre-wrap',
                    }}>
                      {currentAuto.sampleResponse}
                    </div>
                  </div>
                </div>

                {/* 3 Metrics Cards */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
                  gap: '10px',
                  width: '100%',
                  boxSizing: 'border-box',
                }}>
                  {/* Metric 1 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(239,68,68,0.18)',
                    borderRadius: '14px',
                    padding: '12px 14px',
                    minWidth: 0,
                    boxSizing: 'border-box',
                  }}>
                    <div style={{ fontSize: '11px', color: '#A1A1AA' }}>
                      {currentAuto.baseMetrics.metric1.label}
                    </div>
                    <div style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      marginTop: '3px',
                      color: '#FFFFFF',
                    }}>
                      {(currentAuto.baseMetrics.metric1.prefix || '') + metric1Val.toLocaleString() + (currentAuto.baseMetrics.metric1.suffix || '')}
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#EF4444', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>▲ Live</span>
                      <span style={{ color: '#71717A' }}>• synced</span>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(239,68,68,0.18)',
                    borderRadius: '14px',
                    padding: '12px 14px',
                    minWidth: 0,
                    boxSizing: 'border-box',
                  }}>
                    <div style={{ fontSize: '11px', color: '#A1A1AA' }}>
                      {currentAuto.baseMetrics.metric2.label}
                    </div>
                    <div style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      marginTop: '3px',
                      color: '#FFFFFF',
                    }}>
                      {(currentAuto.baseMetrics.metric2.prefix || '') + metric2Val.toLocaleString() + (currentAuto.baseMetrics.metric2.suffix || '')}
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#F87171', marginTop: '2px' }}>
                      ✓ 100% Accuracy
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(239,68,68,0.18)',
                    borderRadius: '14px',
                    padding: '12px 14px',
                    minWidth: 0,
                    boxSizing: 'border-box',
                  }}>
                    <div style={{ fontSize: '11px', color: '#A1A1AA' }}>
                      {currentAuto.baseMetrics.metric3.label}
                    </div>
                    <div style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      marginTop: '3px',
                      color: '#F87171',
                    }}>
                      {metric3Val} {currentAuto.baseMetrics.metric3.suffix}
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#FEE2E2', marginTop: '2px' }}>
                      ⚡ 24/7 Autopilot
                    </div>
                  </div>
                </div>

                {/* Real-time Activity Feed / Ticker */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(239,68,68,0.08)',
                  border: '1px solid rgba(239,68,68,0.22)',
                  borderRadius: '12px',
                  padding: '9px 12px',
                  fontSize: '11.5px',
                  color: '#FEE2E2',
                  minWidth: 0,
                  width: '100%',
                  boxSizing: 'border-box',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#EF4444',
                    boxShadow: '0 0 10px #EF4444',
                    flexShrink: 0,
                  }} />
                  <span style={{ fontWeight: 600, color: '#FFFFFF', flexShrink: 0 }}>Activity:</span>
                  <span style={{ color: '#FCA5A5', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0, flex: 1 }}>
                    {currentAuto.liveEvent}
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Hardware Data Conduit connecting Hero Dashboard directly into Tools Marquee */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            height: '42px',
            position: 'relative',
            zIndex: 3,
          }}>
            <div style={{
              width: '2px',
              height: '100%',
              background: 'linear-gradient(180deg, #EF4444, rgba(239, 68, 68, 0.2))',
              boxShadow: '0 0 12px rgba(239, 68, 68, 0.9)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '0px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#EF4444',
              boxShadow: '0 0 14px #EF4444, 0 0 24px #EF4444',
            }} />
          </div>

        </div>

      </div>
    </div>
  );
}