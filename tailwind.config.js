/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 8px 2px rgba(45, 212, 191, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 14px 4px rgba(45, 212, 191, 0.8)',
          },
        }
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
      },
    },
  },
  plugins: [],
};