var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var webpackDevServer = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: false
})

var port = process.env.PORT || 3000;
webpackDevServer.listen(port, 'localhost', function (err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log('Listening at localhost:%s', port);
  }
});