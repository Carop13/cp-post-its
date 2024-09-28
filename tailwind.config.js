/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'pale-yello': '#fef3c7',
      'pale-green': '#d1fae5',
      'pale-red': '#ffe4e6',
      'pale-blue': '#a5f3fc',
      'pale-red': '#ffe4e6',
      'pale-purple': '#a5b4fc',
      'gray-50': '#fafafa'
    },
  },
  plugins: [],
}