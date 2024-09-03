const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {"twitter-blue": "#1DA1F2",
      ...colors,

    },
    extend: {},
  },
  plugins: [],
}

