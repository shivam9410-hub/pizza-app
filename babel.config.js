module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
// babel.config.js

  plugins: ["nativewind/babel"],

  };
};
