/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    backgroundImage: {

    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#2C3531', 
      'darkblue': '#116466',
      'blue': '#D1E8E2',
      'darkorange': '#D9B08C',
      'orange': '#FFCB9A',
      'white': '#fff',
      'gray': '#5A5A5A'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
