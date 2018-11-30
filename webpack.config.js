const path = require('path')
// const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    'application': './src/application',
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname + '/src',
      },
    ],
    rules: [
      { test: /\.css$/, use: [ { loader: MiniCssExtractPlugin.loader }, "css-loader" ] },
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin()
    ]
  }
}
