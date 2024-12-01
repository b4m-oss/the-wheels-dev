// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: "static",
  build: {
    assets: "assets",
  },
  vite: {
    ssr: {
      noExternal: ["the-wheels"], // the-wheels パッケージをnoExternalに追加
    },
    resolve: {
      alias: {
        "the-wheels": "../packages/the-wheels/dist/",
      },
    },
    build: {
      outDir: "test",
      rollupOptions: {
        output: {
          entryFileNames: "assets/[name].js",
          chunkFileNames: "assets/[name].js",
          assetFileNames: "assets/[name].[ext]",
        },
      },
    },
  },
});
