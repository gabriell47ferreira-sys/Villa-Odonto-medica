/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        villa: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#009FE3', // Official Brand Cyan
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          navy: {
            DEFAULT: '#0F2B48', // Official Brand Navy from 'VILLA'
            dark: '#081728',
            light: '#1B3B5F',
            soft: '#244A73',
          },
          sand: {
            light: '#FDFBF7',
            DEFAULT: '#F7F4EE',
            dark: '#EAE4D8',
          },
          sage: {
            light: '#F2F7F4',
            DEFAULT: '#52796F',
            dark: '#354F52',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 43, 72, 0.06), 0 2px 6px -1px rgba(15, 43, 72, 0.04)',
        'soft-xl': '0 20px 35px -5px rgba(15, 43, 72, 0.08), 0 10px 15px -5px rgba(15, 43, 72, 0.04)',
        'glow': '0 0 25px -5px rgba(0, 159, 227, 0.35)',
      }
    },
  },
  plugins: [],
}
