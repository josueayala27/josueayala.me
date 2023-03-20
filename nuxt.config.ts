import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],
  vite: {
    plugins: [svgLoader()],
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  content: {
    highlight: {
      theme: "dracula",
    },
  },
  googleFonts: {
    overwriting: false,
    display: "swap",
    prefetch: false,
    preconnect: false,
    preload: true,
    download: true,
    base64: false,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "JetBrains Mono": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
