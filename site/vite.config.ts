import { defineConfig } from "vite";
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import path from 'path';


export default defineConfig({
    plugins: [
        vituum({
          imports: {
            filenamePattern: {
                '+.css': [],
                '+.scss': 'src/assets/styles'
            }
        }
        }),
        nunjucks({
          root: './src'
      })
    ],
  resolve: {
    alias: {
      '@b4m-oss/the-wheels': path.resolve(__dirname, '../packages/the-wheels/src/scripts/main.ts')
    }
  }
})