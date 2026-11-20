import React from 'react';

export function BeforeAfter() {
  const withoutPoints = [
    'Replying to customer queries manually after hours & losing hot buyers',
    'Copying leads by hand between messy spreadsheets & CRM',
    'Missed sales opportunities sitting cold in unread WhatsApp inboxes',
    'Manual reports compiled late at week/month end with human errors',
    'High staff payroll spent on repetitive, robotic data entry',
  ];

  const withPoints = [
    'Instant human-like replies in < 3s, 24 hours a day, 7 days a week',
    'Customer inquiries auto-qualified and synced to CRM live in real-time',
    'Every single lead nurtured with tailored automated WhatsApp follow-ups',
    'Executive PDF digests synthesized and delivered straight to your phone',
    'Your team focuses 100% on high-ticket sales, meetings & scaling revenue',
  ];

  return (
    <div id="compare" style={{
      maxWidth: '1240px',
      margin: '0 auto',
      padding: 'clamp(56px, 8vw, 96px) 20px',
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
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontSize: '11.5px',
          fontWeight: 700,
          color: '#EF4444',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
          WHY AUTOMATE WITH HTM AI Automation
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
        </div>
        <h2 style={{
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(26px, 4.5vw, 50px)',
          lineHeight: 1.15,
          letterSpacing: '-1.2px',
          color: '#FFFFFF',
        }}>
          Stop doing by hand what <span style={{ background: 'linear-gradient(180deg,#FFFFFF,#EF4444)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>AI can do for you</span>
        </h2>
        <p style={{ margin: 0, fontSize: 'clamp(14px, 1.8vw, 17px)', lineHeight: 1.65, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          See the tangible operational difference between manual chaos and a streamlined HTM AI Automation automated engine.
        </p>
      </div>

      <div style={{
        marginTop: '52px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        {/* Without Automation */}
        <div style={{
          flex: '1 1 340px',
          minWidth: 0,
          background: 'linear-gradient(155deg, rgba(16, 14, 22, 0.75) 0%, rgba(9, 8, 13, 0.85) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '26px',
          padding: '36px 30px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
          position: 'relative',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '16px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#9CA3AF', letterSpacing: '-0.3px' }}>
              Without Automation
            </div>
            <span style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#71717A', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '999px' }}>
              Manual Bottlenecks
            </span>
          </div>
          {withoutPoints.map((pt, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', color: '#9CA3AF', fontSize: '15px', lineHeight: 1.5 }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18"/>
                </svg>
              </div>
              <span>{pt}</span>
            </div>
          ))}
        </div>

        {/* With HTM AI Automation */}
        <div style={{
          flex: '1 1 340px',
          minWidth: 0,
          position: 'relative',
          background: 'linear-gradient(155deg, rgba(239, 68, 68, 0.16) 0%, rgba(13, 10, 18, 0.95) 75%)',
          border: '1px solid rgba(239, 68, 68, 0.45)',
          borderRadius: '26px',
          padding: '36px 30px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 24px 80px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        }}>
          {/* Specular Top Glow */}
          <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, #EF4444, transparent)', pointerEvents: 'none' }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(239,68,68,0.25)', paddingBottom: '16px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '20px', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '-0.3px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
              With HTM AI Automation
            </div>
            <span style={{ fontSize: '10.5px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#4ADE80', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', padding: '4px 10px', borderRadius: '999px' }}>
              ● 24/7 Autopilot
            </span>
          </div>

          {withPoints.map((pt, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', color: '#F3F4F6', fontSize: '15px', lineHeight: 1.5 }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(21,128,61,0.4))', border: '1px solid rgba(34,197,94,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', boxShadow: '0 0 10px rgba(34,197,94,0.3)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5"/>
                </svg>
              </div>
              <span style={{ fontWeight: 500 }}>{pt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const cardStyle = {
    background: 'linear-gradient(145deg, rgba(16, 14, 24, 0.88) 0%, rgba(9, 8, 14, 0.96) 100%)',
    border: '1px solid rgba(239, 68, 68, 0.22)',
    borderRadius: '26px',
    padding: 'clamp(24px, 3.5vw, 36px)',
    boxSizing: 'border-box',
    boxShadow: '0 18px 45px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
    backdropFilter: 'blur(16px)',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative',
    overflow: 'hidden',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.6)';
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = '0 26px 70px rgba(220, 38, 38, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.12)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.22)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 18px 45px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.06)';
  };

  return (
    <div id="services" style={{ position: 'relative', borderTop: '1px solid rgba(239,68,68,0.15)' }}>
      {/* Dynamic Keyframe Animations for Showcase Elements */}
      <style>{`
        @keyframes htmTypingBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes htmDashMove {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes htmCursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes htmWaveBar {
          0%, 100% { height: 6px; }
          50% { height: 26px; }
        }
        @keyframes htmPulseRings {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
      `}</style>

      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        right: '-180px',
        top: '150px',
        width: '650px',
        height: '650px',
        background: 'radial-gradient(closest-side, rgba(220, 38, 38, 0.18), rgba(0, 0, 0, 0))',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: 'clamp(64px, 8vw, 100px) 20px',
        boxSizing: 'border-box',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '820px',
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
            COMPLETE AI AUTOMATION SUITE
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(26px, 4.5vw, 50px)',
            lineHeight: 1.15,
            letterSpacing: '-1.2px',
            color: '#FFFFFF',
          }}>
            Autonomous systems that <span style={{ background: 'linear-gradient(180deg,#FFFFFF,#EF4444)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>scale your entire enterprise</span>
          </h2>
          <p style={{ margin: 0, fontSize: 'clamp(14.5px, 1.8vw, 17px)', lineHeight: 1.65, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            From human-sounding AI phone agents and WhatsApp bots to full-scale business operations, cold email, and custom ERPs—engineered turnkey by HTM AI Automation.
          </p>
        </div>

        {/* 9 Grid Cards */}
        <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '26px' }}>
          
          {/* ============================================================== */}
          {/* ROW 1: Card 1 (AI Voice Agent) + Card 2 (AI WhatsApp Bot)      */}
          {/* ============================================================== */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '26px' }}>
            
            {/* ---------------- CARD 1: AI Voice Agents & Autonomous Phone Calling (NEW) ---------------- */}
            <div
              style={{ ...cardStyle, flex: '3 1 480px', minWidth: 0, display: 'flex', flexWrap: 'wrap', gap: '26px', alignItems: 'stretch' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Left Column */}
              <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                    boxShadow: '0 8px 26px rgba(239,68,68,0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {/* Headset / Voice Icon */}
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', fontWeight: 800, color: '#4ADE80', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '999px', padding: '2px 8px', marginBottom: '8px' }}>
                      ● NEXT-GEN AUDIO AI
                    </div>
                    <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '22px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                      AI Voice Agents &amp; Phone Calling
                    </h3>
                    <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Human-sounding AI voice callers that handle inbound customer support, qualify leads, confirm appointments, and make outbound follow-ups with natural Urdu &amp; English accents.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#D1D5DB' }}>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                    <span>&lt; 600ms Conversational Latency (Zero robotic lag)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#D1D5DB' }}>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                    <span>Speaks fluent Roman Urdu, Urdu &amp; English naturally</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#D1D5DB' }}>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                    <span>Handles 500+ simultaneous phone calls with instant CRM sync</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Voice Call Terminal */}
              <div style={{
                flex: '1.2 1 280px',
                minWidth: 0,
                background: '#0B0E14',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}>
                {/* Header */}
                <div style={{
                  background: 'linear-gradient(180deg, #161B24 0%, #10141B 100%)',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 10px #22C55E' }} />
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FFFFFF' }}>LIVE VOICE CALL (01:24)</span>
                  </div>
                  <span style={{ fontSize: '10.5px', color: '#EF4444', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '6px', padding: '2px 8px', fontWeight: 700 }}>
                    520ms Latency
                  </span>
                </div>

                {/* Animated Soundwave Visualizer */}
                <div style={{ padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: '14px', background: 'radial-gradient(ellipse at center, rgba(19,25,35,0.9) 0%, #0A0D12 100%)', flex: 1 }}>
                  
                  {/* Waveform graphic */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', height: '42px', background: 'rgba(0,0,0,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', padding: '0 10px' }}>
                    {[12, 24, 18, 34, 20, 28, 14, 38, 26, 18, 30, 22, 36, 16, 28, 14].map((h, i) => (
                      <span
                        key={i}
                        style={{
                          width: '4px',
                          height: `${h}px`,
                          borderRadius: '999px',
                          background: 'linear-gradient(180deg, #EF4444, #B91C1C)',
                          boxShadow: '0 0 8px rgba(239,68,68,0.4)',
                          animation: 'htmWaveBar 1.2s infinite ease-in-out',
                          animationDelay: `${i * 0.07}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Real-time Call Transcript */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '8px 10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ color: '#9CA3AF', fontWeight: 700 }}>Caller (Customer): </span>
                      <span style={{ color: '#E5E7EB' }}>"Assalam o Alaikum, mujhe commercial plot inquiry ke liye call karni thi."</span>
                    </div>

                    <div style={{ background: 'rgba(239,68,68,0.14)', borderRadius: '10px', padding: '8px 10px', border: '1px solid rgba(239,68,68,0.35)' }}>
                      <span style={{ color: '#F87171', fontWeight: 800 }}>HTM AI Automation Voice AI: </span>
                      <span style={{ color: '#FFFFFF' }}>"Walaikum Assalam! Absolutely, 500 sq-yd inventory available hai. Kya kal 4 PM viewing schedule karein?"</span>
                    </div>
                  </div>

                  {/* Outcome summary bar */}
                  <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '7px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: '#4ADE80' }}>
                    <span>🎯 Meeting Locked: Kal 4 PM</span>
                    <span>✓ Audio &amp; CRM Synced</span>
                  </div>

                </div>
              </div>
            </div>

            {/* ---------------- CARD 2: AI Chatbots & 24/7 Assistants (Interactive WhatsApp Business UI) ---------------- */}
            <div
              style={{ ...cardStyle, flex: '2 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '18px', justifyContent: 'space-between' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                  boxShadow: '0 8px 26px rgba(239,68,68,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z"/>
                  </svg>
                </div>
                <h3 style={{ margin: '14px 0 0 0', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '22px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                  AI Chatbots &amp; 24/7 Assistants
                </h3>
                <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Official Meta WhatsApp Cloud API bots that converse naturally in Roman Urdu &amp; English, qualify hot buyers, and auto-book calendar deals round the clock.
                </p>
              </div>

              {/* Compact WhatsApp Preview */}
              <div style={{
                background: '#0B0F14',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px' }}>
                  <span style={{ fontWeight: 800, color: '#FFFFFF' }}>HTM AI Automation WhatsApp AI</span>
                  <span style={{ fontSize: '10.5px', color: '#22C55E', fontWeight: 700 }}>● Online 24/7</span>
                </div>
                <div style={{ background: '#18222D', borderRadius: '10px', padding: '7px 10px', color: '#E5E7EB', alignSelf: 'flex-start', maxWidth: '85%' }}>
                  Assalam o Alaikum! Automation pricing sheet mil sakti hai?
                </div>
                <div style={{ background: 'linear-gradient(135deg,#DC2626,#991B1B)', borderRadius: '10px', padding: '7px 10px', color: '#FFF', alignSelf: 'flex-end', maxWidth: '90%' }}>
                  Walaikum Assalam! Complete sheet dispatch kar di hai. Kal 3 PM call confirm karein? ✓✓
                </div>
                <div style={{ display: 'flex', gap: '6px', alignSelf: 'flex-end' }}>
                  <span style={{ fontSize: '10.5px', background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.5)', color: '#FFF', padding: '3px 8px', borderRadius: '8px', fontWeight: 600 }}>
                    ⚡ Confirm 3 PM Call
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* ROW 2: Card 3 (AI Email Marketing) + Card 4 (All Business ERP)  */}
          {/* ============================================================== */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '26px' }}>

            {/* ---------------- CARD 3: AI Email Marketing & Cold Outreach (NEW) ---------------- */}
            <div
              style={{ ...cardStyle, flex: '2 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '18px', justifyContent: 'space-between' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                  boxShadow: '0 8px 26px rgba(239,68,68,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {/* Mail / Outreach Icon */}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3 style={{ margin: '14px 0 0 0', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '22px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                  AI Email Marketing &amp; Cold Outreach
                </h3>
                <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Autonomous personalized email engines with AI copywriting, automated inbox warm-up, smart follow-up sequences, and 99%+ deliverability.
                </p>
              </div>

              {/* Outreach Metrics & Campaign Console */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                borderRadius: '18px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: '#EF4444' }}>
                  <span>● AI OUTREACH DISPATCHER</span>
                  <span style={{ color: '#4ADE80' }}>99.2% Deliverability</span>
                </div>

                {/* Subject preview */}
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '8px 12px', fontSize: '11.5px', color: '#D1D5DB', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ color: '#9CA3AF', fontSize: '10px' }}>SUBJECT:</div>
                  <div style={{ color: '#FFFFFF', fontWeight: 600 }}>Quick question regarding your sales pipeline, [FirstName]</div>
                </div>

                {/* Metrics 3-box */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '8px 4px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: '#FFFFFF' }}>12,450</div>
                    <div style={{ fontSize: '9.5px', color: '#9CA3AF' }}>Emails Sent</div>
                  </div>
                  <div style={{ background: 'rgba(34,197,94,0.08)', borderRadius: '8px', padding: '8px 4px', border: '1px solid rgba(34,197,94,0.25)' }}>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: '#4ADE80' }}>68.4%</div>
                    <div style={{ fontSize: '9.5px', color: '#4ADE80' }}>Open Rate</div>
                  </div>
                  <div style={{ background: 'rgba(239,68,68,0.1)', borderRadius: '8px', padding: '8px 4px', border: '1px solid rgba(239,68,68,0.3)' }}>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: '#F87171' }}>24.2%</div>
                    <div style={{ fontSize: '9.5px', color: '#FCA5A5' }}>Warm Replies</div>
                  </div>
                </div>

                <div style={{ fontSize: '11px', color: '#9CA3AF', textAlign: 'center' }}>
                  ✓ Warm replies instantly pushed to WhatsApp &amp; CRM
                </div>
              </div>
            </div>

            {/* ---------------- CARD 4: All Business Automation & Custom ERP (NEW) ---------------- */}
            <div
              style={{ ...cardStyle, flex: '3 1 480px', minWidth: 0, display: 'flex', flexWrap: 'wrap', gap: '26px', alignItems: 'stretch' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Left Column */}
              <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                    boxShadow: '0 8px 26px rgba(239,68,68,0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {/* Enterprise Matrix Icon */}
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                      <line x1="6" y1="6" x2="6.01" y2="6"/>
                      <line x1="6" y1="18" x2="6.01" y2="18"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', fontWeight: 800, color: '#EF4444', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '999px', padding: '2px 8px', marginBottom: '8px' }}>
                      ● FULL ENTERPRISE AUTOPILOT
                    </div>
                    <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '22px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                      All Business Automation &amp; Custom ERP
                    </h3>
                    <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Unify every department of your business—sales, inventory, accounting, HR, and fulfillment—into one automated autopilot nervous system with zero double-entry.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#D1D5DB' }}>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                    <span>Live Stock Sync between Shopify, Amazon &amp; Physical Store</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#D1D5DB' }}>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                    <span>Automated Staff Onboarding, Attendance &amp; Payroll records</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#D1D5DB' }}>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                    <span>Daily 8:00 AM Executive 360° P&amp;L Digest sent to WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Department Autopilot Matrix */}
              <div style={{
                flex: '1.2 1 280px',
                minWidth: 0,
                background: '#0B0D13',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#EF4444', letterSpacing: '1px' }}>● ENTERPRISE NERVOUS SYSTEM</span>
                  <span style={{ fontSize: '10.5px', color: '#4ADE80', fontWeight: 700 }}>100% Autopilot</span>
                </div>

                {/* 4 Operations Hubs Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '10px' }}>
                    <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#FFFFFF' }}>📦 Inventory &amp; POS</div>
                    <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>Shopify ↔ POS Real-time Sync</div>
                    <div style={{ fontSize: '9.5px', color: '#4ADE80', marginTop: '4px', fontWeight: 700 }}>● 0 Inventory Discrepancy</div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '10px' }}>
                    <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#FFFFFF' }}>👥 HR &amp; Staff Ops</div>
                    <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>Auto Contracts &amp; Payroll</div>
                    <div style={{ fontSize: '9.5px', color: '#4ADE80', marginTop: '4px', fontWeight: 700 }}>● Automated Check-in</div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '10px' }}>
                    <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#FFFFFF' }}>🎯 Sales Pipeline</div>
                    <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>Meta &amp; Web Lead Ingestion</div>
                    <div style={{ fontSize: '9.5px', color: '#4ADE80', marginTop: '4px', fontWeight: 700 }}>● 3-Second Lead Routing</div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '10px' }}>
                    <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#FFFFFF' }}>📊 Executive P&amp;L</div>
                    <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>Direct to Owner's Phone</div>
                    <div style={{ fontSize: '9.5px', color: '#4ADE80', marginTop: '4px', fontWeight: 700 }}>● 8:00 AM WhatsApp Digest</div>
                  </div>
                </div>

                <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '8px 10px', textAlign: 'center', fontSize: '11px', color: '#FEE2E2', fontWeight: 600 }}>
                  ⚡ Connected via custom webhooks with your exact local software
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* ROW 3: Card 5 (Workflow Automation) + Card 6 (Lead Gen)        */}
          {/* ============================================================== */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '26px' }}>

            {/* ---------------- CARD 5: Workflow & CRM Automation (Live Circuit Engine) ---------------- */}
            <div
              style={{ ...cardStyle, flex: '2 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '18px', justifyContent: 'space-between' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                  boxShadow: '0 8px 26px rgba(239,68,68,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M6 8.5v3a3 3 0 0 0 3 3h6.5"/>
                  </svg>
                </div>
                <h3 style={{ margin: '14px 0 0 0', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '22px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                  Workflow &amp; CRM Automation
                </h3>
                <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  We connect your fragmented business apps so leads, forms, spreadsheets, and invoices sync automatically with zero manual labor.
                </p>
              </div>

              {/* Visual Interactive Pipeline Circuit */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                borderRadius: '18px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: '#EF4444' }}>
                  <span>● CIRCUIT FLOW ACTIVE</span>
                  <span style={{ color: '#4ADE80', background: 'rgba(34,197,94,0.12)', padding: '2px 8px', borderRadius: '6px' }}>0.28s Sync</span>
                </div>

                {/* 3 Step Nodes with Laser Connector Line */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
                  {/* Node 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '10px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg>
                      </div>
                      <div>
                        <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#FFFFFF' }}>Website &amp; Meta Ingestion</div>
                        <div style={{ fontSize: '11px', color: '#9CA3AF' }}>Form lead captured</div>
                      </div>
                    </div>
                    <span style={{ fontSize: '10.5px', color: '#4ADE80', fontWeight: 700 }}>● INGESTED</span>
                  </div>

                  {/* Laser connector SVG */}
                  <div style={{ display: 'flex', justifyContent: 'center', height: '14px', alignItems: 'center' }}>
                    <svg width="100%" height="14" style={{ overflow: 'visible' }}>
                      <line x1="50%" y1="0" x2="50%" y2="14" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" style={{ animation: 'htmDashMove 1s linear infinite' }} />
                    </svg>
                  </div>

                  {/* Node 2 */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(90deg, rgba(239,68,68,0.2) 0%, rgba(185,28,28,0.1) 100%)', border: '1px solid rgba(239,68,68,0.5)', borderRadius: '12px', padding: '10px 14px', boxShadow: '0 0 16px rgba(239,68,68,0.15)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px #EF4444' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                      </div>
                      <div>
                        <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#FFFFFF' }}>HTM AI Automation Brain</div>
                        <div style={{ fontSize: '11px', color: '#FEE2E2' }}>Auto-qualified &amp; scored</div>
                      </div>
                    </div>
                    <span style={{ fontSize: '10.5px', color: '#FFFFFF', background: '#DC2626', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>AI PROCESSED</span>
                  </div>

                  {/* Laser connector SVG */}
                  <div style={{ display: 'flex', justifyContent: 'center', height: '14px', alignItems: 'center' }}>
                    <svg width="100%" height="14" style={{ overflow: 'visible' }}>
                      <line x1="50%" y1="0" x2="50%" y2="14" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" style={{ animation: 'htmDashMove 1s linear infinite' }} />
                    </svg>
                  </div>

                  {/* Node 3 */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '10px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      </div>
                      <div>
                        <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#FFFFFF' }}>HubSpot &amp; Google Sheets</div>
                        <div style={{ fontSize: '11px', color: '#9CA3AF' }}>Deal logged &amp; rep alerted</div>
                      </div>
                    </div>
                    <span style={{ fontSize: '10.5px', color: '#4ADE80', fontWeight: 700 }}>✓ SYNCED</span>
                  </div>
                </div>

                <div style={{ fontSize: '11px', color: '#A1A1AA', textAlign: 'center', paddingTop: '4px' }}>
                  ⚡ 100% Zero Manual Input • 4,820 Events Handled Today
                </div>
              </div>
            </div>

            {/* ---------------- CARD 6: Lead Generation & Funnels (Conversion Funnel Visualizer) ---------------- */}
            <div
              style={{ ...cardStyle, flex: '3 1 480px', minWidth: 0, display: 'flex', flexWrap: 'wrap', gap: '26px', alignItems: 'stretch' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                    boxShadow: '0 8px 26px rgba(239,68,68,0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '22px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                      Lead Generation &amp; Funnels
                    </h3>
                    <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Instant WhatsApp message dispatch within 10 seconds of Meta/Google ad click, turning cold inquiries into hot qualified appointments before competitors reply.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#D1D5DB' }}>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                    <span>Direct Meta &amp; TikTok Lead Form Webhook Ingestion</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#D1D5DB' }}>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                    <span>Pre-qualifies budget, timeline &amp; decision-maker authority</span>
                  </div>
                </div>
              </div>

              {/* Funnel visualizer */}
              <div style={{
                flex: '1.2 1 280px',
                minWidth: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                borderRadius: '18px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: '#EF4444' }}>
                  <span>● FUNNEL CONVERSION ROI</span>
                  <span style={{ color: '#4ADE80', fontWeight: 700 }}>+3.8x Yield</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#D1D5DB' }}>
                    <span>1. Meta Ad Click / Visitor</span>
                    <span style={{ fontWeight: 700, color: '#FFFFFF' }}>1,840 clicks</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #4B5563, #6B7280)', borderRadius: '999px' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#FCA5A5' }}>
                    <span>2. Instant AI WhatsApp Dispatch (&lt;5s)</span>
                    <span style={{ fontWeight: 700, color: '#FFFFFF' }}>1,520 (82.6%)</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: '82%', height: '100%', background: 'linear-gradient(90deg, #DC2626, #EF4444)', borderRadius: '999px' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#F87171' }}>
                    <span>3. Autonomous AI Qualification</span>
                    <span style={{ fontWeight: 700, color: '#FFFFFF' }}>980 Qualified</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: '53%', height: '100%', background: 'linear-gradient(90deg, #B91C1C, #EF4444)', borderRadius: '999px' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#4ADE80' }}>
                    <span>4. Sales Call Booked &amp; Closed</span>
                    <span style={{ fontWeight: 800, color: '#4ADE80' }}>264 Closed Deals 🚀</span>
                  </div>
                  <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: '36%', height: '100%', background: 'linear-gradient(90deg, #10B981, #22C55E)', borderRadius: '999px', boxShadow: '0 0 12px #22C55E' }} />
                  </div>
                </div>

                <div style={{ fontSize: '11px', color: '#9CA3AF', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '6px 10px', textAlign: 'center', marginTop: '4px' }}>
                  ⚡ Lead Response Time dropped from 4 hours to <b style={{ color: '#EF4444' }}>4 seconds</b>
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* ROW 4: Card 7 (Web Development) + Card 8 (Finance Analytics)   */}
          {/* ============================================================== */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '26px' }}>

            {/* ---------------- CARD 7: Web Development & Platforms (Silicon Valley Browser + Lighthouse) ---------------- */}
            <div
              style={{ ...cardStyle, flex: '2 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '18px', justifyContent: 'space-between' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                  boxShadow: '0 8px 26px rgba(239,68,68,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"/>
                  </svg>
                </div>
                <h3 style={{ margin: '14px 0 0 0', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '22px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                  Web Development &amp; Platforms
                </h3>
                <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Ultra-fast, responsive web platforms and custom client portals engineered with React 19, Next.js 15, and integrated with AI backends &amp; payment gateways.
                </p>
              </div>

              {/* Lighthouse Score Mini-Bar */}
              <div style={{ background: '#0B0D13', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#FFFFFF' }}>LIGHTHOUSE 100/100</span>
                  <span style={{ fontSize: '10.5px', color: '#10B981', fontWeight: 800 }}>PERFECT SCORE</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', textAlign: 'center' }}>
                  {['Perf: 100', 'Access: 100', 'SEO: 100', 'Best: 100'].map((item, idx) => (
                    <div key={idx} style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '8px', padding: '6px 2px', fontSize: '10.5px', fontWeight: 700, color: '#10B981' }}>
                      {item}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '10.5px', color: '#9CA3AF', display: 'flex', justifyContent: 'space-between', paddingTop: '4px' }}>
                  <span>FCP: <b style={{ color: '#10B981' }}>0.2s</b></span>
                  <span>Edge CDN: <b style={{ color: '#10B981' }}>8ms</b></span>
                </div>
              </div>
            </div>

            {/* ---------------- CARD 8: Finance, Invoicing & Analytics (Executive Revenue Digest) ---------------- */}
            <div
              style={{ ...cardStyle, flex: '3 1 480px', minWidth: 0, display: 'flex', flexWrap: 'wrap', gap: '26px', alignItems: 'stretch' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                    boxShadow: '0 8px 26px rgba(239,68,68,0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '22px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                      Finance, Invoicing &amp; Analytics
                    </h3>
                    <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Automate pending invoice chasers, bank reconciliation, and revenue synthesis into clean executive reports without touching Excel.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#D1D5DB' }}>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                    <span>Automated WhatsApp payment link chaser</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#D1D5DB' }}>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                    <span>1-Click bank reconciliation with zero spreadsheets</span>
                  </div>
                </div>
              </div>

              {/* Revenue visualizer */}
              <div style={{
                flex: '1.2 1 280px',
                minWidth: 0,
                background: '#0B0D13',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>MONTHLY RECONCILED REVENUE</div>
                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.5px', marginTop: '2px' }}>
                      PKR 4,850,000
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#10B981', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '999px', padding: '4px 10px' }}>
                    +42.8% ▲ vs Last Mo
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '100px', padding: '0 4px' }}>
                  {[
                    { month: 'Jan', height: '36%', isPeak: false },
                    { month: 'Feb', height: '52%', isPeak: false },
                    { month: 'Mar', height: '46%', isPeak: false },
                    { month: 'Apr', height: '68%', isPeak: false },
                    { month: 'May', height: '76%', isPeak: false },
                    { month: 'Jun', height: '96%', isPeak: true },
                  ].map((col, idx) => (
                    <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '6px' }}>
                      <div
                        style={{
                          width: '100%',
                          height: col.height,
                          background: col.isPeak
                            ? 'linear-gradient(180deg, #EF4444 0%, #991B1B 100%)'
                            : 'rgba(239, 68, 68, 0.35)',
                          borderRadius: '6px 6px 0 0',
                          boxShadow: col.isPeak ? '0 0 20px rgba(239, 68, 68, 0.7)' : 'none',
                        }}
                      />
                      <span style={{ fontSize: '10px', color: col.isPeak ? '#EF4444' : '#9CA3AF', fontWeight: col.isPeak ? 800 : 500 }}>
                        {col.month}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                }}>
                  <span style={{ color: '#E5E7EB' }}>Invoice #1094: <b>PKR 85,000</b> paid</span>
                  <span style={{ color: '#4ADE80', fontWeight: 700 }}>✓ Auto-Reconciled</span>
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* ROW 5: Card 9 (Cloud Solutions & Integrations - Capstone Card)  */}
          {/* ============================================================== */}
          <div
            style={{ ...cardStyle, display: 'flex', flexWrap: 'wrap', gap: '26px', alignItems: 'center' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ flex: '1 1 320px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                boxShadow: '0 8px 26px rgba(239,68,68,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
              </div>
              <div>
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '24px', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                  Cloud Solutions &amp; Secure Integrations
                </h3>
                <p style={{ margin: '8px 0 0 0', fontSize: '14.5px', lineHeight: 1.65, color: '#9CA3AF', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Enterprise backend architectures, MongoDB Atlas, Firebase, and custom secure webhooks connecting your internal databases with military-grade encryption and 99.99% uptime.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px', fontWeight: 600 }}>
                <span style={{ border: '1px solid rgba(239,68,68,0.35)', background: 'rgba(239,68,68,0.08)', borderRadius: '999px', padding: '5px 14px', color: '#FFFFFF' }}>MongoDB Atlas</span>
                <span style={{ border: '1px solid rgba(239,68,68,0.35)', background: 'rgba(239,68,68,0.08)', borderRadius: '999px', padding: '5px 14px', color: '#FFFFFF' }}>Custom Webhooks</span>
                <span style={{ border: '1px solid rgba(239,68,68,0.35)', background: 'rgba(239,68,68,0.08)', borderRadius: '999px', padding: '5px 14px', color: '#FFFFFF' }}>Meta Cloud API</span>
                <span style={{ border: '1px solid rgba(239,68,68,0.35)', background: 'rgba(239,68,68,0.08)', borderRadius: '999px', padding: '5px 14px', color: '#FFFFFF' }}>AES-256 SSL</span>
              </div>
            </div>

            {/* 4 Pods Grid for Cloud */}
            <div style={{ flex: '1.2 1 360px', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
              <div style={{ background: '#0B0D13', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#FFFFFF' }}>MongoDB Atlas</span>
                </div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>2.1ms Query Latency</div>
                <div style={{ fontSize: '10px', color: '#10B981', marginTop: '4px', fontWeight: 700 }}>● 100% Up</div>
              </div>

              <div style={{ background: '#0B0D13', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#FFFFFF' }}>WhatsApp Cloud</span>
                </div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>500 msgs/sec Rate</div>
                <div style={{ fontSize: '10px', color: '#10B981', marginTop: '4px', fontWeight: 700 }}>● Tier 1 API</div>
              </div>

              <div style={{ background: '#0B0D13', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#FFFFFF' }}>Custom Webhooks</span>
                </div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>Zero Drop Rate</div>
                <div style={{ fontSize: '10px', color: '#10B981', marginTop: '4px', fontWeight: 700 }}>● 100% Delivered</div>
              </div>

              <div style={{ background: '#0B0D13', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#FFFFFF' }}>AES-256 E2E</span>
                </div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>Encrypted Keys</div>
                <div style={{ fontSize: '10px', color: '#10B981', marginTop: '4px', fontWeight: 700 }}>● Shield Active</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
