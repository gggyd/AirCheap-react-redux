const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  bin: path.join(__dirname, 'bin')
}

module.exports = {
  entry: PATHS.app + '/App',
  output: {
    path: PATHS.bin,
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.bin,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT || 3000
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders:[
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.js?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        },
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.app + '/index.html',
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}