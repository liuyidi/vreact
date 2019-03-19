import config from './rollup.config.base'
import serve from 'rollup-plugin-serve'

import { name } from '../package.json'

export default {
  ...config,
  output: [
    {
      file: `dist/${name}.js`,
      format: 'umd',
      name,
      sourcemap: true
    },
    {
      file: `dist/${name}.cjs.js`,
      format: 'cjs',
      name,
      sourcemap: 'inline'
    }
  ],
  plugins: [
    ...config.plugins,
    serve({
      port: 8008,
      contentBase: ['']
    })
  ]
}
