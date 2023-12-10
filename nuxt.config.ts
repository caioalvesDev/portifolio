// https://nuxt.com/docs/api/configuration/nuxt-config
import { SEO } from "./utils/constants";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/content", "@nuxtjs/apollo"],
  app: {
    head: {
      charset: "utf-8",
      title: SEO.title,
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  experimental: {
    typedPages: true,
  },
  content: {
    highlight: {
      theme: {
        default: "github-dark",
        dark: "github-dark",
        sepia: "monokai",
      },
      preload: ["ts", "js", "css", "java", "json", "bash", "vue", "php", "dart", "html", "css"],
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
