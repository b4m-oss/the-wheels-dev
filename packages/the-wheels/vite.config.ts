import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/scripts/index.ts', // エントリポイント
      name: 'TheWheels', // ライブラリ名
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
        // SCSS用設定があればここに追加
      },
    },
  },
  server: {
    hmr: {
      protocol: 'ws', // WebSocketを使ってHMRを行う
      host: 'localhost', // HMRが接続するホスト
      port: 3001, // HMRのポートを指定する（Astro側と異なるポートにする）
    },
  },
});