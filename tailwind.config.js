/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        identifier: '#004c98',
        layout1: '#0A0D1B',
        layout2: '#13182A',
        text1: '#ffffff',
        text2: '#9ca3af',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
