/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#0ea5e9',
        'data-cyan': '#06b6d4',
        'alert-orange': '#f97316',
      },
    },
  },
  plugins: [],
};
