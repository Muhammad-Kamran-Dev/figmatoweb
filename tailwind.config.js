/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      coiny: ["Coiny", "cursive"],
      sono: ["Sono", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
