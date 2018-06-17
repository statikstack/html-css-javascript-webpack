const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    vendor: path.resolve('statik', 'scripts', 'vendor.js'),
    app: path.resolve('statik', 'scripts', 'app.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('build', 'public')
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
        test: /\.(gif|jpg|png|svg|ico)$/,
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
  plugins: [new CleanWebpackPlugin([path.resolve('build', 'public')])]
};
