const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

module.exports = (env, argv) => {
  console.log(argv, process.env.NODE_ENV)
  const config = process.env.NODE_ENV == 'development' ? devConfig : prodConfig
  return merge(baseConfig, config) 
}