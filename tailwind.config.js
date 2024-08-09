/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
export const plugins = [
  plugin(({ theme, addUtilities }) => {
    const neonUtilities = {};
    const colors = theme("colors");
    for (const color in colors) {
      if (typeof colors[color] === "object") {
        const color1 = colors[color]["500"];
        const color2 = colors[color]["700"];
        neonUtilities[`.neon-${color}`] = {
          boxShadow: `0 0 5px ${color1},0 0 20px ${color2}`,
        };
      }
    }
    addUtilities(neonUtilities);
  }),
];
