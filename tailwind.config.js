/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        title: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

