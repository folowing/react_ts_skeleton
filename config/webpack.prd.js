// Webpack prd config
/* eslint import/no-extraneous-dependencies: 0 */

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const BASE_URL = '//your_cdn_domain.com/xxxx/';

const VARIABLES = {
  __XXXXX__: JSON.stringify('???????'),
};

module.exports = {
  mode: 'production',
  entry: ['./src/index.tsx'],
  plugins: [
    new CleanWebpackPlugin({
      root: path.join(__dirname, '../dist/prd'),
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name]/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name]/[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      title: 'PRD ENV',
      favicon: 'src/assets/favicon.ico',
      template: 'src/assets/index.html',
      minify: {
        collapseWhitespace: true,
      },
      chunksSortMode: 'auto',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new LodashModuleReplacementPlugin({
      shorthands: true,
      collections: true,
      caching: true,
      exotics: true,
    }),
    new webpack.DefinePlugin(VARIABLES),
  ],
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(ts|tsx)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.html$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       interpolate: true
      //     }
      //   }
      // },
      {
        test: /\.css$/,
        exclude: /\.m\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localsConvention: 'camelCaseOnly',
            },
          },
          'postcss-loader',
        ],
      },
      // module css
      {
        test: /\.m\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localsConvention: 'camelCaseOnly',
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.m\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localsConvention: 'camelCase',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      // module scss
      {
        test: /\.m\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localsConvention: 'camelCase',
              modules: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'static/img',
              name: '[name].[contenthash:8].[ext]',
              publicPath: BASE_URL + 'static/img/',
            },
          },
        ],
      },
    ],
  },
  output: {
    publicPath: BASE_URL,
    filename: 'static/js/[name]/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist/prd'),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
      src: path.resolve(__dirname, '../src'),
    },
  },
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            unused: true,
            dead_code: true,
            drop_console: true,
          },
          warnings: false,
        },
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  stats: {
    children: false,
  },
};
