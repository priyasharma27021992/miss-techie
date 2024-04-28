/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Arial"'],
    },
    extend: {
      animation: {
        slidein300: "slidein 1s ease 300ms infinite",
        slidein600: "slidein 1s ease 600ms infinite",
        slidein900: "slidein 1s ease 900ms infinite",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transfor: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
