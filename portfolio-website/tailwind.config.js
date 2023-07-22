/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "first-color": "hsl(207, 65%, 65%)",
        "title-color": "hsl(207, 4%, 16%)",
        "text-color": "hsl(207, 4%, 28%)",
        "text-color-light": "hsl(207, 4%, 56%)",
        "body-color": "hsl(207, 4%, 99%)",
        "container-color": "hsl(207, 4%, 95%)",

        dark: {
          "title-color": "hsl(207, 4%, 95%)",
          "text-color": "hsl(207, 4%, 65%)",
          "body-color": "hsl(207, 4%, 10%)",
          "container-color": "hsl(207, 4%, 12%)",
          "border-color": "hsl(207, 4%, 32%)",
        },
      },

      fontFamily: {
        "body-font": ["Roboto", "sans-serif"],
        "title-font": ["Lora", "serif"],
      },

      boxShadow: {
        "box-shadow-1": "0px 4px 20px hsla(207, 24%, 35%, 0.1)",
        "box-shadow-2": "0px 4px 12px hsla(207, 24%, 35%, 0.15)",
        "box-shadow-dark": "0px 4px 20px hsla(207, 24%, 8%, 0.4)",
      },

      animation: {
        bounce: "bounce 0.8s",
      },

      keyframes: {
        bounce: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translateY(-6px)" },
          "40%": { transform: "translate(0)" },
          "60%": { transform: "translateY(-3px)" },
          "80%": { transform: "translate(0)" },
        },
      },
    },
  },
  plugins: [],
};
