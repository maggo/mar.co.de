const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withOffline = require("next-offline");

module.exports = withPlugins(
  [
    [
      withCSS,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[name]__[local]--[hash:base64:5]"
        }
      }
    ],
    optimizedImages,
    withOffline
  ],
  {
    experimental: {
      modern: true
    }
  }
);
