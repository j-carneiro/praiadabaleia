/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
theme: {
  extend: {
    colors: {
      primary: "#215CA8",
      dark: "#212121",
      "gray-soft": "#6B7280",
    },
    boxShadow: {
      soft: "0 10px 30px rgba(0,0,0,0.08)",
      strong: "0 20px 60px rgba(0,0,0,0.15)",
    },
    fontSize: {
      hero: "clamp(2.5rem, 5vw, 4.5rem)",
    },
  },
},
  plugins: [],
};