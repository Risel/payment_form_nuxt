export default {
  target: "static",
  head: {
    title: "payment_form",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  googleFonts: {
    families: {
      Acme: true,
    },
    display: "swap",
    preconnect: true,
  },
  css: ["normalize.css/normalize.css", "@/assets/css/main.css"],
  components: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
};
