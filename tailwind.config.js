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
        '25%': {
          filter: 'blur(0.35rem)',
          tranform: 'scale(0.63)'
        },
        '50%': {
          filter: 'blur(0.25rem)',
          tranform: 'scale(0.75)'
        },
        '75%': {
          filter: 'blur(0.13rem)',
          tranform: 'scale(0.87)'
        },
        '100%': {
          filter: 'blur(0)',
          tranform: 'scale(1)'
        }
      }
    },
    animation: {
      'entrance' : 'entrance 0.5s 1 ease-in-out'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
