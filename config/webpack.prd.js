// Webpack prd config
/* eslint import/no-extraneous-dependencies: 0 */

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: [
    './src/index.jsx',
  ],
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: 'static/css/[name].[contenthash:8].css',
    }),
    new CleanWebpackPlugin(['dist/prd'],
      {
        root: path.resolve(__dirname, '../'),
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
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images',
              name: '[name].[contenthash:8].[ext]',
              publicPath: './static/img/',
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist/prd'),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
      src: path.resolve(__dirname, '../src'),
    },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            unused: true,
            dead_code: true,
            warnings: false,
          },
        },
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
