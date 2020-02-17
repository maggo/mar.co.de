const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withOffline = require("next-offline");

module.exports = withPlugins([optimizedImages, withOffline], {
  experimental: {
    modern: true
  }
});
