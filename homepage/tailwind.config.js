const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: theme => ({
      ...colors,
      'primary-dark': '#321730',
      'primary': '#4e2b4b',
      'primary-light': '#8a5689',
      'secondary': '#96af4c',
      'danger': '#e4dce7',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
