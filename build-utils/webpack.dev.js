
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                  ]
            }
        ]
    }
};