/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        OnlyUsedTeslaRed: '#E80013',
        OnlyUsedTeslaRedHover: '#6C7884',
        OnlyUsedTeslaBlue: '#010E25',
        OnlyUsedTeslaBlack: '#000',
        OnlyUsedTeslaOrange: '#ff9e00',
        OnlyUsedTeslaYellow: '#fe0',
        OnlyUsedTeslaGray: '#e1e5e8',
      },
    },
  },
  plugins: [],
};

