// Webpack https dev server config
/* eslint import/no-extraneous-dependencies: 0 */

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const BASE_URL = '/app/';

const VARIABLES = {
  __XXXXX__: JSON.stringify('???????'),
};

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/ds'),
    compress: true,
    host: '0.0.0.0',
    port: 443,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: {
      index: BASE_URL + '/index.html',
    },
    openPage: 'https://your_domain.com' + BASE_URL,
    https: {
      key: fs.readFileSync('/path_to.key'),
      cert: fs.readFileSync('/path_to_ssl_certificate.cer'),
    },
  },
  entry: ['./src/index.tsx'],
  plugins: [
    // new StyleLintPlugin({
    //   files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    // }),
    new HtmlWebpackPlugin({
      title: 'DEV ENV',
      favicon: 'src/assets/favicon.ico',
      template: 'src/assets/index.html',
      minify: false,
      chunksSortMode: 'auto',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new LodashModuleReplacementPlugin({
      shorthands: true,
      collections: true,
      caching: true,
      exotics: true,
    }),
    new MomentLocalesPlugin(),
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
          'style-loader',
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              localsConvention: 'camelCaseOnly',
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.m\.scss$/,
        use: [
          'style-loader',
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
          'style-loader',
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
    path: path.resolve(__dirname, '../dist/ds'),
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
    noEmitOnErrors: true,
  },
};
