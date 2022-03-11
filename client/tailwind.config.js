module.exports = {
  content: ['./index.html', '**/*.{ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      colors: {
        primary: {
          100: '#f7f8f9',
          DEFAULT: '#3d3ada',
          600: '#2e2ca6',
        },
        secondary: '#12c223',
      },
    },
  },
  plugins: [],
};
