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
      fontFamily: {
        "acumin-pro": ["Acumin Pro"],
        "acumin-pro-italic": ["Acumin Pro", "sans-serif"],
        "acumin-pro-bold": ["Acumin Pro", "sans-serif"],
        "acumin-pro-bold-italic": ["Acumin Pro", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      fontStyle: {
        italic: "italic",
      },
      colors: {
        white: "#f2f2f2",
        "dark-blue": "#101453",
        "medium-blue": "#7586d4",
        "light-blue:": "#ced9f9",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
