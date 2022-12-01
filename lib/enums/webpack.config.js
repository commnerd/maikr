const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.ts'),
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
    modules: [path.resolve(__dirname, '.')],
  },
  mode: 'development',
  devtool: 'source-map',
};