/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#50a8eb",
            "primary-light": "#6cb9f5",
            "primary-dark": "#4581b0",
            secondary: "#f28e29",
            "secondary-light": "#fca751",
            "secondary-dark": "#c97826"
        }
    },
  },
  plugins: [],
}
