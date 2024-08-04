/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
    },
    extend: {
      animation: {
        typing: "typing 3.5s steps(30, end) infinite",
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
      },
    },
  },
  plugins: [],
};
