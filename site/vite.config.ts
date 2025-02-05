import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import path from 'path';


export default {
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
      'the-wheels': path.resolve(__dirname, '../packages/the-wheels/src/index.ts')
    }
  },
  server: {
    allowedHosts: true
  }
}