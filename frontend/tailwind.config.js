/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bbd9fe',
          300: '#8dc1fd',
          400: '#589ef9',
          500: '#317cf4',
          600: '#1d5ee8',
          700: '#1749d4',
          800: '#183cac',
          900: '#193688',
          950: '#102153',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        learning: {
          amber: '#f59e0b',
          rose: '#f43f5e',
          violet: '#8b5cf6',
          sky: '#0284c7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cal Sans', 'Cabinet Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(49, 124, 244, 0.25)',
        'glow-accent': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}
