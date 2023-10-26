/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary:"#6341EF",
        lightPurple:"#EEEBFE",
        lightBlue:"#D8F2FF",
        skyBlue:"#40c2fc",
        Green:"#58c896",
        Yellow:"#fdb338",
        lightCream:"#FEF7F1",
        Brown:"#D58E4C",
        lightRed:"#FAE8DC"
      }
    },
  },
  plugins: [],
}
