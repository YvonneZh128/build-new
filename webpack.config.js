const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: "development",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  resolve: { 
    extensions: ['.js', '.jsx','json'],
    modules:[
      path.resolve(__dirname,'src'),
      'node_modules'
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    open:true
  },
  plugins:[new webpack.HotModuleReplacementPlugin()]
};
