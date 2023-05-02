/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#40916C',
        'second-green': '#52B788',
        'xtralight-green': "#F3FFF5",
        'xtralight-gray': "#FCFCFC",
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        'otisHome': "url('./src/assets/otisHome.png')",
      }
    },
  },
  plugins: [],
};

