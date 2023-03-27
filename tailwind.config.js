/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Acme", "sans-serif"],
      },
      colors: {
        gray: {
          main: "#4F4F4F",
          dark: "#333333",
          light: "#828282",
        },
      },
      margin: {
        20: "20px",
      },
      boxShadow: {
        main: "0 6px 12px rgba(3, 154, 114, 0.24)",
      },
    },
  },
  plugins: [],
};
