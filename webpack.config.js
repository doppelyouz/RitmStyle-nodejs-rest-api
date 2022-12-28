const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { bundle: path.resolve("src", "index.js") },
  output: {
    path: path.resolve("dist"),
    filename: "[name].[contenthash].js",
    // clean: true,
    assetModuleFilename: "assets/images/[name][contenthash][ext]"
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve("dist"),
    },
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Главная",
      filename: "index.html",
      template: "src/template.html",
    }),
    new HtmlWebpackPlugin({
      title: "Сессии",
      filename: "sessions.html",
      template: "src/sessions.html",
    }),
    new HtmlWebpackPlugin({
      title: "Новости",
      filename: "news.html",
      template: "src/news.html",
    }),
    new HtmlWebpackPlugin({
      title: "Блог",
      filename: "blog.html",
      template: "src/blog.html",
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ],
  },
};
