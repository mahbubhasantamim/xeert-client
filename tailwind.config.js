/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "rgb(30 41 59)",
        secondary: "rgb(226 232 240)"
      },
    },
  },
  plugins: [],
};
