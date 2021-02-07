/* Webpack dev config */
/* eslint import/no-extraneous-dependencies: 0 */

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const BASE_URL = '/app/';

const VARIABLES = {
  __XXXXX__: JSON.stringify('???????'),
};

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['./src/index.tsx'],
  plugins: [
    // new StyleLintPlugin({
    //   files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist/dev'],
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
    }),
    new HtmlWebpackPlugin({
      title: 'DEV ENV',
      favicon: 'src/assets/favicon.ico',
      template: 'src/assets/index.html',
      minify: false,
      chunksSortMode: 'auto',
    }),
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
              sourceMap: true,
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
              sourceMap: true,
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
              sourceMap: true,
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
              sourceMap: true,
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
              name: '[name].[ext]',
              publicPath: BASE_URL + 'static/img/',
            },
          },
        ],
      },
    ],
  },
  output: {
    publicPath: BASE_URL,
    filename: 'static/js/[name].js',
    path: path.resolve(__dirname, '../dist/dev'),
    pathinfo: false,
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
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
};
