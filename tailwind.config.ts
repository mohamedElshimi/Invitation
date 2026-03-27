import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        gold: {
          light: '#f5e6c8',
          DEFAULT: '#c9a84c',
          dark: '#8b6914',
        },
        cream: '#faf6ee',
        parchment: '#f4e8d1',
      }
    },
  },
  plugins: [],
} satisfies Config
