const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'client', 'index.jsx'),
  devServer: {
    contentBase: path.join(__dirname, 'client', 'static'),
    inline: true,
    port: 8080,
  },
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
