import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Coins, Sparkles } from 'lucide-react';

export default function RoiCalculator({ onOpenAuditModal }) {
  const [teamSize, setTeamSize] = useState(5);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(14);
  const [currency, setCurrency] = useState('PKR');
  const [hourlyRate, setHourlyRate] = useState(3000);

  const handleCurrencyToggle = (curr) => {
    setCurrency(curr);
    if (curr === 'PKR') {
      setHourlyRate(3000);
    } else {
      setHourlyRate(25);
    }
  };

  const totalHoursWastedMonthly = teamSize * manualHoursPerWeek * 4.3;
  const hoursSavedMonthly = Math.round(totalHoursWastedMonthly * 0.85);
  const monthlySavingsAmount = Math.round(hoursSavedMonthly * hourlyRate);
  const annualSavingsAmount = monthlySavingsAmount * 12;

  const formattedAnnual = currency === 'USD' 
    ? `$${annualSavingsAmount.toLocaleString()}` 
    : `PKR ${annualSavingsAmount.toLocaleString()}`;

  const formattedMonthly = currency === 'USD' 
    ? `$${monthlySavingsAmount.toLocaleString()}` 
    : `PKR ${monthlySavingsAmount.toLocaleString()}`;

  return (
    <section id="roi" style={{ position: 'relative', borderTop: '1px solid rgba(167,139,250,0.12)', background: '#0A0716', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#A78BFA', letterSpacing: 2 }}>ROI ESTIMATOR</div>
          <h2 style={{ margin: 0, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.12, letterSpacing: -1.2 }}>
            Calculate your time and payroll savings
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: '#B7B2D1' }}>
            Adjust the sliders below to see how much manual staff hours and operational budget you can recover each month.
          </p>

          {/* Currency Toggle */}
          <div style={{ display: 'inline-flex', alignSelf: 'center', background: 'rgba(255,255,255,0.05)', padding: 4, borderRadius: 14, border: '1px solid rgba(167,139,250,0.25)', gap: 6, marginTop: 8 }}>
            <button
              onClick={() => handleCurrencyToggle('PKR')}
              style={{
                background: currency === 'PKR' ? 'linear-gradient(135deg,#8B5CF6,#6D28D9)' : 'transparent',
                color: '#fff',
                border: 'none',
                padding: '8px 18px',
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Coins size={14} />
              <span>PKR (₨) Pakistan</span>
            </button>
            <button
              onClick={() => handleCurrencyToggle('USD')}
              style={{
                background: currency === 'USD' ? 'linear-gradient(135deg,#8B5CF6,#6D28D9)' : 'transparent',
                color: '#fff',
                border: 'none',
                padding: '8px 18px',
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <DollarSign size={14} />
              <span>USD ($) Global</span>
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
          
          {/* Sliders Container */}
          <div style={{
            flex: '1 1 480px',
            minWidth: 0,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(167,139,250,0.2)',
            borderRadius: 26,
            padding: 36,
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
          }}>
            {/* Slider 1 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#F5F3FF' }}>Sales & Support Team Size</span>
                <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 16, color: '#C4B5FD', background: 'rgba(139,92,246,0.2)', padding: '4px 12px', borderRadius: 8, border: '1px solid rgba(167,139,250,0.3)' }}>
                  {teamSize} People
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#8B5CF6', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#A8A3C2', marginTop: 6, fontFamily: 'monospace' }}>
                <span>1 Agent</span>
                <span>15 Agents</span>
                <span>30 Agents</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#F5F3FF' }}>Manual Hours Wasted Per Person / Week</span>
                <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 16, color: '#C4B5FD', background: 'rgba(139,92,246,0.2)', padding: '4px 12px', borderRadius: 8, border: '1px solid rgba(167,139,250,0.3)' }}>
                  {manualHoursPerWeek} hrs / week
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={manualHoursPerWeek}
                onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#8B5CF6', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#A8A3C2', marginTop: 6, fontFamily: 'monospace' }}>
                <span>5 hrs (Minor)</span>
                <span>20 hrs (Moderate)</span>
                <span>40 hrs (Full Shift)</span>
              </div>
            </div>

            {/* Micro stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, paddingTop: 8 }}>
              <div style={{ background: 'rgba(18,12,38,0.7)', padding: 16, borderRadius: 16, border: '1px solid rgba(167,139,250,0.15)' }}>
                <div style={{ fontSize: 11, color: '#A8A3C2', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>Staff Hours Automated</div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 24, fontWeight: 700, color: '#C4B5FD', marginTop: 4 }}>
                  {hoursSavedMonthly} hrs / mo
                </div>
              </div>
              <div style={{ background: 'rgba(18,12,38,0.7)', padding: 16, borderRadius: 16, border: '1px solid rgba(167,139,250,0.15)' }}>
                <div style={{ fontSize: 11, color: '#A8A3C2', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>Automation Rate</div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 24, fontWeight: 700, color: '#34D399', marginTop: 4 }}>
                  85% Autopilot
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div style={{
            flex: '1 1 380px',
            minWidth: 0,
            background: 'linear-gradient(160deg,rgba(139,92,246,0.3),rgba(20,14,40,0.9) 70%)',
            border: '1px solid rgba(167,139,250,0.5)',
            borderRadius: 30,
            padding: 40,
            boxShadow: '0 30px 90px rgba(109,40,217,0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
            textAlign: 'center',
          }}>
            <div style={{ display: 'inline-flex', alignSelf: 'center', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#34D399', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 999 }}>
              Estimated Annual Savings
            </div>

            <div>
              <div style={{
                fontFamily: "'Sora',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(32px,4vw,48px)',
                lineHeight: 1.1,
                background: 'linear-gradient(180deg,#EDE9FE,#8B5CF6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}>
                {formattedAnnual}
              </div>
              <div style={{ fontSize: 14, color: '#C9C4E0', marginTop: 8 }}>
                ≈ {formattedMonthly} saved every single month
              </div>
            </div>

            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#B7B2D1', textAlign: 'left', background: 'rgba(0,0,0,0.25)', padding: 16, borderRadius: 14, border: '1px solid rgba(167,139,250,0.15)' }}>
              Reclaim up to <strong>{hoursSavedMonthly} staff hours every month</strong> so your team focuses on high-ticket sales calls instead of manual replies and data entry.
            </p>

            <button
              onClick={onOpenAuditModal}
              style={{
                background: 'linear-gradient(135deg,#8B5CF6,#6D28D9)',
                color: '#fff',
                border: 'none',
                padding: '16px 28px',
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 700,
                fontFamily: "'Sora',sans-serif",
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(139,92,246,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <span>Claim Free AI Audit</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
