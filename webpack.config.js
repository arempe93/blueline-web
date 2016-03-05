var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './lib/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      '__DEVTOOLS__': process.env.DEVTOOLS === 'true'
    }),
    new HtmlWebpackPlugin({
      title: 'Blueline Web',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        include: path.join(__dirname, 'lib'),
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'assets', 'stylesheets'),
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
