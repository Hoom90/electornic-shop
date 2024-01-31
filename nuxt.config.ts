// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules:{
    '/auth/forgetpass':{redirect:'/'}
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules:[
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**',
      'stores',
      'stores/*/index.{ts,js,mjs,mts}',
      'stores/**'],
  },
})
