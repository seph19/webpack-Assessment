const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = (env) => {
  const { NODE_ENV } = env;
  const isProd = NODE_ENV === 'production';
  return {
    entry: {
      main: './src/js',
      vendor1: './src/js/vendors/vendor1',
      vendor2: './src/js/vendors/vendor2',
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: isProd ? '[name].[hash].bundle.js' : '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};