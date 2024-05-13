const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: [],
      },
      colors: {
        primary: {
          50: '#23A6F0'          
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
});


