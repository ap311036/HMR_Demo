  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  // const CleanWebpackPlugin = require('clean-webpack-plugin');
  const ExtractTextPlugin = require('extract-text-webpack-plugin'); //sass套件
  const webpack = require('webpack');

  module.exports = {
    entry: {
       app: './src/index.js'
    },
    devtool: 'inline-source-map',
    // devServer: {
    //   contentBase: './dist',
    //   hot: true,
    //   port: 3000
    // },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      // new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement - Demo'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };