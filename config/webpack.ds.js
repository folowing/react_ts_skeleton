// Webpack dev server config
/* eslint import/no-extraneous-dependencies: 0 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');


module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/ds'),
    compress: true,
    port: 9000,
    hot: true,
    // historyApiFallback: true,  // Browser router
  },
  entry: [
    './src/index.tsx',
  ],
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
      //   use: [
      //     {
      //       loader: 'html-loader'
      //     }
      //   ]
      // },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              localsConvention: 'camelCase',
            },
          },
          'postcss-loader',
        ],
      },
      // module css
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
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
        test: /\.module\.scss$/,
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
              outputPath: 'images',
              name: '[name].[ext]',
              publicPath: '/images/',
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
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
