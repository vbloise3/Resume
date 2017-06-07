/**
 * Created by vincebloise on 1/17/17.
 */
const path = require('path');

module.exports = {
    loaders: [
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'ts-loasder'
        }
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: "./client/app/main",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    watch: true,
    devServer: {
        contentBase: '.'
    }
};