const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const paths = [
    '/',
    '/shop',
    '/contact',
    '/refund-policy'
]

module.exports = {
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                  ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/i,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "src", "pug", "index.pug")
            
        }),
        new HtmlWebpackPlugin({
            filename: 'shop.html',
            template: path.resolve(__dirname, "src", "pug", "shop.pug")
       
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: path.resolve(__dirname, "src", "pug", "contact.pug")
       
        }),
        new HtmlWebpackPlugin({
            filename: 'refund-policy.html',
            template: path.resolve(__dirname, "src", "pug", "refund-policy.pug")
            
        }),

        new SitemapPlugin({ base: 'https://www.rightpuff.ca', paths }),

        new CopyPlugin({
            patterns: [
              { from: "./src/images/favicon", to: "images/favicon" },
            ]
        })
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]'
    },
};