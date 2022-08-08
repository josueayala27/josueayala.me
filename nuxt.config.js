import i18n from './config/i18n';
import googleFonts from './config/google-fonts';
import content from './config/content';

export default {
  head: {
    title: 'Josué Ayala | Blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@joscode' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/main.css'],

  plugins: [
    '@/plugins/firebase.client.ts',
    '@/plugins/filters.ts',
    '@/plugins/dayjs.ts',
    '@/plugins/v-click-outside.client.ts',
    '@/plugins/v-sanitize.client.ts',
    '@/plugins/firebase.client.ts',
  ],

  components: {
    global: true,
    dirs: [
      '@/components/ui',
      '@/components/ui/typography',
      '@/components/ui/dropdown',
      '@/components/blog',
      '@/components/blog/using-lottie-files-with-nuxtjs',
      '@/components/layout',
    ],
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@nuxtjs/svg',
    '@nuxtjs/google-fonts',
  ],

  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/i18n'],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  publicRuntimeConfig: {
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  },

  content,
  googleFonts,
  i18n,
};
