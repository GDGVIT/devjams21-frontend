// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif']
      },
      colors: {
        jams_black: '#1B1B1B'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
