import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
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
});
