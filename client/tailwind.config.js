/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        'spin-short': 'spin 1s ease-in-out',
        removeCartItem: 'fade 1.5s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 1, 'max-height': '200px' },
          '50%': { opacity: 0, 'max-height': '200px' },
          '100%': { opacity: 0, 'max-height': '0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tw-elements/dist/plugin'),
  ],
};
