export default {
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "sans-serif"],
      mono: ["JetBrains Mono Variable", "sans-serif"],
    },
    extend: {
      colors: {
        "pastel-green": {
          DEFAULT: "#66D88C",
          50: "#F8FDFA",
          100: "#E8F9EE",
          200: "#C8F1D5",
          300: "#A7E9BD",
          400: "#87E0A4",
          500: "#66D88C",
          600: "#39CD6A",
          700: "#2AA453",
          800: "#1E773C",
          900: "#134B26",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
