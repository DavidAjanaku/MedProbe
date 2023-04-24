/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

       colors: {
        'white':  '#f2f2f2',
        'dark-blue': '#101453',
        'medium-blue': '#7586d4',
        'light-blue:':'#ced9f9',
      }
    },
  },
  plugins: [],
};

