export default {
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'xplore',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/fuse.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Google Analytics
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  // PWA
  pwa: {
    meta: {
      name: 'Xplore',
      author: 'Venki Vijay',
      description: 'TCS Xplore Java Solutions',
      theme_color: '#000',
      lang: 'en',
      ogType: 'website',
      ogSiteName: 'Xplore',
      ogTitle: 'Java Xplore Question and Solutions',
      ogDescription: 'One stop to prepare for TCS Xplore Assessment',
      ogHost: 'https://xplore.venkivijay.com',
    },
    manifest: {
      name: 'Xplore Solutions',
      short_name: 'Xplore',
      description: 'One stop to prepare for TCS Xplore Assessment',
      lang: 'en',
      display: 'standalone',
    },
    workbox: {
      offlineAnalytics: true,
      // runtimeCaching: [
      //   {
      //     urlPattern: 'https://cdn.buymeacoffee.com/buttons/v2/default-red.png',
      //     method: 'GET',
      //     strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      //   },
      // ],
    },
  },
};
