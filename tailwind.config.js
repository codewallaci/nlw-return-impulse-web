module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          300: '#589fda',
          500: '#2c82c9',
          600: '#2c62c9',
        }
      },
      borderRadius:{
        md: '4px',
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    // ...
  ],
}
