const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "fadeIn": "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        "fadeIn": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
    },
    colors: theme => ({
      ...colors,
      'primary-dark': '#321730',
      'primary': '#4e2b4b',
      'primary-light': '#8a5689',
      'secondary': '#96af4c',
      'highlight': '#e4dce7',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
