/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        floating: 'floating 2s ease-in-out infinite',
      },
    },
  },

  plugins: [],
};
