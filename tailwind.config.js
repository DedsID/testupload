/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {

      colors: {
      'u-darkblue': '#2b3d68',
      'u-softblue': '#9797a5',
      },

      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
