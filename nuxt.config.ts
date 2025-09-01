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
    url: 'https://enterrementviegarcon-lille.fr',
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
        name: 'team-square-lille-hdf',
        owner: 'Luyanova',
        url: 'https://github.com/Luyanova/team-square-lille-hdf.git'

      }
    }
  }

})