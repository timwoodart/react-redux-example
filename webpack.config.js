const path = require('path');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';

// Prod and Dev webpack configs
const webpackDev = require('./webpack.config.dev');
const webpackProd = require('./webpack.config.prod');

const config = {
  // context: path.join(__dirname),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|jpeg|svg|woff)?$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(woff2|eot|ttf|gif)?$/,
        loader: 'file'
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  resolve: {
    modulesDirectories: ['node_modules', './src/components']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
    fallback: path.join(__dirname, 'node_modules')
  }
};

if (ENV === 'development') {
  module.exports = webpackMerge(config, webpackDev);
}

if (ENV === 'production') {
  module.exports = webpackMerge(config, webpackProd);
}
