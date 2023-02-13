const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const devtool = devMode ? 'source-map' : undefined;

const target = devMode ? 'web' : 'browserslist';

module.exports = {
  mode,
  devtool,
  target,
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/public/index.html'
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  devServer: {
    port: 3000,
    open: true,
  },
};
