/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myblack: '#222831',
        mydark: '#393E46',
        myteal: '#00ADB5',
        mylight: '#EEEEEE'
      },
      fontFamily:{
        myfont: ['Roboto Condensed', 'sans-serif'],
      },
    },
    screens:{
      xs: '480px',
      ss: '620px',
      sm: '760px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: [],
}