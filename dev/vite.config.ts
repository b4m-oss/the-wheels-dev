import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'

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
    ]
}