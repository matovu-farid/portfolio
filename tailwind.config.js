/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    keyframes: {
      entrance: {
        '0%': {      
          filter: 'blur(0.5rem)',
          tranform: 'scale(0.5)'
        },
        '50%': {
          filter: 'blur(0.25rem)',
          tranform: 'scale(0.75)'
        },
        '100%': {
          filter: 'blur(0)',
          tranform: 'scale(1)'
        }
      }
    },
    animation: {
      'entrance' : 'entrance 4s ease-in 1'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
