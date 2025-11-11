/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandPink: "#ec4899",
        brandFuchsia: "#d946ef",
        brandGold: "#f59e0b",
        brandBlue: "#1e3a8a"
      }
    },
  },
  plugins: [],
}
