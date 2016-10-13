const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  bin: path.join(__dirname, 'bin')
}

const chunks = ['index', 'about'];

module.exports = {
  entry: {
   index: PATHS.app + '/App',
   about: PATHS.app + '/About'
  },
  output: {
    path: PATHS.bin,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      chunks: chunks,
      minChunks: chunks.length
    }),
    new HtmlWebpackPlugin({
      template: PATHS.app + '/index.html',
      filename: PATHS.bin + '/index.html',
      inject: 'body', 
      hash: true, 
      chunks: ['vendors', 'index'],
      minify: {  
          removeComments: true, 
          collapseWhitespace: false 
      }
    }),
    new HtmlWebpackPlugin({
      template: PATHS.app + '/index.html',
      filename: PATHS.bin + '/about.html',
      inject: 'body', 
      hash: true, 
      chunks: ['vendors', 'about'],
      minify: {  
          removeComments: true, 
          collapseWhitespace: false 
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}