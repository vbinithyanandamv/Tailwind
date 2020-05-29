const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = merge(common, {
    "mode": "development",
    "devtool": 'inline-source-map',
    plugins:[ 
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "index.html"
      })
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 9000,
        hot:true
    },
});