/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd4ff',
          300: '#8eb6ff',
          400: '#5a8dff',
          500: '#3366ff',
          600: '#2a4fe6',
          700: '#2440bf',
          800: '#1f3599',
          900: '#1a2d78',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
