/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ['Updock', "sans-serif"],
        bodyFont: ['Raleway', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}