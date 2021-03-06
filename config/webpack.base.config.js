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
                test: /\.html/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    'pug-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime','syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024, // 比较标准，小于标准的图片转换为 base64 代码
                            name:'market/images/img-[name].[ext]'
                        }
                    }
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
            template: 'index.pug',
            favicon: path.resolve('icon.png'),
            filename: 'index.html',
            inject: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
    ]
};