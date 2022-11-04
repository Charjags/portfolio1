/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor:{
      lightnavy: '#112240',
      navy: '#0a192f'
    },
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
