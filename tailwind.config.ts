// tailwind.config.ts
require('@tailwindcss/typography')
export default {
  theme: {
    extend: {
      colors: {
        primary: '#215CA8',
        dark: '#212121',

      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Outfit', 'sans-serif'], // Use essa nos seus H1, H2, H3
      },
    },
  },
};