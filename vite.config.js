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
    // lib: {
    //   entry: './src/assets/the-wheels.scss',
    //   name: 'TheWheels',
    //   fileName: (format) => `the-wheels.${format}.css`,
    // },
    rollupOptions: {
      input: ['./src/pages/**/*.html'],
      output: {
        entryFileNames: `assets/[name].css`,
        chunkFileNames: `assets/[name].css`,
        assetFileNames: `assets/[name].[ext]`,
      },
      // emptyOutDir: false, // you need to delete the output directory outside of vite!
      // output: {
      //   inlineDynamicImports: true,
      // },
    },
  },
})
