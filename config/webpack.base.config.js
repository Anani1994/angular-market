const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => {
    return path.join(__dirname, dir);
};

module.exports = {
    entry: path.join(__dirname, '../src/main.js'),
    output: {
        // filename: 'bundle.js', //输出文件的文件名
        path: path.join(__dirname, '../'), // 输出文件所在目录
        // publicPath: 'www.yoursite.com'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    // 创建路径别名
    resolve: {
        alias: {
            '@': resolve('../src')
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
    ]
};