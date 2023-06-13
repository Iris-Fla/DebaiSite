// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
      },
  css: ["/assets/css/style.css", "bootstrap/dist/css/bootstrap.min.css"],
  head: {
    title: "DebaiSite",
    htmlAttrs: { lang: "ja" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/DebaiSite/favicon.ico" },
    ],
    bodyAttrs: {
      class: 'body-class'
    }
  },
  target: "static",
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    baseURL: "/DebaiSite/",
  },
  generate: {
    dir: "docs",
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  router: {
    base: "/DebaiSite/",
  },
};
