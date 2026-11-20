import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 150);
          return 100;
        }
        return p + 4;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [onComplete]);

  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#07050F',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '24px',
        opacity: progress === 100 ? 0 : 1,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Circular SVG ring */}
      <div style={{ position: 'relative', width: 100, height: 100 }}>
        {/* Track ring */}
        <svg width="100" height="100" style={{ position: 'absolute', top: 0, left: 0 }}>
          <circle
            cx="50" cy="50" r="42"
            fill="none"
            stroke="rgba(167,139,250,0.12)"
            strokeWidth="4"
          />
        </svg>
        {/* Progress ring */}
        <svg width="100" height="100" style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
          <circle
            cx="50" cy="50" r="42"
            fill="none"
            stroke="url(#preloaderGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
          <defs>
            <linearGradient id="preloaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C4B5FD" />
              <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
          </defs>
        </svg>
        {/* Center logo */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <span style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: 18,
            color: '#fff',
            letterSpacing: '1px',
          }}>HTM</span>
          <span style={{ fontSize: 9, color: '#EF4444', letterSpacing: '2px', marginTop: 1 }}>AI</span>
        </div>
      </div>

      <div style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: 13,
        color: '#A8A3C2',
        letterSpacing: '3px',
        textTransform: 'uppercase',
      }}>
        HTM AI Automation
      </div>
    </div>
  );
}
