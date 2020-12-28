const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

const config = require('./config-default');

module.exports = isProduction => ({
    context: config.assetsPath,
    entry: config.entry,
    output: {
        path: config.outputPath,
        publicPath: `${config.publicPath}/${path.basename(config.outputPath)}/`,
    },
    optimization: {
        minimize: isProduction,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                        extends: path.join(__dirname, '../.babelrc.json')
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                include: config.assetsPath,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: !isProduction },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: !isProduction },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: { sourceMap: !isProduction },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: !isProduction },
                    },
                ]
            },
            {
                test: /\.(ttf|otf|eot|woff2?|png|jpe?g|gif|svg|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new DependencyExtractionWebpackPlugin({ injectPolyfill: true }),
    ]
});