// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import path from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: "src/",
  css: [
    "../packages/the-wheels/src/styles/the-wheels.scss",
    "./src/assets/styles/styles.scss",
  ],
  alias: {
    // "~": "/",
    // "@": "/",
    // assets: "/src/assets",
    public: "/public",
  },
  vite: {
    resolve: {
      alias: {
        "the-wheels": path.resolve(
          __dirname,
          "../packages/the-wheels/src/scripts/main.ts",
        ),
      },
    },
    optimizeDeps: {
      include: ["the-wheels"],
    },
  },
});
