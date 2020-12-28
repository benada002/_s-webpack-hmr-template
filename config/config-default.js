const path = require('path');

const config = require('./config.json');

module.exports = {
    wpHost: {
        host: 'localhost',
        port: 80,
        ...(config.wpHost || {}),
    },
    devServer: {
        port: 3000,
        open: true,
        ...(config.devServer || {}),
    },
    publicPath: config.publicPath || `/wp-content/themes/${path.basename(path.resolve(__dirname, '..'))}`,
    assetsPath: path.resolve(__dirname, '../src'),
    outputPath: path.resolve(__dirname, '../build'),
    entry: {},
    watch: ["/**/*.php"],
    ...config
}