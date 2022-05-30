module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '574px' },
      // => @media (max-width: 574px) { ... }

      minsx: '574px',
      // => @media (min-width: 574px) { ... }

      minsm: '640px',
      // => @media (min-width: 640px) { ... }

      minmd: '768px',
      // => @media (min-width: 768px) { ... }

      minlg: '1024px',
      // => @media (min-width: 1024px) { ... }

      minxl: '1280px',
      // => @media (min-width: 1280px) { ... }

      min2xl: '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },

    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      dmserif: ['"DM Serif Text"', 'serif'],
      Koulen: ['Koulen', 'cursive'],
      tapestry: ['Tapestry', 'cursive'],
      lexend: ['Lexend', 'sans-serif'],
      viga: ['Viga', 'sans-serif'],
      shrik: ['Shrikhand', 'cursive'],
      allerta: ['"Allerta Stencil"', 'sans-serif']
    },
  },
  plugins: [],
};