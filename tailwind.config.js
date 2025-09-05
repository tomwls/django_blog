/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './blog/templates/blog/**/*.html',
    './templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        bodybg: '#f6f6f6ff',
        postbg: '#060216ff',
      },
    },
  },
  plugins: [],
}

