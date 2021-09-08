const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|webp|jpg|svg|woff|woff2|ttf|eot)$/i,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "..", "src", "pug", "index.pug")
            
        }),
        new HtmlWebpackPlugin({
            filename: 'shop.html',
            template: path.resolve(__dirname, "..", "src", "pug", "shop.pug")
       
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: path.resolve(__dirname, ".." ,"src", "pug", "contact.pug")
       
        }),
        new HtmlWebpackPlugin({
            filename: 'refund-policy.html',
            template: path.resolve(__dirname, "..", "src", "pug", "refund-policy.pug")
            
        }),

        new CopyPlugin({
            patterns: [
              { from: path.resolve(__dirname, "..", "src", "images", "favicon"), to: path.resolve(__dirname, "..", "dist", "images", "favicon") },
            ]
        }),
    ],
    
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "..", "dist"),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    
};