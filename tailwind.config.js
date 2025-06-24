/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
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
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out both',
      },
      colors: {
        // Optional: custom palette if you'd like to use named colors
        'teal-500': '#14b8a6',
      },
    },
  },
  plugins: [],
};
