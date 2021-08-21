const HtmlWebpackPlugin = require("html-webpack-plugin");
const SitemapPlugin = require('sitemap-webpack-plugin').default;
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
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
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

        new SitemapPlugin({ base: 'https://www.rightpuff.ca', paths })
      ],
    
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};