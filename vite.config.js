import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/assets/the-wheels.scss',
      name: 'TheWheels',
      fileName: (format) => `the-wheels.${format}.css`,
    },
    rollupOptions: {
      external: [], // 外部ライブラリがあればここに追加
    },
  },
  server: {
    open: '/src/index.html', // 開発サーバー起動時にこのHTMLファイルを表示
  },
})
