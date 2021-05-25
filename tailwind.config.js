const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
        '3xl': '1600px',
        '4xl': '1920px',
      },
      colors: {
        ...colors,
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
        }
      }, 
      stroke: {
        ...colors
      }
    },
  },
  variants: {
    extend: {
      stroke: ['hover', 'focus']
    },
  },
  plugins: [],
}
