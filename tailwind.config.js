/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "danger-color": "#E74040",
        "dark-background-color": "#26335D",
        "light-color": "#FFFFFF",
        "primary-color": "#8D5CF6",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        jost: ["Jost", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
