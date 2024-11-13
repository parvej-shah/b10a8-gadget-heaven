/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryText:'#09080F',
        primaryBg:'#9538E2',
        seconderyBg:'#fffeff',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}