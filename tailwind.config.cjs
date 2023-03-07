/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/routes/**/*.jsx",
    "*.{html,js}",
    "./*.{html,js,ts,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
    "./index.html"
  

    // Or if using `src` directory
    ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
