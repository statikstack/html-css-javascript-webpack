const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 8080
  }
});
