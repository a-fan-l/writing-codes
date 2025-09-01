const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env',{
                            targets: 'defaults',
                        }]],
                    },
                },
            },
        ],
    },
    // 关闭压缩
    optimization: {
        minimize: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'writing react16',
            template: path.join(__dirname, 'src/index.html'),
        }),
    ],
}