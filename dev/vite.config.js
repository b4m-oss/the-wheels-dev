import { defineConfig } from 'vite'
import vituum from 'vituum'
import posthtml from '@vituum/vite-plugin-posthtml'
import path from 'path'

export default defineConfig({
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': 'src/assets/css',
        },
      },
    }),
    posthtml({
      root: './src',
    }),
  ],
  build: {
    // lib: {
    //   entry: './src/assets/the-wheels.scss',
    //   name: 'TheWheels',
    //   fileName: (format) => `the-wheels.${format}.css`,
    // },
    assetsDir: 'assets',
    outDir: '../dist',
    rollupOptions: {
      input: ['./src/pages/**/*.html'],
      output: {
        entryFileNames: `assets/css/[name].css`,
        chunkFileNames: `assets/css/[name].css`,
        assetFileNames: (assetInfo) => {
          const originalPath = assetInfo.name
          const relativePath = path.relative('src/assets', originalPath)

          // CSSファイルは assets/css に配置
          if (/\.css$/.test(assetInfo.name)) {
            return `assets/css/${path.basename(assetInfo.name)}`
          }

          // 画像ファイルは assets/img に配置
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/.test(assetInfo.name)) {
            // 'src/assets/img' 以下の相対パスを保持
            return `assets/img/${originalPath}`
          }

          // その他のファイルは assets フォルダ内に配置
          return `assets/${relativePath}`
        },
      },
    },
  },
})
