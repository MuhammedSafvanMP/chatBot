/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          mlg_primary: "#00002E",
          mlg_text: "#D292FF",
          mlg_btn: "#3C46FF",
          alg_btn: "#10A37F",
      }     
    },
  },
  plugins: [],
}