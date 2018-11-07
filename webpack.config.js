var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: ['babel-polyfill', './scripts.js'],
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js',
         publicPath: "/build"
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 options: {
                    presets: ['@babel/preset-env']
                 },
                 exclude: /(node_modules|bower_components)/                 
             }
         ]
     },
     stats: {
         colors: true
     }
 };