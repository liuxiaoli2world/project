const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, 'index.js'),
    svg: path.join(__dirname, 'svg.js'),
    svgEditor: path.join(__dirname, 'svgEditor.js'),
    sassD: path.join(__dirname, 'sassD/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /.(sc|sa|c)ss$/,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'index.html'),
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'svg.html',
      template: path.join(__dirname, 'svgDemo.html'),
      chunks: ['svg'],
    }),
    new HtmlWebpackPlugin({
      filename: 'svgEditor.html',
      template: path.join(__dirname, 'svgEditor.html'),
      chunks: ['svgEditor'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sassD/index.html',
      template: path.join(__dirname, 'sassD/index.html'),
      chunks: ['sassD'],
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    hot: true,
  },
};
