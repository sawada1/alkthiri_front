// import { getPrerenderRoutes } from "./utils/generate-routes";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules:["@nuxtjs/i18n" , "@nuxt/ui"  , "@pinia/nuxt" , "@nuxt/image" , "nuxt-swiper" , "@nuxt/icon" , "@vee-validate/nuxt" , '@nuxtjs/gtm'],
  // tailwindcss: {
  //   configPath: 'tailwind.config.ts',
  // },
  // target: 'static',
  // experimental: {
  //   payloadExtraction: true, // Enables dynamic payload extraction
  // },
  // routeRules:{
  //   '/offers/**': { isr: 60 } // Enable ISR (Incremental Static Regeneration)
  // },

  // vite: {
  //   cacheDir: false
  // },
  plugins:["~/plugins/vue3-slider.client"],
  nitro: {
    minify: true,
    routeRules: {
    
      // Cache static assets for 1 year
      '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },

      // Cache images for 1 month
      '/images/**': { headers: { 'Cache-Control': 'public, max-age=2592000, stale-while-revalidate=86400' } },
    },
    // prerender: {
    //   crawlLinks: true,
    //   failOnError: false,
    //   // routes: await getPrerenderRoutes()
    // },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
},
  colorMode: {
    preference: 'light'
  },
  image: {
    provider: "none",
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    quality: 80,
  },
  i18n: {
    locales: [
      {
        code: "en",
        language: "en",
        name: "EN",
        dir: "ltr",
        file: "en.json",
      },
      {
        code: "ar",
        language: "ar",
        name: "AR",
        dir: "rtl",
        file: "ar.json",
      },
    ],
    defaultLocale: "ar",
    lazy: true,
    langDir: "lang",
    legacy: false,
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true, // Enable cookie usage
      cookieKey: "i18n_redirected", // Name of the cookie
      redirectOn: "root", // Redirect only on the root path
      alwaysRedirect: false, // Disable to avoid redirecting every visit
    },
  },
  gtm: {
    id: 'GTM-NQN2K7PF', // ← your GTM ID here
    enabled: true, // Set false if you want to disable in dev
    debug: true, // Set to true for console logs in dev
    scriptDefer: true,
    pageTracking: true, // Enable automatic page view tracking
    respectDoNotTrack: false,
    layer: 'dataLayer',
  },
  app:{
    head:{
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
      link:[
        { rel: "icon", href: "/favicon.ico" },
   
      ],
      script: [
//         {
//           async:true,
//           innerHTML: `
// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-NQN2K7PF');
//         `,
//         },
//         {
//           async:true,
//           innerHTML: `
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQN2K7PF"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
//         `,
//         },
      ],
    }
  },
  css: [
    "~/assets/styles/tailwind.css",
    "~/assets/styles/main.scss",
  ],
})