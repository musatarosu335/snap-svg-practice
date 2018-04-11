const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicDir = path.join(__dirname, '/public');
module.exports = [
  {
    entry: [
      'babel-polyfill',
      './src/index.js',
    ],
    output: {
      path: publicDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: require.resolve('snapsvg/dist/snap.svg.js'),
          use: 'imports-loader?this=>window,fix=>module.exports=0',
        },
      ],
    },
    resolve: {
      alias: {
        snapsvg: 'snapsvg/dist/snap.svg.js',
      },
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publicDir,
    },
    devtool: '#inline-source-map',
  },
];
