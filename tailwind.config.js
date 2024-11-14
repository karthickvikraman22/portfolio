/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderColor:{
         'primary':'green',
      },
    },
    fontFamily:{
      'hero-font':'Sriracha',
    },
  },
  plugins: [],
}

