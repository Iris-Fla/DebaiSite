// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
  css: ["/assets/css/style.css", "bootstrap/dist/css/bootstrap.min.css"],
  head: {
    title: "DebaiSite",
    htmlAttrs: { lang: "ja" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
};
