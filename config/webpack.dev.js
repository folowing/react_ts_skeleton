/* Webpack dev config */
/* eslint import/no-extraneous-dependencies: 0 */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    './src/index.tsx',
  ],
  plugins: [
    // new StyleLintPlugin({
    //   files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    // }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
    }),
    new CleanWebpackPlugin(
      {
        cleanOnceBeforeBuildPatterns: ['dist/dev'],
      }),
    new HtmlWebpackPlugin({
      title: 'DEV ENV',
      favicon: 'src/assets/favicon.ico',
      template: 'src/assets/index.html',
      minify: false,
      chunksSortMode: 'auto',
    }),
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
              name: '[name].[ext]',
              publicPath: './static/img/',
            },
          },
        ],
      },
    ],
  },
  output: {
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
