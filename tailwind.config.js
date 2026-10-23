/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1d68e8',
          700: '#1557c0',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        navy: {
          800: '#0c1a35',
          900: '#071228',
          950: '#050e20',
          footer: '#060d1f'
        },
        accent: {
          cyan: '#06b6d4',
          sky: '#38bdf8'
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 12px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 12px 28px -4px rgba(29, 104, 232, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05)',
        'btn': '0 4px 14px rgba(29, 104, 232, 0.35)',
        'btn-hover': '0 6px 20px rgba(29, 104, 232, 0.45)',
        'glow-cyan': '0 0 20px rgba(56, 189, 248, 0.35)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      }
    },
  },
  plugins: [],
}
