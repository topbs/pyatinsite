// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      'Montserrat': true,
    },
    download: true,
  },
  ui: {
    global: true,
    icons: ['mdi']
  }
})