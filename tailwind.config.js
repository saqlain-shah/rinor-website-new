/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        'background-dark': '#020617',
        'background-light': '#1e293b',
        primary: '#3b82f6',
        'primary-light': '#60a5fa',
        secondary: '#f59e0b',
        'secondary-light': '#fbbf24',
        whatsapp: '#25D366',
        'whatsapp-dark': '#128C7E',
        accent: '#10B981',
        'accent-light': '#34D399',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right bottom, #1E3A8A, #0EA5E9)',
      },
    },
  },
  plugins: [],
} 