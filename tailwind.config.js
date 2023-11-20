/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "Fira-Sans": ["fira-sans", "sans-serif"],
        "Edu-nsw": ["edu-nsw", "sans-serif"],
      },
      colors: {
        primary: "rgb(30 41 59)",
        secondary: "rgb(226 232 240)",
        darkPrimary: "rgb(51 65 85)",
      },
    },
  },
  plugins: [],
};
