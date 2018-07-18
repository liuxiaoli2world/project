
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  mode: 'production',
  entry: {
    index: './client/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name-hash:8].js',
  },
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    // new webpack.definePlugin({
    //   'process.env.NODE_ENV': '"production"'
    // })
  ],
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    hot: true
  }
}

if(process.env.NODE_ENV === 'production') {
}else {
  // config.plugins.push(new webpack.hotModuleReplacementPlugin())
}

module.exports = config;