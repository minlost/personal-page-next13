import { url } from "inspector"
import type { Config } from "tailwindcss"
import plugin from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    cursor: {
      noraml: "url(/cursors/normal.cur), pointer",
      link: "url(/cursors/link.cur), pointer",
    },
    extend: {
      gridTemplateColumns: {
        "3fr": "repeat(3, 1fr)",
      },
      gridTemplateRows: {
        "3fr": "repeat(3, 1fr)",
      },
      textShadow: {
        def: " 1px 3px #d64444, -1px -3px #5a7460",
        anim: "1px 3px #ffff, -1px -3px #0c0c0c",
        footerLinks: "1px 3px #ffff, -1px -3px #208d20",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "space-background":
          "radial-gradient(ellipse at bottom, #000000 0%, #000000 100%)",
        noise: "url('/img/noise.png')",
        noise2: "url('/img/noise2.png')",
        "controller-body-bg":
          "linear-gradient(to bottom left, rgb(44, 44, 44), rgb(20, 20, 20))",
        "controller-bg": "linear-gradient(to bottom left, #999696, #333333)",
      },
      keyframes: {
        textShaking: {
          "0%": {
            transform: "translateY(0)        ",
            filter: "blur(10px)",
          },
          "10%": { transform: "translateY(-2px)" },
          "20%": { transform: "translateY(2px)" },
          "30%": { transform: "translateY(-2px)", filter: "blur(5px)" },
          "40%": { transform: "translateY(2px)" },
          "50%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-2px)", filter: "blur(7px)" },
          "70%": { transform: "translateY(2px)" },
          "80%": { transform: "translateY(-2px)" },
          "90%": { transform: "translateY(2px)" },
          "100%": { transform: "translateY(0)        ", filter: "blur(0px)" },
        },

        blinkmulticolor: {
          "0%": { backgroundColor: "#F00" },
          "20%": { backgroundColor: "#0F0" },
          "40%": { backgroundColor: "#00F" },
          "60%": { backgroundColor: "#FF0" },
          "80%": { backgroundColor: "#F0F" },
          "100%": { backgroundColor: "#F00" },
        },
        move: {
          "0%": {
            transform: "translateY(0px)",
          },
          "33%": {
            transform: "translateY(20px)",
          },
          "66%": {
            transform: "translateY(-20px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        noise: {
          "0%": {
            backgroundOpacity: "0%",
            opacity: "0",
          },
          "100%": {
            backgroundOpacity: "100%",
            opacity: "1",
          },
        },
      },
      animation: {
        noise: "noise 5 ease-in-out infinite",
        move: "move 10s linear infinite",
        blinkmulticolor: "blinkmulticolor 0.5s linear infinite",
        textShaking: "textShaking 0.5s ",
        textShakingFirstLoad: "textShaking 2s ",
      },
      boxShadow: {
        "screen-glowing": "0px 0px 14px 0px rgba(255, 255, 255, 0.5)",
        "controller-button-shadow": "-1px 1px 0px 0px rgba(0, 0, 0, 1)",
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
}
export default config
