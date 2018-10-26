const { resolve } = require("path");

module.exports = {

    entry: "./65.js",

    output: {
        path: resolve (__dirname + "/dist/"),
        filename: "togetherToES5.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }
            }
        ]
    }

}