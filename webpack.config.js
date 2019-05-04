const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: "development",
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-2','env']
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  resolve: { extensions: ['\*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins:[new webpack.HotModuleReplacementPlugin()]
};
