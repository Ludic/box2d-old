/*
 * box2d test config
 */

import nodeExternals from 'webpack-node-externals';

export default {
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
};
