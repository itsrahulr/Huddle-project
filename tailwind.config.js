/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        LightPink: "hsl(321, 100%, 78%)",
        LightRed: "hsl(0, 100%, 63%)",
        VeryDarkCyan: "hsl(192, 100%, 9%)",
        VeryPaleBlue: "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
