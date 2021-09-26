module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'carnation': '#ff525d',
        'fadedRed': '#ff7a85',
        'regalBlue': '#1f3f5b',
        'white': '#ffffff',
        'iron': '#c8c8cb',
        'fiord': '#4b5862',
        'blackRussian': '#25252d',
        'salmon': '#ff8f70',
        'radicalRed': '#ff3d54',
        'valhalla': '#2c2d3f',
        'portGore': '#3f4164'
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      fontSize: {
        'heroHeaderMobile': '36px',
        'heroHeaderDesktop': '64px',
        'heroSubHeaderMobile': '18px',
        'heroSubHeaderDesktop': '20px',
        'subHeaderMobile': '28px',
        'subHeaderDesktop': '40px',
        'h3Header': '28px',
        'baseText': '16px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
