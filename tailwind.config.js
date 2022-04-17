module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      minWidth: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%'
      },
      width: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%'
      },
      height: {
        '28': '28px'
      }
    },
  },
  plugins: [],
}
