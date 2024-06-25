/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customColor: '#cf9b7d',
        darkbb:'#a47b5d'
      }
    },
  },
  variants: {},
  plugins: [],
}