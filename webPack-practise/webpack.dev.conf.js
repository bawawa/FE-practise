const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const os = require('os');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

let  env=process.env.NODE_ENV==="development"?"development":"production";




const config = {
    mode: env,
    devtool: 'source-map',//生成sourcemap，方便调试的时候查看源码
    entry: {
        app: __dirname+'/index.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "webpack-dev",
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: false, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            inject: 'head',
            template: "index.html"
        })
    ],
    devServer:{
        contentBase: path.join(__dirname, ''),
        clientLogLevel: 'info',
        open:false,  //启动时默认打开浏览器
        host:'0.0.0.0', //域名 0.0.0.0局域网可访问
        port:'3000',
        inline:true, //实时更新
        disableHostCheck: true,//不检查域名
        proxy:{   //跨域专用
            '/vd':{
                target: 'http://arvractivity.jd.com',
                pathRewrite: {'^/vd':"/vd"},
                changeOrigin: true,
                secure: false
            }
        }
    },
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
                            outputPath:"./images",
                            name: '[path][name].[ext]',
                            // publicPath: 'assets/images'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            uglifyOptions: {
                warnings: false,
                parse: {},
                compress: {},
                mangle: true, // Note `mangle.properties` is `false` by default.
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_fnames: false,
            }
        })]
    }
};

module.exports = config;
