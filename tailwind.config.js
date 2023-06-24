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
        "regal-blue": "#243c5a",
        white: "#f2f2f2",
        "dark-blue": "#101453",
        "medium-blue": "#7586d4",
        "light-blue": "#ced9f9",
        "light-dark": "#f2f0f0",
        "text-blue": "#0d1b2a",

        "text-grey": "#9195A5",
        " bg-slate-300": "#d5e1cb",
      },
    },
  },
  plugins: [],
};
