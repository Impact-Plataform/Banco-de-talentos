/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors:{
      primary: '#FFE81F',
      black: '#000000',
      white: "#fff",
      transparent: 'rgba(0, 0, 0, 0.1)',
    },
    fontFamily: {
      sans: ['Space Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}
