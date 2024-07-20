module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'primary-dark-blue': '#0F1537',
        'primary-light-blue': '#1E213A',
        'primary-light-gray': '#12121233',
        'primary-dark-gray': '#121212E5',
        'button-hover-color': '#FFB606',

      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
