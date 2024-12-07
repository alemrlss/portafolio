/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      colors: {
        primaryBg: {
          light: "#FFFFFF",
          dark: "#1A202C",
        },
        primaryText: {
          light: "#000000",
          dark: "#E5E5E5",
        },
        secondaryText: {
          light: "#555555",
          dark: "#A0AEC0",
        },
        accent: {
          // Opción 1: Diferentes tonos de azul para cada modo
          blueLight: "#1E3A8A", // Azul profundo para modo claro
          blueDark: "#3B82F6", // Azul claro para modo oscuro
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
