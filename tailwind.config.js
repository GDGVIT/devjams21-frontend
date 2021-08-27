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
      fontFamily: {
        sora: ['Sora', 'sans-serif']
      },
      colors: {
        jams_red: '#FF5E55',
        jams_logo_blue: '#3B7DED',
        jams_dark_blue: '#1e1e38'
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
