const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    watchFiles: 'index.html',
  },
  context: path.join(__dirname, 'src'),
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './assets/', to: './assets/' },  // Copy assets like images and other static files
        { from: './updatedResume.pdf', to: './updatedResume.pdf' },  // Fix path for the resume PDF
      ],
    }),
    new HtmlWebpackPlugin({
      template: "index.html",  // Generate index.html
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: "about.html",  // Generate about.html
      filename: "about.html",  // Specify that it's about.html
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,  // For handling plain CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,  // For handling SCSS files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|pdf)$/i,  // Handling images and PDFs
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,  // Handling HTML files
        loader: "html-loader",
      },
    ],
  },
};
