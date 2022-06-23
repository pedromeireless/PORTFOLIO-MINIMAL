/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bree': ['"Bree Serif"', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      height: {
        '500': '50rem',
      }
    },
    theme: {}
  },
  plugins: [],
}
