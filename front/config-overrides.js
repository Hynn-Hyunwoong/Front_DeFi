const {
  addPostcssPlugins,
  override,
  addWebpackPlugin,
  babelExclude,
  addBabelPlugin,
} = require('customize-cra');
const webpack = require('webpack');
const path = require('path');

module.exports = override(
  addBabelPlugin([
    '@babel/plugin-proposal-class-properties',
    {
      loose: true,
    },
  ]),
  addBabelPlugin([
    '@babel/plugin-proposal-private-methods',
    {
      loose: true,
    },
  ]),
  addBabelPlugin([
    '@babel/plugin-proposal-private-property-in-object',
    {
      loose: true,
    },
  ]),
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
      url: require.resolve('url'),
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      process: require.resolve('process/browser'),
    };
    // add source-map-loader
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
      exclude: [
        /node_modules\/@walletconnect/,
        /node_modules\/safe-json-utils/,
      ],
    });
    return config;
  },

  addWebpackPlugin(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ),
);
