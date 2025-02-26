// import { getPrerenderRoutes } from "./utils/generate-routes";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules:["@nuxtjs/i18n" , "@nuxt/ui"  , "@pinia/nuxt" , "@nuxt/image" , "nuxt-swiper" , "@nuxt/icon" , "@vee-validate/nuxt"],
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
    strategy: "prefix_and_default",
    detectBrowserLanguage: {
      useCookie: true, // Enable cookie usage
      cookieKey: "i18n_redirected", // Name of the cookie
      redirectOn: "root", // Redirect only on the root path
      alwaysRedirect: false, // Disable to avoid redirecting every visit
    },
  },
  app:{
    head:{
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
      link:[
   
      ],
      script: [
        
      ],
    }
  },
  css: [
    "~/assets/styles/tailwind.css",
    "~/assets/styles/main.scss",
  ],
})