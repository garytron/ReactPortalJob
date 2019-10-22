const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack'); // remember to require this, because we DefinePlugin is a webpack plugin
const dotenv = require('dotenv');
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html",
    inject: true
});

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key 
  const env = dotenv.config().parsed;
  
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: {
      bundle: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "main-[hash:8].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
      plugins: [
      new webpack.DefinePlugin(envKeys),
      htmlPlugin,
    ]
  };
};