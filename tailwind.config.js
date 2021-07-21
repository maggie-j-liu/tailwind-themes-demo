const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  //mode: "jit",
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["themes"],
      gradientColorStops: ["themes"],
      borderColor: ["themes"],
      divideColor: ["themes"],
      placeholderColor: ["themes"],
      textColor: ["themes"],
    },
  },
  plugins: [
    require("tailwind-themes")({
      themes: {
        red: ".red",
        orange: ".orange",
        yellow: ".yellow",
        green: ".green",
        blue: ".blue",
        indigo: ".indigo",
        purple: ".purple",
      },
    }),
  ],
};
