const path = require('path');
const shell = require('shelljs');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const devConfig = require('../webpack.dev.config');
const srcPath = path.join(__dirname, '../src');

const PORT = require('../package.json').webpackDevServerPort;

function startDevServer() {
    devConfig.entry = {
        main: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${PORT}/`,
            'webpack/hot/only-dev-server',
            './styles/index.less',
            './index',
        ],
    };
    
    new WebpackDevServer(webpack(devConfig), {
        publicPath: devConfig.output.publicPath,
        contentBase: devConfig.devServer.contentBase,
        hot: true,
        noInfo: false,
        quiet: false,
        https: false,
        historyApiFallback: true,
    }).listen(PORT, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`Listening at http://localhost:${PORT}`);
    });
}


startDevServer();
