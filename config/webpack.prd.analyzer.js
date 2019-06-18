// Webpack bundle analyzer config
/* eslint import/no-extraneous-dependencies: 0 */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const merge = require('webpack-merge');
const prdConfig = require('./webpack.prd');


module.exports = merge(prdConfig, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
