/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: { 950: "#020617" },
        safety: { 500: "#16a34a", 600: "#15803d" },
        amber: { 500: "#f59e0b" }
      },
      boxShadow: {
        soft: "0 16px 45px rgba(15, 23, 42, 0.10)"
      }
    }
  },
  plugins: []
};