module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      'jetbrains-mono': ['JetBrains Mono', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
