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
        100: "#F3F3F3",
        200: "#F5F5F5",
        400: "#DEDEDE",
        900: "#757575",
      },
      red: "#EC2E2E",
      blue: {
        DEFAULT: "#3A8EFA",
        100: "#F1F6FF",
        500: "#D4E3FD",
      },
    },
    fontFamily: {
      sans: ["Lato, sans-serif"],
    },
    extend: {
      padding: {
        7.5: "30px",
      },
      margin: {
        0.25: "1px",
        7.5: "30px",
      },
      gap: {
        7.5: "30px",
        13: "52px",
        12.5: "50px",
      },
    },
  },
  plugins: [],
};
