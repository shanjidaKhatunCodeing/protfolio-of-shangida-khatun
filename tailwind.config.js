/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // font family
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        
      },
      // font family

      // colors
      colors: {
        'primaryColor': '#5E3BEE',
        'secoundaryColor': '#282938',
        'parayColor': '#1C1E53',
        'whiteColor': '#FFFFFF',
        'bgColor': '#F5FCFF',
      },
      // colors

      // max width
      maxWidth: {
        'container': '1200px',
      },
      // max width
    },
  },
  plugins: [],
}


