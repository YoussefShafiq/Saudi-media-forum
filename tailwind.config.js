/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'arrows-pattern': "url('/src/assets/images/arrows-bg.png')",
      },
      fontFamily: {
        madani: ['Madani', 'sans-serif'],
      },
      colors: {
        primary: '#003d36',
        secondary: '#02645b',
        lightgreen: '#28aa3a',
        lemon: '#92d240'
      },
    },
  },
  plugins: [],
}

