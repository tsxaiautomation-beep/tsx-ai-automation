import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

const services = [
  {
    icon: '💬',
    title: 'AI Chatbots & WhatsApp Assistants',
    desc: 'A smart AI assistant on your WhatsApp that answers questions in Roman Urdu & English, takes orders, qualifies leads, and books appointments — 24/7 with instant replies under 10 seconds.',
    chat: [
      { from: 'user', text: 'Assalam o Alaikum! Mujhe price details chahiye.' },
      { from: 'ai', text: 'Walaikum Assalam bhai! Zaroor 🏢\n\nHumari pricing PKR 35,000 se start hoti hai. Aap apni requirement batayein — main aapke liye best package suggest kar sakta hoon. Shall I book a 15-min call? ✅' },
    ],
    badge: 'Most In-Demand',
  },
  {
    icon: '⚙️',
    title: 'Workflow & Operations Automation',
    desc: 'Connect all your apps (WhatsApp, Sheets, Shopify, CRM, ERP) so data flows automatically with zero manual entry. Auto-generate invoices, update inventory, and send daily reports.',
    flow: ['Form / Lead', 'AI Process', 'CRM Update', 'Team Alert'],
    badge: 'Save 40+ Hrs/Week',
  },
  {
    icon: '🎯',
    title: 'Lead Generation & CRM Automation',
    desc: 'Capture leads from Facebook, Instagram, or your website and automatically follow up on WhatsApp within 10 seconds before they go cold. Qualify, book, and sync to your CRM.',
    funnel: ['New Lead', 'Qualified by AI', 'Call Booked'],
    badge: 'High Revenue Lift',
  },
  {
    icon: '📧',
    title: 'Email & Support Automation',
    desc: 'AI sorts incoming messages, drafts replies, and routes complex cases to the right team member. Resolve 78% of support tickets automatically with no human intervention.',
    tags: ['Order Status → Reply Drafted', 'Quote Request → Sent to Sales', 'Invoice Copy → Auto-replied'],
    badge: '78% Auto-Deflection',
  },
  {
    icon: '📊',
    title: 'Data Extraction & Reports',
    desc: 'Pull information from documents, emails, PDFs, and websites — then turn it into clean reports delivered on schedule. AI OCR scans bills and enters data into accounting automatically.',
    badge: 'Zero Manual Entry',
  },
  {
    icon: '🤖',
    title: 'AI Voice Calling Agents',
    desc: 'Human-sounding AI voice agents that answer customer support calls or make outbound follow-up calls for appointments, order confirmations, and delivery notifications.',
    badge: 'Next-Gen AI',
  },
];

const SvgIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z"/>
  </svg>
);

export default function Services({ onSelectService }) {
  return (
    <div id="services" style={{ position: 'relative', borderTop: '1px solid rgba(167,139,250,0.12)' }}>
      {/* BG glow */}
      <div style={{
        position: 'absolute', right: -200, top: 200, width: 700, height: 700,
        background: 'radial-gradient(closest-side,rgba(124,58,237,0.22),rgba(124,58,237,0))',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '100px 24px', boxSizing: 'border-box' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 64px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>WHAT WE BUILD</div>
          <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,52px)', lineHeight: 1.12, letterSpacing: -1 }}>
            Six AI automations that give you your time back
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: '#B7B2D1' }}>
            Every project is custom-built around your business. These are the problems we solve most often for Pakistani and global businesses.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            {/* Large card: Chatbot */}
            <div
              className="service-card" style={{
                flex: '3 1 460px', minWidth: 0,
                background: 'linear-gradient(180deg,rgba(139,92,246,0.12),rgba(255,255,255,0.02))',
                border: '1px solid rgba(167,139,250,0.22)', borderRadius: 26,
                padding: 36, boxSizing: 'border-box',
                display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'center',
              }}>
              <div style={{ flex: '1 1 230px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
                    boxShadow: '0 8px 26px rgba(139,92,246,0.45)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24,
                  }}>💬</div>
                  <span style={{ fontSize: 11, color: '#C4B5FD', background: 'rgba(139,92,246,0.3)', borderRadius: 999, padding: '3px 10px' }}>
                    Most In-Demand
                  </span>
                </div>
                <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 22 }}>AI Chatbots & WhatsApp Assistants</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: '#B7B2D1' }}>
                  A smart AI assistant on your WhatsApp that answers in Roman Urdu & English, takes orders, qualifies leads, and books appointments 24/7 — replies under 10 seconds.
                </p>
                <button onClick={() => onSelectService('Official WhatsApp AI Bots')}
                  style={{
                    alignSelf: 'flex-start', padding: '10px 20px', borderRadius: 10, border: 'none',
                    background: 'linear-gradient(135deg,#8B5CF6,#6D28D9)',
                    color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                  }}>
                  Get This →
                </button>
              </div>
              {/* Chat preview */}
              <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
                <div style={{ alignSelf: 'flex-end', maxWidth: '85%', background: 'rgba(255,255,255,0.08)', borderRadius: '14px 14px 4px 14px', padding: '10px 14px', lineHeight: 1.45 }}>
                  Assalam o Alaikum! Price details chahiye
                </div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '90%', background: 'linear-gradient(135deg,#7C3AED,#5B21B6)', borderRadius: '14px 14px 14px 4px', padding: '10px 14px', lineHeight: 1.45, color: '#fff' }}>
                  Walaikum Assalam bhai! 🏢 Humari pricing PKR 35,000 se start hoti hai. Shall I book a 15-min consultation? ✅
                </div>
                <div style={{ alignSelf: 'flex-end', maxWidth: '85%', background: 'rgba(255,255,255,0.08)', borderRadius: '14px 14px 4px 14px', padding: '10px 14px', lineHeight: 1.45 }}>
                  Han bilkul!
                </div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '90%', background: 'linear-gradient(135deg,#7C3AED,#5B21B6)', borderRadius: '14px 14px 14px 4px', padding: '10px 14px', lineHeight: 1.45, color: '#fff' }}>
                  Booked! Confirmation aapke WhatsApp pe aa rahi hai ✅
                </div>
              </div>
            </div>

            {/* Workflow card */}
            <div style={{
              flex: '2 1 320px', minWidth: 0,
              background: 'linear-gradient(180deg,rgba(139,92,246,0.12),rgba(255,255,255,0.02))',
              border: '1px solid rgba(167,139,250,0.22)', borderRadius: 26,
              padding: 36, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)', boxShadow: '0 8px 26px rgba(139,92,246,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>⚙️</div>
                <span style={{ fontSize: 11, color: '#C4B5FD', background: 'rgba(139,92,246,0.3)', borderRadius: 999, padding: '3px 10px' }}>Save 40+ Hrs/Week</span>
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 22 }}>Workflow & Operations Automation</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: '#B7B2D1' }}>Connect your apps so data moves by itself. Auto-generate invoices, update inventory, and send daily reports.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', fontSize: 13, marginTop: 8 }}>
                {['Form', 'AI', 'CRM', 'Report'].map((s, i, arr) => (
                  <React.Fragment key={s}>
                    <span style={{ background: i === 1 ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.07)', border: i === 1 ? '1px solid #8B5CF6' : 'none', borderRadius: 8, padding: '7px 12px' }}>{s}</span>
                    {i < arr.length - 1 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12h16M14 6l6 6-6 6"/></svg>}
                  </React.Fragment>
                ))}
              </div>
              <button onClick={() => onSelectService('Workflow & Operations Automation')}
                style={{ alignSelf: 'flex-start', padding: '10px 20px', borderRadius: 10, border: 'none', background: 'linear-gradient(135deg,#8B5CF6,#6D28D9)', color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer', marginTop: 8 }}>
                Get This →
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            {[
              { emoji: '🎯', title: 'Lead Generation & CRM', badge: 'High Revenue Lift', desc: 'Capture leads from Facebook, Instagram, or your website. Follow up on WhatsApp in 10 seconds, qualify automatically, and book calls directly into your calendar.', service: 'Inbound Lead & Sales Automation' },
              { emoji: '📧', title: 'Email & Support Automation', badge: '78% Auto-Deflection', desc: 'AI sorts incoming messages, drafts replies, and routes complex cases to the right person on your team — automatically.', service: 'Official WhatsApp AI Bots' },
              { emoji: '📊', title: 'Data Extraction & Reports', badge: 'Zero Manual Entry', desc: 'Pull data from PDFs, emails, and websites. AI OCR scans bills and enters data into accounting. Weekly reports delivered on schedule.', service: 'Workflow & Operations Automation' },
              { emoji: '🤖', title: 'AI Voice Calling Agents', badge: 'Next-Gen AI', desc: 'Human-sounding AI voice agents answer customer calls or make outbound confirmation calls for appointments, orders, and deliveries — handling 100+ concurrent calls.', service: 'AI Phone Calling Agents' },
            ].map((s, i) => (
              <div key={i} style={{
                flex: '1 1 240px', minWidth: 0,
                background: 'linear-gradient(180deg,rgba(139,92,246,0.12),rgba(255,255,255,0.02))',
                border: '1px solid rgba(167,139,250,0.22)', borderRadius: 26,
                padding: 32, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg,#8B5CF6,#5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{s.emoji}</div>
                  <span style={{ fontSize: 11, color: '#C4B5FD', background: 'rgba(139,92,246,0.3)', borderRadius: 999, padding: '3px 10px' }}>{s.badge}</span>
                </div>
                <h3 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 20 }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: '#B7B2D1' }}>{s.desc}</p>
                <button onClick={() => onSelectService(s.service)}
                  style={{ alignSelf: 'flex-start', padding: '8px 16px', borderRadius: 9, border: 'none', background: 'linear-gradient(135deg,#8B5CF6,#6D28D9)', color: '#fff', fontWeight: 600, fontSize: 13, cursor: 'pointer', marginTop: 'auto' }}>
                  Get This →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
