import { defineConfig } from 'vite'
import vituum from 'vituum'
import posthtml from '@vituum/vite-plugin-posthtml'

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
    lib: {
      entry: './src/assets/the-wheels.scss',
      name: 'TheWheels',
      fileName: (format) => `the-wheels.${format}.css`,
    },
    rollupOptions: {
      input: ['./src/pages/**/*.html'],
    },
  },
})
