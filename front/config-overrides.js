const { addPostcssPlugins } = require('customize-cra');
const webpack = require('webpack');

module.exports = function override(config) {
  // Tailwind CSS를 추가합니다.
  config = addPostcssPlugins([require('tailwindcss'), require('autoprefixer')])(config);
  
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve('stream-browserify'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify/browser'),
    url: require.resolve('url/'),
    buffer: require.resolve('buffer/'),
    process: require.resolve('process/browser') 

  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  );

  return config;
};
