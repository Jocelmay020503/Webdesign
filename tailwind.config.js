/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00acc1',
        secondary: '#00bcd4',
        accent: '#0097a7',
        water: '#00bcd4',
        'water-light': '#b2ebf2',
        'water-dark': '#00838f',
      },
    },
  },
  plugins: [],
}
