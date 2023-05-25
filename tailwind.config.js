/** @type {import('tailwindcss').Config} */
export default {
  content: ["./main.js", "./index.html"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        // ### Primary
        "Purple-primary": "hsl(259, 100%, 65%)",
        "Light-red-primary": "hsl(0, 100%, 67%)",
        // ### Neutral
        "White-neutral": "hsl(0, 0%, 100%)",
        "Off-white-neutral": "hsl(0, 0%, 94%) ",
        "Light-grey-neutral": "hsl(0, 0%, 86%) ",
        "Smokey-grey-neutral": "hsl(0, 1%, 44%) ",
        "Off-black-neutral": "hsl(0, 0%, 8%)  ",
      },
    },
  },
  plugins: ["tailwindcss"],
};
