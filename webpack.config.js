'use strict';

const webpack = require('webpack');

let config = {
  entry: './app/js/main.js',
  output: {
    filename: './app/js/main-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      }
    ]
   
  }
};

module.exports = config;