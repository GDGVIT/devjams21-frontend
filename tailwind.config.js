// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        60: '60',
        '-50': '-50',
        '-40': '-40',
        '-30': '-30',
        '-20': '-20',
        '-10': '-10'
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
        jams_red: '#FF5E55',
        jams_logo_blue: '#3B7DED'
      },
      gridAutoRows: {
        10: '10px',
        1: '1px'
      },
      width: {
        85: '360px',
        120: '40rem'
      }
    }
  },
  variants: {
    width: ['responsive', 'hover', 'focus'],
    extend: {}
  },
  plugins: []
}
