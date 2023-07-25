/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        mlg: "-6px -6px 16px -7px rgba(255, 255, 255, 0.50), 6px 6px 16px 0px rgba(209, 205, 199, 0.25)",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, 17.875rem)",
      },
      borderWidth: {
        "border-3": "4px",
      },
      backgroundColor: {
        secondary: "#FCFCFD",
      },
      fontSize: {
        s3xl: "32px",
      },
      borderRadius: {
        slg: "10px",
      },
      colors: {
        secondary: "#828282",
      },
    },
  },
  plugins: [],
};
