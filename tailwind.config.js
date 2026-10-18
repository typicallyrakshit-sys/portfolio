/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E8',
        black: '#0A0A0A',
        lime: '#C8F135',
        orange: '#FF5C00',
        cobalt: '#1A1AFF',
        'off-white': '#FAFAF7',
      },
      boxShadow: {
        brutal: '5px 5px 0px #0A0A0A',
        'brutal-lg': '8px 8px 0px #0A0A0A',
        'brutal-sm': '3px 3px 0px #0A0A0A',
        'brutal-lime': '5px 5px 0px #C8F135',
        'brutal-orange': '5px 5px 0px #FF5C00',
      },
    },
  },
  plugins: [],
};
