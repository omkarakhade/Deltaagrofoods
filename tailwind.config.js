/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'delta-green': '#1FA34D',
        'delta-green-dark': '#158A3E',
        'delta-navy': '#1E2A78',
        'delta-gold': '#D4AF37',
        'delta-cream': '#FDF8ED',
        'delta-pink': '#FBE4E4',
      },
    },
  },
  plugins: [],
};
