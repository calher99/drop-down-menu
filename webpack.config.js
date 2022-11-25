const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  devtool: 'inline-source-map', // To trace errors to entry file

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project SetUp',
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // To add the css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // To add images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // To add fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
