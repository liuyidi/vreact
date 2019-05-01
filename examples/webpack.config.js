/* eslint-disable prettier/prettier */
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const vreact = path.join(__dirname, '..', 'src')

module.exports = {
  context: __dirname,
  entry: './index',
  output: {
    publicPath: '/'
  },
  resolve: {
    alias: {
      vreact: vreact
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '..', 'examples'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    })
  ]
}
