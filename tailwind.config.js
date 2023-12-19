/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    container: {
      // center container by default
      center: true
    },
    extend: {
      colors: {
        "c60": "#22092C",
        "c30": "#872341",
        "c10": "#F05941",
        // "c10-active": "#ec9756",
        "c10-text": "#ffffff",
        "c30-text": "#ffffff",
        "c30-disabled": colors.gray["300"]
      },
    },
  },
  plugins: [],
}

