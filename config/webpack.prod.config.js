const webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackBaseConfig, {
    mode: 'production',
    output: {
        //
    },
    module: {
        //
    },
    plugins: [
        //
    ]
});