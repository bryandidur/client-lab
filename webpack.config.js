const { resolve } = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, './dist/assets'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [resolve(__dirname, './src')],
                loaders: 'babel-loader',
                query: {
                    presets: [
                        [
                            'env', {
                                modules: false,
                                targets: {
                                    node: 'current',
                                },
                            },
                        ],
                    ],
                },
            },
        ],
    },
    devServer: {
        open: true,
        port: 8080,
        contentBase: './dist',
        publicPath: '/assets/',
    },
};

module.exports = config;
