/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      //   mx: "800px",
      lg: "1024px",
    },
    extend: {
      // animation to slide from bottom to top
      keyframes: {
        "slide-to-top": {
          "0%": {
            transform: "translateY(100px)",
          },
          "75%": {
            transform: "translateY(-5px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        // animation to slide from top to bottom
        "slide-to-bottom": {
          "0%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(200px)",
          },
        },
      },
      animation: {
        "slide-to-top": "slide-to-top 0.75s forwards",
        "slide-to-bottom": "slide-to-bottom 0.75s forwards",
      },

      plugins: [],
    },
  },
};
