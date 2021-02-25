var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
const merge = require('webpack-merge').merge;
const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    //'webpack/hot/only-dev-server',
    './assets/js/index' // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs
  ],

  output: {
    path: path.resolve('./assets/bundles/local'),
        filename: "[name]-[contenthash].js",
        publicPath: 'http://localhost:3000/assets/bundles/local/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new BundleTracker({path: "./", filename: 'webpack-stats-local.json'}),
  ],
})
