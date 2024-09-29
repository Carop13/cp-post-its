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
      'black': '#000000',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'pale-yello': '#fef3c7',
      'pale-green': '#d1fae5',
      'pale-red': '#fee2e2',
      'pale-blue': '#cffafe',
      'pale-purple': '#ede9fe',
      'gray-50': '#fafafa',
      'gray-100': '#f4f4f5'
    },
  },
  plugins: [],
}