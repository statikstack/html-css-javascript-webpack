const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './statik/scripts/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './build/public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        exclude: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              useRelativePath: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(['./build/public'])]
};
