
const webpack = require('webpack'); // 注意引入
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: "./index.js"
  },
  mode: "development",
  devtool: 'eval-source-map',
  output: {
    filename: "bundle.js", //打包后文件名称
    //注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    path: path.resolve(__dirname, 'dist'), //打包后文件存放地址
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),//告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
    host: 'localhost',
    port: '8000',
    inline: true,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css|.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      title: 'Webpack练习',
      template: './index.html'//new 一个这个插件的实例，并传入相关的参数
    })
  ]
}