/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-text': 'fadeIn 2.5s ease-in-out forwards', // Adjust duration and timing function as needed
      },
    },
  },
  plugins: [],
};
