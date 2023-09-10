const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
      "3xl": "1600px",
      "4xl": "1920px",
    },
    extend: {
      colors: {
        ...colors,
        colors: {
          transparent: "transparent",
          current: "currentColor",
        },
      },
      stroke: {
        ...colors,
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
    },
    ...defaultTheme,
  },
  variants: {
    extend: {
      stroke: ["hover", "focus"],
    },
  },
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  plugins: [],
};
