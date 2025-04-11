/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand": "#8257E5",
        "brand-hover": "#996DFF",
        "text-on-brand-color": "#FFF",
        "surface-primary": "#18181b",
        "surface-secondary": "#27272a",
        "surface-secondary-hover": "#3f3f46",
        "stroke": "#52525b",
        "tooltip": "#f4f4f5",
        "text-primary": "#f4f4f5",
        "text-secondary": "#a1a1aa",
        "text-on-tooltip": "#27272a",
      },
      fontFamily: {
        inter: 'Inter, serif'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}

