// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@nuxt/icon',
  ],
  site: {
    url: 'https://',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css'],
    content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'team-square-mariage-hdf',
        owner: 'Luyanova',
        url: 'https://github.com/Luyanova/team-square-mariage-hdf'

      }
    }
  }

})