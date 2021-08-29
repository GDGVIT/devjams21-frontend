// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        60: '60',
        '-60': '-60',
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
        jams_blue: '#3B7DED',
        jams_dark_blue: '#1e1e38',
        discord_violet: '#4362cc',
        discord_white: '#f4f8fc',
        jams_green: '#39AA68',
        jams_yellow: '#F9C531'
      },
      width: {
        120: '40rem'
      },
      minWidth: {
        80: '320px'
      }
    }
  },
  variants: {
    width: ['responsive', 'hover', 'focus'],
    extend: {}
  },
  plugins: []
}
