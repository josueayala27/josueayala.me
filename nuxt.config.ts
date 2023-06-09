import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
      script: [
        {
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5295326290228563",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  modules: [
    "nuxt-gtag",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/motion/nuxt",
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

  gtag: {
    id: process.env.GTAG_ID,
  },

  devtools: {
    enabled: true,
  },
});
