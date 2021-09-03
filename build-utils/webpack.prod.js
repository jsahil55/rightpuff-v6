const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
const path = require("path");

const paths = [
    '/',
    '/shop',
    '/contact',
    '/refund-policy',
]

module.exports = {
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                  ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),

        new SitemapPlugin({ base: 'https://www.rightpuff.ca', paths }),

        new HtmlCriticalPlugin({
            base: path.join(path.resolve(__dirname, ".."), 'dist/'),
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            // extract: true,
            width: 375,
            height: 565,
            penthouse: {
              blockJSRequests: false,
            }
          }),

          new HtmlCriticalPlugin({
            base: path.join(path.resolve(__dirname, ".."), 'dist/'),
            src: 'shop.html',
            dest: 'shop.html',
            inline: true,
            minify: true,
            // extract: true,
            width: 375,
            height: 565,
            penthouse: {
              blockJSRequests: false,
            }
          }),
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                  test: /node_modules/,
                  chunks: 'initial',
                  filename: 'vendors.[contenthash].js',
                  priority: 1,
                  maxInitialRequests: 2, // create only one vendor file
                  minChunks: 1,
                }
            }
        }
    }, 
   
};