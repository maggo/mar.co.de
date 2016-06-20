/* globals __dirname, process */
"use strict";

let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
let autoprefixer = require('autoprefixer');
let path = require('path');
let isDev = process.env.NODE_ENV != 'production';

let paths = {
  src: path.join(__dirname, '/src')
};

paths.dist = path.join(__dirname, '/dist/assets');


module.exports = [
  {
    entry: {
      icons: path.join(paths.src, 'js/icons.js'),
      main: path.join(paths.src, 'js/main.js'),
      style: path.join(paths.src, 'scss/main.scss')
    },
    output: {
      path: paths.dist,
      publicPath: '/assets/',
      filename: "[name].bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: [
            paths.src
          ],
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.svg$/,
          loader: 'svg-sprite?' + JSON.stringify({
            name: '[name]',
            prefixize: true
          })
        },
        {
          test: /\.scss$/,
          include: [
            paths.src
          ],
          loader: isDev ? 'style!raw-css!postcss!sass?sourceMap' : ExtractTextPlugin.extract('style', 'raw-css!postcss!sass?sourceMap')
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: '../index.html',
        inject: 'head'
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      new ExtractTextPlugin('[name].css', {
        allChunks: true
      })
    ],
    sassLoader: {},
    postcss: () => [autoprefixer({ browsers: ['last 2 versions']})],
    resolve: { root: path.join(__dirname, 'node_modules') },
    resolveLoader: { root: path.join(__dirname, 'node_modules') },
    devtool: isDev ? '#inline-source-map' : ''
  }
];
