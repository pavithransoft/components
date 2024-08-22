/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-custom": {
            /* Firefox */
            "scrollbar-width": "thin",
            "scrollbar-color": "#888 transparent",

            /* Safari and Chrome */
            "&::-webkit-scrollbar": {
              width: "12px" /* Width of the scrollbar */,
              height: "12px" /* Height of the horizontal scrollbar */,
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888" /* Color of the scroll thumb */,
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent" /* Color of the track */,
              borderRadius: "10px",
            },
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
