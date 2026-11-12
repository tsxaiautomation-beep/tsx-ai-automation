import React from 'react';

export function BeforeAfter() {
  const withoutPoints = [
    'Replying to every enquiry by hand',
    'Copying data between apps and sheets',
    'Leads forgotten in a crowded inbox',
    'Reports built manually at month end',
    'Customers waiting for a reply after hours',
  ];

  const withPoints = [
    'Instant replies, day and night',
    'Data flows between your apps by itself',
    'Every lead followed up automatically',
    'Reports delivered on schedule',
    'Your team focuses on growth, not busywork',
  ];

  return (
    <div id="compare" style={{
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '80px 20px',
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
          WHY AUTOMATE
        </div>
        <h2 style={{
          margin: 0,
          fontFamily: "'Sora',sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(28px, 4.5vw, 50px)',
          lineHeight: 1.15,
          letterSpacing: '-1.2px',
        }}>
          Stop doing by hand what <span style={{ color: '#A78BFA' }}>AI can do for you</span>
        </h2>
      </div>

      <div style={{
        marginTop: '48px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        {/* Without Automation */}
        <div style={{
          flex: '1 1 340px',
          minWidth: 0,
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: '26px',
          padding: '36px 30px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '20px', color: '#A8A3C2' }}>
            Without automation
          </div>
          {withoutPoints.map((pt, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'center', color: '#B7B2D1', fontSize: '16px', lineHeight: 1.4 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7F7A9C" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" style={{ flex: 'none' }}>
                <path d="M6 6l12 12M18 6L6 18"/>
              </svg>
              <span>{pt}</span>
            </div>
          ))}
        </div>

        {/* With TSX AI Automation */}
        <div style={{
          flex: '1 1 340px',
          minWidth: 0,
          position: 'relative',
          background: 'linear-gradient(160deg,rgba(139,92,246,0.26),rgba(109,40,217,0.08))',
          border: '1px solid rgba(167,139,250,0.55)',
          borderRadius: '26px',
          padding: '36px 30px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 30px 100px rgba(109,40,217,0.35)',
        }}>
          <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '20px', color: '#F5F3FF' }}>
            With TSX AI Automation
          </div>
          {withPoints.map((pt, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'center', color: '#F5F3FF', fontSize: '16px', lineHeight: 1.4 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none' }}>
                <path d="M5 12.5l4.5 4.5L19 7.5"/>
              </svg>
              <span>{pt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <div id="services" style={{ position: 'relative', borderTop: '1px solid rgba(167,139,250,0.12)' }}>
      <div style={{
        position: 'absolute',
        right: '-200px',
        top: '200px',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(closest-side,rgba(124,58,237,0.28),rgba(124,58,237,0))',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
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
            WHAT WE BUILD
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Sora',sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 4.5vw, 50px)',
            lineHeight: 1.15,
            letterSpacing: '-1.2px',
          }}>
            Six automations that give you your time back
          </h2>
          <p style={{ margin: 0, fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.65, color: '#B7B2D1' }}>
            Every project is built around your business. These are the problems we solve most often.
          </p>
        </div>

        <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Row A */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            {/* Card 1: Chatbots */}
            <div style={{
              flex: '3 1 420px',
              minWidth: 0,
              background: 'linear-gradient(180deg,rgba(139,92,246,0.12),rgba(255,255,255,0.02))',
              border: '1px solid rgba(167,139,250,0.22)',
              borderRadius: '26px',
              padding: '32px',
              boxSizing: 'border-box',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              alignItems: 'center',
            }}>
              <div style={{ flex: '1 1 220px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
                  boxShadow: '0 8px 26px rgba(139,92,246,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z"/>
                  </svg>
                </div>
                <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '22px' }}>
                  AI chatbots and assistants
                </h3>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, color: '#B7B2D1' }}>
                  A smart assistant on your website or WhatsApp that answers questions, takes orders and books appointments around the clock.
                </p>
              </div>

              <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                <div style={{ alignSelf: 'flex-end', maxWidth: '90%', background: 'rgba(255,255,255,0.08)', borderRadius: '16px 16px 4px 16px', padding: '12px 14px', lineHeight: 1.45 }}>
                  Hi, do you have availability this week?
                </div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '92%', background: 'linear-gradient(135deg,#7C3AED,#5B21B6)', borderRadius: '16px 16px 16px 4px', padding: '12px 14px', lineHeight: 1.45, color: '#FFFFFF' }}>
                  Yes! I have Tuesday at 3 PM or Thursday at 11 AM. Which works for you?
                </div>
                <div style={{ alignSelf: 'flex-end', maxWidth: '90%', background: 'rgba(255,255,255,0.08)', borderRadius: '16px 16px 4px 16px', padding: '12px 14px', lineHeight: 1.45 }}>
                  Tuesday please
                </div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '92%', background: 'linear-gradient(135deg,#7C3AED,#5B21B6)', borderRadius: '16px 16px 16px 4px', padding: '12px 14px', lineHeight: 1.45, color: '#FFFFFF' }}>
                  Booked! A confirmation is on its way to your email.
                </div>
              </div>
            </div>

            {/* Card 2: Workflow Automation */}
            <div style={{
              flex: '2 1 320px',
              minWidth: 0,
              background: 'linear-gradient(180deg,rgba(139,92,246,0.12),rgba(255,255,255,0.02))',
              border: '1px solid rgba(167,139,250,0.22)',
              borderRadius: '26px',
              padding: '32px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
                boxShadow: '0 8px 26px rgba(139,92,246,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M6 8.5v3a3 3 0 0 0 3 3h6.5"/>
                </svg>
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '22px' }}>
                Workflow automation
              </h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, color: '#B7B2D1' }}>
                We connect your apps so data moves by itself. Forms, spreadsheets, invoices and approvals no longer need manual work.
              </p>
              <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '13px' }}>
                <span style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '8px', padding: '8px 12px' }}>Form</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M14 6l6 6-6 6"/></svg>
                <span style={{ background: 'rgba(139,92,246,0.3)', border: '1px solid #8B5CF6', borderRadius: '8px', padding: '8px 12px' }}>AI</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M14 6l6 6-6 6"/></svg>
                <span style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '8px', padding: '8px 12px' }}>Sheet</span>
              </div>
            </div>
          </div>

          {/* Row B */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            {/* Card 3: Lead Gen */}
            <div style={{
              flex: '2 1 320px',
              minWidth: 0,
              background: 'linear-gradient(180deg,rgba(139,92,246,0.12),rgba(255,255,255,0.02))',
              border: '1px solid rgba(167,139,250,0.22)',
              borderRadius: '26px',
              padding: '32px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
                boxShadow: '0 8px 26px rgba(139,92,246,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>
                </svg>
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '22px' }}>
                Lead generation and CRM
              </h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, color: '#B7B2D1' }}>
                Capture, qualify and follow up with leads automatically, so no enquiry is forgotten and your pipeline stays organised.
              </p>
              <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '10px', padding: '10px 14px' }}>New lead</div>
                <div style={{ background: 'rgba(139,92,246,0.22)', borderRadius: '10px', padding: '10px 14px', width: '82%' }}>Qualified by AI</div>
                <div style={{ background: 'linear-gradient(90deg,#7C3AED,#5B21B6)', borderRadius: '10px', padding: '10px 14px', width: '64%' }}>Call booked</div>
              </div>
            </div>

            {/* Card 4: Email Automation */}
            <div style={{
              flex: '3 1 420px',
              minWidth: 0,
              background: 'linear-gradient(180deg,rgba(139,92,246,0.12),rgba(255,255,255,0.02))',
              border: '1px solid rgba(167,139,250,0.22)',
              borderRadius: '26px',
              padding: '32px',
              boxSizing: 'border-box',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              alignItems: 'center',
            }}>
              <div style={{ flex: '1 1 220px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
                  boxShadow: '0 8px 26px rgba(139,92,246,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>
                  </svg>
                </div>
                <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '22px' }}>
                  Email and support automation
                </h3>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, color: '#B7B2D1' }}>
                  AI sorts incoming messages, drafts replies and sends tricky cases to the right person on your team.
                </p>
              </div>

              <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px 14px' }}>
                  <span>Order status question</span>
                  <span style={{ fontSize: '12px', color: '#DDD6FE', background: 'rgba(139,92,246,0.3)', borderRadius: '999px', padding: '3px 10px', flex: 'none' }}>Reply drafted</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px 14px' }}>
                  <span>Quote request</span>
                  <span style={{ fontSize: '12px', color: '#DDD6FE', background: 'rgba(139,92,246,0.3)', borderRadius: '999px', padding: '3px 10px', flex: 'none' }}>Sent to sales</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px 14px' }}>
                  <span>Invoice copy</span>
                  <span style={{ fontSize: '12px', color: '#DDD6FE', background: 'rgba(139,92,246,0.3)', borderRadius: '999px', padding: '3px 10px', flex: 'none' }}>Auto-replied</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row C */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            {/* Card 5: Data Extraction */}
            <div style={{
              flex: '3 1 420px',
              minWidth: 0,
              background: 'linear-gradient(180deg,rgba(139,92,246,0.12),rgba(255,255,255,0.02))',
              border: '1px solid rgba(167,139,250,0.22)',
              borderRadius: '26px',
              padding: '32px',
              boxSizing: 'border-box',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              alignItems: 'center',
            }}>
              <div style={{ flex: '1 1 220px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
                  boxShadow: '0 8px 26px rgba(139,92,246,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3"/>
                  </svg>
                </div>
                <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '22px' }}>
                  Data extraction and reports
                </h3>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, color: '#B7B2D1' }}>
                  Pull information from documents, emails and websites, then turn it into clean reports you can read at a glance.
                </p>
              </div>

              <div style={{ flex: '1 1 240px', minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '140px', padding: '0 4px' }}>
                  <div style={{ flex: 1, height: '38%', background: 'rgba(139,92,246,0.35)', borderRadius: '8px 8px 0 0' }} />
                  <div style={{ flex: 1, height: '55%', background: 'rgba(139,92,246,0.45)', borderRadius: '8px 8px 0 0' }} />
                  <div style={{ flex: 1, height: '48%', background: 'rgba(139,92,246,0.55)', borderRadius: '8px 8px 0 0' }} />
                  <div style={{ flex: 1, height: '72%', background: 'rgba(139,92,246,0.7)', borderRadius: '8px 8px 0 0' }} />
                  <div style={{ flex: 1, height: '64%', background: 'rgba(139,92,246,0.85)', borderRadius: '8px 8px 0 0' }} />
                  <div style={{ flex: 1, height: '92%', background: 'linear-gradient(180deg,#A78BFA,#6D28D9)', borderRadius: '8px 8px 0 0', boxShadow: '0 0 28px rgba(139,92,246,0.5)' }} />
                </div>
                <div style={{ marginTop: '12px', fontSize: '12px', color: '#A8A3C2', textAlign: 'center' }}>
                  Weekly report (sample)
                </div>
              </div>
            </div>

            {/* Card 6: Custom Integrations */}
            <div style={{
              flex: '2 1 320px',
              minWidth: 0,
              background: 'linear-gradient(180deg,rgba(139,92,246,0.12),rgba(255,255,255,0.02))',
              border: '1px solid rgba(167,139,250,0.22)',
              borderRadius: '26px',
              padding: '32px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
                boxShadow: '0 8px 26px rgba(139,92,246,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>
                </svg>
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: '22px' }}>
                Custom AI integrations
              </h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, color: '#B7B2D1' }}>
                Need something specific? We build tailored AI tools and API connections that fit how your business already works.
              </p>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '13px' }}>
                <span style={{ border: '1px solid rgba(167,139,250,0.35)', borderRadius: '999px', padding: '7px 14px' }}>APIs</span>
                <span style={{ border: '1px solid rgba(167,139,250,0.35)', borderRadius: '999px', padding: '7px 14px' }}>Webhooks</span>
                <span style={{ border: '1px solid rgba(167,139,250,0.35)', borderRadius: '999px', padding: '7px 14px' }}>Custom apps</span>
                <span style={{ border: '1px solid rgba(167,139,250,0.35)', borderRadius: '999px', padding: '7px 14px' }}>AI agents</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

