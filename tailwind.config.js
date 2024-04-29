const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"
, flowbite.content(),
"./node_modules/flowbite/**/*.js,jsx"
],
  
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px', // Updated value
      '2xl': '1536px',
    },
  },
  plugins: [flowbite.plugin()],
};