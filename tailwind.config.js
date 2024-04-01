/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      yellow: {
        "100": "#F8A225",
      },
      black: {
        "50": "#006077",
        "100": "#000"
      },
      white: {
        "50": "#FFE9E9",
        "100": "#fff",
      }
    },
    fontFamily: {
      'slackey': ["'Slackey', sans-serif"],
      'nanum': ["'Nanum Pen Script', cursive"]
    }
  },
  plugins: [],
}
