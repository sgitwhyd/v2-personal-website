/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        main: ['Fredoka'],
        secondary: ['Patrick Hand'],
      },
      colors: {
        brand: {
          cream: '#fff480',
          aqua: '#00FFA0',
          'midnight-blue': '#05060f',
        },
      },
      boxShadow: {
        projectCard: '.4rem .4rem #05060f',
      },
    },
  },
  plugins: [],
}

module.exports = config
