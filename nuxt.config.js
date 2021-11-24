export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'xplore',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: ['~/plugins/fuse.js', '~/plugins/analytics.js'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/stylelint-module',
  ],
  modules: ['@nuxtjs/pwa', '@nuxtjs/toast'],
  build: {},
  generate: {
    fallback: true,
  },
  pwa: {
    meta: {
      name: 'Xplore',
      author: 'Venki Vijay',
      description: 'TCS Xplore Java Solutions',
      theme_color: '#ffffff',
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
    },
  },
};
