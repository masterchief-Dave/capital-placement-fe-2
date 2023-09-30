/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sidebar-box-shadow': '0px 4px 23px 0px rgba(0, 0, 0, 0.05)',
        'header-icons-container': '0px 4px 25px 0px rgba(141, 141, 141, 0.05)',
        'menu-dropdown': '0px 4px 25px 0px rgba(29, 78, 216, 0.05)'
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}