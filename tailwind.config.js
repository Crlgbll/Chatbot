/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pf: ["Playfair Display", "serif"],
        sand: ["Quicksand", "sans-serif"],
        pops: ["Poppins", "sans-serif"],
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'phone': {'max': '639px'},
    },
    darkMode: 'class',
    
  },
  plugins: [],
}

