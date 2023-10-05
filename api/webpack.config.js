const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
        "fs": false,
        "path": false,
        "os": false,
        "url": false,
        "zlib": false,
        "async_hooks": false,
        "path": require.resolve("path-browserify"),
        "util": require.resolve("util"),
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer"),
        "querystring": require.resolve("querystring-es3"),
        "http": require.resolve("stream-http"),
        "crypto": require.resolve("crypto-browserify")
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};