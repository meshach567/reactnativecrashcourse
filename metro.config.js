const { getDefaultConfig } = require("expo/metro-config");
const path = require('path');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: path.resolve(__dirname, 'node_modules/nativewind/dist/transformer.js'),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
    extraNodeModules: new Proxy({}, {
      get: (target, name) => path.join(__dirname, `node_modules/${name}`),
    }),
  };

  return config;
})();