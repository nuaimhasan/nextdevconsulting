module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInRight: "slideInRight 0.8s ease-out",
        slideInLeft: "slideInLeft 0.8s ease-out",
      },
      colors: {
        primary: "#0C8500",
        secondary: "#004090",
        neutral: "#444",
        "neutral-content": "#757872",
        "base-100": "#ffffff",
        orange: "#FFA500",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      {
        light: {
          primary: "#0e4677",
          secondary: "#FF0000",
          neutral: "#444",
          "neutral-content": "#757872",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
