var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker');
const merge = require('webpack-merge').merge

module.exports = {
 context: __dirname,

   module: {
    rules: [
      // we pass the output from babel loader to react-hot loader
      { test: /\.jsx?$/, exclude: /node_modules/, use: {loader: 'babel-loader'}}, // to transform JSX into JS
    ],
  },

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx']
  },

}
