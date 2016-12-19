/**
 * Created by joseangelmr on 19/12/16.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.dev.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(5000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('App is listening at http://%s:%s', 'localhost' , 5000);
});