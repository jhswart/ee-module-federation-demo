const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
  //our index file
  entry: path.resolve(__dirname, 'src/index.jsx'),
  //Where we put the production code
  output: {
    publicPath: 'auto',
    chunkFilename: '[id].[contenthash].js',
  },
  // This says to webpack that we are in development mode and write the code in webpack file in different way
  mode: 'development',
  module: {
    rules: [
      //Allows use javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //don't test node_modules folder
        use: {
          loader: 'babel-loader',
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    //Allows remove/clean the build folder
    new CleanWebpackPlugin(),
    //Allows update react components in real time
    new HotModuleReplacementPlugin(),
    //Allows to create an index.html in our build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'), //we put the file that we created in public folder
    }),
    // new ModuleFederationPlugin({
    //   name: 'app2',
    //   filename: 'remoteEntry.js',
    //   remotes: {
    //     styling: 'styling@http://localhost:8002/remoteEntry.js',
    //   },
    //   exposes: {
    //     './List': './src/List/List.jsx',
    //   },
    //   shared: [
    //     {
    //       ...deps,
    //       react: {
    //         singleton: true,
    //         requiredVersion: deps.react,
    //         eager: true,
    //       },
    //       'react-dom': {
    //         singleton: true,
    //         requiredVersion: deps['react-dom'],
    //       },
    //       'styled-components': {
    //         requiredVersion: deps['styled-components'],
    //       },
    //     },
    //   ],
    // }),
  ],
  //Config for webpack-dev-server module
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: false,
    hotOnly: false,
    port: 8001,
  },
};
