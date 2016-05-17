var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: ['./js/app/index'],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'js'),
        publicPath: './js/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
    ,
    watch: true,
    watcherOptions: {
      aggregateTimeout: 100
    }
};