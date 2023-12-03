module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '100': '38rem',
        '97': '34rem',
      },
      width: {
        '30': '8rem',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
      },
      colors:{
        'darkBlue-BG':'#28293E', 
        'stroke':'#16191C',
        'textOrange':'#EF6D58',
        'shadowBox':'#C9CAD9',
        'shadow':'#999AAF',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.502rem',
        '7xl': '3.908rem',
        '8xl': '4.441rem',
      }
    },
  },
  plugins: [],
};