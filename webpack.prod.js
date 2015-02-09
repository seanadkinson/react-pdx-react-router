
var config = require('./webpack.dev.js'),
    UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

if (!config.plugins) {
    config.plugins = [];
}
config.plugins.push(new UglifyJsPlugin());

config.output.path = "./public/js/build";

module.exports = config;
