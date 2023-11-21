/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        red: colors.rose,
      }
    },
  },
  plugins: [],
}

