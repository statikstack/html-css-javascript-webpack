const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: './build',
    publicPath: '/public/',
    open: true,
    port: 8080
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css'
    })
  ]
});
