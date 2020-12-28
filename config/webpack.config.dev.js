const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const chokidar = require('chokidar');

const config = require('./config-default');
const wpConfig = require('./webpack.config');

module.exports = merge(wpConfig(false), {
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        public: `localhost:${config.devServer.port}`,
        publicPath: `${config.publicPath}/${path.basename(config.outputPath)}`,
        hot: true,
        inline: true,
        quiet: true,
        port: config.devServer.port,
        open: config.devServer.open,
        proxy: {
            '/': {
                target: {
                    host: config.wpHost.host,
                    port: config.wpHost.port,
                    protocol: 'http',
                    secure: false,
                },
                onProxyRes(proxyRes, req, res) {
                    let body = Buffer.from('');
                    const header = proxyRes.headers;

                    proxyRes.on('data', (data) => (body = Buffer.concat([body, data])));
                    proxyRes.on('end', () => {
                        res.writeHead(200, header);
                        res.end(
                            header['content-type'] === 'text/html; charset=UTF-8'
                                ? body
                                    .toString('utf8')
                                    .replace(
                                        new RegExp(`http://${config.wpHost.host}`, 'g'),
                                        '',
                                    )
                                : body,
                        );
                    });
                },
                selfHandleResponse: true,
                autoRewrite: true,
                changeOrigin: true,
            },
        },
        after(app, server) {
            chokidar.watch(path.resolve(__dirname, '../**/*.php'), {
                ignored: [path.resolve(__dirname, '../vendor'), path.resolve(__dirname, '../node_modules')]
            }).on('all', () => {
                server.sockWrite(server.sockets, 'content-changed');
            });
        },
    },
    devtool: '#cheap-module-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});