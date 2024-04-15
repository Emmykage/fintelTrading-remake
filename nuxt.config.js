export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  render: {
    injectScripts: true
  },
  inject: [
    {
      src: 'https://example.com/cryptohopper-script.js',
      body: true
    }
  ]
,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fintelTrading',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        id: 'tawk',
        src: '/js/chatbot.js'
      },
      {
        id: 'tradingview',
        src: 'https://www.cryptohopper.com/widgets/js/script'
      },
      {
        id: "news",
        src:"https://www.cryptohopper.com/widgets/js/script"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    'sweetalert2/dist/sweetalert2.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~/plugins/toastr.js', mode: 'client' },
    { src: '~/plugins/enlargeImage.js', mode: 'client' },
    { src: '~/plugins/slider.js', mode: 'client' },
    { src: '~/plugins/trading-view.js', mode: 'client' },
    '~/plugins/bootstrap-vue.client',
    { src: '@/plugins/aos', mode: 'client' },
    {
      src: '~/plugins/tawk-messenger.client.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
