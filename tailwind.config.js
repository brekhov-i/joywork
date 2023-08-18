/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: {
        DEFAULT: "#4CAF50",
        100: "#98E99B",
      },
      black: {
        DEFAULT: "#000000",
        800: "#2a2a2a",
      },
      white: "#ffffff",
      grey: {
        DEFAULT: "#f2f2f2",
        200: "#F5F5F5",
        900: "#757575",
      },
    },
    fontFamily: {
      sans: ["Lato, sans-serif"],
    },
  },
  plugins: [],
};
