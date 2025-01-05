/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      animation: {
        typing: "typing 3.5s steps(30, end) infinite",
        fadeInLeftToRight: "fadeInLeftToRight 5s ease-in-out",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        typing: {
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        },
        fadeInLeftToRight: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
