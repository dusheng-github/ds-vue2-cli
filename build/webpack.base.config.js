const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const resolve = (dir) => {
  return path.join(__dirname, '../', dir)
}
module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // 生成的 js 文件名称
    filename: process.env.NODE_ENV == 'production' ? 'app.[chunkhash:8].js' : 'app.js',
    // 生成的 chunk 名称
    chunkFilename: process.env.NODE_ENV == 'production' ? '[name]/[name].[chunkhash:8].js' : '[name]/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.(png|jpe?j|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 500,
          esModule: false,
          name: process.env.NODE_ENV === 'production' ? 'img/[name].[hash].[ext]' : 'img/[name].[ext]'
        }
        //图片文件大小小于limit的数值，就会被改写成base64直接填入url里面，
        //不然会输出到dist/img目录下，[name]原文件名，[ext]原后缀，[hash]在url上加上一点哈希值避免缓存
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 500,
          name: process.env.NODE_ENV === 'production' ? 'fonts/[name].[hash].[ext]' : 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  // 库外链cdn 变成import库
  externals: {
    
  },
  resolve: {
    //引入路径是不用写对应的后缀名
    extensions: ['.js', '.vue', '.json'],
    //缩写扩展
    alias: {
      //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
      '@business-components': resolve('src/business-components/'),
      '@api': resolve('/src/api'),
      '@components': resolve('src/components/'),
      '@views': resolve('src/views/'),
      '@assets': resolve('src/assets/'),
      '@utils': resolve('src/utils/'),
      '@store': resolve('src/store/'),
      '@styles': resolve('src/styles/'),
      '@constants': resolve('src/constants/'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '脚手架'
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: 'public'
    }]),
    // 定义全局打包可替换变量
    new webpack.DefinePlugin({
      BASE_URL: process.env.NODE_ENV === 'production' ? JSON.stringify('https://youchen133.github.io/vue-webpack-project/') : JSON.stringify('/'),
      SOMETHING: JSON.stringify('this is something!')
    })
  ]
}