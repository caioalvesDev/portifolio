// https://nuxt.com/docs/api/configuration/nuxt-config
import { SEO } from "./utils/constants";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/content", "@nuxtjs/apollo","@vueuse/nuxt"],

  app: {
    head: {
      charset: "utf-8",
      title: SEO.title,
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" }],
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
      preload: ["ts", "js", "css", "java", "json", "bash", "vue", "php", "dart", "html", "css", "tsx", "jsx"],
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
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        const customElements: RegExp[] = [/Script/g, /dotlottie-player/g];

        return customElements.some((regex) => regex.test(tag));
      },
    },
  },
});
