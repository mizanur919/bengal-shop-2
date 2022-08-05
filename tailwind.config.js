/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "411px",
      sm: "540px",
      smd: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "light-black": "#666666",
        "dark-orange": "#FF5C00",
        "red-orange": "#FF5E4D",
        gray: "#F5F5F5",
        "gray-dark": "#000000",
        "gray-one": "#333333",
        "gray-two": "#F7F7F7",
        "gray-three": "#828282",
        "gray-four": "#BDBDBD",
        "gray-five": "#4F4F4F",
        "gray-six": "#E0E0E0",
        "gray-seven": "#F2F2F2",
        "gray-eight": "#999999",
        "gray-hover": "#20202099",
        "green-two": "#27AE60",
        pinkLight: "#FFF0DC",
        "pink-two": "#FAF4F0",
        yellow: "#FABE50",
        "light-sky": "#EBFAEB",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          padding: "0px 1rem",
          "@screen xs": {
            maxWidth: "auto",
            margin: "0px auto",
          },
          "@screen sm": {
            maxWidth: "462px",
            margin: "0px auto",
          },

          "@screen smd": {
            maxWidth: "462px",
            margin: "0px auto",
          },
          "@screen md": {
            maxWidth: "750px",
            margin: "0px auto",
            padding: "0px auto",
          },
          "@screen lg": {
            maxWidth: "970px",
            margin: "0px auto",
          },
          "@screen xl": {
            maxWidth: "1170px",
            margin: "0px auto",
          },

          "@screen 2xl": {
            maxWidth: "1250px",
            margin: "0px auto",
          },

          "@screen 3xl": {
            maxWidth: "1710px",
            margin: "0px auto",
          },
        },
      });
    },
  ],
};
