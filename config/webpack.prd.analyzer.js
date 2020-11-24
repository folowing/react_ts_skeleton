// Webpack bundle analyzer config
/* eslint import/no-extraneous-dependencies: 0 */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const webpackMerge = require('webpack-merge');
const prdConfig = require('./webpack.prd');

module.exports = webpackMerge.merge(prdConfig, {
  plugins: [new BundleAnalyzerPlugin()],
});
