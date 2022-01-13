const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
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
