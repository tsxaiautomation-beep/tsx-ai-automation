import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MessageSquare, Calendar, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function AiChatWidget({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Assalam o Alaikum! 👋 I am **AUTONYX AI**, your autonomous business assistant.\n\nI can help you with:\n• 🎙️ **AI Voice Calling Agents** (Urdu & English)\n• 💬 **24/7 WhatsApp AI Bots**\n• 📧 **AI Email Marketing & Outreach**\n• 🏢 **All Business & ERP Automations**\n• 🌐 **Modern Web Systems & Dashboards**\n\nWhat workflow or process would you like to automate?`,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const quickQuestions = [
    '🎙️ AI Voice Agents',
    '💬 24/7 WhatsApp Bot',
    '📧 Email Marketing AI',
    '🏢 All Business ERP',
    '💰 Pricing & Timelines',
    '📅 Book Discovery Call',
  ];

  const handleSend = (textToSend) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const lower = query.toLowerCase();

      if (lower.includes('voice') || lower.includes('phone') || lower.includes('calling') || lower.includes('audio') || lower.includes('call agent')) {
        reply = `🎙️ **AI Voice Calling Agents:**\n• Human-sounding conversational agents with < 600ms latency.\n• Natural Roman Urdu, Urdu & English fluency.\n• Handles inbound support calls, appointment confirmations, and sales qualification.\n• Scales to 500+ concurrent calls simultaneously with instant CRM logging.\n\nWant to hear a live voice demo? Message our founder at **${COMPANY_INFO.phone}**!`;
      } else if (lower.includes('email') || lower.includes('outreach') || lower.includes('cold') || lower.includes('mail')) {
        reply = `📧 **AI Email Marketing & Outreach Engine:**\n• Hyper-personalized AI email copy that achieves 60%+ open rates.\n• 99.2% primary inbox deliverability with automated SPF/DKIM/DMARC warm-up.\n• Behavioral multi-touch drip sequences triggered by customer actions.\n• Warm replies are routed directly to your WhatsApp in real-time!`;
      } else if (lower.includes('all business') || lower.includes('erp') || lower.includes('operation') || lower.includes('full') || lower.includes('pura')) {
        reply = `🏢 **All-In-One Business Automation & Custom ERP:**\n• Connects Sales, Inventory (Shopify/POS), Accounting, and HR into one central nervous system.\n• Eliminates repetitive manual data entry across departments.\n• Automated WhatsApp daily executive digest with real-time revenue & stock alerts.\n• Designed bespoke for Karachi & global growing companies.`;
      } else if (lower.includes('service') || lower.includes('offer') || lower.includes('kaam') || lower.includes('pillar') || lower.includes('solution')) {
        reply = `🚀 **AUTONYX Full Automation Suite:**\n\n1. **AI Voice Calling Agents:** Inbound & outbound calls in Urdu/English.\n2. **24/7 WhatsApp AI Bots:** Instant lead qualification & appointment booking.\n3. **AI Email Marketing:** Automated high-deliverability cold outreach.\n4. **All Business & ERP Automation:** Inventory, billing & cross-team autopilot.\n5. **Web Development & Platforms:** Ultra-fast React & Next.js systems.\n6. **Cloud & CRM Integrations:** HubSpot, Sheets, MongoDB, and Stripe.\n\nWhich solution fits your current priority?`;
      } else if (lower.includes('whatsapp') || lower.includes('bot')) {
        reply = `💬 **24/7 WhatsApp AI Assistants:**\n• Direct Meta Cloud API integration (official & scalable).\n• Understands English, Urdu, and Roman Urdu naturally.\n• Automates lead qualification, catalog distribution, order updates, and CRM sync.\n• Instant human handover for VIP clients.\n\nReady to test a demo? Message us directly at **${COMPANY_INFO.phone}**!`;
      } else if (lower.includes('web') || lower.includes('site') || lower.includes('cloud') || lower.includes('app') || lower.includes('software')) {
        reply = `🌐 **Web Development & Cloud Architecture:**\nWe engineer full-stack React, Node.js, and Next.js applications engineered for speed and conversion. We deploy on secure cloud infrastructure with MongoDB/Firebase and automated CI/CD pipelines.`;
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('number') || lower.includes('call') || lower.includes('raabta') || lower.includes('email') || lower.includes('address') || lower.includes('karachi')) {
        reply = `📍 **AUTONYX AI Automation HQ:**\n• **City:** Karachi, Pakistan (Serving local & global businesses)\n• **WhatsApp 1:** +92 336 3925950 (Active 24/7)\n• **WhatsApp 2:** +92 314 1151571 (Active 24/7)\n• **Direct Email (Fastest Reply):** ${COMPANY_INFO.email}\n• **Consultation:** 100% Free 30-Minute Architecture Audit.`;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('kitna') || lower.includes('rate') || lower.includes('package') || lower.includes('timeline')) {
        reply = `💰 **Tailored, Transparent Pricing:**\nEvery workflow has distinct requirements, so we never force cookie-cutter packages. We provide a **Free 30-Minute Discovery Session** to inspect your systems and present a fixed, milestone-based quote.\n\nTypical automations pay for themselves within 30 days!`;
      } else if (lower.includes('book') || lower.includes('meeting') || lower.includes('consultation') || lower.includes('call') || lower.includes('demo')) {
        reply = `📅 **Let's schedule your Free Discovery Call!**\nClick the button below to reserve a 30-minute session with our Karachi engineering lead. We will map your processes and show you live ROI projections.`;
      } else if (/\d{10,12}/.test(query)) {
        reply = `✅ **Number received!**\nOur automation consultant in Karachi will message your WhatsApp within 10 minutes with consultation details.`;
      } else {
        reply = `Thank you for asking! At **AUTONYX AI**, we engineer custom automations that eliminate manual bottlenecks and accelerate growth.\n\nWould you like to book a free 30-minute discovery call or chat directly with our founder on WhatsApp (+92 336 3925950 / +92 314 1151571)?`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* FLOATING LAUNCHER BUTTON (LUXURY OBSIDIAN & RED ACCENT) */}
      <div
        style={{
          position: 'fixed',
          bottom: '26px',
          right: '26px',
          zIndex: 55,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
        className="chat-launcher-pos"
      >
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            style={{
              background: 'rgba(12, 10, 16, 0.92)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#FFFFFF',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              backdropFilter: 'blur(16px)',
              transition: 'all 0.25s ease',
            }}
            className="hidden sm:flex"
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#22C55E',
                boxShadow: '0 0 8px #22C55E',
              }}
            />
            <span>Ask <strong style={{ color: '#FFFFFF' }}>AUTONYX</strong> <span style={{ color: '#EF4444' }}>AI</span></span>
            <span style={{ fontSize: '11px', color: '#9CA3AF' }}>• Online</span>
          </div>
        )}

        {/* The Sexy Hot Launcher Orb (Proper Flawless Circle) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AUTONYX AI Chatbot"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 30%, #1A1622 0%, #0D0A13 70%, #050408 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.85), 0 0 24px rgba(239, 68, 68, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            position: 'relative',
            padding: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          {isOpen ? (
            <X size={26} strokeWidth={2.4} />
          ) : (
            <>
              {/* Flawless Circular Logo Mask (Zero Square Corners) */}
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000000',
                border: '1px solid rgba(239, 68, 68, 0.45)',
                boxShadow: '0 0 14px rgba(239, 68, 68, 0.25)',
              }}>
                <img
                  src="/autonyx-logo.png"
                  alt="AUTONYX Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    transform: 'scale(1.08)',
                    display: 'block',
                  }}
                />
              </div>

              {/* Online Green LED Indicator on Outer Circular Rim */}
              <span
                style={{
                  position: 'absolute',
                  top: '1px',
                  right: '1px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: '#22C55E',
                  border: '2.5px solid #0D0A13',
                  boxShadow: '0 0 10px #22C55E',
                  pointerEvents: 'none',
                }}
              />
            </>
          )}
        </button>
      </div>

      {/* FLOATING CHAT WINDOW (ELEGANT DEEP OBSIDIAN & PLATINUM GLASS) */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '98px',
            right: '26px',
            width: 'min(410px, calc(100vw - 32px))',
            height: '570px',
            maxHeight: '78vh',
            zIndex: 60,
            borderRadius: '26px',
            background: 'rgba(10, 9, 14, 0.96)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 30px 100px rgba(0, 0, 0, 0.9), 0 0 1px rgba(255, 255, 255, 0.3), 0 0 35px rgba(239, 68, 68, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backdropFilter: 'blur(28px)',
            animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="chat-window-pos"
        >
          {/* Header (Clean, Deep Jet Black with Sleek Bezel) */}
          <div
            style={{
              padding: '16px 20px',
              background: '#0D0C12',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFFFFF',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Circular Avatar Bezel */}
              <div
                style={{
                  position: 'relative',
                  width: '42px',
                  height: '42px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: '#000000',
                    border: '1.5px solid rgba(239, 68, 68, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 12px rgba(239, 68, 68, 0.25)',
                  }}
                >
                  <img
                    src="/autonyx-logo.png"
                    alt="AUTONYX"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      transform: 'scale(1.08)',
                      display: 'block',
                    }}
                  />
                </div>
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#22C55E',
                    border: '2px solid #0D0C12',
                    boxShadow: '0 0 6px #22C55E',
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 800, fontFamily: "'Sora', sans-serif", letterSpacing: '-0.3px' }}>
                    AUTONY<span style={{ color: '#EF4444' }}>X</span> AI
                  </span>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#FCA5A5',
                      padding: '2px 7px',
                      borderRadius: '999px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    PRO
                  </span>
                </div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '1px' }}>
                  <span>Autonomous Agent</span>
                  <span>•</span>
                  <span style={{ color: '#22C55E', fontWeight: 500 }}>Active</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#9CA3AF',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Feed (Obsidian Canvas) */}
          <div
            style={{
              flex: 1,
              padding: '18px 16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              fontSize: '13.5px',
              background: '#07060A',
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '86%',
                    padding: '12px 16px',
                    borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                    // User bubble is a sleek dark titanium card with subtle ruby edge, NOT bright red!
                    background:
                      msg.sender === 'user'
                        ? 'linear-gradient(135deg, #1C1822, #14111A)'
                        : 'rgba(255, 255, 255, 0.035)',
                    color: '#F3F4F6',
                    lineHeight: 1.58,
                    whiteSpace: 'pre-line',
                    border:
                      msg.sender === 'user'
                        ? '1px solid rgba(239, 68, 68, 0.35)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow:
                      msg.sender === 'user'
                        ? '0 6px 20px rgba(0, 0, 0, 0.5), 0 0 10px rgba(239, 68, 68, 0.15)'
                        : '0 4px 16px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {msg.text}

                  {/* Consultation / WhatsApp Quick Action Buttons */}
                  {msg.sender === 'bot' && (msg.text.includes('Discovery') || msg.text.includes('consultation') || msg.text.includes('schedule')) && (
                    <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          if (onOpenModal) onOpenModal();
                        }}
                        style={{
                          background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                          color: '#FFFFFF',
                          border: 'none',
                          padding: '8px 14px',
                          borderRadius: '10px',
                          fontSize: '12px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)',
                        }}
                      >
                        <Calendar size={13} />
                        <span>Book 30-Min Call</span>
                      </button>

                      <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#FFFFFF',
                          textDecoration: 'none',
                          padding: '8px 14px',
                          borderRadius: '10px',
                          fontSize: '12px',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <MessageSquare size={13} />
                        <span>Open WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    padding: '10px 16px',
                    borderRadius: '18px 18px 18px 4px',
                    background: 'rgba(255, 255, 255, 0.035)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', animation: 'ping 1s infinite' }} />
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', opacity: 0.6 }} />
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', opacity: 0.3 }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts (Clean Minimal Glass Chips, NOT Loud Red) */}
          <div
            style={{
              display: 'flex',
              gap: '6px',
              padding: '8px 14px',
              overflowX: 'auto',
              background: '#09080D',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              scrollbarWidth: 'none',
            }}
          >
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '6px 12px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#D1D5DB',
                  fontSize: '11px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box (Ultra-Sleek Glass Capsule) */}
          <div
            style={{
              padding: '12px 14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              gap: '10px',
              background: '#0C0B12',
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about AI, WhatsApp bots, pricing..."
              style={{
                flex: 1,
                padding: '11px 14px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            <button
              onClick={() => handleSend()}
              style={{
                width: '42px',
                height: '42px',
                background: 'linear-gradient(135deg, #EF4444, #B91C1C)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(220, 38, 38, 0.35)',
                flexShrink: 0,
              }}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>

          {/* Footer Bar (Subtle Direct Line) */}
          <div
            style={{
              padding: '8px 16px',
              background: '#08070B',
              borderTop: '1px solid rgba(255, 255, 255, 0.04)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '11px',
              color: '#6B7280',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <ShieldCheck size={12} color="#9CA3AF" />
              <span>AUTONYX Enterprise AI</span>
            </div>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#22C55E',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none',
              }}
            >
              <span>WhatsApp: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
