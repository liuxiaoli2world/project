const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: {
    portal: path.join(__dirname, 'app/js/index.jsx'),
    manage: path.join(__dirname, 'managePages/index.jsx'),
  },
  output: {
    filename: 'js/[name]-[hash:8].js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /.html$/,
        use: 'html-loader',
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'portal.html'),
      title: '个人简历门户',
      inject: true,
      chunks: ['portal'],
      minify: {
        html5: true,
        collapseWhitespace: true,
        // conservativeCollapse: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'manage.html',
      title: '后台管理页面',
      template: path.resolve(__dirname, 'portal.html'),
      inject: 'body',
      chunks: ['manage'],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    overlay: { error: true },
  },
};

module.exports = config;
