
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap' },
    ],
    script: [
      { src: '/js/jquery.min.js', body: true },
      { src: '/js/jquery-migrate-3.0.1.min.js', body: true },
      { src: '/js/popper.min.js', body: true },
      { src: '/js/bootstrap.min.js', body: true },
      { src: '/js/jquery.easing.1.3.js', body: true },
      { src: '/js/jquery.waypoints.min.js', body: true },
      { src: '/js/jquery.stellar.min.js', body: true },
      { src: '/js/owl.carousel.min.js', body: true },
      { src: '/js/jquery.magnific-popup.min.js', body: true },
      { src: '/js/aos.js', body: true },
      { src: '/js/jquery.animateNumber.min.js', body: true },
      { src: '/js/scrollax.min.js', body: true },
      { src: '/js/main.js', body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/layouts/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/open-iconic-bootstrap.min.css',
    '@/assets/css/animate.css',
    '@/assets/css/owl.carousel.min.css',
    '@/assets/css/owl.theme.default.min.css',
    '@/assets/css/magnific-popup.css',
    '@/assets/css/aos.css',
    '@/assets/css/ionicons.min.css',
    '@/assets/css/bootstrap-datepicker.css',
    '@/assets/css/jquery.timepicker.css',
    '@/assets/css/flaticon.css',
    '@/assets/css/icomoon.css',
    '@/assets/css/style.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  env: {
    baseUrl: 'http://167.99.31.37:3000',
    baseUrlApi: 'http://167.99.31.37:8000'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isClient }) {
      // hanya mengExtend webpack config untuk client-bundle
      if (isClient) {
        config.devtool = 'eval-source-map'
      }
    },
  }
}
