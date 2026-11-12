import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';

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
    sampleQuery: 'Incoming Web Enquiry: "Need AI bot for my Shopify store in Karachi"',
    sampleResponse: 'AI Engine: Qualified High-Intent Lead. Synced to CRM & WhatsApp alert dispatched.',
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
    sampleResponse: 'AI Bot: "Walaikum Assalam! Price PKR 4,500 hai with free 2-day delivery across Pakistan."',
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
    sampleResponse: 'AI Chaser: Sent WhatsApp reminder with secure payment link. Receipt auto-logged.',
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
    sampleResponse: 'AI Reporter: PDF digest synthesized: +38% conversion rate, sent to CEO inbox.',
  },
];

export function Hero({ onOpenModal }) {
  const [selectedAutoIndex, setSelectedAutoIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [simCounterDeltas, setSimCounterDeltas] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
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
      setLiveToast({ text: `🧠 Step 2/4: AI Engine analyzing with ${currentAuto.steps[1].title}...`, status: 'running' });
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
      {/* Background Grids & Glows */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '920px',
        backgroundImage: 'linear-gradient(rgba(167,139,250,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,0.07) 1px,transparent 1px)',
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
        background: 'radial-gradient(closest-side,rgba(124,58,237,0.5),rgba(124,58,237,0))',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div className="anim-drift" style={{
        position: 'absolute',
        left: '6%',
        top: '140px',
        width: '440px',
        height: '440px',
        background: 'radial-gradient(closest-side,rgba(168,85,247,0.35),rgba(168,85,247,0))',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div className="anim-drift-rev" style={{
        position: 'absolute',
        right: '4%',
        top: '280px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(closest-side,rgba(99,102,241,0.28),rgba(99,102,241,0))',
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
          border: '1px solid rgba(167,139,250,0.35)',
          background: 'rgba(139,92,246,0.12)',
          borderRadius: '999px',
          padding: '8px 18px',
          fontSize: '13px',
          color: '#DDD6FE',
          fontWeight: 500,
          backdropFilter: 'blur(8px)',
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#A78BFA',
            boxShadow: '0 0 12px #A78BFA',
            display: 'inline-block',
          }} />
          AI automation agency for modern businesses
        </div>

        {/* Headline */}
        <h1 style={{
          margin: '22px auto 0',
          maxWidth: '980px',
          fontFamily: "'Sora',sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(32px, 6vw, 72px)',
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          padding: '0 4px',
        }}>
          Put your business on <span className="anim-shimmer">AI autopilot</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          margin: '20px auto 0',
          maxWidth: '700px',
          fontSize: 'clamp(15px, 2vw, 19px)',
          lineHeight: 1.6,
          color: '#B7B2D1',
          padding: '0 8px',
        }}>
          We build custom AI chatbots, workflows and integrations that reply to customers, capture leads and handle repetitive work for you, day and night.
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
              background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
              boxShadow: '0 14px 44px rgba(139,92,246,0.55)',
              color: '#FFFFFF',
              padding: '16px 32px',
              borderRadius: '14px',
              fontWeight: 600,
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              width: 'min(100%, 300px)',
              transition: 'transform 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Book a free consultation
          </button>

          <a
            href="#live-demo"
            style={{
              border: '1px solid rgba(167,139,250,0.4)',
              background: 'rgba(255,255,255,0.05)',
              color: '#F5F3FF',
              padding: '16px 32px',
              borderRadius: '14px',
              fontWeight: 600,
              fontSize: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'min(100%, 300px)',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#A78BFA'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)'}
          >
            Try Interactive Demo ↓
          </a>
        </div>

        {/* 3 Value Points */}
        <div style={{
          marginTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px 28px',
          fontSize: '14px',
          color: '#A8A3C2',
          padding: '0 8px',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5"/>
            </svg>
            No technical knowledge needed
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5"/>
            </svg>
            Custom-built for you
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5"/>
            </svg>
            Support after launch
          </span>
        </div>

        {/* MOBILE FLOATING BADGES DOCK (Visible on Mobile / Tablet so they don't clip offscreen) */}
        <div className="flex lg:hidden flex-wrap items-center justify-center gap-3 mt-8 max-w-lg mx-auto">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(18,12,38,0.95)',
            border: '1px solid rgba(167,139,250,0.4)',
            borderRadius: '14px',
            padding: '10px 14px',
            boxShadow: '0 8px 24px rgba(109,40,217,0.3)',
            textAlign: 'left',
            flex: '1 1 200px',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
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
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#F5F3FF' }}>New lead captured</div>
              <div style={{ fontSize: '11px', color: '#A8A3C2' }}>Qualified by AI, just now</div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(18,12,38,0.95)',
            border: '1px solid rgba(167,139,250,0.4)',
            borderRadius: '14px',
            padding: '10px 14px',
            boxShadow: '0 8px 24px rgba(109,40,217,0.3)',
            textAlign: 'left',
            flex: '1 1 200px',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
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
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#F5F3FF' }}>Meeting booked</div>
              <div style={{ fontSize: '11px', color: '#A8A3C2' }}>Tuesday, 3:00 PM</div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE WORKING DASHBOARD MOCKUP (LIVE DEMO FOR CLIENTS)  */}
        {/* ============================================================== */}
        <div id="live-demo" style={{
          position: 'relative',
          margin: '52px auto 0',
          maxWidth: '1120px',
          paddingBottom: '24px',
        }}>
          {/* Floating Badge 1 (Top-Right on desktop) */}
          <div className="hidden lg:flex anim-float" style={{
            position: 'absolute',
            right: '-16px',
            top: '-36px',
            zIndex: 10,
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(18,12,38,0.96)',
            border: '1px solid rgba(167,139,250,0.5)',
            borderRadius: '16px',
            padding: '12px 18px',
            boxShadow: '0 20px 60px rgba(109,40,217,0.5)',
            textAlign: 'left',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 8v6M22 11h-6"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#F5F3FF' }}>New lead captured</div>
              <div style={{ fontSize: '12px', color: '#A8A3C2', marginTop: '2px' }}>Qualified by AI, just now</div>
            </div>
          </div>

          {/* Floating Badge 2 (Bottom-Left on desktop) */}
          <div className="hidden lg:flex anim-float-delayed" style={{
            position: 'absolute',
            left: '-16px',
            bottom: '-20px',
            zIndex: 10,
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(18,12,38,0.96)',
            border: '1px solid rgba(167,139,250,0.5)',
            borderRadius: '16px',
            padding: '12px 18px',
            boxShadow: '0 20px 60px rgba(109,40,217,0.5)',
            textAlign: 'left',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#F5F3FF' }}>Meeting booked</div>
              <div style={{ fontSize: '12px', color: '#A8A3C2', marginTop: '2px' }}>Tuesday, 3:00 PM</div>
            </div>
          </div>

          {/* Glow backdrop behind window */}
          <div style={{
            position: 'absolute',
            left: '-10px',
            right: '-10px',
            top: '-10px',
            bottom: '-10px',
            background: 'radial-gradient(closest-side,rgba(139,92,246,0.35),rgba(139,92,246,0))',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          {/* Main Dashboard Window */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            background: '#0E0B1C',
            border: '1px solid rgba(167,139,250,0.32)',
            borderRadius: '24px',
            boxShadow: '0 40px 120px rgba(109,40,217,0.42), 0 0 0 1px rgba(255,255,255,0.05)',
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
              borderBottom: '1px solid rgba(167,139,250,0.18)',
              background: 'rgba(15,11,30,0.85)',
              flexWrap: 'wrap',
              width: '100%',
              boxSizing: 'border-box',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', minWidth: 0 }}>
                <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', opacity: 0.8, display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', opacity: 0.8, display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', opacity: 0.8, display: 'inline-block' }} />
                </div>
                <div style={{ fontSize: '13px', color: '#DDD6FE', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', minWidth: 0 }}>
                  <span>TSX Automation Dashboard</span>
                  <span style={{
                    fontSize: '10px',
                    color: '#10B981',
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.35)',
                    borderRadius: '999px',
                    padding: '2px 8px',
                    fontWeight: 500,
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
                      ? 'rgba(139,92,246,0.25)'
                      : 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
                    border: '1px solid rgba(196,181,253,0.5)',
                    borderRadius: '10px',
                    padding: '8px 14px',
                    color: '#FFFFFF',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    cursor: isSimulating ? 'not-allowed' : 'pointer',
                    boxShadow: isSimulating ? 'none' : '0 4px 18px rgba(139,92,246,0.4)',
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

            {/* LIVE SIMULATION STATUS NOTIFIER (Appears when user clicks Test Workflow Live) */}
            {liveToast && (
              <div style={{
                background: liveToast.status === 'success'
                  ? 'rgba(16,185,129,0.18)'
                  : 'rgba(139,92,246,0.18)',
                borderBottom: `1px solid ${liveToast.status === 'success' ? 'rgba(16,185,129,0.4)' : 'rgba(167,139,250,0.4)'}`,
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12.5px',
                color: liveToast.status === 'success' ? '#A7F3D0' : '#DDD6FE',
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
                    background: liveToast.status === 'success' ? '#10B981' : '#A78BFA',
                    boxShadow: liveToast.status === 'success' ? '0 0 10px #10B981' : '0 0 10px #A78BFA',
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
              
              {/* ============================================================== */}
              {/* LEFT COLUMN: ACTIVE AUTOMATIONS (Clickable Tabs)               */}
              {/* ============================================================== */}
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
                  <div style={{ fontSize: '11px', color: '#A8A3C2', letterSpacing: '1.5px', fontWeight: 700 }}>
                    ACTIVE AUTOMATIONS
                  </div>
                  <span style={{ fontSize: '11px', color: '#8B5CF6' }}>Click to switch</span>
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
                          ? 'linear-gradient(135deg, rgba(139,92,246,0.22), rgba(109,40,217,0.12))'
                          : 'rgba(255,255,255,0.03)',
                        border: isSelected
                          ? '1px solid #8B5CF6'
                          : '1px solid rgba(167,139,250,0.14)',
                        borderRadius: '14px',
                        padding: '12px 14px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        boxShadow: isSelected ? '0 0 20px rgba(139,92,246,0.25)' : 'none',
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
                          background: isSelected ? '#A78BFA' : '#6B7280',
                          boxShadow: isSelected ? '0 0 8px #A78BFA' : 'none',
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
                        color: isSelected ? '#C4B5FD' : '#9CA3AF',
                        background: isSelected ? 'rgba(139,92,246,0.25)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${isSelected ? 'rgba(167,139,250,0.35)' : 'rgba(255,255,255,0.08)'}`,
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

                {/* Micro Help Note for Visitors */}
                <div style={{
                  marginTop: '6px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px dashed rgba(167,139,250,0.2)',
                  borderRadius: '12px',
                  padding: '10px 12px',
                  fontSize: '11.5px',
                  color: '#9CA3AF',
                  lineHeight: 1.5,
                }}>
                  💡 <strong style={{ color: '#C4B5FD' }}>Interactive Client Demo:</strong> Tap any automation above or click <strong style={{ color: '#A78BFA' }}>"Test Workflow Live"</strong> to simulate execution.
                </div>
              </div>

              {/* ============================================================== */}
              {/* RIGHT COLUMN: WORKFLOW STEPS + METRICS + LIVE LOG TICKER       */}
              {/* ============================================================== */}
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
                  border: '1px solid rgba(167,139,250,0.18)',
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
                    <div style={{ fontSize: '11.5px', color: '#C4B5FD', letterSpacing: '1.2px', fontWeight: 700 }}>
                      {currentAuto.workflowTitle}
                    </div>
                    <span style={{ fontSize: '11px', color: '#9CA3AF' }}>
                      Latency: <strong style={{ color: '#10B981' }}>~1.4s</strong>
                    </span>
                  </div>

                  {/* 4 Steps Grid (Responsive 2x2 on Mobile, 4x1 on Desktop, ZERO overflow) */}
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
                              ? 'linear-gradient(135deg, rgba(139,92,246,0.5), rgba(109,40,217,0.35))'
                              : step.isAi
                              ? 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(109,40,217,0.14))'
                              : '#141026',
                            border: isSimActive
                              ? '2px solid #C4B5FD'
                              : step.isAi
                              ? '1px solid #8B5CF6'
                              : '1px solid rgba(167,139,250,0.22)',
                            borderRadius: '14px',
                            padding: '12px 10px',
                            boxShadow: isSimActive
                              ? '0 0 25px rgba(167,139,250,0.6)'
                              : step.isAi
                              ? '0 0 18px rgba(139,92,246,0.2)'
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
                              background: '#F5F3FF',
                              boxShadow: '0 0 10px #FFFFFF',
                            }} />
                          )}

                          <div>
                            <div style={{
                              fontSize: '9px',
                              color: isSimActive ? '#FFFFFF' : step.isAi ? '#DDD6FE' : '#A8A3C2',
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
                            color: isSimActive ? '#EDE9FE' : '#9CA3AF',
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
                    background: '#0B0817',
                    border: '1px solid rgba(167,139,250,0.15)',
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8B5CF6', fontWeight: 600 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }} />
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
                      color: '#C4B5FD',
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      background: 'rgba(139,92,246,0.1)',
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

                {/* 3 Metrics Cards (Dynamic counters update when simulation runs) */}
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
                    border: '1px solid rgba(167,139,250,0.16)',
                    borderRadius: '14px',
                    padding: '12px 14px',
                    minWidth: 0,
                    boxSizing: 'border-box',
                  }}>
                    <div style={{ fontSize: '11px', color: '#A8A3C2' }}>
                      {currentAuto.baseMetrics.metric1.label}
                    </div>
                    <div style={{
                      fontFamily: "'Sora',sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      marginTop: '3px',
                      color: '#FFFFFF',
                    }}>
                      {(currentAuto.baseMetrics.metric1.prefix || '') + metric1Val.toLocaleString() + (currentAuto.baseMetrics.metric1.suffix || '')}
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#10B981', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>▲ Live</span>
                      <span style={{ color: '#6B7280' }}>• synced</span>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(167,139,250,0.16)',
                    borderRadius: '14px',
                    padding: '12px 14px',
                    minWidth: 0,
                    boxSizing: 'border-box',
                  }}>
                    <div style={{ fontSize: '11px', color: '#A8A3C2' }}>
                      {currentAuto.baseMetrics.metric2.label}
                    </div>
                    <div style={{
                      fontFamily: "'Sora',sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      marginTop: '3px',
                      color: '#FFFFFF',
                    }}>
                      {(currentAuto.baseMetrics.metric2.prefix || '') + metric2Val.toLocaleString() + (currentAuto.baseMetrics.metric2.suffix || '')}
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#A78BFA', marginTop: '2px' }}>
                      ✓ 100% Accuracy
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(167,139,250,0.16)',
                    borderRadius: '14px',
                    padding: '12px 14px',
                    minWidth: 0,
                    boxSizing: 'border-box',
                  }}>
                    <div style={{ fontSize: '11px', color: '#A8A3C2' }}>
                      {currentAuto.baseMetrics.metric3.label}
                    </div>
                    <div style={{
                      fontFamily: "'Sora',sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      marginTop: '3px',
                      color: '#C4B5FD',
                    }}>
                      {metric3Val} {currentAuto.baseMetrics.metric3.suffix}
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#DDD6FE', marginTop: '2px' }}>
                      ⚡ 24/7 Autopilot
                    </div>
                  </div>
                </div>

                {/* Real-time Activity Feed / Ticker */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(139,92,246,0.08)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  borderRadius: '12px',
                  padding: '9px 12px',
                  fontSize: '11.5px',
                  color: '#DDD6FE',
                  minWidth: 0,
                  width: '100%',
                  boxSizing: 'border-box',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10B981',
                    boxShadow: '0 0 10px #10B981',
                    flexShrink: 0,
                  }} />
                  <span style={{ fontWeight: 600, color: '#FFFFFF', flexShrink: 0 }}>Activity:</span>
                  <span style={{ color: '#C4B5FD', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0, flex: 1 }}>
                    {currentAuto.liveEvent}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}