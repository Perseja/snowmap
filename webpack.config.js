/**
 * Created by tsaraeva on 11/11/16.
 */
module.exports = {
    entry: "./script/main.js",
    output: {
        filename: "./dist/snowmap.js"
    },
    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    },

    devServer: {
        hot: true
    }
}
