/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 6s infinite"
      },

      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(35px, -55px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-25px, 25px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },

      fontFamily: {
        'cabinet-grotesk': ['Cabinet', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}
