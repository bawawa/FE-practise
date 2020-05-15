const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const os = require('os');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
let  env=process.env.NODE_ENV==="development"?"development":"production";

const config = {
    mode: env,
    entry: {
        app: "./index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//要用绝对路径
        filename: "[name].js",
        library: "MakeUpViewer",
        libraryTarget: 'umd',//umd方式，可以使用import引入
        libraryExport: "default",
        umdNamedDefine:true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "webpack build",
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            inject: 'head',
            template: "index.html"
        })
    ],
    devtool: 'source-map',
    module: { // 所有第三方 模块的配置规则
        rules: [ // 第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 千万别忘记添加 exclude 排除项
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit:50000,
                            outputPath:"./",
                            name: '[path][name].[ext]',
                            publicPath: 'dist'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        // minimizer: [new UglifyJsPlugin({
        //     test: /\.js(\?.*)?$/i,
        //     uglifyOptions: {
        //         warnings: false,
        //         parse: {},
        //         compress: {},
        //         mangle: true, // Note `mangle.properties` is `false` by default.
        //         output: null,
        //         toplevel: false,
        //         nameCache: null,
        //         ie8: false,
        //         keep_fnames: false,
        //     }
        // })]
    }
};

module.exports = config;


