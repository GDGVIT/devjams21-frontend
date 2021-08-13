// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        60: '60'
      },
      inset: {
        '27/100': '27%',
        '28/100': '28%',
        '3/10': '30%'
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        circularStd: ['Circular Std Black', 'sans-serif']
      },
      colors: {
        jams_purple_faded: '#EDEEFF',
        jams_purple: '#4244B4',
        jams_red: '#FF5E55'
      },
      gridAutoRows: {
        10: '10px',
        1: '1px'
      }
    }
  },
  variants: {
    width: ['responsive', 'hover', 'focus'],
    extend: {}
  },
  plugins: []
}
