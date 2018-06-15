const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer'), require('cssnano')]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css'
    }),
    new UglifyJsWebpackPlugin({
      sourceMap: true
    })
  ]
});
