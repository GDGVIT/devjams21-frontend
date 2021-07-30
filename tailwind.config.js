// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '28/100': '28%',
        '3/10': '30%'
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif']
      },
      colors: {
        jams_black: '#1B1B1B'
      },
      gridAutoRows: {
        10: '10px',
        1: '1px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
