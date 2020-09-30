const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  entry: path.join(__dirname, './client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'API_KEY': JSON.stringify(process.env.API_KEY),
        'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
        'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
        'PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
        'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
        'MESSAGIGN_SENDER_ID': JSON.stringify(process.env.MESSAGIGN_SENDER_ID),
        'APP_ID': JSON.stringify(process.env.APP_ID),
        'MEASUREMENT_ID': JSON.stringify(process.env.MEASUREMENT_ID),
        'PUBLISHABLE_KEY': JSON.stringify(process.env.PUBLISHABLE_KEY),
      }
    })
  ],
  module: {
    rules: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        mangle:true,
        output: {
          comments: false
        }
      },
      sourceMap: true,
      exclude: [/\.min\.js$/gi]
    })]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
}
};
