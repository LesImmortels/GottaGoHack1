module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkG': '#1d1d1d',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
      textColor: ['even'],
    },
  },
  plugins: [],
}