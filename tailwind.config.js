/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        tsx: {
          bg:        '#07050F',
          bgAlt:     '#0A0716',
          card:      '#120C26',
          border:    'rgba(167,139,250,0.2)',
          purple:    '#8B5CF6',
          violet:    '#7C3AED',
          deep:      '#6D28D9',
          deepest:   '#5B21B6',
          soft:      '#A78BFA',
          light:     '#C4B5FD',
          pale:      '#EDE9FE',
          muted:     '#B7B2D1',
          subtle:    '#A8A3C2',
          emerald:   '#10B981',
        }
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out 1s infinite',
        'drift':      'drift 12s ease-in-out infinite',
        'drift-rev':  'drift 15s ease-in-out infinite reverse',
        'shimmer':    'shimmer 6s linear infinite',
        'marquee':    'marquee 32s linear infinite',
        'spin-slow':  'spin 16s linear infinite',
        'ping':       'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
        'pulse':      'pulse 3s ease-in-out infinite',
        'dash':       'dash 1.4s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%':     { transform: 'translate(40px,30px)' },
        },
        shimmer: {
          to: { backgroundPosition: '200% center' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        dash: {
          to: { strokeDashoffset: '-28' },
        },
      },
      backgroundImage: {
        'purple-radial': 'radial-gradient(closest-side, rgba(124,58,237,0.5), rgba(124,58,237,0))',
        'hero-grid': 'linear-gradient(rgba(167,139,250,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.07) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
