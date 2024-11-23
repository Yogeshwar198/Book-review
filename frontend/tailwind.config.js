/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-senrif"],
    },
    extend: {
      //Colors used in the project
      colors: {
        primary: "#05B6D3",
        secondary: "#EF863E",
      },
    },
  },
  plugins: [],
}