import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function AiChatWidget({ onOpenAuditModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Assalam o Alaikum! I am the TSX AI Assistant. How can I help you automate your business workflows or WhatsApp today?`
    }
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
  }, [messages, isOpen]);

  const quickQuestions = [
    "What services do you build?",
    "How does WhatsApp bot work?",
    "Can you connect my CRM / Sheets?",
    "What is your contact number & office?",
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      const lower = query.toLowerCase();

      if (lower.includes('service') || lower.includes('offer') || lower.includes('kaam')) {
        reply = `TSX AI Automation builds 6 core solutions:\n1. AI Chatbots & WhatsApp Assistants\n2. Workflow & Operations Automation\n3. Inbound Lead & CRM Automation\n4. Email & Support Ticket Deflection\n5. Document Data Extraction & Reports\n6. AI Phone Voice Calling Agents.`;
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('number') || lower.includes('call') || lower.includes('raabta')) {
        reply = `You can reach TSX AI Automation directly:\n📞 Phone: ${COMPANY_INFO.phone}\n💬 WhatsApp: https://wa.me/923363925950\n📧 Email: ${COMPANY_INFO.email}\n📍 Location: Karachi, Pakistan`;
      } else if (lower.includes('mongo') || lower.includes('firebase') || lower.includes('crm') || lower.includes('sheet')) {
        reply = `Yes, 100%! We connect your existing tools — WhatsApp, Google Sheets, CRM (HubSpot, GoHighLevel), Shopify, MongoDB, Firebase, Slack, and email so data flows seamlessly.`;
      } else if (lower.includes('whatsapp') || lower.includes('bot')) {
        reply = `Our WhatsApp bots run 24/7 on the official Meta Cloud API. They reply in under 10 seconds, understand Roman Urdu & English, send catalogs, book appointments, and escalate complex chats to staff!`;
      } else if (lower.includes('karachi') || lower.includes('location') || lower.includes('address') || lower.includes('pakistan')) {
        reply = `Our headquarters is located in Karachi, Pakistan! We serve businesses locally across Pakistan and internationally.`;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('kitna')) {
        reply = `Pricing depends on your specific workflow. We start with a 100% free discovery consultation to analyze your exact ROI and provide an upfront quote. Click 'Book consultation' or WhatsApp us at 03363925950!`;
      } else {
        reply = `Thank you for asking! Our engineering team in Karachi can build a custom setup for your business. Would you like to book a free 30-min call or WhatsApp us at ${COMPANY_INFO.phone}?`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <>
      {/* Launcher Button */}
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 40, display: 'flex', alignItems: 'center', gap: 12 }}>
        {!isOpen && (
          <div className="hidden sm:flex" style={{
            background: 'rgba(18,12,38,0.92)',
            border: '1px solid rgba(167,139,250,0.35)',
            padding: '8px 16px',
            borderRadius: 14,
            fontSize: 13,
            color: '#DDD6FE',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#A78BFA' }}></span>
            <span>Ask TSX AI</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle TSX AI Assistant"
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
            boxShadow: '0 8px 30px rgba(139,92,246,0.5)',
            border: '1px solid rgba(196,181,253,0.3)',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s',
          }}
        >
          {isOpen ? <X size={24} /> : <Bot size={26} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: 92,
          right: 24,
          width: 'min(380px, calc(100vw - 32px))',
          height: 520,
          maxHeight: '80vh',
          zIndex: 50,
          borderRadius: 24,
          background: '#0E0B1C',
          border: '1px solid rgba(167,139,250,0.35)',
          boxShadow: '0 30px 100px rgba(109,40,217,0.45)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '16px 20px',
            background: 'linear-gradient(90deg, #3B1D8F, #6D28D9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#fff',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>TSX AI Assistant</div>
                <div style={{ fontSize: 11, color: '#DDD6FE' }}>Online • 24/7 AI Automation</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: 16, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.sender === 'user' ? 'linear-gradient(135deg,#8B5CF6,#6D28D9)' : 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-line',
                  border: msg.sender === 'user' ? 'none' : '1px solid rgba(167,139,250,0.2)',
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ padding: '8px 14px', borderRadius: 14, background: 'rgba(255,255,255,0.06)', color: '#A78BFA', fontSize: 12 }}>
                  AI is thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div style={{ display: 'flex', gap: 8, padding: '8px 14px', overflowX: 'auto', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(167,139,250,0.1)' }}>
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '5px 12px',
                  borderRadius: 8,
                  background: 'rgba(139,92,246,0.15)',
                  border: '1px solid rgba(167,139,250,0.3)',
                  color: '#DDD6FE',
                  fontSize: 11,
                  cursor: 'pointer',
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(167,139,250,0.15)', display: 'flex', gap: 8, background: '#0E0B1C' }}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about AI, WhatsApp, pricing..."
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(167,139,250,0.25)',
                color: '#fff',
                fontSize: 13,
                outline: 'none',
              }}
            />
            <button
              onClick={() => handleSend()}
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '10px 14px',
                cursor: 'pointer',
              }}
            >
              <Send size={16} />
            </button>
          </div>

          {/* WhatsApp Direct */}
          <div style={{ padding: '8px 14px', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(167,139,250,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11 }}>
            <span style={{ color: '#A8A3C2' }}>Direct WhatsApp:</span>
            <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" style={{ color: '#34D399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              <MessageSquare size={12} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
