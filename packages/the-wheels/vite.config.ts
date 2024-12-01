import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: {
        js: path.resolve(__dirname, "src/scripts/main.ts"),
        css: path.resolve(__dirname, "src/styles/the-wheels.scss"), // SCSSをエントリに追加
      },
      name: "TheWheels", // ライブラリ名
      fileName: (format) => `the-wheels.${format}.js`, // 出力ファイル名
    },
    rollupOptions: {
      output: {
        assetFileNames: `the-wheels.[ext]`, // CSSファイルの出力名
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, "src/styles")], // SCSSのパス
        sourceMap: true, // ソースマップを出力
      },
    },
  },
  server: {
    hmr: {
      protocol: "ws", // WebSocketを使ってHMRを行う
      host: "localhost", // HMRが接続するホスト
      port: 3001, // HMRのポートを指定する（Astro側と異なるポートにする）
    },
  },
});
