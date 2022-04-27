const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    devtool: "inline-source-map",

    plugins: [
        new HTMLWebpackPlugin({
            title: "Weather App"
        }),
    ],

    module:{
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource", 
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}