/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hoverColor:"#FCC000" ,
        brightColor:"#dd8036",
        backGroundColor:"#36ae9a"
      }
    },
  },
  plugins: [],
}
