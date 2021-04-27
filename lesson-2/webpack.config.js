const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
   entry: resolve(__dirname, 'src', 'main.js'),
   output: {
      path: resolve(__dirname, 'build'),
      filename: 'main.[contenthash].js'
   },
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         // {
         //    test: /\.(png|jpg|jpeg|gif|svg)$/i,
         //    use: ['file-loader',
         //       {
         //          loader: 'img-optimize-loader',
         //          options: {
         //             compress: {
         //                optipng: {
         //                   optimizationLevel: 'normal',
         //                }
         //             }
         //          }
         //       }
         //    ]
         // }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: resolve(__dirname, 'index.html'),
      }),
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css',
      }),
      // new BundleAnalyzerPlugin()
   ]
}