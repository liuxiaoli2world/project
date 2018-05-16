const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: '[name]-[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      name: 'index.html',
      inject: 'body',
      title: 'hello react'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: isDev ? '"development"' : '"production"' }
    })
  ]
}

if (isDev) {
  config.devServer = {
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    overlay: {
      error: true
    }
  }
  config.module.rules.push({
    test: /\.less/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'less-loader'
    ]
  })
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
