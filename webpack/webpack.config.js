const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ]
      },
      {
        test: /\.(html)$/,
        use: {
            loader: 'html-loader'
        }
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './images',
                    useRelativePath: true
                }
            }
        ]
      },
      {
        test: /\.(eot|ttf|woff)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './fonts',
                    useRelativePath: true
                }
            }
        ]
      }
    ]
  },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]

}