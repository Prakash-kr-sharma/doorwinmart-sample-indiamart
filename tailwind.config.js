/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F5FA',
          100: '#E2EBF5',
          200: '#C7D9EC',
          300: '#9FBFE0',
          400: '#699CCF',
          500: '#3D7CBD',
          600: '#235D9B',
          700: '#1B4A7D',
          800: '#153C65',
          900: '#0F2B48',
          950: '#0A1C30',
        },
        navy: {
          DEFAULT: '#0B2545',
          dark: '#081A32',
          light: '#13315C',
          deep: '#07182C'
        },
        bronze: {
          50: '#FAF6F0',
          100: '#F3ECE0',
          200: '#E6D7BF',
          300: '#D5C09B',
          400: '#C5A880',
          500: '#B08E5E',
          600: '#947245',
          700: '#755734',
          800: '#5A4227',
          900: '#42301D',
        },
        charcoal: {
          50: '#F6F7F8',
          100: '#EDEFF1',
          200: '#D9DDE2',
          300: '#B8C0CA',
          400: '#8E9BA9',
          500: '#6E7B8B',
          600: '#55606E',
          700: '#434C57',
          800: '#2A3037',
          900: '#181C21',
          950: '#0F1215',
        },
        warm: {
          50: '#FCFBF9',
          100: '#FAF8F5',
          200: '#F4F1EA',
          300: '#ECE6DC',
          400: '#DDD4C5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'card': '0 8px 30px rgba(15, 43, 72, 0.06)',
        'card-hover': '0 20px 40px rgba(15, 43, 72, 0.12)',
        'elevated': '0 25px 50px -12px rgba(11, 37, 69, 0.18)',
      }
    },
  },
  plugins: [],
}
