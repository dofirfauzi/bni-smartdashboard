/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff7ec",
          100: "#ffeed3",
          200: "#ffd9a5",
          300: "#ffbd6d",
          400: "#ff9532",
          500: "#ff760a",
          600: "#e55300",
          700: "#cc4102",
          800: "#a1330b",
          900: "#822c0c",
        },
        secondary: {
          50: "#eaffff",
          100: "#cafeff",
          200: "#9cfaff",
          300: "#57f3ff",
          400: "#0ce2ff",
          500: "#00c5ea",
          600: "#009bc4",
          700: "#007697",
          800: "#0b637f",
          900: "#0e526b",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
