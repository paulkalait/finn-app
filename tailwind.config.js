module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'white',
        none: "none"
      }
    },
    fontFamily: {
        quicksand: ['Quicksand','sans-serif']
    },
    gridTemplateRows: {
      // tailwind rows only go up to 6 so we have to manually create 7 and 8 
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
    },
  },
  plugins: [],
}
