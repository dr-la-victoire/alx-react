const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ filename: "./index.html" }),
    new CleanWebpackPlugin()
  ],
  devtool: "inline-source-map",
  mode: "development",
  entry: {
    header: { import: "./modules/header/header.js", dependOn: "shared" },
    body: { import: "./modules/body/body.js", dependOn: "shared" },
    footer: { import: "./modules/footer/footer.js", dependOn: "shared" },
    shared: "jquery"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    static: path.join(__dirname, "./public"),
    compress: true,
    port: 8564,
    open: true
  },
  performance: {
    maxAssetSize: 1000000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|svg|png|jpg|jpeg)$/i,
        type: "asset/resource",
        use: [
          {
            loader: ["file-loader", "image-webpack-loader"],
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      }
    ]
  }
};
