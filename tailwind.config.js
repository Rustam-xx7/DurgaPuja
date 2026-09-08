/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sindoor: '#d9383a',
        'sindoor-dark': '#b02527',
        sholapith: '#fcf8ee',
        'sholapith-muted': '#e6decb',
        pujaGold: '#e9c349',
        'glass-bg': 'rgba(18, 20, 28, 0.48)',
        'glass-card': 'rgba(15, 17, 25, 0.52)',
        'glass-pill': 'rgba(25, 27, 36, 0.55)',
        'glass-border': 'rgba(255, 255, 255, 0.14)'
      },
      fontFamily: {
        serif: ['var(--font-noto-serif)', 'Noto Serif', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};
