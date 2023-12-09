// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/content", "@nuxtjs/apollo"],
  content: {
    highlight: {
      theme: {
        default: "github-dark",

        dark: "github-dark",

        sepia: "monokai",
      },
      preload: ["ts", "js", "css", "java", "json", "bash", "vue", "php", "dart"],
    },
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
  },
  apollo: {
    clients: {
      default: {
        tokenName: "github-token",
        httpEndpoint: "https://api.github.com/graphql",
      },
    },
  },
});
