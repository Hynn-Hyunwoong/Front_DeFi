const {
  addPostcssPlugins,
  override,
  addWebpackPlugin,
  babelExclude,
} = require('customize-cra');
const webpack = require('webpack');
const path = require('path');

module.exports = override(
  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')]),
  babelExclude(/node_modules[\\\/](?!(@walletconnect)[\\\/]).*/),
  babelExclude(/node_modules[\\\/](?!(walletconnect)[\\\/]).*/),

  (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      process: require.resolve('process/browser'),
    };
    return config;
  },

  addWebpackPlugin(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ),
);
