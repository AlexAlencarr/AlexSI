/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    screens: {
      md: '761px',
      lg: '1001px',
    },
    extend: {
      colors: {
        ink: '#12231e',
        muted: '#5e6b66',
        green: '#1d6b50',
        'green-dark': '#102c24',
        mint: '#dff3e8',
        lime: '#c9ef6c',
        cream: '#f6f4ec',
        line: '#dde3df',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        dashboard: '0 26px 70px rgba(18, 35, 30, .13)',
      },
    },
  },
  plugins: [],
};
