/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        mlg: "6px 6px 16px 0px #D1CDC740",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(17.875rem, 1fr))",
      },
      borderWidth: {
        "border-3": "4px",
      },
    },
  },
  plugins: [],
};
