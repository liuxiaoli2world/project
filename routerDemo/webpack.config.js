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
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-eee.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      inject: 'body',
      title: 'Welcome React!'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: isDev ? '"development"' : '"production"' }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

if (isDev) {
  config.devtool = 'cheap-module-eval-source-map'
  config.devServer = {
    historyApiFallback: true,
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    overlay: {
      error: true
    }
  }

  config.module.rules.push({
    test: /\.less$/,
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
} else {
  config.entry = {
    main: './src/index.js',
    vender: ['react', 'react-dom']
  }
  config.output.filename = '[name]-[chunkhash:8].js'
  // config.module.rules.push({
  //   test: /\less$/,
  //   use: []
  // })
  // config.plugins.push(

  // )
}

module.exports = config
