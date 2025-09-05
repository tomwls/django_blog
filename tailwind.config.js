/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './blog/templates/blog/**/*.html',
    './templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        headerbg: '#ffffff',
        logobg: '#e4ecf6ff',
        logotext: '#09008dff',
        bodybg: '#f6f6f6ff',
      },
    },
  },
  plugins: [],
}

