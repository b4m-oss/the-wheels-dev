import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/scripts/main.ts"),  // 単一のエントリーポイントとして指定
      name: "TheWheels",
      fileName: (format) => `the-wheels.${format === "es" ? "mjs" : "cjs"}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: `the-wheels.[ext]`, // CSSファイルの出力名
      },
    },
  },
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, 'src/scripts/lib')  // @libとして明示的に指定
    }
  },
  optimizeDeps: {
    include: ['reset-css'], // 依存パッケージを明示的に含める
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
    port: 3001,
    strictPort: true,
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 3002,  // HMR用のポートを変更
    },
  },
});
