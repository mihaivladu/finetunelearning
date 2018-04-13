const path = require('path');
const combineLoaders = require('webpack-combine-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const $ = require('jquery');

const baseConfig = {
  entry: [
    './src/js'
  ],
  output: {
    path: '/dist',
    publicPath: '/',
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([{
      from: './assets',
      to: 'assets'
    }]),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  resolve: {
    modules: [
      '/home/devusr/node_modules',
      './src'
    ],
    alias: {
      prosemirror: 'prosemirror/dist',
      assets: path.resolve(__dirname, 'assets')
    }
  },
  resolveLoader: {
    modules: ['/home/devusr/node_modules', './src']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loaders: [
        'babel-loader'
      ],
      include: [
        path.join(__dirname, 'src')
      ]
    }, {
      test: /\.svg/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.css$/,
      loader: combineLoaders([
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ])
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    }, {
      test: /\.(png|jp(e*)g|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8000, // Convert images < 8kb to base64 strings
          name: 'images/[hash]-[name].[ext]'
        }
      }]
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader?name=/fonts/[name].[ext]'
    }]
  }
};

module.exports = function (env) {
  const envConfig = require(`./config/webpack.${env}.js`);
  return merge(baseConfig, envConfig);
};