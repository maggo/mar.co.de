/* globals __dirname, process */
"use strict";

let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let autoprefixer = require('autoprefixer');
let path = require('path');
let isDev = process.env.NODE_ENV != 'production';

let paths = {
  src: path.join(__dirname, '/src')
};

paths.dist = path.join(__dirname, '/app/assets');


module.exports = [
  {
    name: 'js',
    entry: {
      icons: path.join(paths.src, 'js/icons.js')
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
        }
      ]
    },
    plugins: [
      /*new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      }),*/
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      })
    ],
    resolve: { root: path.join(__dirname, 'node_modules') },
    resolveLoader: { root: path.join(__dirname, 'node_modules') },
    devtool: isDev ? '#eval' : ''
  },
  {
    name: 'css',
    entry: {
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
          test: /\.scss$/,
          include: [
            paths.src
          ],
          loader: isDev ? 'style!raw-css!postcss!sass?sourceMap' : ExtractTextPlugin.extract('style', 'raw-css!postcss!sass?sourceMap')
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css', {
        allChunks: true
      })
    ],
    sassLoader: {},
    postcss: () => [autoprefixer({ browsers: ['last 2 versions']})],
    devtool: isDev ? '#inline-source-map' : ''
  }
];
