/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'coffe-100': '#FED8B1',
        'coffe-300': '#ECB176',
        'coffe-500': '#A67B5B',
        'coffe-800': '#6F4E37',
        'coffe-900': '#422f21',
        'coffe-1000': '#291d14'
      },
      screens:{
        'xs': '480',
        'xss' : '320'
      }
    },
  },
  plugins: [],
}

