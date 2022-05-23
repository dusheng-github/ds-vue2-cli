const proxyConfig = require('../config')

const serverPath = process.env.SERVER_PATH
const server = proxyConfig[serverPath] || proxyConfig[proxyConfig.SERVER || 'DEFAULT']
const { port = 8080, url: target } = server
module.exports = {
  devServer: {
    hot: true,
    port,
    historyApiFallback: true,
    open: false,
    client: {
      progress: true,
      overlay: false, // 全屏覆盖错误信息
    },
    compress: true,
    proxy: {
      '/api/*': {
        changeOrigin: true,
        target,
        // pathRewrite: {  // 路径重写，
        //   '^/api': ''  // fetchApi中封装了方法, 1, 所有的前端请求都加上api, 2, 请求接口存在api时需要跨域转发, 3, 发请求时取出api
        // },
        router: () => target,
        onProxyReq(proxyReq, req, res) {
          console.log(`${target}${req.path}`)
          proxyReq.setHeader('Referer', `${target}${req.path}`)
        },
      },
    }
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 // 如果css中使用@import语句，就先采用前面两个loader处理@import模块
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  }
}