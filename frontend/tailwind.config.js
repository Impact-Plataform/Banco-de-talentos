/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx,ts,jsx,js}'],
  theme: {
    extend: {
      colors: {
        sw: {
          yellow: '#dba90d',
        },
      },
    },
  },
  plugins: [],
};
