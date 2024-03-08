/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{jsx,tsx,ts,js,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('src/assets/background.jpg')",
      },
      brightness: {
        10: '0.10'
      },
      width: {
        '100px': '100px',
        '80px': '80px',
        '30px': '30px'
      },
      height: {
        '100px': '100px',
        '80px': '80px'
      },
      colors: {
        'primary-green': '#216869',
        'primary-brown': '#8D756F',
        'primary-grey': '#31302D'
      }
    },
  },
  plugins: [],
}