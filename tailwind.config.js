/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'usf-green': '#5C8727',
        'usf-orange': '#CF4520',
        'usf-gray': '#717073',
        'usf-dark': '#1a1a1a',
        'badge-orange': '#CF4520',
        'badge-red': '#CF4520',
        'pill-gray': '#F5F5F5',
        'border-light': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Aktiv Grotesk', 'system-ui', 'sans-serif'],
        'display': ['Roboto', 'Balboa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
