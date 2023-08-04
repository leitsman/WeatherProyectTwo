/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
}

