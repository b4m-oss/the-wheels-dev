// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: "static",
  build: {
    assets: "assets",
  },
  vite: {
    // ssr: {
    //   noExternal: ["the-wheels"], // the-wheels パッケージをnoExternalに追加
    // },
    resolve: {
      alias: {
        "the-wheels": path.join(path.dirname(__filename), "../packages/the-wheels/dist/the-wheels.es.js"),
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
