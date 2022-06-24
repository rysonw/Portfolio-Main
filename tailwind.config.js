/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Nunito', sans-serif",
        title: "'Raleway', sans-serif",
      },
      colors: {
        primary: "#E8AF94",
        secondary: "#F1E2D2",
        "custom-blue": "#2C2255",
        "custom-purple": "#443583",
        "custom-orange": "#F7941E",
      },
      boxShadow: {
        skill: "5px 5px 20px rgb(0 0 0 / 20%)",
      },
      screens: {
        custom: "1200px",
        custom1000: "1000px",

        custom1156: "1156px",
        custom756: "756px",
        custom860: "860px",
        custom830: "830px",
        // => @media (min-width: 1200px) { ... }
        custom2: "654px",
      },
    },
  },
  plugins: [],
};
