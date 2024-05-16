/** @type {import('tailwindcss').Config} */

import theme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0.75rem',
        screens: {
          'xl': theme.screens.lg
        }
      }
    },
  },
  plugins: [],
}

