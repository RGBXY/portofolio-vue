/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto Mono",
        play: "Playfair Display",
        lora: "Lora",
        eb: "EB Garamond",
        cinzel: "Cinzel",
      },
    },
  },
  plugins: [],
};
