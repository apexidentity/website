/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        apex: {
          purple: '#7C3AED',
          violet: '#A855F7',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          orange: '#F97316',
          amber: '#F59E0B',
          dark: '#030307',
          surface: 'rgba(255,255,255,0.04)',
          border: 'rgba(255,255,255,0.08)',
        }
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-med': 'floatMed 6s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'aurora': 'aurora 12s ease-in-out infinite alternate',
        'aurora2': 'aurora2 16s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(3deg)' },
        },
        floatMed: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-16px) rotate(-2deg)' },
          '66%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        aurora: {
          '0%': { transform: 'translate(-20%, -20%) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(10%, 10%) scale(1.3)', opacity: '0.8' },
          '100%': { transform: 'translate(20%, -10%) scale(0.9)', opacity: '0.5' },
        },
        aurora2: {
          '0%': { transform: 'translate(20%, 20%) scale(1.2)', opacity: '0.5' },
          '50%': { transform: 'translate(-10%, -15%) scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'translate(-20%, 10%) scale(1.1)', opacity: '0.4' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
