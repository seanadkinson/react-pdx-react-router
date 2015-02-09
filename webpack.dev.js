
var webpack = require("webpack");

module.exports = {
    target: "web",
    debug: true,
    devtool: "source-map",
    entry: {
        app1: "./src/app1/app1.js",
        app2: "./src/app2/app2.js"
    },
    output: {
        path: "/", //path doesn't matter in dev mode... it is overwritten in production to "./public/js/build"
        filename: "bundle.[name].js"
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        moduleTemplates: ["*-webpack-loader", "*-web-loader", "*-loader", "*"]
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "transform?envify" },
            { test: /\.jsx$/, loader: "jsx?harmony&insertPragma=React.DOM" },

//            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.png/, loader: "url?limit=100000&mimetype=image/png" },
            { test: /\.gif/, loader: "url?limit=100000&mimetype=image/gif" },
            { test: /\.jpg/, loader: "file" }

            // This would let us do "require('styles.css')" and have it automatically appended to
            // the HEAD.  But this wouldn't work for server-side rendering, so let's not use it yet... -SA
//            { test: /\.css/, loader: "style!css" },
//            { test: /\.woff$/,   loader: "url?limit=10000&minetype=application/font-woff" },
//            { test: /\.ttf$/,    loader: "file" },
//            { test: /\.eot$/,    loader: "file" },
//            { test: /\.svg$/,    loader: "file" }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true)
        //new webpack.optimize.AggressiveMergingPlugin(),
        //new webpack.optimize.CommonsChunkPlugin('bundle.common.js', ['app', 'public', 'program', 'admin']),
        //new webpack.BannerPlugin("stoplosstracker: " + config.build)
    ]
};
