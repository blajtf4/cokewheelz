const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],//dodao
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        gray: {
          DEFAULT: '#1a202c', // Adjust the hex code to your preferred shade of dark gray
        }
      },
      backgroundColor: {
        body: '#1a202c', // Here's the dark gray background added
      }
    },
  },
  //plugins: [require('@tailwindcss/forms')],
  plugins: [
    require('@tailwindcss/forms'),
    {                           //dodao
      handler: ({ addBase }) => {
        addBase({
          '@font-face': {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontDisplay: 'swap',
            src: 'url("https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLDz8Z11lFc-K.woff2") format("woff2")',
            unicodeRange: 'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
          },
          // Add additional @font-face rules for other font weights and styles as needed
        });
      },
    },
  ],
}
