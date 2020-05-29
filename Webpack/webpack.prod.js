const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    "mode": "production",
    output: {
      filename: '[name].[contentHash].bundle.js'
    }
});