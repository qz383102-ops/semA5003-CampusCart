/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@windmill/react-ui/lib/defaultTheme.js",
    "node_modules/@windmill/react-ui/dist/index.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#123abc",
        secondary: "#2ecc71",
        accent: "#e74c3c",
      },
    },
  },
  plugins: [],
};
