// tailwind.config.js
module.exports = {
  content: [
    "./content/**/*.{md,html}",
    "./layouts/**/*.html",
    "./themes/Blonde/layouts/**/*.html",
    "./config.toml",
  ],
  safelist: [
    "prose","prose-invert",
    { pattern: /prose-.*/ },
    "dj-toc","dj-toc-content","toc","toc-content"
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        warmgray: {
          700: "#2f3335",
          800: "#1e2022",
          900: "#181a1b",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
