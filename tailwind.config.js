/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    keyframes: {
      modalEnter: {
        "0%": { transform: "translate(0,50px)", opacity: "0" },
        "100%": { transform: "translate(0,0)", opacity: "1" },
      },
      rotate90: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(90deg)" },
      },
    },
    animation: {
      modalEnter: "modalEnter 1s ease-in-out",
      rotate90: "rotate90 1s ease-in-out",
    },
    screens: {
      my_phone: "500px",
      sm: "750px",
      xs: "400px",
    },
    extend: {
      fontSize: {
        xxs: "0.5rem",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        bg_purple: {
          500: "#5A2487",
        },
        nav_blue: {
          500: "#1A3B71",
        },
        btn_golden_yellow: {
          500: "#CFAA3F",
        },
        btn_green: {
          400: "#51E181",
          500: "#2EDC68",
        },
        btn_red: {
          400: "#EB474D",
          500: "#E62429",
        },
        form_gray: {
          800: "#242424",
          500: "#ADADAD",
        },
        btn_blue: {
          400: "#A8A7F1",
          500: "#9796EE",
        },
      },
    },
  },
  plugins: [],
};
