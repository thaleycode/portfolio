/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'custom': '2000px', //custom screen size breakpoint
      }
    },
  },
  plugins: [],
}

