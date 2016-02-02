var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname),
  entry: {
    app: ["./src/app/main.js"]
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
    ],
  },
  output: {
      path: path.join(__dirname, "dist"),
      publicPath: '/assets/',
      filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};