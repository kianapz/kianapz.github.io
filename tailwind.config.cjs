/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "Helvetica"],
      "Roboto-light": ["Roboto-light", "Georgia"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        gradientIn: {
          "0%": { backgroundImage: "linear-gradient(127deg, black,white)" },
          "100%": {
            backgroundImage: "linear-gradient(127deg, transparent,transparent)",
          },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.95) translateY(8px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        fadeOut: "fadeOut 0.5s ease-out",
        gradientIn: "gradientIn 1s ease-in",
        scaleIn: "scaleIn 0.25s ease-out",
      },
    },
  },
  plugins: [],
};
